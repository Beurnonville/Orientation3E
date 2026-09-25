/**
 * Contrôleur Principal de l'Application - Portail Après la 3ème
 * Orchestre le tiroir d'informations, le comparateur, le quiz, le simulateur et le glossaire.
 */

const LYCEES_WEBSITES = {
  "marie de champagne": "https://lyc-marie-de-champagne.monbureaunumerique.fr/",
  "lombards": "https://lyc-les-lombards.monbureaunumerique.fr/",
  "herriot": "https://lycee-edouard-herriot.com/",
  "voisin": "https://lyc-voisin.monbureaunumerique.fr/",
  "la salle": "https://lasalle-troyes.fr/",
  "jeanne mance": "https://lycee-jeanne-mance.fr/",
  "aviat": "https://www.lycee-aviat.com/",
  "diderot": "https://lpdiderot10.fr/",
  "val mor": "https://lyc-val-more.monbureaunumerique.fr/",
  "bachelard": "https://cite-bachelard.monbureaunumerique.fr/",
  "crogny": "https://campusterresdelaube.fr/presentation-du-campus/lycee-de-crogny",
  "baltet": "https://campusterresdelaube.fr/presentation-du-campus/lycee-charles-baltet",
  "sainte-maure": "https://www.lyceesaintemaure.fr/",
  "sainte maure": "https://www.lyceesaintemaure.fr/",
  "cordeliers": "https://lescordeliers.fr/"
};

function getLyceeSiteWeb(nom) {
  if (!nom) return "";
  const lower = nom.toLowerCase();
  for (const [kw, url] of Object.entries(LYCEES_WEBSITES)) {
    if (lower.includes(kw)) return url;
  }
  return "";
}
window.getLyceeSiteWeb = getLyceeSiteWeb;

class AppController {
  constructor() {
    this.diagramController = null;
    this.currentQuizIndex = 0;
    this.quizAnswers = [];
    this.selectedSimAge = "15-17";
    this.selectedSimYear = "annee1";
    this.selectedFamilleCategory = "all";
    this.familleSearchQuery = "";
    this.expandedFamilles = new Set();

    this.init();
  }

  init() {
    // 1. Initialiser le contrôleur du diagramme SVG
    if (window.DiagramController) {
      this.diagramController = new window.DiagramController();
    }

    // 2. Initialiser les tiroirs et modales
    this.bindDrawerEvents();

    // 3. Initialiser les raccourcis Hero
    this.bindHeroCards();

    // 4. Initialiser la bascule Mobile Cartes / SVG
    this.bindMobileCardsView();

    // 5. Rendre le Comparateur
    this.renderComparator();

    // 6. Initialiser le Quiz d'Orientation
    this.initQuiz();

    // 7. Initialiser le Simulateur de Salaire
    this.initSalarySimulator();

    // 8. Initialiser la FAQ
    this.initFaq();

    // 9. Initialiser le Glossaire avec recherche
    this.initGlossary();

    // 10. Initialiser la rubrique 2de Pro : Familles de Métiers & Lycées de l'Aube
    this.selectedFamilleCategory = "all";
    this.familleSearchQuery = "";
    this.initFamillesMetiers();

    // 11. Initialiser le Mode Enseignant / Profil d'affichage CIO
    this.initProfMode();
  }

  /* ==========================================================================
     TIROIR LATÉRAL COULISSANT (DRAWER)
     ========================================================================== */
  bindDrawerEvents() {
    this.drawer = document.getElementById("detailDrawer");
    this.backdrop = document.getElementById("drawerBackdrop");
    this.closeBtn = document.getElementById("drawerCloseBtn");

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.closeDrawer());
    }

    if (this.backdrop) {
      this.backdrop.addEventListener("click", () => this.closeDrawer());
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.drawer?.classList.contains("open")) {
        this.closeDrawer();
      }
    });
  }

  openDrawer() {
    if (this.drawer && this.backdrop) {
      this.drawer.classList.add("open");
      this.backdrop.classList.add("open");
      document.body.style.overflow = "hidden"; // Empêche le scroll en arrière-plan
    }
  }

  closeDrawer() {
    if (this.drawer && this.backdrop) {
      this.drawer.classList.remove("open");
      this.backdrop.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  /**
   * Ouvre la fiche globale d'une voie (Voie GT, Pro, Apprentissage)
   */
  openVoieDrawer(voieId) {
    const voie = ORIENTATION_DATA.voies[voieId];
    if (!voie) return;

    const titleEl = document.getElementById("drawerTitle");
    const subtitleEl = document.getElementById("drawerSubtitle");
    const badgeEl = document.getElementById("drawerBadge");
    const bodyEl = document.getElementById("drawerBody");

    badgeEl.innerHTML = voie.badge;
    badgeEl.style.backgroundColor = voie.colorLight;
    badgeEl.style.color = voie.colorDark;

    titleEl.innerHTML = voie.title;
    subtitleEl.innerHTML = voie.subtitle;

    let html = `
      <div class="drawer-section" style="border-left-color: ${voie.color}">
        <div class="drawer-section-title">📌 Statut & Durée</div>
        <div class="drawer-section-content">
          <p><strong>Statut :</strong> ${voie.statut}</p>
          <p><strong>Durée :</strong> ${voie.duree}</p>
          <p><strong>Lieu principal :</strong> ${voie.lieu}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${voie.color}">
        <div class="drawer-section-title">🎯 Pour qui est faite cette voie ?</div>
        <div class="drawer-section-content">
          <ul>
            ${voie.pourQui.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${voie.color}">
        <div class="drawer-section-title">⏱️ Organisation et rythme</div>
        <div class="drawer-section-content">
          <ul>
            ${voie.organisation.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${voie.color}">
        <div class="drawer-section-title">🚀 Débouchés & Poursuites d'études</div>
        <div class="drawer-section-content">
          <ul>
            ${voie.debouches.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;

    bodyEl.innerHTML = html;
    this.openDrawer();
  }

  /**
   * Ouvre la fiche d'une étape ou d'un diplôme spécifique
   */
  openElementDrawer(elementId) {
    const elData = ORIENTATION_DATA.elements[elementId];
    if (!elData) return;

    const parentVoie = ORIENTATION_DATA.voies[elData.voieId];
    const color = parentVoie ? parentVoie.color : "#0284c7";
    const colorLight = parentVoie ? parentVoie.colorLight : "#e0f2fe";
    const colorDark = parentVoie ? parentVoie.colorDark : "#0369a1";

    const titleEl = document.getElementById("drawerTitle");
    const subtitleEl = document.getElementById("drawerSubtitle");
    const badgeEl = document.getElementById("drawerBadge");
    const bodyEl = document.getElementById("drawerBody");

    badgeEl.innerHTML = parentVoie ? parentVoie.title : "Formation";
    badgeEl.style.backgroundColor = colorLight;
    badgeEl.style.color = colorDark;

    titleEl.innerHTML = elData.title;
    subtitleEl.innerHTML = elData.cycle;

    let html = `
      <div class="drawer-section" style="border-left-color: ${color}">
        <div class="drawer-section-title">👥 Public concerné & Conditions</div>
        <div class="drawer-section-content">
          <p>${elData.public}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${color}">
        <div class="drawer-section-title">📚 Au programme</div>
        <div class="drawer-section-content">
          <p>${elData.programme}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${color}">
        <div class="drawer-section-title">⏱️ Rythme et stages</div>
        <div class="drawer-section-content">
          <p>${elData.rythme}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: ${color}">
        <div class="drawer-section-title">🎯 Objectif & Diplôme</div>
        <div class="drawer-section-content">
          <p>${elData.objectif}</p>
        </div>
      </div>

      ${elementId === 'seconde-pro' ? `
        <div class="drawer-section" style="border-left-color: var(--pro-primary); background: var(--pro-primary-subtle);">
          <div class="drawer-section-title" style="color: var(--pro-primary-dark);">📍 Spécial Aube (10)</div>
          <div class="drawer-section-content">
            <p>Découvre toutes les <strong>familles de métiers</strong> proposées en 2<sup>de</sup> Pro et les <strong>lycées de l'Aube</strong> qui les préparent !</p>
            <button type="button" class="btn-primary" onclick="window.app.scrollToFamilles()" style="margin-top: 0.5rem; width: 100%; text-align: center; background: var(--pro-primary);">
              Explorer les Familles de Métiers & Lycées de l'Aube ➔
            </button>
          </div>
        </div>
      ` : ''}

      ${elData.passerelles ? `
        <div class="drawer-section" style="border-left-color: #f59e0b">
          <div class="drawer-section-title">🔄 Passerelles possibles</div>
          <div class="drawer-section-content">
            <p>${elData.passerelles}</p>
          </div>
        </div>
      ` : ""}
    `;

    bodyEl.innerHTML = html;
    this.openDrawer();
  }

  /**
   * Ouvre la fiche explicative d'une passerelle
   */
  openPasserelleDrawer(passerelleId) {
    const pass = ORIENTATION_DATA.passerelles.find(p => p.id === passerelleId);
    if (!pass) return;

    const titleEl = document.getElementById("drawerTitle");
    const subtitleEl = document.getElementById("drawerSubtitle");
    const badgeEl = document.getElementById("drawerBadge");
    const bodyEl = document.getElementById("drawerBody");

    badgeEl.textContent = "Passerelle d'orientation";
    badgeEl.style.backgroundColor = "#fef3c7";
    badgeEl.style.color = "#b45309";

    titleEl.innerHTML = pass.title;
    subtitleEl.textContent = "Changer de voie ou poursuivre vers un diplôme supérieur";

    let html = `
      <div class="drawer-section" style="border-left-color: #f59e0b">
        <div class="drawer-section-title">💡 En quoi consiste cette passerelle ?</div>
        <div class="drawer-section-content">
          <p>${pass.description}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: #f59e0b">
        <div class="drawer-section-title">📋 Conditions et démarches</div>
        <div class="drawer-section-content">
          <p>${pass.conditions}</p>
        </div>
      </div>

      <div class="drawer-section" style="border-left-color: #0284c7">
        <div class="drawer-section-title">🤝 Qui contacter ?</div>
        <div class="drawer-section-content">
          <p>Pour mettre en place un parcours passerelle ou une réorientation, parlez-en dès que possible à votre <strong>Professeur Principal</strong> ou prenez rendez-vous avec le <strong>Psychologue de l'Éducation Nationale (Psy-EN)</strong> au collège ou au CIO (Centre d'Information et d'Orientation).</p>
        </div>
      </div>
    `;

    bodyEl.innerHTML = html;
    this.openDrawer();
  }

  /* ==========================================================================
     RACCOURCIS HERO CARDS
     ========================================================================== */
  bindHeroCards() {
    const cards = document.querySelectorAll(".pilier-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const voieId = card.getAttribute("data-voie");
        if (voieId) {
          this.diagramController?.setFilter(voieId);
          this.openVoieDrawer(voieId);
          // Scroll doux vers le schéma
          document.getElementById("schemaSection")?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  /* ==========================================================================
     VUE MOBILE EN CARTES / ONGLETS
     ========================================================================== */
  bindMobileCardsView() {
    const toggleBtn = document.getElementById("btnToggleViewMode");
    const svgCard = document.querySelector(".diagram-canvas-card");
    const mobileView = document.getElementById("mobileCardsView");

    if (toggleBtn && mobileView && svgCard) {
      toggleBtn.addEventListener("click", () => {
        const isCards = mobileView.style.display === "block";
        if (isCards) {
          mobileView.style.display = "none";
          svgCard.style.display = "block";
          toggleBtn.innerHTML = `<span class="icon">📱</span> Vue Cartes smartphone`;
        } else {
          mobileView.style.display = "block";
          svgCard.style.display = "none";
          toggleBtn.innerHTML = `<span class="icon">📊</span> Revenir au Schéma`;
          this.renderMobileTab("voie-gt");
        }
      });
    }

    // Onglets de la vue mobile
    const tabs = document.querySelectorAll(".mobile-tab-btn");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const voieId = tab.getAttribute("data-tab-voie");
        this.renderMobileTab(voieId);
      });
    });
  }

  renderMobileTab(voieId) {
    const contentContainer = document.getElementById("mobileTimelineContainer");
    if (!contentContainer) return;

    const voie = ORIENTATION_DATA.voies[voieId];
    if (!voie) return;

    // Récupérer les éléments associés à cette voie
    const elements = Object.values(ORIENTATION_DATA.elements).filter(el => el.voieId === voieId);

    let html = `
      <div class="timeline-steps">
        ${elements.map(el => `
          <div class="timeline-item ${voieId.replace('voie-', '')}" onclick="window.app.openElementDrawer('${el.id}')">
            <span class="timeline-badge" style="background:${voie.colorLight}; color:${voie.colorDark}">${el.cycle}</span>
            <h4>${el.title}</h4>
            <p>${el.objectif}</p>
          </div>
        `).join("")}
      </div>
    `;

    contentContainer.innerHTML = html;
  }

  /* ==========================================================================
     COMPARATEUR DIRECT
     ========================================================================== */
  renderComparator() {
    const tbody = document.getElementById("comparatorTableBody");
    if (!tbody) return;

    let rowsHtml = ORIENTATION_DATA.comparateur.map(row => `
      <tr>
        <td class="criterion">${row.critere}</td>
        <td>${row.gt}</td>
        <td>${row.pro}</td>
        <td>${row.apprentissage}</td>
      </tr>
    `).join("");

    tbody.innerHTML = rowsHtml;
  }

  /* ==========================================================================
     MINI-QUIZ D'ORIENTATION INTERACTIF
     ========================================================================== */
  initQuiz() {
    this.currentQuizIndex = 0;
    this.quizAnswers = [];
    this.renderQuizQuestion();

    const restartBtn = document.getElementById("btnRestartQuiz");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        this.currentQuizIndex = 0;
        this.quizAnswers = [];
        document.getElementById("quizActiveBox").style.display = "block";
        document.getElementById("quizResultBox").style.display = "none";
        this.renderQuizQuestion();
      });
    }
  }

  renderQuizQuestion() {
    const qBox = document.getElementById("quizActiveBox");
    if (!qBox) return;

    const q = ORIENTATION_DATA.quizQuestions[this.currentQuizIndex];
    if (!q) {
      this.showQuizResults();
      return;
    }

    const numEl = document.getElementById("quizQuestionNum");
    const textEl = document.getElementById("quizQuestionText");
    const optionsEl = document.getElementById("quizOptionsContainer");
    const progressFill = document.getElementById("quizProgressFill");

    numEl.textContent = `Question ${this.currentQuizIndex + 1} sur ${ORIENTATION_DATA.quizQuestions.length}`;
    textEl.innerHTML = q.question;
    progressFill.style.width = `${((this.currentQuizIndex) / ORIENTATION_DATA.quizQuestions.length) * 100}%`;

    optionsEl.innerHTML = q.options.map((opt, idx) => `
      <button type="button" class="quiz-option-btn" data-opt-index="${idx}">
        <span class="opt-bullet">⚪</span>
        <span>${opt.text}</span>
      </button>
    `).join("");

    const btns = optionsEl.querySelectorAll(".quiz-option-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const optIdx = parseInt(btn.getAttribute("data-opt-index"), 10);
        this.quizAnswers.push(q.options[optIdx].scores);
        this.currentQuizIndex++;
        this.renderQuizQuestion();
      });
    });
  }

  showQuizResults() {
    document.getElementById("quizActiveBox").style.display = "none";
    const resBox = document.getElementById("quizResultBox");
    resBox.style.display = "block";

    // Calculer les totaux de score
    const scores = { "voie-gt": 0, "voie-pro": 0, "voie-apprentissage": 0 };
    this.quizAnswers.forEach(ans => {
      scores["voie-gt"] += ans["voie-gt"] || 0;
      scores["voie-pro"] += ans["voie-pro"] || 0;
      scores["voie-apprentissage"] += ans["voie-apprentissage"] || 0;
    });

    const total = scores["voie-gt"] + scores["voie-pro"] + scores["voie-apprentissage"] || 1;
    const pctGt = Math.round((scores["voie-gt"] / total) * 100);
    const pctPro = Math.round((scores["voie-pro"] / total) * 100);
    const pctApp = Math.round((scores["voie-apprentissage"] / total) * 100);

    document.getElementById("scoreValGt").textContent = `${pctGt}%`;
    document.getElementById("scoreValPro").textContent = `${pctPro}%`;
    document.getElementById("scoreValApp").textContent = `${pctApp}%`;

    // Déterminer la voie dominante
    let maxVoie = "voie-gt";
    if (scores["voie-pro"] > scores[maxVoie]) maxVoie = "voie-pro";
    if (scores["voie-apprentissage"] > scores[maxVoie]) maxVoie = "voie-apprentissage";

    const voieInfo = ORIENTATION_DATA.voies[maxVoie];
    const badgeEl = document.getElementById("resultBadge");
    const titleEl = document.getElementById("resultTitle");
    const descEl = document.getElementById("resultDesc");

    badgeEl.innerHTML = `Voie recommandée : ${voieInfo.title}`;
    badgeEl.style.backgroundColor = voieInfo.colorLight;
    badgeEl.style.color = voieInfo.colorDark;

    titleEl.innerHTML = `Ton profil correspond particulièrement à la ${voieInfo.title} !`;
    descEl.innerHTML = `${voieInfo.subtitle}. N'hésite pas à explorer cette voie sur le schéma et à en discuter avec ton professeur principal et tes parents.`;

    const exploreBtn = document.getElementById("btnExploreRecommended");
    if (exploreBtn) {
      exploreBtn.onclick = () => {
        this.diagramController?.setFilter(maxVoie);
        this.openVoieDrawer(maxVoie);
        document.getElementById("schemaSection")?.scrollIntoView({ behavior: "smooth" });
      };
    }
  }

  /* ==========================================================================
     SIMULATEUR DE SALAIRE EN APPRENTISSAGE
     ========================================================================== */
  initSalarySimulator() {
    const ageBtns = document.querySelectorAll(".sim-age-btn");
    const yearBtns = document.querySelectorAll(".sim-year-btn");

    ageBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        ageBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.selectedSimAge = btn.getAttribute("data-age");
        this.updateSalaryDisplay();
      });
    });

    yearBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        yearBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.selectedSimYear = btn.getAttribute("data-year");
        this.updateSalaryDisplay();
      });
    });

    this.updateSalaryDisplay();
  }

  updateSalaryDisplay() {
    const dataAge = ORIENTATION_DATA.simulateurApprentissage[this.selectedSimAge];
    if (!dataAge) return;

    const dataYear = dataAge[this.selectedSimYear];
    if (!dataYear) return;

    const amountEl = document.getElementById("simSalaryAmount");
    const subEl = document.getElementById("simSalarySub");
    const badgeEl = document.getElementById("simBadge");

    if (amountEl) {
      amountEl.textContent = `${Math.round(dataYear.net)} €`;
    }
    if (subEl) {
      subEl.textContent = `soit ${dataYear.pct}% du SMIC mensuel brut (environ ${Math.round(dataYear.brut)} € brut)`;
    }
    if (badgeEl) {
      badgeEl.textContent = `Salaire Net Estimé / Mois • ${dataAge.label}`;
    }
  }

  /* ==========================================================================
     FAQ & IDÉES REÇUES
     ========================================================================== */
  initFaq() {
    const faqContainer = document.getElementById("faqContainer");
    if (!faqContainer) return;

    faqContainer.innerHTML = ORIENTATION_DATA.faq.map((item, idx) => `
      <div class="faq-item" id="faq-item-${idx}">
        <button type="button" class="faq-trigger" onclick="window.app.toggleFaq(${idx})">
          <span>${item.question}</span>
          <span class="faq-icon">+</span>
        </button>
        <div class="faq-content">
          <div class="faq-content-inner">
            ${item.reponse}
          </div>
        </div>
      </div>
    `).join("");
  }

  toggleFaq(idx) {
    const item = document.getElementById(`faq-item-${idx}`);
    if (!item) return;

    const isOpen = item.classList.contains("open");
    const content = item.querySelector(".faq-content");

    // Fermer tous les autres
    document.querySelectorAll(".faq-item").forEach(other => {
      if (other !== item) {
        other.classList.remove("open");
        other.querySelector(".faq-content").style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove("open");
      content.style.maxHeight = null;
    } else {
      item.classList.add("open");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  /* ==========================================================================
     GLOSSAIRE DES SIGLES AVEC RECHERCHE DYNAMIQUE
     ========================================================================== */
  initGlossary() {
    const input = document.getElementById("glossarySearchInput");
    this.renderGlossary(ORIENTATION_DATA.glossaire);

    if (input) {
      input.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = ORIENTATION_DATA.glossaire.filter(item => 
          item.sigle.toLowerCase().includes(query) ||
          item.definition.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
        this.renderGlossary(filtered);
      });
    }
  }

  renderGlossary(items) {
    const container = document.getElementById("glossaryGrid");
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 2rem;">Aucun sigle ne correspond à votre recherche.</p>`;
      return;
    }

    container.innerHTML = items.map(item => `
      <div class="glossary-card">
        <span class="glossary-sigle">${item.sigle}</span>
        <h4 class="glossary-definition">${item.definition}</h4>
        <p class="glossary-desc">${item.description}</p>
      </div>
    `).join("");
  }

  /* ==========================================================================
     MODULE : 2NDE PRO - FAMILLES DE MÉTIERS & LYCÉES DE L'AUBE (10)
     ========================================================================== */
  initFamillesMetiers() {
    const searchInput = document.getElementById("famillesSearchInput");
    const filterBtns = document.querySelectorAll(".familles-filter-btn");

    if (filterBtns) {
      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          this.selectedFamilleCategory = btn.getAttribute("data-category");
          this.renderFamillesMetiers();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.familleSearchQuery = e.target.value.toLowerCase().trim();
        this.renderFamillesMetiers();
      });
    }

    this.renderFamillesMetiers();
  }

  scrollToFamilles() {
    this.closeDrawer();
    const section = document.getElementById("famillesMetiersSection");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  renderFamillesMetiers() {
    const grid = document.getElementById("famillesGrid");
    if (!grid || !ORIENTATION_DATA.famillesMetiers) return;

    const query = this.familleSearchQuery;
    const cat = this.selectedFamilleCategory;

    const filtered = ORIENTATION_DATA.famillesMetiers.filter(famille => {
      // Filtre catégorie
      const matchCat = (cat === "all") || (famille.categorie === cat);
      if (!matchCat) return false;

      // Filtre recherche textuelle
      if (!query) return true;

      const inName = famille.nom.toLowerCase().includes(query);
      const inSigle = famille.sigle.toLowerCase().includes(query);
      const inDesc = famille.description.toLowerCase().includes(query);
      const inBacs = famille.bacsPros.some(b => 
        b.titre.toLowerCase().includes(query) || b.focus.toLowerCase().includes(query)
      );
      const inLycees = famille.lyceesAube.some(l => 
        l.nom.toLowerCase().includes(query) || 
        l.commune.toLowerCase().includes(query) || 
        l.statut.toLowerCase().includes(query) ||
        (l.details && l.details.toLowerCase().includes(query)) ||
        (l.bacsProsProposes && l.bacsProsProposes.some(bp => bp.titre.toLowerCase().includes(query)))
      );

      return inName || inSigle || inDesc || inBacs || inLycees;
    });

    this.updateFamillesStatusBar(filtered.length);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
          <p style="font-size: 1.1rem; font-weight: 700; color: var(--text-muted); margin-bottom: 0.5rem;">Aucune famille de métiers ou lycée ne correspond à votre recherche.</p>
          <p style="font-size: 0.9rem; color: var(--text-secondary);">Essayez un autre mot-clé (ex: Troyes, Romilly, électricité, vente, cuisine...).</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(famille => {
      const isExpanded = this.expandedFamilles.has(famille.id);
      const bacsCount = famille.bacsPros ? famille.bacsPros.length : 0;
      const lyceesCount = famille.lyceesAube ? famille.lyceesAube.length : 0;
      const countLabel = `${bacsCount} Bac${bacsCount > 1 ? 's' : ''} Pro • ${lyceesCount} lycée${lyceesCount > 1 ? 's' : ''}`;

      return `
        <div class="famille-card ${isExpanded ? 'is-expanded' : ''}" id="famille-card-${famille.id}" data-counts="${countLabel}">
          <div class="famille-header">
            <h3 class="famille-title">${famille.nom}</h3>
            <span class="famille-sigle-badge" style="background: ${famille.badgeColor}20; color: ${famille.badgeColor}; border: 1px solid ${famille.badgeColor}40;">
              ${famille.sigle}
            </span>
          </div>

          <div class="famille-compact-body">
            <div class="famille-desc">
              <strong>En 2<sup>de</sup> Pro :</strong> ${famille.description}
            </div>
            <div class="famille-mini-stats">
              <span class="mini-stat-pill">🎯 <strong>${bacsCount}</strong> Bac${bacsCount > 1 ? 's' : ''} Pro</span>
              <span class="mini-stat-pill">🏫 <strong>${lyceesCount}</strong> établissement${lyceesCount > 1 ? 's' : ''} aubois</span>
            </div>
          </div>

          <div class="famille-card-action">
            <button type="button" class="famille-toggle-btn" onclick="window.app.toggleFamille('${famille.id}')" aria-expanded="${isExpanded ? 'true' : 'false'}" aria-controls="famille-collapsible-${famille.id}">
              <span class="toggle-btn-text">${isExpanded ? 'Réduire' : `Découvrir les formations &amp; lycées (${countLabel})`}</span>
              <span class="toggle-btn-icon">${isExpanded ? '▴' : '▾'}</span>
            </button>
          </div>

          <div class="famille-collapsible-content" id="famille-collapsible-${famille.id}">
            <div class="famille-collapsible-inner">
              ${famille.onisepUrl ? `
                <div class="famille-onisep-wrap">
                  <a href="${famille.onisepUrl}" target="_blank" rel="noopener noreferrer" class="famille-onisep-link" title="Consulter la fiche Onisep de cette formation (nouvelle fenêtre)">
                    <span class="onisep-icon" aria-hidden="true">🔗</span>
                    <span class="onisep-text">Fiche Onisep de la classe de 2<sup>de</sup> pro</span>
                    <span class="ext-icon" aria-hidden="true">↗</span>
                  </a>
                </div>
              ` : ''}

              <div class="famille-sub-section">
                <div class="famille-sub-title">🎯 Bacs Professionnels préparés <span class="sub-title-levels">(1<sup>re</sup> &amp; T<sup>le</sup>)</span> :</div>
                <div class="bac-pro-list">
                  ${famille.bacsPros.map(b => `
                    <div class="bac-pro-item">
                      <div class="bac-pro-name">
                        ${b.url ? `
                          <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="bac-pro-link" title="Consulter la fiche Onisep du ${b.titre} (nouvelle fenêtre)">
                            ${b.titre} <span class="ext-icon" aria-hidden="true">↗</span>
                          </a>
                        ` : b.titre}
                      </div>
                      <div class="bac-pro-focus">${b.focus}</div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="famille-sub-section">
                <div class="famille-sub-title">🏫 Où se former dans l'Aube (10) :</div>
                <div class="lycees-aube-list">
                  ${famille.lyceesAube.map(l => {
                    const dem = l.demandes;
                    let demStr = '';
                    if (dem) {
                      if (dem['2023'] !== null && dem['2023'] !== undefined) {
                        demStr = `2025 : <strong class="stat-blue">${dem['2025']}</strong> &bull; 2024 : ${dem['2024']} &bull; 2023 : ${dem['2023']}`;
                      } else if (dem['2024'] !== null && dem['2024'] !== undefined) {
                        demStr = `2025 : <strong class="stat-blue">${dem['2025']}</strong> &bull; 2024 : ${dem['2024']}`;
                      } else if (dem['2025'] !== null && dem['2025'] !== undefined) {
                        demStr = `2025 : <strong class="stat-blue">${dem['2025']}</strong>`;
                      }
                    }

                    const siteUrl = l.siteWeb || getLyceeSiteWeb(l.nom);
                    const bacsList = l.bacsProsProposes || [];

                    return `
                      <div class="lycee-aube-item">
                        <div class="lycee-aube-top">
                          ${siteUrl ? `
                            <a href="${siteUrl}" target="_blank" rel="noopener noreferrer" class="lycee-aube-name lycee-link" title="Consulter le site officiel de ${l.nom} (nouvelle fenêtre)">
                              ${l.nom} <span class="ext-icon" aria-hidden="true">↗</span>
                            </a>
                          ` : `
                            <span class="lycee-aube-name">${l.nom}</span>
                          `}
                          <div class="lycee-aube-badges">
                            <span class="badge-statut ${l.statut.toLowerCase().includes('public') ? 'public' : 'prive'}">${l.statut}</span>
                            <span class="badge-commune">📍 ${l.commune}</span>
                            ${siteUrl ? `
                              <a href="${siteUrl}" target="_blank" rel="noopener noreferrer" class="badge-website-pill" title="Visiter le site officiel de l'établissement (nouvelle fenêtre)">
                                🌐 Site web ↗
                              </a>
                            ` : ''}
                          </div>
                        </div>
                        <div class="lycee-aube-bacs">
                          <span class="lycee-bacs-label">Bac(s) Pro préparé(s) dans cet établissement :</span>
                          <div class="lycee-bacs-tags">
                            ${bacsList.length > 0 ? bacsList.map(bp => `
                              <a href="${bp.url}" target="_blank" rel="noopener noreferrer" class="lycee-bac-tag-link" title="Consulter la fiche Onisep du ${bp.titre} (nouvelle fenêtre)">
                                🎓 ${bp.titre} <span class="ext-icon" aria-hidden="true">↗</span>
                              </a>
                            `).join("") : `<div class="lycee-aube-details">${l.details}</div>`}
                          </div>
                        </div>
                        ${l.capacite ? `
                          <div class="lycee-aube-stats prof-only">
                            <span class="stat-cap">Capacité d'accueil : <strong>${l.capacite} places</strong></span>
                            ${demStr ? `<span class="stat-dem">Demandes Vœu 1 : ${demStr}</span>` : ''}
                          </div>
                        ` : ''}
                      </div>
                    `;
                  }).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  toggleFamille(familleId) {
    const card = document.getElementById(`famille-card-${familleId}`);
    if (!card) return;
    const isExpanded = card.classList.toggle("is-expanded");
    const btn = card.querySelector(".famille-toggle-btn");
    const countLabel = card.getAttribute("data-counts") || "";
    if (btn) {
      btn.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      btn.innerHTML = isExpanded
        ? `<span class="toggle-btn-text">Réduire</span> <span class="toggle-btn-icon">▴</span>`
        : `<span class="toggle-btn-text">Découvrir les formations &amp; lycées (${countLabel})</span> <span class="toggle-btn-icon">▾</span>`;
    }
    if (isExpanded) {
      this.expandedFamilles.add(familleId);
    } else {
      this.expandedFamilles.delete(familleId);
    }
    this.updateToggleAllBtn();
  }

  toggleAllFamilles() {
    const cards = document.querySelectorAll(".famille-card");
    if (!cards.length) return;
    const anyClosed = Array.from(cards).some(c => !c.classList.contains("is-expanded"));
    cards.forEach(card => {
      const fid = card.id.replace("famille-card-", "");
      const btn = card.querySelector(".famille-toggle-btn");
      const countLabel = card.getAttribute("data-counts") || "";
      if (anyClosed) {
        card.classList.add("is-expanded");
        this.expandedFamilles.add(fid);
        if (btn) {
          btn.setAttribute("aria-expanded", "true");
          btn.innerHTML = `<span class="toggle-btn-text">Réduire</span> <span class="toggle-btn-icon">▴</span>`;
        }
      } else {
        card.classList.remove("is-expanded");
        this.expandedFamilles.delete(fid);
        if (btn) {
          btn.setAttribute("aria-expanded", "false");
          btn.innerHTML = `<span class="toggle-btn-text">Découvrir les formations &amp; lycées (${countLabel})</span> <span class="toggle-btn-icon">▾</span>`;
        }
      }
    });
    this.updateToggleAllBtn();
  }

  updateToggleAllBtn() {
    const toggleAllBtn = document.getElementById("famillesToggleAllBtn");
    const cards = document.querySelectorAll(".famille-card");
    if (!toggleAllBtn || !cards.length) return;
    const allExpanded = Array.from(cards).every(c => c.classList.contains("is-expanded"));
    toggleAllBtn.innerHTML = allExpanded
      ? `<span>▴</span> Tout replier`
      : `<span>▾</span> Tout déplier (${cards.length})`;
  }

  updateFamillesStatusBar(filteredCount) {
    const statusCount = document.getElementById("famillesStatusCount");
    const toggleAllBtn = document.getElementById("famillesToggleAllBtn");
    const cat = this.selectedFamilleCategory;
    const catLabels = {
      "all": "Toutes les familles",
      "tertiaire": "Commerce, Accueil & Gestion",
      "industrie": "Industrie, Numérique & Véhicules",
      "batiment": "Bâtiment & Travaux Publics",
      "services-sante": "Hôtellerie, Mode, Soins & Beauté",
      "agricole": "Nature, Agriculture & Forêt"
    };
    const catName = catLabels[cat] || "";

    if (statusCount) {
      if (this.familleSearchQuery) {
        statusCount.innerHTML = `Affichage de <strong>${filteredCount} famille(s)</strong> correspondant à votre recherche`;
      } else if (cat === "all") {
        statusCount.innerHTML = `Affichage des <strong>${filteredCount} familles de métiers</strong> de l'Aube`;
      } else {
        statusCount.innerHTML = `Pôle <strong>${catName}</strong> : <strong>${filteredCount} famille(s) de métiers</strong>`;
      }
    }

    if (toggleAllBtn) {
      if (filteredCount === 0) {
        toggleAllBtn.style.display = "none";
      } else {
        toggleAllBtn.style.display = "inline-flex";
        const cards = document.querySelectorAll(".famille-card");
        const allExpanded = cards.length > 0 && Array.from(cards).every(c => c.classList.contains("is-expanded"));
        toggleAllBtn.innerHTML = allExpanded
          ? `<span>▴</span> Tout replier`
          : `<span>▾</span> Tout déplier (${filteredCount})`;
      }
    }
  }

  /* ==========================================================================
     MODE ENSEIGNANT / GESTION DU BANDEAU CIO & MASQUAGE DES STATS
     ========================================================================== */
  initProfMode() {
    const banner = document.getElementById("profModeBanner");
    const btnToggle = document.getElementById("btnToggleProfView");
    const btnExit = document.getElementById("btnExitProfMode");

    const isAuthorized = sessionStorage.getItem("mode_prof_auth") === "1";
    const isActive = sessionStorage.getItem("mode_prof_active") !== "0";

    // Synchronisation des classes sur body et html
    if (isAuthorized && isActive) {
      document.body.classList.add("mode-prof");
      document.documentElement.classList.add("mode-prof");
    } else {
      document.body.classList.remove("mode-prof");
      document.documentElement.classList.remove("mode-prof");
    }

    if (banner) {
      if (isAuthorized) {
        banner.style.display = "inline-flex";
        this.updateProfBannerUI(isActive);
      } else {
        banner.style.display = "none";
      }
    }

    if (btnToggle) {
      btnToggle.addEventListener("click", () => {
        const currentlyActive = sessionStorage.getItem("mode_prof_active") !== "0";
        if (currentlyActive) {
          sessionStorage.setItem("mode_prof_active", "0");
          document.body.classList.remove("mode-prof");
          document.documentElement.classList.remove("mode-prof");
          this.updateProfBannerUI(false);
        } else {
          sessionStorage.setItem("mode_prof_active", "1");
          document.body.classList.add("mode-prof");
          document.documentElement.classList.add("mode-prof");
          this.updateProfBannerUI(true);
        }
      });
    }

    if (btnExit) {
      btnExit.addEventListener("click", () => {
        sessionStorage.removeItem("mode_prof_auth");
        sessionStorage.removeItem("mode_prof_active");
        document.body.classList.remove("mode-prof");
        document.documentElement.classList.remove("mode-prof");
        if (banner) banner.style.display = "none";
      });
    }
  }

  updateProfBannerUI(isActive) {
    const btnToggle = document.getElementById("btnToggleProfView");
    const badgeTitle = document.getElementById("profBadgeTitle");
    if (!btnToggle || !badgeTitle) return;

    if (isActive) {
      badgeTitle.innerHTML = `<span class="prof-icon">👨‍🏫</span> Mode Enseignant`;
      btnToggle.innerHTML = `👁️ Masquer stats`;
      btnToggle.title = "Masquer temporairement les capacités et demandes (ex: vidéoprojection devant les élèves)";
      btnToggle.classList.remove("active-student-sim");
    } else {
      badgeTitle.innerHTML = `<span class="prof-icon">👨‍🏫</span> Vue Élève simulée`;
      btnToggle.innerHTML = `👁️ Afficher stats`;
      btnToggle.title = "Réafficher les capacités d'accueil et demandes CIO";
      btnToggle.classList.add("active-student-sim");
    }
  }
}

// Initialisation globale
document.addEventListener("DOMContentLoaded", () => {
  window.app = new AppController();
});
