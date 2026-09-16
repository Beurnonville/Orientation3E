/**
 * Moteur d'interactivité vectoriel SVG - Schéma Après la 3ème
 * Gère le focus, l'estompage, le Pan & Zoom, les passerelles et les événements tactiles/souris.
 */

class DiagramController {
  constructor(options = {}) {
    this.viewport = document.getElementById(options.viewportId || "diagramViewport");
    this.container = document.getElementById(options.containerId || "diagramSvgContainer");
    this.svgElement = document.getElementById(options.svgId || "schemaPost3eme");
    this.activeFilter = "all"; // 'all', 'voie-gt', 'voie-pro', 'voie-apprentissage', 'passerelles'
    this.passerellesVisible = false; // Passerelles masquées par défaut selon demande utilisateur
    
    // Paramètres Pan & Zoom
    this.scale = 1;
    this.minScale = 0.6;
    this.maxScale = 2.5;
    this.panX = 0;
    this.panY = 0;
    this.isDragging = false;
    this.startX = 0;
    this.startY = 0;

    this.init();
  }

  init() {
    if (!this.viewport || !this.svgElement) return;

    this.bindSvgInteractions();
    this.bindPanZoom();
    this.bindFilterButtons();
    this.bindPresentationTools();
  }

  /**
   * Associe les clics et survols sur les éléments SVG
   */
  bindSvgInteractions() {
    // 1. Clic sur les voies entières (colonnes ou bannières)
    const voieGroups = this.svgElement.querySelectorAll(".voie-group");
    voieGroups.forEach(group => {
      const voieId = group.getAttribute("data-voie");
      
      // Clic sur la bannière de colonne
      const banner = group.querySelector(".col-banner");
      if (banner) {
        banner.style.cursor = "pointer";
        banner.addEventListener("click", (e) => {
          e.stopPropagation();
          this.setFilter(voieId);
          window.app?.openVoieDrawer(voieId);
        });
      }
    });

    // 2. Clic sur chaque boîte / classe / diplôme
    const nodes = this.svgElement.querySelectorAll(".interactive-node");
    nodes.forEach(node => {
      node.addEventListener("click", (e) => {
        e.stopPropagation();
        const elementId = node.getAttribute("data-element");
        if (elementId && window.app) {
          window.app.openElementDrawer(elementId);
        }
      });
    });

    // 3. Clic sur les passerelles
    const passerelles = this.svgElement.querySelectorAll(".passerelle-item");
    passerelles.forEach(pass => {
      pass.addEventListener("click", (e) => {
        e.stopPropagation();
        const passId = pass.getAttribute("data-passerelle");
        if (passId && window.app) {
          window.app.openPasserelleDrawer(passId);
        }
      });
    });

    // 4. Clic sur le socle "Après la 3ème"
    const socle = this.svgElement.querySelector(".socle-3eme");
    if (socle) {
      socle.style.cursor = "pointer";
      socle.addEventListener("click", () => {
        this.setFilter("all");
      });
    }
  }

  /**
   * Active ou désactive l'affichage des passerelles
   */
  togglePasserelles(forceState) {
    if (typeof forceState === "boolean") {
      this.passerellesVisible = forceState;
    } else {
      this.passerellesVisible = !this.passerellesVisible;
    }

    const canvasCard = document.querySelector(".diagram-canvas-card");
    const toggleBtn = document.getElementById("btnTogglePasserelles");

    if (this.passerellesVisible) {
      canvasCard?.classList.add("show-passerelles");
      this.svgElement?.classList.add("show-passerelles");
      if (toggleBtn) {
        toggleBtn.classList.add("btn-passerelles-active");
        toggleBtn.innerHTML = `<span class="icon">🔄</span> Masquer les passerelles`;
      }
    } else {
      canvasCard?.classList.remove("show-passerelles");
      this.svgElement?.classList.remove("show-passerelles");
      if (toggleBtn) {
        toggleBtn.classList.remove("btn-passerelles-active");
        toggleBtn.innerHTML = `<span class="icon">🔄</span> Afficher les passerelles`;
      }
    }
  }

  /**
   * Applique le filtre de mise en lumière et estompage
   */
  setFilter(filterId) {
    this.activeFilter = filterId;

    // Met à jour les boutons de filtres dans l'UI
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      if (btn.getAttribute("data-filter") === filterId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const voieGroups = this.svgElement.querySelectorAll(".voie-group");
    const passerelles = this.svgElement.querySelectorAll(".passerelle-item");

    if (filterId === "all") {
      // Afficher toutes les voies
      voieGroups.forEach(g => {
        g.classList.remove("dimmed", "active");
      });
      passerelles.forEach(p => {
        p.classList.remove("dimmed", "active");
      });
      return;
    }

    if (filterId === "passerelles") {
      // Force l'affichage visible des passerelles et les met en lumière
      this.togglePasserelles(true);
      voieGroups.forEach(g => {
        g.classList.add("dimmed");
        g.classList.remove("active");
      });
      passerelles.forEach(p => {
        p.classList.remove("dimmed");
        p.classList.add("active");
      });
      return;
    }

    // Filtrer par voie spécifique ('voie-gt', 'voie-pro', 'voie-apprentissage')
    voieGroups.forEach(g => {
      const gVoie = g.getAttribute("data-voie");
      if (gVoie === filterId) {
        g.classList.remove("dimmed");
        g.classList.add("active");
      } else {
        g.classList.add("dimmed");
        g.classList.remove("active");
      }
    });

    // Les passerelles liées à cette voie restent visibles, les autres s'estompent
    passerelles.forEach(p => {
      p.classList.remove("dimmed", "active");
    });
  }

  /**
   * Gestion du Pan & Zoom (Souris et Tactile)
   */
  bindPanZoom() {
    const updateTransform = () => {
      if (this.container) {
        this.container.style.transform = `translate(${this.panX}px, ${this.panY}px) scale(${this.scale})`;
      }
    };

    // Zoom via molette souris
    this.viewport.addEventListener("wheel", (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      const newScale = Math.min(Math.max(this.scale * zoomFactor, this.minScale), this.maxScale);
      this.scale = newScale;
      updateTransform();
    }, { passive: false });

    // Drag souris
    this.viewport.addEventListener("mousedown", (e) => {
      if (e.target.closest(".zoom-controls") || e.button !== 0) return;
      this.isDragging = true;
      this.startX = e.clientX - this.panX;
      this.startY = e.clientY - this.panY;
      this.viewport.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!this.isDragging) return;
      this.panX = e.clientX - this.startX;
      this.panY = e.clientY - this.startY;
      updateTransform();
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
      if (this.viewport) {
        this.viewport.style.cursor = "grab";
      }
    });

    // Support tactile (Touch events)
    let touchStartDist = 0;
    this.viewport.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.startX = e.touches[0].clientX - this.panX;
        this.startY = e.touches[0].clientY - this.panY;
      } else if (e.touches.length === 2) {
        this.isDragging = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    }, { passive: true });

    this.viewport.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        this.panX = e.touches[0].clientX - this.startX;
        this.panY = e.touches[0].clientY - this.startY;
        updateTransform();
      } else if (e.touches.length === 2 && touchStartDist > 0) {
        const currentDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const factor = currentDist / touchStartDist;
        this.scale = Math.min(Math.max(this.scale * factor, this.minScale), this.maxScale);
        touchStartDist = currentDist;
        updateTransform();
      }
    }, { passive: true });

    this.viewport.addEventListener("touchend", () => {
      this.isDragging = false;
      touchStartDist = 0;
    });

    // Boutons de zoom dédiés (+, -, reset)
    const zoomInBtn = document.getElementById("btnZoomIn");
    const zoomOutBtn = document.getElementById("btnZoomOut");
    const zoomResetBtn = document.getElementById("btnZoomReset");

    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => {
        this.scale = Math.min(this.scale * 1.25, this.maxScale);
        updateTransform();
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => {
        this.scale = Math.max(this.scale * 0.8, this.minScale);
        updateTransform();
      });
    }

    if (zoomResetBtn) {
      zoomResetBtn.addEventListener("click", () => {
        this.resetView();
      });
    }
  }

  resetView() {
    this.scale = 1;
    this.panX = 0;
    this.panY = 0;
    if (this.container) {
      this.container.style.transform = `translate(0px, 0px) scale(1)`;
    }
  }

  /**
   * Boutons de filtrage en haut du schéma
   */
  bindFilterButtons() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        this.setFilter(filter);
      });
    });
  }

  /**
   * Outils de présentation (Plein écran, téléchargement SVG, impression)
   */
  bindPresentationTools() {
    const fullscreenBtn = document.getElementById("btnFullscreen");
    const exitFloatingBtn = document.getElementById("btnExitFullscreenFloating");
    const downloadSvgBtn = document.getElementById("btnDownloadSvg");
    const printBtn = document.getElementById("btnPrint");
    const togglePasserellesBtn = document.getElementById("btnTogglePasserelles");
    const canvasCard = document.querySelector(".diagram-canvas-card");

    const exitFullscreen = () => {
      canvasCard?.classList.remove("fullscreen-mode");
      if (fullscreenBtn) {
        fullscreenBtn.innerHTML = `<span class="icon">⛶</span> Plein écran`;
      }
      this.resetView();
    };

    if (fullscreenBtn && canvasCard) {
      fullscreenBtn.addEventListener("click", () => {
        canvasCard.classList.toggle("fullscreen-mode");
        const isFullscreen = canvasCard.classList.contains("fullscreen-mode");
        fullscreenBtn.innerHTML = isFullscreen 
          ? `<span class="icon">✕</span> Quitter le plein écran`
          : `<span class="icon">⛶</span> Plein écran`;
        this.resetView();
      });

      // Touche Échap pour quitter le plein écran
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && canvasCard.classList.contains("fullscreen-mode")) {
          exitFullscreen();
        }
      });
    }

    // Bouton tactile flottant pour quitter le plein écran (facile sur tableau interactif)
    if (exitFloatingBtn) {
      exitFloatingBtn.addEventListener("click", () => {
        exitFullscreen();
      });
    }

    // Bouton pour afficher / masquer les passerelles
    if (togglePasserellesBtn) {
      togglePasserellesBtn.addEventListener("click", () => {
        this.togglePasserelles();
      });
    }

    if (downloadSvgBtn) {
      downloadSvgBtn.addEventListener("click", () => {
        this.downloadSvgFile();
      });
    }

    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }
  }

  /**
   * Télécharge le schéma SVG en direct
   */
  downloadSvgFile() {
    const svgData = new XMLSerializer().serializeToString(this.svgElement);
    const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "schema-orientation-apres-la-3eme.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}

window.DiagramController = DiagramController;
