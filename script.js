// TARGFI — Interactive Web Experience

// Project Data Store for Modals
const projectsData = {
  ferreiradash: {
    title: "FerreiraDash — Gestão Financeira, Audiências & Pagamentos",
    category: "Dashboards & Gestão Operacional",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    image: "assets/project-ferreiradash.svg",
    badge: "Case Real de Advocacia",
    headline: "Painel sob medida para advogados acompanharem datas de audiências, recebimento de honorários e controle de acordos.",
    problem: "Escritórios de advocacia perdiam o controle das datas de audiências (presenciais e virtuais), prazos de vencimento de parcelas de acordos judiciais e honorários a receber, dependendo de anotações soltas ou planilhas difíceis de atualizar.",
    solution: "Desenvolvemos o FerreiraDash: um painel visual e prático, pensado especificamente para a rotina jurídica. Reúne em uma única tela o calendário de audiências da semana, datas e valores de pagamentos futuros, fluxo financeiro do escritório e exportação de relatórios.",
    results: [
      "Controle rigoroso de datas de pagamentos e parcelas de acordos sem atrasos",
      "Grade semanal clara das próximas audiências com indicação de modalidade (telepresencial/presencial)",
      "Previsibilidade financeira com total de honorários recebidos e a receber",
      "Interface limpa, rápida e acessível pelo celular ou computador"
    ],
    techStack: ["HTML5 / Tailwind CSS", "JavaScript ES6+", "Gestão Financeira", "Grade de Audiências", "Exportação Excel/PDF"],
    whatsappMessage: "Olá TARGFI! Vi o projeto FerreiraDash no site e gostaria de um dashboard financeiro e de audiências personalizado para meu escritório/empresa."
  },

  fichaadv: {
    title: "FichaAdv — Sistema de Gestão Jurídica & Fichas de Atendimento",
    category: "Aplicação Web & Gestão Sob Medida",
    tagColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    image: "assets/project-fichaadv.svg",
    badge: "Case de Sucesso Real",
    headline: "Transformando o atendimento de escritórios em uma operação ágil, rápida e padronizada.",
    problem: "Escritórios perdiam tempo colhendo dados de clientes em papéis, fichas manuais ou documentos Word espalhados, resultando em retrabalho, lentidão na elaboração de petições iniciais e dificuldade para encontrar dados antigos.",
    solution: "Desenvolvemos o FichaAdv: uma aplicação web ágil onde o atendente ou advogado cadastra clientes, dados processuais, qualificações e documentos com facilidade, gerando fichas completas e padronizadas em segundos.",
    results: [
      "Redução de 60% no tempo de preenchimento e triagem de clientes",
      "Geração instantânea de minutas e fichas padronizadas",
      "Banco de dados seguro com busca instantânea por CPF ou nome",
      "Interface fluida acessível de qualquer dispositivo"
    ],
    techStack: ["HTML5 / Tailwind CSS", "JavaScript ES6+", "Banco de Dados Seguro", "Geração de Fichas", "Design Responsivo"],
    whatsappMessage: "Olá TARGFI! Vi o projeto FichaAdv no site e gostaria de saber mais sobre como criar um sistema similar de fichas e gestão para o meu negócio."
  },

  ecommerce: {
    title: "Loja Virtual & E-commerce de Alta Conversão",
    category: "E-commerce & Lojas Virtuais",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    image: "assets/project-ecommerce.svg",
    badge: "Vendas Online 24/7",
    headline: "Sua loja vendendo no automático com vitrine moderna, checkout PIX instantâneo e integração WhatsApp.",
    problem: "Empresas e empreendedores que vendem apenas pelas redes sociais perdem muito tempo enviando fotos uma a uma no direct, calculando frete na mão e perdendo clientes pela demora no fechamento da compra.",
    solution: "Desenvolvemos e-commerces e catálogos interativos rápidos: vitrine de produtos organizada por categorias, cálculo de frete, pagamento facilitado por PIX ou cartão de crédito e opção de envio do pedido completo direto no WhatsApp da loja.",
    results: [
      "Processo de compra automatizado sem depender de atendimento manual no direct",
      "Recebimento rápido via PIX com confirmação imediata",
      "Catálogo online leve e ultrarrápido no celular",
      "Painel prático para cadastro de fotos, preços e promoções"
    ],
    techStack: ["E-commerce Moderno", "Checkout Rápido PIX/Cartão", "Integração WhatsApp", "Catálogo Dinâmico", "SEO para Vendas"],
    whatsappMessage: "Olá TARGFI! Gostaria de criar uma loja virtual / e-commerce moderno para os meus produtos. Podemos conversar?"
  },

  fenix: {
    title: "Landing Page Fênix Contábil & Sites Institucionais",
    category: "Sites & Landing Pages",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    image: "assets/project-fenix.svg",
    badge: "Foco em Conversão",
    headline: "Posicionamento digital com design corporativo e geração contínua de novos clientes.",
    problem: "Empresas com serviços excelentes, mas com sites desatualizados, lentos no celular e sem botões estratégicos, deixando de fechar novos contratos porque os visitantes não encontravam um caminho claro para pedir orçamento.",
    solution: "Desenvolvemos websites e landing pages com carregamento instantâneo no celular, visual corporativo refinado, copywriting persuasivo e botões estratégicos que direcionam os visitantes qualificados direto para o WhatsApp comercial.",
    results: [
      "Velocidade de carregamento superior a 95/100 no Google PageSpeed",
      "Aumento direto na taxa de cliques para abertura de conversas no WhatsApp",
      "Design 100% responsivo adaptado para celulares, notebooks e telas grandes",
      "Otimização inicial para mecanismos de busca (SEO)"
    ],
    techStack: ["HTML5 Semântico", "Tailwind CSS", "Copywriting Comercial", "SEO & Performance", "Integração WhatsApp Direct"],
    whatsappMessage: "Olá TARGFI! Quero renovar o site da minha empresa / criar uma landing page de alta conversão. Gostaria de um orçamento."
  }
};

// Global WhatsApp target (easily customized)
const TARGFI_PHONE = "5531999999999"; // Format: DDI + DDD + Number

// Helper to open WhatsApp
function openWhatsApp(msg) {
  const cleanPhone = TARGFI_PHONE.replace(/\D/g, "");
  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, "_blank");
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLiveChart();
  initPortfolioFilters();
  initProjectModals();
  initBudgetSimulator();
  initFAQ();
  initMobileMenu();
  initScrollEffects();
  initContactForm();
});

/* -------------------------------------------------------------
   1. Interactive Live Dashboard Simulation (FerreiraDash Theme)
------------------------------------------------------------- */
let liveChartInstance = null;

const chartDataPresets = {
  financeiro: {
    label: "Honorários & Entradas (R$ mil)",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [4.2, 8.5, 12.0, 18.2, 25.0, 34.0, 42.5],
      stat1: "R$ 42.500 Recebidos",
      stat2: "R$ 18.200 A Receber",
      stat3: "100% Acordos em Dia"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [12.0, 18.5, 24.0, 22.0, 38.0, 42.5, 42.5],
      stat1: "R$ 145.000 no Mês",
      stat2: "18 Parcelas Pagas",
      stat3: "Zero Inadimplência"
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [68.0, 84.0, 112.0, 145.0],
      stat1: "R$ 409.000 Acumulado",
      stat2: "74 Honorários Faturados",
      stat3: "+22% vs Tri. Anterior"
    }
  },
  audiencias: {
    label: "Audiências & Prazos no Período",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [1, 2, 2, 3, 3, 3, 3],
      stat1: "3 Audiências Hoje",
      stat2: "2 Telepresenciais",
      stat3: "100% Prazos Checados"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [4, 6, 8, 5, 7, 1, 0],
      stat1: "31 Audiências na Semana",
      stat2: "14 Varas Judiciais",
      stat3: "Zero Conflitos de Agenda"
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [18, 24, 28, 35],
      stat1: "105 Audiências no Mês",
      stat2: "3 Advogados Atuantes",
      stat3: "Controle Rigoroso"
    }
  },
  fichas: {
    label: "Atendimentos & Fichas de Clientes",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [2, 4, 7, 9, 12, 14, 16],
      stat1: "16 Fichas Cadastradas",
      stat2: "8 Minutas Geradas",
      stat3: "Tempo Médio: 4 min"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [22, 28, 34, 30, 36, 12, 5],
      stat1: "167 Fichas na Semana",
      stat2: "89 Clientes Atendidos",
      stat3: "+60% Velocidade"
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [240, 290, 360, 420],
      stat1: "1.310 Fichas no Banco",
      stat2: "FichaAdv Integrada",
      stat3: "Busca Instantânea"
    }
  }
};

let currentPreset = "financeiro";
let currentPeriod = "semana";

function initLiveChart() {
  const canvas = document.getElementById("liveDemoChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  // Create gradient
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, "rgba(56, 189, 248, 0.45)");
  gradient.addColorStop(1, "rgba(56, 189, 248, 0.0)");

  const initialData = chartDataPresets[currentPreset][currentPeriod];

  liveChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: initialData.labels,
      datasets: [{
        label: chartDataPresets[currentPreset].label,
        data: initialData.data,
        borderColor: "#38BDF8",
        borderWidth: 3,
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#0F172A",
        pointBorderColor: "#38BDF8",
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#1E293B",
          titleColor: "#94A3B8",
          bodyColor: "#FFFFFF",
          borderColor: "#334155",
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.raw}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { color: "#94A3B8", font: { family: "Plus Jakarta Sans" } }
        },
        y: {
          grid: { color: "rgba(255, 255, 255, 0.05)" },
          ticks: { color: "#94A3B8", font: { family: "Plus Jakarta Sans" } }
        }
      }
    }
  });

  updateChartStats();

  // Preset Buttons
  document.querySelectorAll(".chart-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chart-preset-btn").forEach(b => {
        b.classList.remove("bg-sky-500/20", "text-sky-300", "border-sky-500/40");
        b.classList.add("bg-slate-800/60", "text-slate-400", "border-slate-700/50");
      });
      btn.classList.add("bg-sky-500/20", "text-sky-300", "border-sky-500/40");
      btn.classList.remove("bg-slate-800/60", "text-slate-400", "border-slate-700/50");

      currentPreset = btn.getAttribute("data-preset");
      updateChartData();
    });
  });

  // Period Buttons
  document.querySelectorAll(".chart-period-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".chart-period-btn").forEach(b => {
        b.classList.remove("bg-sky-600", "text-white");
        b.classList.add("text-slate-400");
      });
      btn.classList.add("bg-sky-600", "text-white");
      btn.classList.remove("text-slate-400");

      currentPeriod = btn.getAttribute("data-period");
      updateChartData();
    });
  });
}

function updateChartData() {
  if (!liveChartInstance) return;
  const config = chartDataPresets[currentPreset][currentPeriod];
  liveChartInstance.data.labels = config.labels;
  liveChartInstance.data.datasets[0].label = chartDataPresets[currentPreset].label;
  liveChartInstance.data.datasets[0].data = config.data;

  // Change color accent per preset
  if (currentPreset === "audiencias") {
    liveChartInstance.data.datasets[0].borderColor = "#FBBF24";
    liveChartInstance.data.datasets[0].pointBorderColor = "#FBBF24";
  } else if (currentPreset === "fichas") {
    liveChartInstance.data.datasets[0].borderColor = "#818CF8";
    liveChartInstance.data.datasets[0].pointBorderColor = "#818CF8";
  } else {
    liveChartInstance.data.datasets[0].borderColor = "#38BDF8";
    liveChartInstance.data.datasets[0].pointBorderColor = "#38BDF8";
  }

  liveChartInstance.update();
  updateChartStats();
}

function updateChartStats() {
  const config = chartDataPresets[currentPreset][currentPeriod];
  const s1 = document.getElementById("chartStat1");
  const s2 = document.getElementById("chartStat2");
  const s3 = document.getElementById("chartStat3");

  if (s1) s1.textContent = config.stat1;
  if (s2) s2.textContent = config.stat2;
  if (s3) s3.textContent = config.stat3;
}

/* -------------------------------------------------------------
   2. Portfolio Filtering
------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".portfolio-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "block";
          card.classList.add("animate-fade-in");
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* -------------------------------------------------------------
   3. Project Modals & Details
------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("closeModalBtn");
  const modalOverlay = document.getElementById("modalOverlay");

  if (!modal) return;

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });

  // Open modal handlers
  document.querySelectorAll("[data-project-trigger]").forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projKey = trigger.getAttribute("data-project-trigger");
      const data = projectsData[projKey];
      if (!data) return;

      // Populate modal content
      document.getElementById("modalTitle").textContent = data.title;
      document.getElementById("modalCategory").textContent = data.category;
      document.getElementById("modalHeadline").textContent = data.headline;
      document.getElementById("modalImage").src = data.image;
      document.getElementById("modalProblem").textContent = data.problem;
      document.getElementById("modalSolution").textContent = data.solution;

      // Badges & Tech
      const techList = document.getElementById("modalTechStack");
      techList.innerHTML = "";
      data.techStack.forEach(t => {
        const span = document.createElement("span");
        span.className = "px-2.5 py-1 text-xs font-semibold rounded-md bg-slate-800 text-sky-300 border border-slate-700";
        span.textContent = t;
        techList.appendChild(span);
      });

      // Results
      const resList = document.getElementById("modalResults");
      resList.innerHTML = "";
      data.results.forEach(r => {
        const li = document.createElement("li");
        li.className = "flex items-start text-sm text-slate-300 space-x-2";
        li.innerHTML = `<span class="text-emerald-400 font-bold">✓</span> <span>${r}</span>`;
        resList.appendChild(li);
      });

      // WhatsApp Action
      const modalWaBtn = document.getElementById("modalWhatsAppBtn");
      modalWaBtn.onclick = () => {
        openWhatsApp(data.whatsappMessage);
      };

      // Show modal
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });
}

/* -------------------------------------------------------------
   4. Budget Simulator (Lead Generator)
------------------------------------------------------------- */
function initBudgetSimulator() {
  const typeSelect = document.getElementById("simProjectType");
  const urgencySelect = document.getElementById("simUrgency");
  const featureCheckboxes = document.querySelectorAll(".sim-feature-check");
  const priceDisplay = document.getElementById("simPriceDisplay");
  const timeDisplay = document.getElementById("simTimeDisplay");
  const submitBtn = document.getElementById("simSubmitBtn");

  if (!typeSelect || !priceDisplay) return;

  function calculateEstimate() {
    let baseMin = 1200;
    let baseMax = 2200;
    let baseDays = 12;

    const projectType = typeSelect.value;
    switch (projectType) {
      case "dashboard":
        baseMin = 1400;
        baseMax = 2600;
        baseDays = 10;
        break;
      case "app":
        baseMin = 1800;
        baseMax = 3600;
        baseDays = 15;
        break;
      case "ecommerce":
        baseMin = 1600;
        baseMax = 3200;
        baseDays = 12;
        break;
      case "landing":
        baseMin = 790;
        baseMax = 1500;
        baseDays = 6;
        break;
      case "completo":
        baseMin = 3200;
        baseMax = 6200;
        baseDays = 22;
        break;
    }

    // Add features cost
    let selectedFeatures = [];
    featureCheckboxes.forEach(cb => {
      if (cb.checked) {
        baseMin += parseInt(cb.getAttribute("data-cost-min") || "250");
        baseMax += parseInt(cb.getAttribute("data-cost-max") || "450");
        baseDays += 2;
        selectedFeatures.push(cb.getAttribute("data-label"));
      }
    });

    // Urgency modifier
    const urgency = urgencySelect.value;
    if (urgency === "express") {
      baseMin = Math.round(baseMin * 1.25);
      baseMax = Math.round(baseMax * 1.25);
      baseDays = Math.max(4, Math.round(baseDays * 0.6));
    }

    // Render numbers
    priceDisplay.textContent = `R$ ${baseMin.toLocaleString('pt-BR')} a R$ ${baseMax.toLocaleString('pt-BR')}`;
    timeDisplay.textContent = urgency === "express" ? `${baseDays} dias (Entrega Expressa)` : `${baseDays} a ${baseDays + 5} dias úteis`;

    return {
      typeText: typeSelect.options[typeSelect.selectedIndex].text,
      priceRange: `R$ ${baseMin.toLocaleString('pt-BR')} a R$ ${baseMax.toLocaleString('pt-BR')}`,
      timeText: timeDisplay.textContent,
      features: selectedFeatures
    };
  }

  // Bind change events
  typeSelect.addEventListener("change", calculateEstimate);
  urgencySelect.addEventListener("change", calculateEstimate);
  featureCheckboxes.forEach(cb => cb.addEventListener("change", calculateEstimate));

  // Initial calculation
  calculateEstimate();

  // WhatsApp Action on Simulator
  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const est = calculateEstimate();
      const featuresFormatted = est.features.length > 0 ? `\n• Recursos extras: ${est.features.join(", ")}` : "";
      
      const msg = `Olá TARGFI! Fiz uma simulação de projeto no site oficial:\n` +
                  `• Tipo de Projeto: ${est.typeText}\n` +
                  `• Estimativa calculada: ${est.priceRange}\n` +
                  `• Prazo estimado: ${est.timeText}${featuresFormatted}\n\n` +
                  `Gostaria de agendar uma conversa para detalharmos o escopo e darmos início!`;
      
      openWhatsApp(msg);
    });
  }
}

/* -------------------------------------------------------------
   5. FAQ Accordion
------------------------------------------------------------- */
function initFAQ() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (questionBtn && answer) {
      questionBtn.addEventListener("click", () => {
        const isOpen = !answer.classList.contains("hidden");

        // Close all others
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector(".faq-answer");
          const otherIcon = otherItem.querySelector(".faq-icon");
          if (otherAnswer) otherAnswer.classList.add("hidden");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });

        if (!isOpen) {
          answer.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
}

/* -------------------------------------------------------------
   6. Mobile Menu & Scroll Effects
------------------------------------------------------------- */
function initMobileMenu() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

function initScrollEffects() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("bg-slate-950/85", "backdrop-blur-md", "border-b", "border-slate-800");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove("bg-slate-950/85", "border-slate-800");
      navbar.classList.add("bg-transparent");
    }
  });
}

/* -------------------------------------------------------------
   7. Contact Form Handler
------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const company = document.getElementById("contactCompany").value.trim() || "Não informada";
    const service = document.getElementById("contactService").value;
    const notes = document.getElementById("contactNotes").value.trim();

    if (!name) {
      alert("Por favor, informe seu nome.");
      return;
    }

    const msg = `Olá TARGFI! Enviei uma mensagem através do site:\n` +
                `• Nome: ${name}\n` +
                `• Empresa: ${company}\n` +
                `• Interesse: ${service}\n` +
                `• Mensagem/Desafio: ${notes || "Gostaria de um diagnóstico gratuito"}\n\n` +
                `Podemos conversar sobre as soluções da TARGFI?`;

    openWhatsApp(msg);
  });
}
