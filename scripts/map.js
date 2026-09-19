/**
 * Contrôleur de la Carte Interactive des Établissements (Bac Pro & CAP)
 * Département de l'Aube (10) et Ville de Troyes
 */

class InteractiveMapController {
  constructor() {
    this.map = null;
    this.currentTab = "troyes"; // 'troyes' ou 'aube'
    this.currentStatusFilter = "all"; // 'all', 'public', 'prive'
    this.markersLayer = null;
    this.markersMap = new Map(); // etabId -> { marker, etab }
    this.selectedEtabId = null;
    this.hoveredEtabId = null;

    this.init();
  }

  init() {
    const mapElement = document.getElementById("interactiveMap");
    if (!mapElement || typeof L === "undefined") {
      console.warn("Leaflet ou conteneur interactiveMap introuvable.");
      return;
    }

    if (typeof FORMATIONS_AUBE_DATA === "undefined") {
      console.warn("FORMATIONS_AUBE_DATA non chargé.");
      return;
    }

    this.setupLeafletMap();
    this.bindControls();
    this.renderCurrentView();
  }

  /**
   * Initialise l'instance Leaflet avec fond de carte optimisé
   */
  setupLeafletMap() {
    // Centre initial sur Troyes
    this.map = L.map("interactiveMap", {
      center: [48.297, 4.065],
      zoom: 13,
      minZoom: 8,
      maxZoom: 18,
      zoomControl: false,
      scrollWheelZoom: false // Évite de bloquer le défilement de la page
    });

    // Activer le zoom molette au clic ou focus pour meilleure UX
    this.map.on("focus", () => this.map.scrollWheelZoom.enable());
    this.map.on("blur", () => this.map.scrollWheelZoom.disable());

    // Contrôles de zoom positionnés en haut à droite
    L.control.zoom({ position: "topright" }).addTo(this.map);

    // Fond de carte Esri ArcGIS World Street Map : accessible gratuitement, sans clé d'API,
    // et compatible avec l'ouverture locale (file:///) sans restriction Referer ni blocage 403.
    const tileUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}";
    L.tileLayer(tileUrl, {
      maxZoom: 19,
      attribution: 'Fond de carte &copy; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> &mdash; Sources: Esri, Garmin, USGS, METI'
    }).addTo(this.map);

    // Calque pour les marqueurs
    this.markersLayer = L.featureGroup().addTo(this.map);

    // Ajuster la taille de la carte si conteneur redimensionné
    window.addEventListener("resize", () => {
      this.map.invalidateSize();
    });
  }

  /**
   * Lie les événements des onglets Troyes / Aube et des filtres
   */
  bindControls() {
    // Onglets Troyes / Aube
    const tabTroyes = document.getElementById("tabMapTroyes");
    const tabAube = document.getElementById("tabMapAube");

    if (tabTroyes && tabAube) {
      tabTroyes.addEventListener("click", () => {
        if (this.currentTab === "troyes") return;
        this.currentTab = "troyes";
        tabTroyes.classList.add("active");
        tabTroyes.setAttribute("aria-selected", "true");
        tabAube.classList.remove("active");
        tabAube.setAttribute("aria-selected", "false");
        this.selectedEtabId = null;
        this.renderCurrentView();
      });

      tabAube.addEventListener("click", () => {
        if (this.currentTab === "aube") return;
        this.currentTab = "aube";
        tabAube.classList.add("active");
        tabAube.setAttribute("aria-selected", "true");
        tabTroyes.classList.remove("active");
        tabTroyes.setAttribute("aria-selected", "false");
        this.selectedEtabId = null;
        this.renderCurrentView();
      });
    }

    // Filtres Statut (Tous / Publics / Privés)
    const filterBtns = document.querySelectorAll(".map-tag-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentStatusFilter = btn.getAttribute("data-filter-status") || "all";
        this.renderCurrentView(false); // Garder le zoom si possible
      });
    });
  }

  /**
   * Récupère les établissements correspondant à l'onglet et aux filtres actifs
   */
  getFilteredEstablishments() {
    const all = FORMATIONS_AUBE_DATA.etablissements;
    const targetZone = this.currentTab === "troyes" ? "Troyes" : "Aube";

    return all.filter(etab => {
      // Filtre zone
      if (etab.zoneCarte !== targetZone) return false;

      // Filtre statut
      if (this.currentStatusFilter === "public" && etab.secteur !== "public") return false;
      if (this.currentStatusFilter === "prive" && etab.secteur !== "prive") return false;

      return true;
    });
  }

  /**
   * Rendu de la carte, des marqueurs et de la liste rapide
   */
  renderCurrentView(recenter = true) {
    if (!this.map || !this.markersLayer) return;

    this.markersLayer.clearLayers();
    this.markersMap.clear();

    const etablissements = this.getFilteredEstablishments();
    const bounds = L.latLngBounds([]);

    etablissements.forEach((etab, idx) => {
      if (!etab.lat || !etab.lon) return;

      const latLng = [etab.lat, etab.lon];
      bounds.extend(latLng);

      const isPublic = etab.secteur === "public";
      const isSelected = etab.id === this.selectedEtabId;

      // Création d'une icône vectorielle moderne personnalisée
      const markerHtml = `
        <div class="custom-map-pin ${isPublic ? 'pin-public' : 'pin-prive'} ${isSelected ? 'pin-selected' : ''}" id="pin-${etab.id}">
          <div class="pin-icon-wrap">
            <span class="pin-number">${idx + 1}</span>
          </div>
          <div class="pin-pulse"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: "custom-div-icon",
        html: markerHtml,
        iconSize: [36, 44],
        iconAnchor: [18, 42],
        popupAnchor: [0, -40]
      });

      const marker = L.marker(latLng, { icon: customIcon });

      // Infobulle compacte au survol
      const tooltipHtml = `
        <div class="map-tooltip-content">
          <strong>${idx + 1}. ${etab.nom}</strong><br>
          <span style="font-size:0.75rem; color:#64748b;">📍 ${etab.commune} &bull; ${etab.formationsCount} formations</span>
        </div>
      `;
      marker.bindTooltip(tooltipHtml, { direction: "top", offset: [0, -35], opacity: 0.95 });

      // Événements survol et clic
      marker.on("mouseover", () => {
        this.hoveredEtabId = etab.id;
        this.highlightMarker(etab.id, true);
        this.highlightQuickCard(etab.id, true);
        // Si aucune fiche n'est verrouillée par clic, on prévisualise
        if (!this.selectedEtabId) {
          this.renderSchoolSheet(etab);
        }
      });

      marker.on("mouseout", () => {
        this.hoveredEtabId = null;
        this.highlightMarker(etab.id, false);
        this.highlightQuickCard(etab.id, false);
        // Si rien de sélectionné, on remet le placeholder
        if (!this.selectedEtabId) {
          this.resetSchoolSheet();
        }
      });

      marker.on("click", () => {
        this.selectEstablishment(etab.id);
      });

      marker.addTo(this.markersLayer);
      this.markersMap.set(etab.id, { marker, etab, index: idx + 1 });
    });

    // Recentrer la vue pour englober tous les lycées
    if (recenter && bounds.isValid()) {
      setTimeout(() => {
        this.map.invalidateSize();
        if (this.currentTab === "troyes") {
          this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
        } else {
          this.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
        }
      }, 100);
    }

    // Mettre à jour la grille rapide sous la carte
    this.renderQuicklist(etablissements);

    // Mettre à jour la fiche latérale
    if (this.selectedEtabId) {
      const selectedEtab = etablissements.find(e => e.id === this.selectedEtabId);
      if (selectedEtab) {
        this.renderSchoolSheet(selectedEtab);
      } else {
        this.resetSchoolSheet();
      }
    } else {
      this.resetSchoolSheet();
    }
  }

  /**
   * Sélectionne un établissement (clic sur carte ou sur liste)
   */
  selectEstablishment(etabId) {
    const item = this.markersMap.get(etabId);
    if (!item) return;

    this.selectedEtabId = etabId;

    // Mise à jour de l'apparence des pins
    document.querySelectorAll(".custom-map-pin").forEach(pin => {
      pin.classList.remove("pin-selected");
    });
    const selectedPin = document.getElementById(`pin-${etabId}`);
    if (selectedPin) {
      selectedPin.classList.add("pin-selected");
    }

    // Centrage doux de la carte
    this.map.flyTo([item.etab.lat, item.etab.lon], Math.max(this.map.getZoom(), 14), {
      duration: 0.8
    });

    // Affichage de la fiche
    this.renderSchoolSheet(item.etab);

    // Mise en surbrillance dans la liste rapide
    this.highlightQuickCard(etabId, true, true);
  }

  highlightMarker(etabId, highlight) {
    const pin = document.getElementById(`pin-${etabId}`);
    if (pin && etabId !== this.selectedEtabId) {
      if (highlight) {
        pin.classList.add("pin-hovered");
      } else {
        pin.classList.remove("pin-hovered");
      }
    }
  }

  highlightQuickCard(etabId, highlight, scrollTo = false) {
    const card = document.getElementById(`quick-card-${etabId}`);
    if (card) {
      if (highlight) {
        card.classList.add("active");
        if (scrollTo) {
          card.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      } else if (etabId !== this.selectedEtabId) {
        card.classList.remove("active");
      }
    }
  }

  /**
   * Affiche la fiche détaillée d'un établissement
   */
  renderSchoolSheet(etab) {
    const placeholder = document.getElementById("sheetPlaceholder");
    const content = document.getElementById("sheetContent");
    if (!placeholder || !content) return;

    placeholder.style.display = "none";
    content.style.display = "block";

    const isPublic = etab.secteur === "public";
    const itemInfo = this.markersMap.get(etab.id);
    const num = itemInfo ? itemInfo.index : "";

    const bacsPros = etab.formations.filter(f => f.typeDiplome === "Bac Pro");
    const caps = etab.formations.filter(f => f.typeDiplome === "CAP" || f.typeDiplome === "CAPA");

    let html = `
      <div class="sheet-header">
        <div class="sheet-header-top">
          <div class="sheet-number-wrap">
            <span class="sheet-number-badge">${num}</span>
            <div class="sheet-badges">
              <span class="badge-statut ${isPublic ? 'public' : 'prive'}">${etab.statut}</span>
              <span class="badge-commune">📍 ${etab.commune}</span>
            </div>
          </div>
          <button type="button" class="sheet-close-btn" onclick="window.mapController.closeSchoolSheet()" title="Fermer la fiche">&times;</button>
        </div>
        <h3 class="sheet-school-name">${etab.nom}</h3>
        <div class="sheet-address">${etab.adresse || etab.commune}</div>
        <div class="sheet-short-desc">${etab.descriptionCourte || etab.type}</div>

        <div class="sheet-summary-stats">
          <div class="summary-pill">
            <span class="pill-label">Capacité totale</span>
            <span class="pill-value">${etab.capaciteTotale} places</span>
          </div>
          <div class="summary-pill">
            <span class="pill-label">Demandes 2025 (Vœu 1)</span>
            <span class="pill-value blue">${etab.demandes2025Totale}</span>
          </div>
          <div class="summary-pill">
            <span class="pill-label">Formations post-3e</span>
            <span class="pill-value">${etab.formationsCount}</span>
          </div>
        </div>
      </div>

      <div class="sheet-body">
        <!-- Section Bac Pro -->
        ${bacsPros.length > 0 ? `
          <div class="sheet-formations-block">
            <h4 class="block-title">
              <span class="block-icon">🎓</span>
              Formations de Baccalauréat Professionnel (3 ans)
              <span class="count-badge">${bacsPros.length}</span>
            </h4>
            <div class="sheet-formations-list">
              ${bacsPros.map(f => this.renderFormationItem(f)).join("")}
            </div>
          </div>
        ` : ''}

        <!-- Section CAP & CAPA -->
        ${caps.length > 0 ? `
          <div class="sheet-formations-block">
            <h4 class="block-title">
              <span class="block-icon">🛠️</span>
              Formations de CAP &amp; CAPA (2 ans)
              <span class="count-badge">${caps.length}</span>
            </h4>
            <div class="sheet-formations-list">
              ${caps.map(f => this.renderFormationItem(f)).join("")}
            </div>
          </div>
        ` : ''}
      </div>
    `;

    content.innerHTML = html;
  }

  renderFormationItem(f) {
    const dem = f.demandes;
    let demStr = "";
    if (dem) {
      if (dem["2023"] !== null && dem["2023"] !== undefined) {
        demStr = `<strong>${dem["2025"]}</strong> (2025) &bull; ${dem["2024"]} (2024) &bull; ${dem["2023"]} (2023)`;
      } else if (dem["2024"] !== null && dem["2024"] !== undefined) {
        demStr = `<strong>${dem["2025"]}</strong> (2025) &bull; ${dem["2024"]} (2024)`;
      } else if (dem["2025"] !== null && dem["2025"] !== undefined) {
        demStr = `<strong>${dem["2025"]}</strong> (2025)`;
      }
    }

    const hasSpecialites = f.specialites && f.specialites.length > 1;

    return `
      <div class="sheet-formation-card">
        <div class="formation-card-header">
          <span class="diplome-badge ${f.typeDiplome === 'Bac Pro' ? 'bac' : 'cap'}">${f.typeDiplome}</span>
          <h5 class="formation-card-title">${f.intitule}</h5>
        </div>

        ${hasSpecialites ? `
          <div class="formation-card-specs">
            <span class="specs-label">Spécialités accessibles en 1ère Pro :</span>
            <ul>
              ${f.specialites.map(s => `<li>${s}</li>`).join("")}
            </ul>
          </div>
        ` : ''}

        <div class="formation-card-stats-row">
          <div class="f-stat-item">
            <span class="f-stat-label">Capacité d'accueil</span>
            <span class="f-stat-val"><strong>${f.capacite} places</strong></span>
          </div>
          <div class="f-stat-item">
            <span class="f-stat-label">Demandes en Vœu 1</span>
            <span class="f-stat-val blue">${demStr || 'Non renseigné'}</span>
          </div>
          ${f.tauxPression2025 !== undefined && f.tauxPression2025 !== null ? `
            <div class="f-stat-item">
              <span class="f-stat-label">Tension 2025</span>
              <span class="f-stat-val ${f.tauxPression2025 >= 1.2 ? 'tension-high' : f.tauxPression2025 >= 0.8 ? 'tension-med' : 'tension-low'}">
                ${f.tauxPression2025.toFixed(2)}
              </span>
            </div>
          ` : ''}
        </div>

        ${f.remarques ? `
          <div class="formation-card-remarque">
            ℹ️ ${f.remarques}
          </div>
        ` : ''}
      </div>
    `;
  }

  resetSchoolSheet() {
    const placeholder = document.getElementById("sheetPlaceholder");
    const content = document.getElementById("sheetContent");
    if (placeholder && content) {
      placeholder.style.display = "flex";
      content.style.display = "none";
    }
  }

  closeSchoolSheet() {
    this.selectedEtabId = null;
    document.querySelectorAll(".custom-map-pin").forEach(pin => {
      pin.classList.remove("pin-selected");
    });
    document.querySelectorAll(".map-quick-card").forEach(card => {
      card.classList.remove("active");
    });
    this.resetSchoolSheet();
  }

  /**
   * Rendu de la liste rapide de boutons/cartes sous la carte
   */
  renderQuicklist(etablissements) {
    const container = document.getElementById("mapQuicklistGrid");
    const title = document.getElementById("quicklistTitle");
    if (!container) return;

    if (title) {
      const zoneLabel = this.currentTab === "troyes" ? "Troyes & Agglomération" : "Département de l'Aube (hors Troyes)";
      title.innerHTML = `Lycées situés dans le secteur <strong>${zoneLabel}</strong> (${etablissements.length}) :`;
    }

    container.innerHTML = etablissements.map((etab, idx) => {
      const isSelected = etab.id === this.selectedEtabId;
      const isPublic = etab.secteur === "public";

      return `
        <div class="map-quick-card ${isSelected ? 'active' : ''}" id="quick-card-${etab.id}" onclick="window.mapController.selectEstablishment('${etab.id}')">
          <div class="quick-card-top">
            <span class="quick-card-num">${idx + 1}</span>
            <span class="badge-statut ${isPublic ? 'public' : 'prive'}">${etab.statut}</span>
          </div>
          <div class="quick-card-name">${etab.nom}</div>
          <div class="quick-card-sub">📍 ${etab.commune} &bull; ${etab.capaciteTotale} places</div>
        </div>
      `;
    }).join("");
  }
}

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  window.mapController = new InteractiveMapController();
});
