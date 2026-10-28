# 🚀 TARGFI — Sistemas, Dashboards & Soluções Digitais

Site institucional e de conversão da **TARGFI**, desenvolvido com foco em apresentar a proposta de valor real da empresa: desenvolvimento de dashboards objetivos de gestão, aplicações simples de rotina, e-commerces completos e sites/landing pages de alta conversão.

---

## 🌟 O Que o Site Contém

1. **Identidade Visual Premium (Dark/Glassmorphism)**: Estilo moderno e futurista inspirado em gigantes da tecnologia (Vercel, Linear, Stripe), com paleta de cores tecnológica, logo e favicon vetoriais em SVG.
2. **Hero Section de Alto Impacto**: Copy persuasiva focada na dor do cliente (eliminar planilhas confusas e processos manuais), estatísticas de impacto e mockup interativo do **FerreiraDash**.
3. **Os 4 Pilares de Soluções da TARGFI**:
   - **Dashboards & Painéis de Gestão (Operacional & Financeiro)**: Datas de audiências, datas de pagamentos e acordos, fluxo financeiro (ex: *FerreiraDash*).
   - **Aplicações Simples Sob Medida**: Fichas de atendimento, cadastro de clientes, dados processuais e relatórios sem complicação (ex: *FichaAdv*).
   - **E-commerce & Lojas Virtuais**: Catálogo digital de produtos 24/7, cálculo de frete, pagamento instantâneo por PIX e pedidos via WhatsApp.
   - **Sites & Landing Pages de Alta Conversão**: Design corporativo exclusivo, carregamento em menos de 1 segundo e captação de clientes.
4. **Live Demo Interativa de Dashboard (FerreiraDash com Chart.js)**: Demonstração funcional onde o visitante pode alternar entre visões (*Gestão Financeira & Honorários*, *Audiências & Prazos*, *Fichas & Atendimentos*) e períodos (*Hoje*, *7 Dias*, *30 Dias*), vendo os gráficos reagirem em tempo real.
5. **Portfólio com Projetos Reais**:
   - **FerreiraDash**: Painel Financeiro, Audiências & Pagamentos
   - **FichaAdv**: Sistema de Gestão Jurídica & Fichas de Atendimento
   - **E-commerce & Lojas Virtuais**: Vitrine moderna com checkout PIX e pedidos no WhatsApp
   - **Landing Page Fênix Contábil**: Sites institucionais de alta conversão
   - *Filtro dinâmico por categoria e modal detalhado com desafio, solução e resultados para cada case.*
6. **Simulador de Orçamento & Prazo (Lead Generator Turbinado)**:
   - Permite que o cliente selecione o tipo de solução, recursos adicionais e urgência.
   - Calcula a faixa de investimento e prazo estimado instantaneamente.
   - Botão que já gera a mensagem formatada para o WhatsApp da TARGFI com 1 clique.
7. **Comparativo TARGFI vs Softwares Genéricos de Mercado**: Quebra de objeções demonstrando por que contratar uma solução sob medida.
8. **Como Trabalhamos (Método em 4 Etapas)**: Diagnóstico, Proposta & Escopo, Desenvolvimento Ágil e Entrega/Suporte.
9. **FAQ (Perguntas Frequentes)**: Respostas claras sobre prazos, custos, segurança e suporte.
10. **Botão Flutuante e Formulário Direto para o WhatsApp**: Captação de leads em qualquer ponto da página.

---

## 📁 Estrutura de Arquivos

```
TARGFI/
│
├── index.html                    # Página principal estruturada e semântica
├── styles.css                    # Estilos customizados, glassmorphism e animações
├── script.js                     # Lógica do Chart.js, simulador, filtros e modals
├── README.md                     # Este guia
│
└── assets/                       # Identidade visual e ilustrações
    ├── logo.svg                  # Logo vetorial oficial TARGFI
    ├── favicon.svg               # Favicon moderno para navegadores
    ├── project-ferreiradash.svg  # Mockup do FerreiraDash (Audiências e Pagamentos)
    ├── project-fichaadv.svg      # Mockup do sistema FichaAdv
    ├── project-ecommerce.svg     # Mockup da Loja Virtual / E-commerce
    └── project-fenix.svg         # Mockup da Landing Page Fênix Contábil
```

---

## 💻 Como Visualizar Localmente

### Opção 1: Direto pelo Navegador
Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e selecione **Abrir com > Google Chrome / Microsoft Edge**.

### Opção 2: Servidor Local Rápido
Abra o terminal na pasta `TARGFI` e execute:
```bash
python -m http.server 3000
```
Depois abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Como Personalizar Seus Contatos

### 1. Número de WhatsApp Configurado
O número configurado é **(31) 93304-4757**:
```javascript
const TARGFI_PHONE = "5531933044757"; // DDI (55) + DDD (31) + Número
```

### 2. Alterar E-mail e Redes
No arquivo `index.html`, na seção do rodapé (`<footer>`), você pode alterar:
- `mailto:contato@targfi.com.br` para o seu e-mail de atendimento.
- Os links de GitHub / Instagram / LinkedIn.
