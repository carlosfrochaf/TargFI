# 🚀 TARGFI — Sistemas, Dashboards & Soluções Digitais

Site institucional e de conversão da **TARGFI**, desenvolvido com foco em apresentar a proposta de valor da empresa: desenvolvimento de sistemas sob medida (dashboards, aplicações simples e diretas, sites institucionais, landing pages e automações/robôs com IA).

---

## 🌟 O Que o Site Contém

1. **Identidade Visual Premium (Dark/Glassmorphism)**: Estilo moderno e futurista inspirado em gigantes da tecnologia (Vercel, Linear, Stripe), com paleta de cores tecnológica, logo e favicon vetoriais em SVG.
2. **Hero Section de Alto Impacto**: Copy persuasiva focada na dor do cliente (eliminar planilhas confusas e processos manuais), estatísticas de impacto e mockup flutuante interativo.
3. **Os 4 Pilares de Soluções**:
   - **Dashboards & Painéis de Gestão (BI)**
   - **Aplicações Web Sob Medida**
   - **Sites & Landing Pages de Alta Conversão**
   - **Robôs de Automação & Bots (RPA)**
4. **Live Demo Interativa de Dashboard (Chart.js)**: Demonstração funcional onde o visitante pode alternar entre visões (*Comercial*, *Operacional*, *Jurídico*) e períodos (*Hoje*, *7 Dias*, *30 Dias*), vendo os gráficos reagirem em tempo real.
5. **Portfólio com Projetos Reais Feitos Aqui**:
   - **FichaAdv**: Sistema de Gestão Jurídica & Fichas de Atendimento
   - **Robô Monitor DJE & TRT-3**: Automação 24/7 com alertas em tempo real no Telegram
   - **Agenda Aí**: Plataforma de Agendamentos e Redução de No-Shows
   - **Landing Page Fênix Contábil**: Sites institucionais de alta conversão
   - **TARGFI Analytics**: Dashboards de Tomada de Decisão
   - *Filtro dinâmico por categoria e modal detalhado com desafio, solução e resultados para cada case.*
6. **Simulador de Orçamento & Prazo (Lead Generator Turbinado)**:
   - Permite que o cliente selecione o tipo de sistema, recursos adicionais e urgência.
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
├── index.html                 # Página principal estruturada e semântica
├── styles.css                 # Estilos customizados, glassmorphism e animações
├── script.js                  # Lógica do Chart.js, simulador, filtros e modals
├── README.md                  # Este guia
│
└── assets/                    # Identidade visual e ilustrações
    ├── logo.svg               # Logo vetorial oficial TARGFI
    ├── favicon.svg            # Favicon moderno para navegadores
    ├── project-fichaadv.svg   # Mockup do sistema FichaAdv
    ├── project-botdje.svg     # Mockup do Robô DJE/TRT3 e alertas Telegram
    ├── project-agendai.svg    # Mockup da plataforma Agenda Aí
    ├── project-fenix.svg      # Mockup da Landing Page Fênix Contábil
    └── project-dashboard.svg  # Mockup do Dashboard TARGFI Analytics
```

---

## 💻 Como Visualizar Localmente

### Opção 1: Direto pelo Navegador
Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e selecione **Abrir com > Google Chrome / Microsoft Edge**.

### Opção 2: Servidor Local Rápido (Recomendado)
Abra o terminal na pasta `TARGFI` e execute:
```bash
python -m http.server 3000
```
Depois abra no navegador: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Como Personalizar Seus Contatos

### 1. Alterar o Número de WhatsApp
Abra o arquivo `script.js` e na linha 80 altere a constante:
```javascript
const TARGFI_PHONE = "5531999999999"; // Substitua pelo seu DDD e telefone real
```

### 2. Alterar E-mail e Redes
No arquivo `index.html`, na seção do rodapé (`<footer>`), você pode alterar:
- `mailto:contato@targfi.com.br` para o seu e-mail de atendimento.
- Os links de GitHub / Instagram / LinkedIn.

---

## 🚀 Como Colocar no Ar Gratuitamente

Você pode colocar o site da **TARGFI** no ar em menos de 2 minutos através de várias opções gratuitas:

1. **Vercel (Muito Recomendado)**:
   - Crie uma conta em [vercel.com](https://vercel.com).
   - Arraste a pasta `TARGFI` para dentro do dashboard da Vercel ou conecte com seu repositório no GitHub.
   - O site ganha um domínio grátis com SSL (ex: `targfi.vercel.app`) e você pode conectar seu domínio próprio (ex: `targfi.com.br`).

2. **Netlify**:
   - Acesse [netlify.com](https://netlify.com) e simplesmente arraste a pasta `TARGFI` no site. Fica online instantaneamente.

3. **GitHub Pages**:
   - Suba a pasta para um repositório no seu GitHub (`https://github.com/carlosfrochaf/targfi`).
   - Nas configurações do repositório, ative o **GitHub Pages** apontando para a branch principal.
