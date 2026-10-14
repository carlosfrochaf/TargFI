// TARGFI — Interactive Web Experience

// Project Data Store for Modals
const projectsData = {
  fichaadv: {
    title: "FichaAdv — Sistema de Gestão Jurídica & Fichas de Atendimento",
    category: "Aplicação Web & Gestão Sob Medida",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    image: "assets/project-fichaadv.svg",
    badge: "Case de Sucesso Real",
    headline: "Transformando o atendimento de escritórios jurídicos em uma operação ágil e padronizada.",
    problem: "Escritórios de advocacia perdiam horas valiosas colhendo dados em papéis, fichas manuais ou documentos Word espalhados, resultando em retrabalho, perda de dados e dificuldade na elaboração de petições iniciais e procurações.",
    solution: "Desenvolvemos o FichaAdv: uma aplicação web moderna, responsiva e intuitiva onde advogados e atendentes cadastram rapidamente clientes, qualificações, detalhes processuais, documentos e relatórios padronizados com 1 clique.",
    results: [
      "Redução de 60% no tempo de preenchimento e triagem de clientes",
      "Geração instantânea de minutas e documentos anexos",
      "Banco de dados seguro e centralizado com busca instantânea por CPF ou nome",
      "Interface fluida acessível pelo computador ou tablet"
    ],
    techStack: ["HTML5 / Tailwind CSS", "JavaScript ES6+", "Local/Cloud Database", "Geração de Documentos", "Design System Adaptativo"],
    whatsappMessage: "Olá TARGFI! Vi o projeto FichaAdv no site e gostaria de saber mais sobre como criar um sistema similar de fichas e gestão para o meu negócio."
  },

  botdje: {
    title: "Robô Monitor DJE / DEJT & TRT-3 com Alertas em Tempo Real",
    category: "Automação & Robôs Inteligentes (RPA)",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    image: "assets/project-botdje.svg",
    badge: "Automação de Alto Impacto",
    headline: "Monitoramento 24/7 de publicações em diários da justiça com envio automático de avisos no Telegram.",
    problem: "Advogados e equipes precisavam baixar manualmente cadernos de diários oficiais com milhares de páginas todos os dias pela manhã, arriscando perder prazos judiciais fatais ou gastando mais de uma hora diária em conferências manuais.",
    solution: "Criamos um robô inteligente em Python que roda de forma programada e silenciosa: faz o download automático dos cadernos judiciais (DJE / DEJT / TRT-3), lê o conteúdo via OCR/parsing de texto, cruza com a lista de clientes e processos e dispara alertas formatados instantaneamente no Telegram com o link direto e extrato do andamento.",
    results: [
      "Economia comprovada de mais de 1h30 diária por profissional",
      "Zero risco de perda de prazo processual com varreduras matinais automáticas",
      "Notificações ricas no Telegram com informações essenciais do processo",
      "Execução em nuvem sem necessidade de manter computador ligado"
    ],
    techStack: ["Python", "Web Scraping & Automação", "Telegram Bot API", "Processamento de PDFs", "Agendamento Automatizado (Cron)"],
    whatsappMessage: "Olá TARGFI! Fiquei impressionado com o Robô do DJE/TRT-3. Gostaria de entender como vocês podem automatizar o monitoramento de dados ou rotinas para minha empresa."
  },

  agendai: {
    title: "Agenda Aí — Plataforma Inteligente de Agendamento Online",
    category: "Aplicações Web & Produtividade",
    tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    image: "assets/project-agendai.svg",
    badge: "Produtividade Comercial",
    headline: "Organização de agendas, confirmação de horários e redução radical de faltas de clientes.",
    problem: "Profissionais liberais e empresas sofriam com conflitos de horários em agendas manuais, mensagens demoradas para confirmar horários no WhatsApp e alta taxa de clientes que esqueciam de comparecer às reuniões ou atendimentos.",
    solution: "Criamos o 'Agenda Aí', uma solução limpa e direta onde o cliente final escolhe o melhor dia e horário disponível e recebe confirmação imediata. O profissional tem um painel intuitivo para acompanhar sua grade do dia, semana e mês com relatórios de presença.",
    results: [
      "Aumento de 35% na pontualidade e presença de clientes",
      "Eliminação de 100% dos conflitos de duplo agendamento",
      "Visualização clara em grade de horários com filtros rápidos",
      "Integração com alertas e lembretes automáticos"
    ],
    techStack: ["Modern Frontend", "Gestão de Estados", "Calendário Interativo", "Automação de Lembretes", "UX Mobile-First"],
    whatsappMessage: "Olá TARGFI! Gostei muito do projeto Agenda Aí e quero um sistema de agendamento personalizado para meus serviços."
  },

  fenix: {
    title: "Landing Page Fênix Contábil & Sites Institucionais de Alta Conversão",
    category: "Sites & Landing Pages",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    image: "assets/project-fenix.svg",
    badge: "Foco em Conversão",
    headline: "Posicionamento digital de autoridade com design premium e geração contínua de novos leads.",
    problem: "Empresas com serviços excelentes, mas com sites ultrapassados, lentos no celular e sem estratégia de conversão, deixando de fechar novos contratos porque os visitantes não encontravam um caminho claro para solicitar orçamento.",
    solution: "Desenvolvemos websites e landing pages ultrarrápidas, com visual moderno estilo dark/glassmorphism ou clean corporativo, carregamento instantâneo no celular, copywriting persuasivo e botões estratégicos que direcionam os visitantes qualificados direto para o WhatsApp comercial.",
    results: [
      "Velocidade de carregamento superior a 95/100 no Google PageSpeed",
      "Aumento direto na taxa de cliques para abertura de conversas no WhatsApp",
      "Design 100% responsivo adaptado para celulares, notebooks e telas grandes",
      "Otimização inicial para mecanismos de busca (SEO Local)"
    ],
    techStack: ["HTML5 Semântico", "Tailwind CSS", "Copywriting Comercial", "SEO & Performance", "Integração WhatsApp Direct"],
    whatsappMessage: "Olá TARGFI! Quero renovar o site da minha empresa / criar uma landing page de alta conversão. Gostaria de um orçamento."
  },

  dashboard: {
    title: "TARGFI Analytics — Dashboards Executivos & Painéis de Controle",
    category: "Dashboards & Business Intelligence",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    image: "assets/project-dashboard.svg",
    badge: "Tomada de Decisão com Dados",
    headline: "Substitua planilhas cheias de abas por painéis interativos claros em tempo real.",
    problem: "Empresários e gestores gastavam dias montando relatórios em Excel, perdidos em dezenas de tabelas confusas e sem saber em tempo real como estava o faturamento, metas, status de atendimentos ou gargalos operacionais.",
    solution: "Desenvolvemos dashboards web interativos sob medida, conectados com planilhas Google, bancos de dados ou APIs, exibindo gráficos claros, filtros por data e alertas visuais que qualquer membro da equipe consegue entender e usar.",
    results: [
      "Visão 360° dos principais indicadores da empresa em uma única tela",
      "Economia de até 8 horas semanais antes gastas gerando relatórios manuais",
      "Filtros dinâmicos por período, filial, vendedor ou status",
      "Acesso seguro de qualquer computador ou celular"
    ],
    techStack: ["Chart.js / DataViz", "Tailwind CSS", "Conexão com Sheets / APIs", "Filtros em Tempo Real", "Exportação Excel/PDF"],
    whatsappMessage: "Olá TARGFI! Preciso de um Dashboard para acompanhar os dados da minha empresa. Como podemos montar um projeto?"
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
   1. Interactive Live Dashboard Simulation (Chart.js)
------------------------------------------------------------- */
let liveChartInstance = null;

const chartDataPresets = {
  vendas: {
    label: "Receita Operacional (R$ mil)",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [3.2, 5.8, 8.4, 11.2, 14.5, 18.2, 21.0],
      stat1: "R$ 21.000",
      stat2: "14 Novos Clientes",
      stat3: "99.4% Conversão"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [18.4, 24.2, 31.0, 29.5, 38.6, 22.1, 14.2],
      stat1: "R$ 178.000",
      stat2: "62 Contratos",
      stat3: "+28% vs sem. ant."
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [110, 145, 172, 210],
      stat1: "R$ 637.000",
      stat2: "248 Clientes",
      stat3: "+34.5% no Trimestre"
    }
  },
  operacional: {
    label: "Tarefas & Processos Automatizados",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [42, 115, 198, 280, 360, 440, 510],
      stat1: "510 Tarefas",
      stat2: "3h 40min Economizadas",
      stat3: "Zero Falhas Manuais"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [480, 520, 610, 580, 690, 310, 180],
      stat1: "3.370 Execuções",
      stat2: "24h Poupadas",
      stat3: "100% Automatizado"
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [3100, 3450, 3900, 4200],
      stat1: "14.650 Ações",
      stat2: "98h Economizadas",
      stat3: "R$ 18k Poupados"
    }
  },
  juridico: {
    label: "Andamentos & Fichas Capturadas",
    hoje: {
      labels: ["08h", "10h", "12h", "14h", "16h", "18h", "20h"],
      data: [8, 19, 34, 48, 65, 82, 94],
      stat1: "94 Publicações",
      stat2: "18 Fichas Atualizadas",
      stat3: "100% Prazos Checados"
    },
    semana: {
      labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
      data: [112, 145, 168, 154, 190, 42, 15],
      stat1: "826 Movimentações",
      stat2: "142 Clientes",
      stat3: "0 Prazos Perdidos"
    },
    mes: {
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      data: [780, 890, 960, 1120],
      stat1: "3.750 Andamentos",
      stat2: "620 Fichas Cadastradas",
      stat3: "TRT3 & DJE Integrados"
    }
  }
};

let currentPreset = "vendas";
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
  if (currentPreset === "operacional") {
    liveChartInstance.data.datasets[0].borderColor = "#10B981";
    liveChartInstance.data.datasets[0].pointBorderColor = "#10B981";
  } else if (currentPreset === "juridico") {
    liveChartInstance.data.datasets[0].borderColor = "#A855F7";
    liveChartInstance.data.datasets[0].pointBorderColor = "#A855F7";
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
        baseMin = 1500;
        baseMax = 2800;
        baseDays = 10;
        break;
      case "app":
        baseMin = 2200;
        baseMax = 4200;
        baseDays = 18;
        break;
      case "landing":
        baseMin = 890;
        baseMax = 1600;
        baseDays = 6;
        break;
      case "bot":
        baseMin = 1400;
        baseMax = 2600;
        baseDays = 8;
        break;
      case "completo":
        baseMin = 3800;
        baseMax = 7200;
        baseDays = 25;
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
