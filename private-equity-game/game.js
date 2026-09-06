const fmt = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });
const money = (value) => `R$ ${fmt.format(value)} mi`;
const pct = (value) => `${fmt.format(value)}%`;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const tabs = [
  ["mercado", "Mercado"],
  ["portfolio", "Portfólio"],
  ["equipe", "Equipe"],
  ["infra", "Infraestrutura"],
  ["lps", "LPs"],
  ["operacoes", "Operações"],
  ["relatorio", "Relatório"],
];

const marketSeed = [
  { id: "verdesul", name: "VerdeSul Agroinsumos", sector: "Agronegócio", profile: "Conservadora", revenue: 520, ebitdaMargin: 23.5, multiple: 7.2, growth: 10, risk: 20, quality: 82, status: "Análise" },
  { id: "bemestar", name: "BemEstar Clínicas", sector: "Saúde", profile: "Estabelecida", revenue: 360, ebitdaMargin: 19.8, multiple: 7.8, growth: 16, risk: 27, quality: 78, status: "Pré-oferta" },
  { id: "datalink", name: "DataLink SaaS B2B", sector: "Tecnologia", profile: "Scale-up", revenue: 105, ebitdaMargin: 23.2, multiple: 10.1, growth: 34, risk: 45, quality: 72, status: "Novo" },
  { id: "redecon", name: "RedeCon Materiais", sector: "Varejo", profile: "Consolidadora", revenue: 820, ebitdaMargin: 12.6, multiple: 6.6, growth: 8, risk: 32, quality: 74, status: "Competitivo" },
  { id: "friofast", name: "FrioFast Logística", sector: "Logística", profile: "Estável", revenue: 310, ebitdaMargin: 17.2, multiple: 6.9, growth: 13, risk: 29, quality: 76, status: "Leilão" },
  { id: "norteedu", name: "NorteEdu Profissional", sector: "Educação", profile: "Nicho defensivo", revenue: 210, ebitdaMargin: 22.4, multiple: 7.3, growth: 15, risk: 25, quality: 79, status: "Proprietário" },
  { id: "neuroflux", name: "NeuroFlux AI", sector: "IA aplicada", profile: "Venture growth", revenue: 42, ebitdaMargin: 8.5, multiple: 15.5, growth: 68, risk: 68, quality: 66, status: "Tese assimétrica" },
  { id: "genomika", name: "Genomika BioTech", sector: "Biotech", profile: "Alto risco", revenue: 58, ebitdaMargin: 6.2, multiple: 13.2, growth: 55, risk: 74, quality: 63, status: "Clínico regulatório" },
  { id: "quantumgrid", name: "QuantumGrid Infra", sector: "Data centers", profile: "Infra crescimento", revenue: 150, ebitdaMargin: 28.4, multiple: 11.4, growth: 28, risk: 46, quality: 75, status: "Exclusivo" },
  { id: "longevid", name: "LongeviD Saúde", sector: "Healthtech", profile: "Nicho específico", revenue: 74, ebitdaMargin: 13.8, multiple: 10.8, growth: 42, risk: 55, quality: 70, status: "Novo" },
];

const personas = [
  { id: "deal", name: "Diretora de Originação", cost: 24, salary: 3.2, sourcing: 16, ops: 0, lp: 4, risk: -1, text: "Aumenta acesso a deals proprietários e reduz competição em leilões." },
  { id: "ops", name: "Sócio Operacional", cost: 30, salary: 4.4, sourcing: 0, ops: 18, lp: 0, risk: -6, text: "Acelera melhorias de margem, crescimento e integração pós-aquisição." },
  { id: "lp", name: "Relações com LPs", cost: 20, salary: 2.8, sourcing: 0, ops: 0, lp: 20, risk: 0, text: "Melhora captação, chamadas de capital e comunicação institucional." },
  { id: "risk", name: "Controller de Risco", cost: 18, salary: 2.5, sourcing: 0, ops: 4, lp: 0, risk: -14, text: "Reduz perdas em alavancagem, compliance e variação macroeconômica." },
];

const infrastructure = [
  { id: "crm", name: "CRM de Originação", cost: 45, effect: "sourcing", value: 12, text: "Mais empresas aparecem no pipeline e com dados melhores." },
  { id: "data", name: "Data Room Digital", cost: 55, effect: "risk", value: -10, text: "Diligência mais rápida, menos surpresas e menor risco de execução." },
  { id: "opsys", name: "Sistema de Criação de Valor", cost: 70, effect: "ops", value: 14, text: "Playbooks operacionais aumentam o impacto das melhorias." },
  { id: "lpportal", name: "Portal de LPs", cost: 38, effect: "lp", value: 12, text: "Relatórios claros aumentam confiança e chance de novo capital." },
];

const debtFacilities = [
  { id: "senior", name: "Dívida sênior", amount: 120, rate: 9.2, covenant: 38 },
  { id: "unitranche", name: "Unitranche", amount: 220, rate: 12.8, covenant: 52 },
  { id: "mezz", name: "Mezanino", amount: 160, rate: 16.5, covenant: 66 },
];

const dealStructures = [
  { id: "equity", name: "Equity majoritário", debtPct: 0, stake: 72, rate: 0, risk: -4, text: "Mais caro em caixa, porém com baixo risco e mais flexibilidade operacional." },
  { id: "balanced", name: "LBO balanceado", debtPct: 45, stake: 72, rate: 10.8, risk: 7, text: "Financia parte do preço com dívida da empresa adquirida. Bom equilíbrio entre retorno e risco." },
  { id: "aggressive", name: "LBO agressivo", debtPct: 62, stake: 78, rate: 13.6, risk: 18, text: "Menor cheque de equity e maior participação, mas covenants e risco operacional sobem rápido." },
];

const improvements = [
  { id: "pricing", name: "Reprecificação comercial", cost: 26, margin: 1.4, growth: 1.5, risk: 2 },
  { id: "procurement", name: "Compras e suprimentos", cost: 22, margin: 1.8, growth: 0.2, risk: 1 },
  { id: "digital", name: "Transformação digital", cost: 40, margin: 1.0, growth: 3.8, risk: 4 },
  { id: "governance", name: "Governança e compliance", cost: 18, margin: 0.4, growth: 0.3, risk: -8 },
];

const lpPrograms = [
  { id: "pension", name: "Fundos de pensão", target: 380, difficulty: 60, reputation: 3.5 },
  { id: "family", name: "Family offices", target: 180, difficulty: 38, reputation: 2.4 },
  { id: "sovereign", name: "Soberanos e endowments", target: 520, difficulty: 76, reputation: 4.2 },
];

const fundTheses = [
  { id: "buyout", name: "Buyout defensivo", sectors: ["Agronegócio", "Saúde", "Logística", "Educação"], risk: -5, growth: -2, lp: 8, bank: 8, text: "Ativos rentáveis e menor volatilidade." },
  { id: "growth", name: "Growth equity", sectors: ["Tecnologia", "IA aplicada", "Healthtech", "Data centers"], risk: 3, growth: 7, lp: 4, bank: -2, text: "Crescimento com uso moderado de dívida." },
  { id: "frontier", name: "Fronteira tecnológica", sectors: ["IA aplicada", "Biotech", "Healthtech"], risk: 10, growth: 16, lp: -2, bank: -8, text: "Alto risco e grande potencial de valorização." },
  { id: "infra", name: "Infraestrutura digital", sectors: ["Data centers", "Logística", "Tecnologia"], risk: -1, growth: 5, lp: 6, bank: 5, text: "Contratos longos e expansão de capacidade." },
];

const events = [
  { title: "Selic caiu 0,75 p.p.", text: "Mercado de dívida ficou mais receptivo. Custo financeiro recua neste trimestre.", cash: 0, risk: -4, debtRate: -0.5 },
  { title: "Concorrência em leilões aumentou", text: "Múltiplos de entrada subiram e deals competitivos ficaram mais caros.", multiple: 0.35, risk: 3 },
  { title: "LP âncora pediu mais transparência", text: "Fundos com portal e boa reputação captam melhor. Sem isso, a régua sobe.", lp: -6, risk: 2 },
  { title: "Choque de demanda setorial", text: "Empresas com risco alto sofrem queda de receita. Operação forte limita o dano.", growth: -2.2, risk: 7 },
  { title: "Janela de IPO abriu", text: "Companhias maduras e com bom crescimento recebem prêmio de saída.", exitBonus: 0.45, risk: -2 },
];

const sectorEvents = [
  { sector: "IA aplicada", title: "Demanda por IA acelerou", growth: 9, multiple: 0.55, risk: 3 },
  { sector: "Biotech", title: "Regulador exigiu novos estudos", growth: -8, multiple: -0.7, risk: 9 },
  { sector: "Data centers", title: "Contratos de capacidade fecharam", growth: 6, multiple: 0.35, risk: -2 },
  { sector: "Varejo", title: "Consumo desacelerou", growth: -4, multiple: -0.25, risk: 4 },
  { sector: "Saúde", title: "M&A em saúde aqueceu", growth: 3, multiple: 0.28, risk: -1 },
  { sector: "Agronegócio", title: "Safra forte elevou demanda", growth: 4, multiple: 0.18, risk: -2 },
];

const boardDecisions = [
  { id: "cash", name: "Preservar caixa", cash: 42, growth: -1, margin: 0, risk: -2, reputation: 0 },
  { id: "growth", name: "Acelerar crescimento", cash: -36, growth: 5, margin: -0.2, risk: 4, reputation: 0.04 },
  { id: "delever", name: "Reduzir alavancagem", cash: -20, growth: -1, margin: 0.4, risk: -6, reputation: 0.03 },
  { id: "talent", name: "Trocar executivos", cash: -28, growth: 2, margin: 0.9, risk: -3, reputation: 0.05 },
  { id: "rnd", name: "Investir em P&D", cash: -44, growth: 7, margin: -0.5, risk: 6, reputation: 0.02 },
];

const expansionIdeas = [
  "Comitê de investimento com votação e condições precedentes antes de assinar o SPA.",
  "Due diligence por área: financeira, fiscal, trabalhista, tecnológica e ambiental.",
  "Negociação de preço com earn-out, vendor loan e rollover do fundador.",
  "Fundos por safra, com vintages diferentes, hurdle rate, carry e DPI/TVPI.",
  "Gestão de executivos nas investidas: trocar CEO, CFO ou Head Comercial.",
  "Cenários macro com ciclos de crédito, câmbio e abertura/fechamento de IPO.",
  "Concorrentes em leilões, reputação com bancos e exclusividade em deals proprietários.",
  "Rodadas pré-IPO, follow-on e lock-up para empresas listadas.",
  "Board seats com decisões trimestrais: cortar custos, acelerar M&A ou investir em P&D.",
  "Teses setoriais com fundos especializados: IA, biotech, infraestrutura digital e saúde.",
];

const initialState = {
  version: 4,
  started: false,
  fundraising: null,
  tab: "mercado",
  quarter: 1,
  year: 2027,
  cash: 650,
  committed: 1500,
  called: 650,
  debt: 0,
  debtRate: 11.2,
  reputation: 3.1,
  fundName: "Brasil Capital IV FIP",
  distributions: 0,
  covenantWarnings: 0,
  lpMomentum: 0,
  thesis: "buyout",
  reputations: { lps: 3.1, banks: 3.1, founders: 3.1, public: 3.1 },
  dealDrafts: {},
  diligence: {},
  pendingDecision: null,
  exits: [],
  navHistory: [{ label: "2027 T1", value: 650 }],
  team: [],
  infra: [],
  market: marketSeed,
  portfolio: [],
  log: ["Fundo iniciado com R$ 650 mi em caixa, R$ 1,5 bi comprometidos e mandato de 10 anos. Estruture cada aquisição com equity e dívida de LBO."],
  event: null,
  gameOver: null,
};

let state = loadState();
let screen = "home";
let rulesReturn = "home";
let setupDraft = { name: "", thesis: "buyout" };

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function showScreen(next) {
  screen = next === "game" && state.fundraising && !state.fundraising.closed ? "fundraising" : next;
  render();
  document.querySelector("main h1, main h2")?.focus();
  window.scrollTo(0, 0);
}

function showRules() {
  rulesReturn = screen;
  showScreen("rules");
}

function startFund(event) {
  event.preventDefault();
  const input = document.querySelector("#fund-name");
  const name = input.value.trim();
  input.setCustomValidity(name ? "" : "Informe o nome do fundo.");
  if (!input.reportValidity()) return;
  if (!fundTheses.some((thesis) => thesis.id === setupDraft.thesis)) return;
  state = clone(initialState);
  state.started = true;
  state.fundName = name.slice(0, 60);
  state.thesis = setupDraft.thesis;
  state.cash = 0;
  state.called = 0;
  const anchor = 300 + Math.floor(Math.random() * 201);
  const climate = ["Restritivo", "Seletivo", "Receptivo"][Math.floor(Math.random() * 3)];
  const appetite = { Restritivo: -0.12, Seletivo: 0, Receptivo: 0.1 }[climate];
  const preferences = { family: ["growth", "frontier"], pension: ["buyout", "infra"], sovereign: ["infra", "frontier"] };
  state.committed = anchor;
  state.navHistory = [];
  state.log = [`LP âncora comprometeu ${money(anchor)}. Captação inicial aberta.`];
  state.fundraising = {
    closed: false, climate, round: 0, anchor, results: [],
    rounds: Array.from({ length: 4 }, () => lpPrograms.map((lp) => {
      const fit = preferences[lp.id].includes(state.thesis);
      const chance = clamp(({ family: 0.8, pension: 0.6, sovereign: 0.4 }[lp.id]) + appetite + (fit ? 0.12 : -0.06), 0.2, 0.95);
      const amount = Math.round(lp.target * (0.65 + Math.random() * 0.65));
      return { id: lp.id, name: lp.name, fit, chance, amount, accepted: Math.random() < chance };
    })),
  };
  saveState();
  showScreen("fundraising");
}

function pitchInitialLP(round, id) {
  const campaign = state.fundraising;
  if (!campaign || campaign.closed || round !== campaign.round || round >= 4) return;
  const offer = campaign.rounds[round].find((item) => item.id === id);
  if (!offer) return;
  const amount = offer.accepted ? offer.amount : 0;
  state.committed += amount;
  campaign.results.push({ name: offer.name, amount });
  campaign.round += 1;
  log(`${offer.name}: ${amount ? `${money(amount)} comprometidos` : "proposta recusada"}.`);
  saveState();
  render();
}

function closeInitialFund() {
  const campaign = state.fundraising;
  if (!campaign || campaign.closed || campaign.round !== 4) return;
  campaign.closed = true;
  state.called = Math.round(state.committed * 0.4);
  state.cash = state.called;
  state.navHistory = [{ label: "2027 T1", value: state.cash }];
  log(`Fundo iniciado com ${money(state.cash)} em caixa e ${money(state.committed)} comprometidos. Chamada inicial de 40%.`);
  showScreen("game");
}

function renderFundraising() {
  const campaign = state.fundraising;
  const finished = campaign.round === 4;
  return `<main class="entry-page">
    <button class="entry-back" onclick="showScreen('home')">Voltar ao início</button>
    <h1 tabindex="-1">${finished ? "Fechamento do fundo" : "Captação inicial"}</h1>
    <p>${escapeHtml(state.fundName)} · ${currentThesis().name}</p>
    <div class="stats campaign-stats">
      <div><span>Mercado</span><strong>${campaign.climate}</strong></div>
      <div><span>Rodadas concluídas</span><strong>${campaign.round} / 4</strong></div>
      <div><span>Capital comprometido</span><strong>${money(state.committed)}</strong></div>
      <div><span>Caixa no fechamento (40%)</span><strong>${money(Math.round(state.committed * 0.4))}</strong></div>
    </div>
    ${finished ? `<p>O restante do capital poderá ser chamado na área de LPs.</p><button class="primary" onclick="closeInitialFund()">Fechar fundo e iniciar gestão</button>` : `
      <h2>Rodada ${campaign.round + 1}: escolha um LP</h2>
      <p>Cada rodada permite uma abordagem. A proposta pode ser recusada; compromissos só viram caixa na chamada de capital.</p>
      <div class="campaign-offers">${campaign.rounds[campaign.round].map((offer) => `<article class="action-card">
        <h3>${offer.name}</h3>
        <div class="metric-line"><span>Compromisso proposto</span><strong>${money(offer.amount)}</strong></div>
        <div class="metric-line"><span>Chance de aceite</span><strong>${pct(offer.chance * 100)}</strong></div>
        <div class="metric-line"><span>Aderência à tese</span><strong>${offer.fit ? "Alta" : "Moderada"}</strong></div>
        <button onclick="pitchInitialLP(${campaign.round}, '${offer.id}')">Apresentar proposta</button>
      </article>`).join("")}</div>`}
    <h2>Compromissos e respostas</h2>
    <ul class="campaign-results" aria-live="polite"><li>LP âncora: ${money(campaign.anchor)}</li>${campaign.results.map((result, i) => `<li>Rodada ${i + 1} · ${result.name}: <strong>${result.amount ? money(result.amount) : "Proposta recusada"}</strong></li>`).join("")}</ul>
  </main>`;
}

function renderWelcome() {
  if (screen === "fundraising") return renderFundraising();
  if (screen === "setup") return `
    <main class="entry-page entry-form">
      <button class="entry-back" onclick="showScreen('home')">Voltar ao início</button>
      <h1 tabindex="-1">Crie seu fundo</h1>
      <form onsubmit="startFund(event)">
        <label for="fund-name">Nome do fundo</label>
        <input id="fund-name" name="fundName" required maxlength="60" autocomplete="off" value="${escapeHtml(setupDraft.name)}" oninput="setupDraft.name = this.value; this.setCustomValidity('')">
        <fieldset><legend>Tese principal</legend>
          <div class="thesis-options">${fundTheses.map((thesis) => `
            <label class="thesis-option"><input type="radio" name="thesis" value="${thesis.id}" ${setupDraft.thesis === thesis.id ? "checked" : ""} onchange="setupDraft.thesis = this.value">
              <span><strong>${thesis.name}</strong><span>${thesis.text}</span><small>${thesis.sectors.join(" · ")}</small></span>
            </label>`).join("")}</div>
        </fieldset>
        ${state.started ? '<p class="warn">Ao iniciar, a partida salva será substituída.</p>' : ""}
        <div class="entry-actions"><button class="primary" type="submit">Iniciar captação</button><button type="button" onclick="showRules()">Ler regras</button></div>
      </form>
    </main>`;
  if (screen === "rules") return `
    <main class="entry-page entry-rules">
      <button class="entry-back" onclick="showScreen(rulesReturn)">Voltar</button>
      <h1 tabindex="-1">Como jogar</h1>
      <ol class="rules-list">
        <li><h2>Monte o fundo</h2><p>Escolha um nome e uma tese. Um LP âncora compromete entre R$ 300 e R$ 500 milhões. Em quatro rodadas, escolha investidores para abordar: tese e mercado afetam as chances de aceite. No fechamento, 40% do capital captado entra no caixa; o restante pode ser chamado na área de LPs. Atualizar a página mantém as propostas e os resultados da captação.</p></li>
        <li><h2>Compre empresas</h2><p>No Mercado, compare preço, crescimento e risco. Faça due diligence para investigar o negócio e escolha quanto financiar com capital próprio ou dívida de aquisição (LBO). Empresas aderentes à tese recebem seus efeitos.</p></li>
        <li><h2>Crie valor</h2><p>Contrate especialistas em Equipe, invista em Infraestrutura e aplique melhorias nas investidas. Em Operações, combine empresas por M&A e administre o capital.</p></li>
        <li><h2>Cuide da liquidez</h2><p>Capte com LPs, chame capital comprometido ou contrate empréstimos. Salários, investimentos e juros consomem caixa. A dívida do fundo e a dívida das aquisições entram no risco total.</p></li>
        <li><h2>Avance os trimestres</h2><p>Cada avanço aplica resultados operacionais e eventos de mercado. Resolva a decisão pendente do conselho antes de avançar novamente. Três alertas de covenants por alavancagem ou liquidez crítica encerram a partida.</p></li>
        <li><h2>Realize os retornos</h2><p>Venda participações, prepare empresas para IPO ou faça vendas posteriores após o lock-up. Os botões são liberados conforme os requisitos de cada operação. Acompanhe NAV, retornos e distribuições no Relatório.</p></li>
      </ol>
      <p class="rules-goal">A partir de 2036, alcance IRR bruto de pelo menos 18% e reputação de pelo menos 4 para concluir o mandato com sucesso.</p>
      <button class="primary" onclick="showScreen(rulesReturn === 'home' ? 'setup' : rulesReturn)">${rulesReturn === "home" ? "Criar meu fundo" : "Voltar"}</button>
    </main>`;
  return `<main class="entry-page entry-home">
    <div class="entry-brand" aria-hidden="true">PE</div>
    <h1 tabindex="-1">PE Strategy</h1>
    <p class="entry-intro">Construa seu fundo. Transforme empresas. Gere retornos.</p>
    <div class="entry-actions">
      ${state.started ? '<button class="primary" onclick="showScreen(\'game\')">Continuar partida</button>' : ""}
      <button ${state.started ? "" : 'class="primary"'} onclick="showScreen('setup')">${state.started ? "Nova partida" : "Iniciar jogo"}</button>
      <button onclick="showRules()">Ler regras</button>
    </div>
    ${state.started ? `<p class="saved-fund">${escapeHtml(state.fundName)} · ${state.year} · ${state.quarter}º trimestre</p>` : ""}
  </main>`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  try {
    const saved = localStorage.getItem("pe-strategy-state");
    return saved ? normalizeState(JSON.parse(saved)) : clone(initialState);
  } catch (error) {
    return clone(initialState);
  }
}

function normalizeState(saved) {
  if (!saved || typeof saved !== "object") {
    return clone(initialState);
  }
  if (saved.version < 3 && (!Array.isArray(saved.portfolio) || saved.portfolio.length === 0)) {
    return clone(initialState);
  }
  const next = { ...clone(initialState), ...saved };
  next.started = typeof saved.started === "boolean" ? saved.started : true;
  next.version = 4;
  next.team = Array.isArray(saved.team) ? saved.team : [];
  next.infra = Array.isArray(saved.infra) ? saved.infra : [];
  next.market = Array.isArray(saved.market) ? saved.market : clone(marketSeed);
  next.portfolio = Array.isArray(saved.portfolio) ? saved.portfolio : [];
  next.log = Array.isArray(saved.log) ? saved.log : clone(initialState.log);
  next.cash = Number.isFinite(saved.cash) ? saved.cash : initialState.cash;
  next.committed = Number.isFinite(saved.committed) ? saved.committed : initialState.committed;
  next.called = Number.isFinite(saved.called) ? saved.called : initialState.called;
  next.debt = Number.isFinite(saved.debt) ? saved.debt : initialState.debt;
  next.reputation = Number.isFinite(saved.reputation) ? saved.reputation : initialState.reputation;
  next.covenantWarnings = Number.isFinite(saved.covenantWarnings) ? saved.covenantWarnings : 0;
  next.lpMomentum = Number.isFinite(saved.lpMomentum) ? saved.lpMomentum : 0;
  next.thesis = fundTheses.some((item) => item.id === saved.thesis) ? saved.thesis : initialState.thesis;
  next.reputations = {
    ...clone(initialState.reputations),
    ...(saved.reputations && typeof saved.reputations === "object" ? saved.reputations : {}),
  };
  next.dealDrafts = saved.dealDrafts && typeof saved.dealDrafts === "object" ? saved.dealDrafts : {};
  next.diligence = saved.diligence && typeof saved.diligence === "object" ? saved.diligence : {};
  next.pendingDecision = saved.pendingDecision || null;
  next.exits = Array.isArray(saved.exits) ? saved.exits : [];
  next.navHistory = Array.isArray(saved.navHistory) && saved.navHistory.length
    ? saved.navHistory
    : [{ label: `${next.year || initialState.year} T${next.quarter || initialState.quarter}`, value: Math.max(0, (next.cash || 0) + portfolioValueFrom(next.portfolio || []) - (next.debt || 0)) }];
  next.portfolio = next.portfolio.map((company) => ({
    dealDebt: 0,
    debtRate: 0,
    equityInvested: Number.isFinite(company.invested) ? company.invested : 0,
    purchasePrice: Number.isFinite(company.invested) ? company.invested : 0,
    structure: "Equity majoritário",
    public: false,
    publicFloat: 0,
    ipoPrice: 0,
    ipoPrepared: false,
    lockup: 0,
    executives: [],
    ...company,
  }));
  return next;
}

function saveState() {
  try {
    localStorage.setItem("pe-strategy-state", JSON.stringify(state));
  } catch (error) {
    // O navegador pode bloquear localStorage em arquivos abertos por file://.
  }
}

function ebitda(company) {
  return company.revenue * company.ebitdaMargin / 100;
}

function enterpriseValue(company) {
  return ebitda(company) * company.multiple;
}

function fundEffects() {
  const effect = { sourcing: 0, ops: 0, lp: 0, risk: 0 };
  state.team.forEach((id) => {
    const p = personas.find((item) => item.id === id);
    effect.sourcing += p.sourcing;
    effect.ops += p.ops;
    effect.lp += p.lp;
    effect.risk += p.risk;
  });
  state.infra.forEach((id) => {
    const item = infrastructure.find((entry) => entry.id === id);
    effect[item.effect] += item.value;
  });
  return effect;
}

function portfolioValue() {
  return state.portfolio.reduce((sum, company) => sum + equityValue(company), 0);
}

function portfolioValueFrom(portfolio) {
  return portfolio.reduce((sum, company) => {
    const dealDebt = company.dealDebt || 0;
    const stake = company.stake || 72;
    return sum + Math.max(0, enterpriseValue(company) - dealDebt) * stake / 100;
  }, 0);
}

function totalDealDebt() {
  return state.portfolio.reduce((sum, company) => sum + (company.dealDebt || 0), 0);
}

function totalDebt() {
  return state.debt + totalDealDebt();
}

function equityValue(company) {
  return Math.max(0, enterpriseValue(company) - (company.dealDebt || 0)) * company.stake / 100;
}

function availableCommitment() {
  return Math.max(0, state.committed - state.called);
}

function currentThesis() {
  return fundTheses.find((item) => item.id === state.thesis) || fundTheses[0];
}

function thesisFit(company) {
  return currentThesis().sectors.includes(company.sector);
}

function reputation(key = "lps") {
  return state.reputations?.[key] ?? state.reputation;
}

function adjustReputation(key, delta) {
  state.reputations = { ...clone(initialState.reputations), ...(state.reputations || {}) };
  state.reputations[key] = clamp(state.reputations[key] + delta, 1, 5);
  state.reputation = Object.values(state.reputations).reduce((sum, value) => sum + value, 0) / 4;
}

function dpi() {
  return state.distributions / Math.max(1, state.called);
}

function tvpi() {
  return (nav() + state.distributions) / Math.max(1, state.called);
}

function carryAccrued() {
  const profit = nav() + state.distributions - state.called * 1.08;
  return Math.max(0, profit * 0.2);
}

function diligenceStatus(companyId) {
  return state.diligence?.[companyId] || { level: 0, hiddenRisk: null, priceInsight: 0 };
}

function nav() {
  return Math.max(0, state.cash + portfolioValue() - state.debt);
}

function grossIrr() {
  const invested = Math.max(1, state.called);
  const years = Math.max(0.25, ((state.year - 2027) * 4 + state.quarter) / 4);
  const value = nav() + state.distributions;
  return (Math.pow(value / invested, 1 / years) - 1) * 100;
}

function log(message) {
  state.log.unshift(message);
  state.log = state.log.slice(0, 18);
}

function canAfford(amount) {
  return state.cash >= amount;
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function setThesis(id) {
  if (!fundTheses.some((item) => item.id === id)) return;
  state.thesis = id;
  log(`Tese do fundo ajustada para ${currentThesis().name}.`);
  render();
}

function runDiligence(companyId) {
  const company = state.market.find((item) => item.id === companyId);
  if (!company) return;
  const current = diligenceStatus(companyId);
  const cost = 10 + current.level * 7;
  if (!canAfford(cost)) {
    log(`Caixa insuficiente para diligência em ${company.name}.`);
    render();
    return;
  }
  state.cash -= cost;
  const hiddenRisk = current.hiddenRisk ?? Math.round((Math.random() - 0.35) * company.risk / 4);
  const priceInsight = clamp((company.quality - 68) / 18 - hiddenRisk / 20, -0.08, 0.08);
  state.diligence = {
    ...state.diligence,
    [companyId]: {
      level: Math.min(3, current.level + 1),
      hiddenRisk,
      priceInsight,
    },
  };
  adjustReputation("founders", company.status === "Proprietário" ? 0.03 : -0.01);
  log(`Diligência concluída em ${company.name}: risco oculto ${hiddenRisk >= 0 ? "+" : ""}${hiddenRisk} pts, ajuste de preço ${pct(priceInsight * 100)}.`);
  render();
}

function chooseBoardDecision(id) {
  const decision = boardDecisions.find((item) => item.id === id);
  if (!decision || !state.pendingDecision) return;
  const company = state.portfolio.find((item) => item.id === state.pendingDecision.companyId);
  const cashCost = Math.abs(Math.min(0, decision.cash));
  if (cashCost > 0 && !canAfford(cashCost)) {
    log(`Caixa insuficiente para ${decision.name}.`);
    render();
    return;
  }
  state.cash += decision.cash;
  if (company) {
    company.growth = Math.max(0, company.growth + decision.growth);
    company.ebitdaMargin = Math.max(4, company.ebitdaMargin + decision.margin);
    company.risk = clamp(company.risk + decision.risk, 5, 90);
    if (decision.id === "delever" && company.dealDebt > 0) {
      const amount = Math.min(company.dealDebt, 55);
      company.dealDebt -= amount;
      state.cash -= Math.min(state.cash, Math.max(0, amount * 0.18));
    }
    if (decision.id === "talent") {
      company.executives = [...(company.executives || []), "Executivo contratado"].slice(-3);
    }
  }
  adjustReputation("founders", decision.reputation);
  state.pendingDecision = null;
  log(`Board decidiu: ${decision.name}${company ? ` em ${company.name}` : ""}.`);
  render();
}

function getDealDebtPct(company) {
  const saved = Number(state.dealDrafts?.[company.id]);
  if (Number.isFinite(saved)) return clamp(saved, 0, 70);
  if (company.risk <= 25) return 45;
  if (company.risk >= 60) return 25;
  return 38;
}

function setDealDebtPct(companyId, value) {
  state.dealDrafts = { ...state.dealDrafts, [companyId]: Number(value) };
  render();
}

function dealTerms(company, debtPct = getDealDebtPct(company)) {
  const legacyStructure = dealStructures.find((item) => item.id === debtPct);
  const rawDebtPct = legacyStructure ? legacyStructure.debtPct : Number(debtPct);
  const finalDebtPct = clamp(Number.isFinite(rawDebtPct) ? rawDebtPct : getDealDebtPct(company), 0, 70);
  const stake = finalDebtPct >= 58 ? 78 : 72;
  const diligence = diligenceStatus(company.id);
  const competition = (company.competition ?? (company.status === "Competitivo" ? 0.08 : company.status === "Leilão" ? 0.05 : 0));
  const thesisDiscount = thesisFit(company) ? -0.025 : 0.035;
  const purchasePrice = enterpriseValue(company) * (1 + competition + thesisDiscount - diligence.priceInsight) * stake / 100;
  const dealDebt = purchasePrice * finalDebtPct / 100;
  const equityCheck = purchasePrice - dealDebt;
  const leverage = dealDebt / Math.max(1, ebitda(company));
  const rate = finalDebtPct === 0 ? 0 : 8.7 + finalDebtPct * 0.082 + Math.max(0, company.risk - 35) * 0.045 - (reputation("banks") - 3) * 0.55;
  const risk = finalDebtPct === 0 ? -4 : Math.round(finalDebtPct / 5 + Math.max(0, company.risk - 45) / 5);
  const name = finalDebtPct === 0 ? "Equity majoritário" : finalDebtPct >= 58 ? "LBO agressivo customizado" : "LBO customizado";
  return { structure: { id: "custom", name, debtPct: finalDebtPct, stake, rate, risk }, purchasePrice, dealDebt, equityCheck, leverage };
}

function buyCompany(id, debtPct) {
  const company = state.market.find((item) => item.id === id);
  if (!company) return;
  const terms = dealTerms(company, debtPct);
  if (!canAfford(terms.equityCheck)) {
    log(`Caixa insuficiente para estruturar ${company.name}. Chame capital com LPs ou use uma estrutura com mais dívida.`);
    render();
    return;
  }
  if (terms.leverage > 5.5 && fundEffects().risk > -10) {
    log(`Comitê recusou o LBO de ${company.name}: ${fmt.format(terms.leverage)}x EBITDA é agressivo demais sem controller de risco ou data room.`);
    render();
    return;
  }
  state.cash -= terms.equityCheck;
  state.portfolio.push({
    ...company,
    acquiredAt: `${state.year} T${state.quarter}`,
    invested: terms.equityCheck,
    equityInvested: terms.equityCheck,
    purchasePrice: terms.purchasePrice,
    dealDebt: terms.dealDebt,
    debtRate: terms.structure.rate,
    stake: terms.structure.stake,
    structure: terms.structure.name,
    quartersHeld: 0,
    improvements: [],
    risk: clamp(company.risk + terms.structure.risk + (diligenceStatus(company.id).hiddenRisk || 0) + currentThesis().risk, 5, 88),
    growth: Math.max(0, company.growth + (thesisFit(company) ? currentThesis().growth : 0)),
    status: terms.dealDebt > 0 ? "LBO em integração" : "Em crescimento",
  });
  state.market = state.market.filter((item) => item.id !== id);
  adjustReputation("banks", terms.dealDebt > 0 ? 0.05 : 0.01);
  adjustReputation("founders", company.status === "Proprietário" ? 0.09 : 0.03);
  log(`Aquisição concluída: ${company.name} via ${terms.structure.name}. Equity: ${money(terms.equityCheck)} | Loan: ${money(terms.dealDebt)} | Participação: ${pct(terms.structure.stake)}.`);
  render();
}

function takeLoan(id) {
  const facility = debtFacilities.find((item) => item.id === id);
  const leverage = state.debt / Math.max(1, nav());
  if (leverage > 0.7 && facility.covenant > 50 && reputation("banks") < 4) {
    log(`Comitê recusou ${facility.name}: alavancagem já está elevada.`);
    render();
    return;
  }
  state.cash += facility.amount;
  state.debt += facility.amount;
  state.debtRate = (state.debtRate + facility.rate - (reputation("banks") - 3) * 0.4) / 2;
  adjustReputation("banks", facility.covenant > 55 ? -0.08 : 0.02);
  log(`${facility.name} contratada: ${money(facility.amount)} a ${pct(facility.rate)} a.a.`);
  render();
}

function hirePersona(id) {
  const person = personas.find((item) => item.id === id);
  if (state.team.includes(id)) return;
  if (!canAfford(person.cost)) {
    log(`Caixa insuficiente para contratar ${person.name}.`);
    render();
    return;
  }
  state.cash -= person.cost;
  state.team.push(id);
  state.reputation = Math.min(5, state.reputation + 0.08);
  log(`Contratação concluída: ${person.name}.`);
  render();
}

function buyInfra(id) {
  const item = infrastructure.find((entry) => entry.id === id);
  if (state.infra.includes(id)) return;
  if (!canAfford(item.cost)) {
    log(`Caixa insuficiente para implantar ${item.name}.`);
    render();
    return;
  }
  state.cash -= item.cost;
  state.infra.push(id);
  log(`Infraestrutura implantada: ${item.name}.`);
  render();
}

function improveCompany(companyId, improvementId) {
  const company = state.portfolio.find((item) => item.id === companyId);
  const improvement = improvements.find((item) => item.id === improvementId);
  if (!company || company.improvements.includes(improvementId)) return;
  const opsDiscount = Math.min(0.25, fundEffects().ops / 200);
  const cost = improvement.cost * (1 - opsDiscount);
  if (!canAfford(cost)) {
    log(`Caixa insuficiente para executar ${improvement.name} em ${company.name}.`);
    render();
    return;
  }
  state.cash -= cost;
  company.ebitdaMargin += improvement.margin * (1 + fundEffects().ops / 120);
  company.growth += improvement.growth * (1 + fundEffects().ops / 160);
  company.risk = Math.max(5, company.risk + improvement.risk + fundEffects().risk / 20);
  company.improvements.push(improvementId);
  log(`${improvement.name} concluída em ${company.name}.`);
  render();
}

function raiseCapital(id) {
  const program = lpPrograms.find((item) => item.id === id);
  const effects = fundEffects();
  const thesisBonus = currentThesis().lp;
  const score = reputation("lps") * 18 + effects.lp + state.lpMomentum + thesisBonus + Math.max(0, grossIrr()) * 0.7;
  if (reputation("lps") < program.reputation || score < program.difficulty) {
    adjustReputation("lps", -0.08);
    log(`${program.name} não aprovaram o compromisso. Reputação, IRR ou cobertura de LPs ainda estão baixos.`);
    render();
    return;
  }
  const amount = Math.round(program.target * (0.72 + Math.min(0.22, effects.lp / 140)));
  state.committed += amount;
  const called = Math.round(amount * 0.35);
  state.called += called;
  state.cash += called;
  adjustReputation("lps", 0.18);
  state.lpMomentum = Math.max(0, state.lpMomentum - 10);
  log(`Captação fechada com ${program.name}: ${money(amount)} comprometidos e ${money(called)} integralizados.`);
  render();
}

function runRoadshow() {
  const cost = 14;
  if (!canAfford(cost)) {
    log("Caixa insuficiente para organizar roadshow com LPs.");
    render();
    return;
  }
  state.cash -= cost;
  state.lpMomentum = Math.min(34, state.lpMomentum + 12 + fundEffects().lp / 8);
  adjustReputation("lps", 0.05);
  log(`Roadshow concluído: tese de investimento ganhou tração com LPs. Momentum atual: ${fmt.format(state.lpMomentum)} pontos.`);
  render();
}

function callCapital() {
  const available = state.committed - state.called;
  if (available <= 0) {
    log("Não há capital comprometido disponível para chamada.");
    render();
    return;
  }
  const amount = Math.min(160, available);
  state.called += amount;
  state.cash += amount;
  adjustReputation("lps", -0.03);
  log(`Chamada de capital realizada: ${money(amount)} integralizados pelos LPs.`);
  render();
}

function exitCompany(id, route) {
  const company = state.portfolio.find((item) => item.id === id);
  if (!company) return;
  const mature = company.quartersHeld >= 5;
  const proceeds = equityValue(company);
  const moic = proceeds / Math.max(1, company.equityInvested || company.invested);
  const distributed = proceeds * 0.55;
  state.cash += proceeds - distributed;
  state.distributions += distributed;
  state.exits = [{ name: company.name, route, proceeds, moic, label: `${state.year} T${state.quarter}` }, ...(state.exits || [])].slice(0, 8);
  state.portfolio = state.portfolio.filter((item) => item.id !== id);
  state.reputation = Math.min(5, state.reputation + (moic > 1.8 ? 0.28 : moic > 1.1 ? 0.12 : -0.16));
  log(`${route} de ${company.name}: ${money(proceeds)} recebidos, MOIC ${fmt.format(moic)}x.`);
  render();
}

function ipoCompany(id, sellPct = 30) {
  const company = state.portfolio.find((item) => item.id === id);
  if (!company) return;
  if (!company.ipoPrepared) {
    log(`${company.name} precisa preparar IPO antes da oferta.`);
    render();
    return;
  }
  if ((company.lockup || 0) > 0) {
    log(`${company.name} está em lock-up por ${company.lockup} trimestre(s).`);
    render();
    return;
  }
  if (company.quartersHeld < 5) {
    log(`${company.name} ainda precisa de 5 trimestres de histórico para IPO.`);
    render();
    return;
  }
  const sectorPremium = /IA|Tecnologia|Biotech|Healthtech|Data centers/i.test(company.sector) ? 0.12 : 0;
  const windowPremium = state.event?.title === "Janela de IPO abriu" ? 0.18 : -0.04;
  const qualityPremium = (company.quality - 70) / 180;
  const riskDiscount = Math.max(0, company.risk - 35) / 220;
  const ipoMultiplier = clamp(1 + sectorPremium + windowPremium + qualityPremium - riskDiscount, 0.78, 1.38);
  const soldStake = company.stake * sellPct / 100;
  const proceeds = equityValue(company) * sellPct / 100 * ipoMultiplier;
  const investedSold = (company.equityInvested || company.invested) * sellPct / 100;
  state.cash += proceeds;
  state.distributions += proceeds * 0.35;
  const moic = proceeds / Math.max(1, investedSold);
  state.exits = [{ name: company.name, route: `IPO ${sellPct}%`, proceeds, moic, label: `${state.year} T${state.quarter}` }, ...(state.exits || [])].slice(0, 8);
  company.stake = Math.max(0, company.stake - soldStake);
  company.equityInvested = Math.max(0, (company.equityInvested || company.invested) - investedSold);
  company.invested = company.equityInvested;
  company.public = true;
  company.publicFloat = Math.min(85, (company.publicFloat || 0) + soldStake);
  company.lockup = 2;
  company.ipoPrice = enterpriseValue(company) * ipoMultiplier;
  company.multiple = Math.max(4.5, company.multiple * (0.94 + ipoMultiplier * 0.08));
  company.risk = clamp(company.risk - 5, 5, 90);
  company.status = "Listada";
  adjustReputation("public", ipoMultiplier > 1 ? 0.18 : 0.04);
  if (company.stake < 8) {
    state.portfolio = state.portfolio.filter((item) => item.id !== id);
    log(`IPO e saída quase total de ${company.name}: ${money(proceeds)} de liquidez, múltiplo de janela ${fmt.format(ipoMultiplier)}x.`);
  } else {
    log(`IPO de ${company.name}: venda parcial de ${pct(soldStake)} do capital gerou ${money(proceeds)}. Fundo manteve ${pct(company.stake)} e segue exposto ao mercado.`);
  }
  render();
}

function prepareIPO(id) {
  const company = state.portfolio.find((item) => item.id === id);
  if (!company) return;
  const cost = company.public ? 18 : 42;
  if (!canAfford(cost)) {
    log(`Caixa insuficiente para preparar IPO de ${company.name}.`);
    render();
    return;
  }
  state.cash -= cost;
  company.ipoPrepared = true;
  company.risk = clamp(company.risk - 4, 5, 90);
  company.quality = clamp(company.quality + 5, 1, 100);
  adjustReputation("public", 0.08);
  log(`${company.name} preparada para IPO.`);
  render();
}

function followOnCompany(id) {
  const company = state.portfolio.find((item) => item.id === id);
  if (!company || !company.public) return;
  if ((company.lockup || 0) > 0) {
    log(`${company.name} ainda está em lock-up.`);
    render();
    return;
  }
  const issuedStake = Math.min(12, company.stake * 0.18);
  const proceeds = enterpriseValue(company) * issuedStake / 100 * 0.9;
  state.cash += proceeds * 0.45;
  state.distributions += proceeds * 0.25;
  company.stake = Math.max(0, company.stake - issuedStake);
  company.publicFloat = Math.min(90, (company.publicFloat || 0) + issuedStake);
  company.growth += 3;
  company.risk = clamp(company.risk + 2, 5, 90);
  company.lockup = 1;
  adjustReputation("public", 0.05);
  log(`Follow-on de ${company.name}: ${money(proceeds)} levantados e participação diluída para ${pct(company.stake)}.`);
  render();
}

function repayDebt() {
  if (state.debt <= 0) {
    log("Não há dívida para amortizar.");
    render();
    return;
  }
  const amount = Math.min(state.cash, state.debt, 120);
  if (amount <= 0) {
    log("Caixa insuficiente para amortizar dívida.");
    render();
    return;
  }
  state.cash -= amount;
  state.debt -= amount;
  state.reputation = Math.min(5, state.reputation + 0.04);
  log(`Dívida amortizada em ${money(amount)}. Alavancagem e risco de covenant diminuíram.`);
  render();
}

function mergeCompany(portfolioId, targetId) {
  const company = state.portfolio.find((item) => item.id === portfolioId);
  const target = state.market.find((item) => item.id === targetId);
  if (!company || !target) return;
  const cost = enterpriseValue(target) * 0.46;
  const addonDebt = cost * 0.35;
  const equityNeed = cost - addonDebt;
  if (!canAfford(equityNeed)) {
    log(`Caixa insuficiente para M&A entre ${company.name} e ${target.name}.`);
    render();
    return;
  }
  state.cash -= equityNeed;
  company.dealDebt = (company.dealDebt || 0) + addonDebt;
  company.debtRate = Math.max(company.debtRate || 0, 11.4);
  company.revenue += target.revenue * 0.42;
  company.ebitdaMargin += target.sector === company.sector ? 1.7 : 0.7;
  company.growth += target.sector === company.sector ? 1.2 : 0.4;
  company.risk += target.sector === company.sector ? 4 : 9;
  company.invested += cost;
  company.equityInvested = (company.equityInvested || 0) + equityNeed;
  company.name = `${company.name} + ${target.name.split(" ")[0]}`;
  state.market = state.market.filter((item) => item.id !== targetId);
  log(`M&A concluído: ${target.name} integrado a ${company.name}. Equity: ${money(equityNeed)} | Dívida add-on: ${money(addonDebt)}.`);
  render();
}

function advanceQuarter() {
  if (state.pendingDecision) {
    log("Resolva a decisão de board antes de avançar.");
    render();
    return;
  }
  const effects = fundEffects();
  const event = events[Math.floor(Math.random() * events.length)];
  const sectorEvent = sectorEvents[Math.floor(Math.random() * sectorEvents.length)];
  state.event = event;
  const annualDebtCost = state.debt * Math.max(4, state.debtRate + (event.debtRate || 0)) / 100;
  const salaries = state.team.reduce((sum, id) => sum + personas.find((p) => p.id === id).salary, 0);
  const managementFee = state.committed * 0.0045;
  state.cash -= annualDebtCost / 4 + salaries + managementFee;

  state.portfolio.forEach((company) => {
    const sectorImpact = company.sector === sectorEvent.sector ? sectorEvent : { growth: 0, multiple: 0, risk: 0 };
    const riskDrag = Math.max(0, company.risk + (event.risk || 0) + effects.risk) / 260;
    const growthBoost = company.profile && /Scale-up|Venture|Biotech|Healthtech|IA|Nicho|crescimento/i.test(company.profile) ? 1.22 : 1.08;
    const maturityDrag = company.revenue > 650 ? 0.72 : company.revenue > 250 ? 0.88 : 1;
    const growth = (company.growth * growthBoost * maturityDrag + effects.ops / 8 + (event.growth || 0) + sectorImpact.growth) / 100;
    const companyEbitdaBefore = ebitda(company);
    const companyInterest = (company.dealDebt || 0) * Math.max(4, (company.debtRate || 0) + (event.debtRate || 0)) / 100 / 4;
    const dscr = companyInterest > 0 ? companyEbitdaBefore / 4 / companyInterest : 9;
    company.revenue = Math.max(20, company.revenue * (1 + growth / 3.2 - riskDrag / 6));
    company.ebitdaMargin = Math.max(4, company.ebitdaMargin + effects.ops / 145 + Math.max(-0.2, growth * 2.2) - riskDrag * 0.45 - (dscr < 1.35 ? 0.35 : 0));
    company.multiple = Math.max(4.5, company.multiple + (event.multiple || 0) + sectorImpact.multiple + (company.quality - 70) / 520 + Math.max(-0.08, growth * 0.8) - riskDrag / 2.6);
    if (company.public) {
      const marketSwing = (Math.random() - 0.45) * (company.risk > 55 ? 0.9 : 0.45);
      company.multiple = Math.max(4.2, company.multiple + marketSwing + (event.title === "Janela de IPO abriu" ? 0.35 : 0));
    }
    company.risk = clamp(company.risk + (event.risk || 0) / 2 + sectorImpact.risk - effects.risk / 12 + (dscr < 1.25 ? 5 : 0), 5, 90);
    const amortization = Math.min(company.dealDebt || 0, Math.max(0, companyEbitdaBefore * 0.055 - companyInterest * 0.35));
    company.dealDebt = Math.max(0, (company.dealDebt || 0) - amortization);
    company.lockup = Math.max(0, (company.lockup || 0) - 1);
    company.quartersHeld += 1;
  });

  if (state.cash < 0) {
    state.debt += Math.abs(state.cash) * 1.08;
    log(`Caixa ficou negativo e virou ponte emergencial de ${money(Math.abs(state.cash))}.`);
    state.cash = 0;
    state.reputation = Math.max(1, state.reputation - 0.15);
  }

  if (state.market.length < 6) {
    addNewDeal();
  }
  state.market = state.market.map((company) => ({
    ...company,
    competition: clamp((company.competition || 0) + (Math.random() - 0.45) * 0.035 + (thesisFit(company) ? -0.01 : 0.012), 0, 0.18),
  }));

  const debtToNav = totalDebt() / Math.max(1, nav());
  if (debtToNav > 1.35 || state.cash < 10) {
    state.covenantWarnings += 1;
    log(`Alerta de covenant ${state.covenantWarnings}/3: dívida total em ${pct(debtToNav * 100)} do NAV ou liquidez baixa. Amortize dívida, chame capital ou faça uma saída.`);
  } else {
    state.covenantWarnings = Math.max(0, state.covenantWarnings - 1);
  }
  if (state.covenantWarnings >= 3) {
    state.gameOver = "Covenants quebrados após três trimestres de alavancagem ou liquidez crítica.";
  }
  if (state.year >= 2036 && grossIrr() >= 18 && state.reputation >= 4) {
    state.gameOver = "Mandato encerrado com desempenho de primeira prateleira.";
  }

  if (state.portfolio.some((company) => company.sector === sectorEvent.sector)) {
    log(`${sectorEvent.title}: impacto direto em ${sectorEvent.sector}.`);
  }
  if (state.portfolio.length) {
    const company = state.portfolio[Math.floor(Math.random() * state.portfolio.length)];
    state.pendingDecision = { companyId: company.id };
    log(`Decisão de board pendente em ${company.name}.`);
  }
  log(`${event.title}: ${event.text}`);
  state.quarter += 1;
  if (state.quarter > 4) {
    state.quarter = 1;
    state.year += 1;
  }
  recordNavHistory();
  render();
}

function recordNavHistory() {
  state.navHistory = [...(state.navHistory || []), { label: `${state.year} T${state.quarter}`, value: nav() }].slice(-16);
}

function addNewDeal() {
  const thesisDeals = marketSeed.filter((company) => currentThesis().sectors.includes(company.sector));
  const pool = Math.random() < 0.62 && thesisDeals.length ? thesisDeals : marketSeed;
  const base = pool[Math.floor(Math.random() * pool.length)];
  const suffix = ["Nacional", "Prime", "Digital", "Brasil", "Labs"][Math.floor(Math.random() * 5)];
  const id = `${base.id}-${Date.now()}`;
  state.market.push({
    ...base,
    id,
    name: `${base.name.split(" ")[0]} ${suffix}`,
    revenue: Math.round(base.revenue * (0.75 + Math.random() * 0.6)),
    risk: Math.max(18, Math.round(base.risk + Math.random() * 18 - 8)),
    quality: Math.max(58, Math.round(base.quality + Math.random() * 14 - 7)),
    growth: Math.max(3, Math.round(base.growth + Math.random() * 10 - 4)),
    competition: clamp(Math.random() * 0.1 + (base.status === "Competitivo" ? 0.05 : 0), 0, 0.18),
    status: fundEffects().sourcing > 20 ? "Proprietário" : "Novo",
  });
}

function resetGame() {
  setupDraft = { name: "", thesis: "buyout" };
  showScreen("setup");
}

function kpiClass(value, good, bad) {
  if (value >= good) return "good";
  if (value <= bad) return "bad";
  return "warn";
}

function render() {
  const app = document.querySelector("#app");
  app.className = screen === "game" ? "app-shell" : "entry-shell";
  if (screen !== "game") {
    app.innerHTML = renderWelcome();
    return;
  }
  saveState();
  app.innerHTML = `
    ${renderTopbar()}
    ${renderSidebar()}
    <main class="content">${renderContent()}</main>
    ${renderRightbar()}
    ${renderFooter()}
    ${state.gameOver ? renderGameOver() : ""}
  `;
}

function renderTopbar() {
  const debtNav = totalDebt() / Math.max(1, nav()) * 100;
  return `
    <header class="topbar">
      <div class="brand"><div class="mark">PE</div><div><h1>PE Strategy</h1><span>Simulador</span></div></div>
      <div class="kpi ${kpiClass(state.cash, 220, 50)}"><label>Caixa</label><strong>${money(state.cash)}</strong><small>${money(availableCommitment())} não chamado</small></div>
      <div class="kpi ${kpiClass(nav(), 1200, 420)}"><label>NAV</label><strong>${money(nav())}</strong><small>Valor líquido do fundo</small></div>
      <div class="kpi ${debtNav > 120 ? "bad" : debtNav > 70 ? "warn" : ""}"><label>Dívida total</label><strong>${money(totalDebt())}</strong><small>${pct(debtNav)} do NAV</small></div>
      <div class="kpi ${kpiClass(grossIrr(), 18, 8)}"><label>IRR bruto</label><strong>${pct(grossIrr())}</strong><small>TVPI ${fmt.format(tvpi())}x</small></div>
      <div class="kpi ${kpiClass(state.reputation, 4, 2.5)}"><label>Reputação</label><strong>${fmt.format(state.reputation)} / 5</strong><small>DPI ${fmt.format(dpi())}x</small></div>
      <div class="kpi"><label>Ano</label><strong>${state.year}</strong><small>${state.quarter}º trimestre</small></div>
    </header>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <p class="nav-label">Menu principal</p>
      <nav class="tabs">
        ${tabs.map(([id, label]) => `<button class="tab ${state.tab === id ? "active" : ""}" onclick="setTab('${id}')"><span>${label}</span><span>${tabCount(id)}</span></button>`).join("")}
      </nav>
      <section class="fund-card">
        <h2>Resumo do fundo</h2>
        <div class="fund-stat"><span class="muted">Tese</span><strong>${currentThesis().name}</strong></div>
        <div class="fund-stat"><span class="muted">Nome do fundo</span><strong>${escapeHtml(state.fundName)}</strong></div>
        <div class="fund-stat"><span class="muted">Capital comprometido</span><strong>${money(state.committed)}</strong></div>
        <div class="fund-stat"><span class="muted">Capital integralizado</span><strong>${money(state.called)} (${pct(state.called / state.committed * 100)})</strong></div>
        <div class="fund-stat"><span class="muted">Período do fundo</span><strong>Ano ${Math.max(1, state.year - 2026)} de 10</strong></div>
      </section>
    </aside>
  `;
}

function tabCount(id) {
  if (id === "mercado") return state.market.length;
  if (id === "portfolio") return state.portfolio.length;
  if (id === "equipe") return state.team.length;
  if (id === "infra") return state.infra.length;
  return "";
}

function renderContent() {
  if (state.tab === "mercado") return renderMarket();
  if (state.tab === "portfolio") return renderPortfolio();
  if (state.tab === "equipe") return renderTeam();
  if (state.tab === "infra") return renderInfra();
  if (state.tab === "lps") return renderLPs();
  if (state.tab === "operacoes") return renderOperations();
  return renderReport();
}

function renderMarket() {
  return `
    <div class="section-tabs"><button class="active">Pipeline</button><button onclick="setTab('lps')">Capital com LPs</button><button onclick="setTab('operacoes')">Dívida e M&A</button></div>
    ${renderNavDashboard()}
    <section class="panel thesis-panel">
      <h2>Tese do fundo</h2>
      <div class="choice-row">
        ${fundTheses.map((thesis) => `<button class="${state.thesis === thesis.id ? "primary" : ""}" onclick="setThesis('${thesis.id}')">${thesis.name}</button>`).join("")}
      </div>
    </section>
    <section class="panel">
      <div class="toolbar"><h2>Empresas alvo em análise</h2></div>
      <div class="cards">
        ${state.market.map(renderDealCard).join("")}
      </div>
    </section>
  `;
}

function renderNavDashboard() {
  const history = state.navHistory?.length ? state.navHistory : [{ label: `${state.year} T${state.quarter}`, value: nav() }];
  const max = Math.max(...history.map((point) => point.value), nav(), 1);
  const min = Math.min(...history.map((point) => point.value), nav());
  const range = Math.max(1, max - min);
  const points = history.length === 1
    ? "0,70 100,70"
    : history.map((point, index) => {
      const x = history.length === 1 ? 0 : index / (history.length - 1) * 100;
      const y = 84 - ((point.value - min) / range * 64);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(" ");
  const navChange = history.length > 1 ? nav() - history[0].value : 0;
  return `
    <section class="panel dashboard-panel">
      <div class="toolbar">
        <div><h2>Dashboard do fundo</h2></div>
        <span class="tag ${navChange >= 0 ? "teal" : "bad"}">${navChange >= 0 ? "+" : ""}${money(navChange)} desde o início do gráfico</span>
      </div>
      <div class="dashboard-grid">
        <div class="chart-card">
          <svg viewBox="0 0 100 90" preserveAspectRatio="none" role="img" aria-label="Gráfico de evolução do NAV">
            <polyline class="chart-gridline" points="0,20 100,20"></polyline>
            <polyline class="chart-gridline" points="0,52 100,52"></polyline>
            <polyline class="chart-line" points="${points}"></polyline>
          </svg>
          <div class="chart-labels"><span>${history[0].label}</span><strong>NAV ${money(nav())}</strong><span>${history[history.length - 1].label}</span></div>
        </div>
        <div class="dashboard-metrics">
          <div><span>Valor do portfólio</span><strong>${money(portfolioValue())}</strong></div>
          <div><span>Dívida total</span><strong>${money(totalDebt())}</strong></div>
          <div><span>Capital não chamado</span><strong>${money(availableCommitment())}</strong></div>
          <div><span>Alertas de covenant</span><strong>${state.covenantWarnings}/3</strong></div>
          <div><span>Carry estimado</span><strong>${money(carryAccrued())}</strong></div>
        </div>
      </div>
    </section>
  `;
}

function renderDealCard(company) {
  const debtPct = getDealDebtPct(company);
  const terms = dealTerms(company, debtPct);
  const riskClass = company.risk > 58 ? "bad" : company.risk > 35 ? "warn" : "teal";
  const diligence = diligenceStatus(company.id);
  return `
    <article class="deal-card">
      <div class="deal-head"><div><h3>${company.name}</h3><span class="muted">${company.sector} | ${company.profile || "Tese tradicional"}</span></div><span class="tag ${riskClass}">${company.status}</span></div>
      <div class="tag-row">
        <span class="tag ${thesisFit(company) ? "teal" : "warn"}">${thesisFit(company) ? "Aderente" : "Fora da tese"}</span>
        <span class="tag ${diligence.level >= 2 ? "teal" : "warn"}">Diligência ${diligence.level}/3</span>
      </div>
      <div class="stats">
        <div><span>Receita</span><strong>${money(company.revenue)}</strong></div>
        <div><span>EBITDA</span><strong>${money(ebitda(company))}</strong></div>
        <div><span>Margem EBITDA</span><strong>${pct(company.ebitdaMargin)}</strong></div>
        <div><span>Crescimento anual</span><strong class="${company.growth > 35 ? "good" : ""}">${pct(company.growth)}</strong></div>
        <div><span>Múltiplo EV/EBITDA</span><strong>${fmt.format(company.multiple)}x</strong></div>
        <div><span>Enterprise value</span><strong>${money(enterpriseValue(company))}</strong></div>
        <div><span>Competição</span><strong>${pct((company.competition || 0) * 100)}</strong></div>
        <div><span>Risco</span><strong class="${company.risk > 45 ? "bad" : company.risk > 32 ? "warn" : "good"}">${pct(company.risk)}</strong></div>
      </div>
      <div class="deal-builder">
        <div class="range-head"><strong>Estrutura do LBO</strong><span>${pct(debtPct)} loan</span></div>
        <input type="range" min="0" max="70" step="5" value="${debtPct}" oninput="setDealDebtPct('${company.id}', this.value)" />
        <div class="deal-summary">
          <span>Equity <strong>${money(terms.equityCheck)}</strong></span>
          <span>Loan <strong>${money(terms.dealDebt)}</strong></span>
          <span>Alavancagem <strong>${fmt.format(terms.leverage)}x EBITDA</strong></span>
          <span>Participação <strong>${pct(terms.structure.stake)}</strong></span>
        </div>
        <button class="primary" onclick="buyCompany('${company.id}', ${debtPct})" ${state.cash < terms.equityCheck ? "disabled" : ""}>Comprar com essa estrutura</button>
        <button onclick="runDiligence('${company.id}')" ${diligence.level >= 3 || state.cash < 10 ? "disabled" : ""}>Due diligence</button>
      </div>
    </article>
  `;
}

function renderPortfolio() {
  if (!state.portfolio.length) {
    return `<section class="panel"><h2>Portfólio</h2><div class="empty">Sem empresas no portfólio.</div></section>`;
  }
  return `
    <section class="panel">
      <div class="toolbar"><h2>Empresas do portfólio</h2></div>
      ${state.portfolio.map(renderCompanyRow).join("")}
    </section>
  `;
}

function renderCompanyRow(company) {
  const value = equityValue(company);
  const moic = value / Math.max(1, company.equityInvested || company.invested);
  const leverage = (company.dealDebt || 0) / Math.max(1, ebitda(company));
  return `
    <article class="company-row">
      <div class="company-title">
        <div><h3>${company.name}</h3><span class="muted">${company.sector} | ${company.public ? `Listada, float ${pct(company.publicFloat || 0)}` : `Comprada em ${company.acquiredAt}`} | ${company.quartersHeld} trimestres no fundo</span></div>
        <span class="tag ${moic >= 1.6 ? "teal" : moic < 1 ? "bad" : "warn"}">MOIC ${fmt.format(moic)}x</span>
      </div>
      <div class="grid">
        <div class="span-8">
          <div class="stats">
            <div><span>Valor atual da participação</span><strong>${money(value)}</strong></div>
            <div><span>Equity investido</span><strong>${money(company.equityInvested || company.invested)}</strong></div>
            <div><span>Dívida do deal</span><strong>${money(company.dealDebt || 0)} (${fmt.format(leverage)}x EBITDA)</strong></div>
            <div><span>Estrutura</span><strong>${company.structure || "Equity majoritário"}</strong></div>
            <div><span>Crescimento anual</span><strong>${pct(company.growth)}</strong></div>
            <div><span>Margem EBITDA</span><strong>${pct(company.ebitdaMargin)}</strong></div>
            <div><span>Risco operacional</span><strong>${pct(company.risk)}</strong></div>
            ${company.public ? `<div><span>Valor de IPO ajustado</span><strong>${money(company.ipoPrice || enterpriseValue(company))}</strong></div>` : ""}
          </div>
          <div class="progress" title="Qualidade do ativo"><span style="width:${company.quality}%"></span></div>
        </div>
        <div class="span-4">
          <button onclick="prepareIPO('${company.id}')" ${company.ipoPrepared || company.quartersHeld < 4 ? "disabled" : ""}>Preparar IPO</button>
          <button onclick="exitCompany('${company.id}', 'Venda estratégica')">Venda estratégica</button>
          <button onclick="ipoCompany('${company.id}', 25)" ${company.quartersHeld < 5 ? "disabled" : ""}>IPO: vender 25%</button>
          <button onclick="ipoCompany('${company.id}', 50)" ${company.quartersHeld < 5 ? "disabled" : ""}>IPO: vender 50%</button>
          <button onclick="followOnCompany('${company.id}')" ${!company.public || company.lockup > 0 ? "disabled" : ""}>Follow-on</button>
        </div>
      </div>
    </article>
  `;
}

function renderTeam() {
  return `
    <section class="panel">
      <h2>Contratar personas para a equipe</h2>
      <div class="cards">
        ${personas.map((person) => `
          <article class="action-card">
            <h3>${person.name}</h3>
            <div class="stats">
              <div><span>Bônus de origem</span><strong>${person.sourcing}</strong></div>
              <div><span>Bônus operacional</span><strong>${person.ops}</strong></div>
              <div><span>Bônus com LPs</span><strong>${person.lp}</strong></div>
              <div><span>Risco</span><strong>${person.risk}</strong></div>
              <div><span>Contratação</span><strong>${money(person.cost)}</strong></div>
              <div><span>Custo trimestral</span><strong>${money(person.salary)}</strong></div>
            </div>
            <button onclick="hirePersona('${person.id}')" ${state.team.includes(person.id) || state.cash < person.cost ? "disabled" : ""}>${state.team.includes(person.id) ? "Contratada" : "Contratar"}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderInfra() {
  return `
    <section class="panel">
      <h2>Melhorar infraestrutura do fundo</h2>
      <div class="cards">
        ${infrastructure.map((item) => `
          <article class="action-card">
            <h3>${item.name}</h3>
            <div class="metric-line"><span>Investimento</span><strong>${money(item.cost)}</strong></div>
            <button onclick="buyInfra('${item.id}')" ${state.infra.includes(item.id) || state.cash < item.cost ? "disabled" : ""}>${state.infra.includes(item.id) ? "Implantado" : "Implantar"}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderLPs() {
  return `
    <div class="grid">
      <section class="panel span-8">
        <h2>Conseguir capital com LPs</h2>
        <div class="cards">
          ${lpPrograms.map((program) => `
            <article class="action-card">
              <h3>${program.name}</h3>
              <div class="metric-line"><span>Reputação mínima</span><strong>${fmt.format(program.reputation)}</strong></div>
              <div class="metric-line"><span>Potencial comprometido</span><strong>${money(program.target)}</strong></div>
              <button onclick="raiseCapital('${program.id}')">Abrir captação</button>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel span-4">
        <h2>Capital disponível</h2>
        <div class="stats">
          <div><span>Comprometido</span><strong>${money(state.committed)}</strong></div>
          <div><span>Integralizado</span><strong>${money(state.called)}</strong></div>
          <div><span>Não chamado</span><strong>${money(availableCommitment())}</strong></div>
          <div><span>Momentum com LPs</span><strong>${fmt.format(state.lpMomentum || 0)} pts</strong></div>
        </div>
        <button class="primary" onclick="callCapital()">Chamar capital</button>
        <button onclick="runRoadshow()" ${state.cash < 14 ? "disabled" : ""}>Fazer roadshow</button>
      </section>
    </div>
  `;
}

function renderOperations() {
  return `
    <div class="grid">
      <section class="panel span-6">
        <h2>Pegar empréstimo</h2>
        <div class="toolbar"><button onclick="repayDebt()" ${state.debt <= 0 || state.cash <= 0 ? "disabled" : ""}>Amortizar dívida</button></div>
        <div class="cards">
          ${debtFacilities.map((facility) => `
            <article class="action-card">
              <h3>${facility.name}</h3>
              <div class="stats">
                <div><span>Valor</span><strong>${money(facility.amount)}</strong></div>
                <div><span>Custo anual</span><strong>${pct(facility.rate)}</strong></div>
                <div><span>Rigor de covenant</span><strong>${pct(facility.covenant)}</strong></div>
              </div>
              <button onclick="takeLoan('${facility.id}')">Contratar dívida</button>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel span-6">
        <h2>Melhorias e M&A</h2>
        ${state.portfolio.length ? renderImprovementControls() : `<div class="empty">Sem empresas no portfólio.</div>`}
      </section>
    </div>
  `;
}

function renderImprovementControls() {
  return `
    <div class="table-wrap">
      <table class="table">
        <thead><tr><th>Empresa</th><th>Melhoria</th><th>Ação</th><th>M&A disponível</th></tr></thead>
        <tbody>
          ${state.portfolio.map((company) => {
            const availableTarget = state.market.find((target) => target.sector === company.sector) || state.market[0];
            return improvements.map((improvement) => `
              <tr>
                <td>${company.name}</td>
                <td>${improvement.name}<br><span class="muted">Custo base ${money(improvement.cost)}</span></td>
                <td><button onclick="improveCompany('${company.id}', '${improvement.id}')" ${company.improvements.includes(improvement.id) ? "disabled" : ""}>${company.improvements.includes(improvement.id) ? "Feita" : "Executar"}</button></td>
                <td>${availableTarget ? `<button onclick="mergeCompany('${company.id}', '${availableTarget.id}')">Comprar ${availableTarget.name.split(" ")[0]}</button>` : "Sem alvo"}</td>
              </tr>
            `).join("");
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderReport() {
  const rows = state.portfolio.map((company) => {
    const value = equityValue(company);
    const invested = company.equityInvested || company.invested;
    return `<tr><td>${company.name}</td><td>${company.sector}</td><td>${company.structure || "Equity majoritário"}</td><td>${money(invested)}</td><td>${money(company.dealDebt || 0)}</td><td>${money(value)}</td><td>${fmt.format(value / Math.max(1, invested))}x</td><td>${pct(company.growth)}</td><td>${pct(company.risk)}</td></tr>`;
  }).join("");
  const exits = (state.exits || []).map((exit) => `<tr><td>${exit.name}</td><td>${exit.route}</td><td>${exit.label}</td><td>${money(exit.proceeds)}</td><td>${fmt.format(exit.moic)}x</td></tr>`).join("");
  return `
    <section class="panel dashboard-panel">
      <h2>Métricas do fundo</h2>
      <div class="dashboard-metrics metric-grid">
        <div><span>TVPI</span><strong>${fmt.format(tvpi())}x</strong></div>
        <div><span>DPI</span><strong>${fmt.format(dpi())}x</strong></div>
        <div><span>Carry estimado</span><strong>${money(carryAccrued())}</strong></div>
        <div><span>Distribuições</span><strong>${money(state.distributions)}</strong></div>
      </div>
    </section>
    <section class="panel">
      <h2>Relatório do comitê</h2>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Empresa</th><th>Setor</th><th>Estrutura</th><th>Equity</th><th>Dívida</th><th>Valor atual</th><th>MOIC</th><th>Crescimento</th><th>Risco</th></tr></thead>
          <tbody>${rows || `<tr><td colspan="9">Sem ativos no portfólio.</td></tr>`}</tbody>
        </table>
      </div>
    </section>
    <section class="panel" style="margin-top: 14px;">
      <h2>Saídas realizadas</h2>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Empresa</th><th>Rota</th><th>Data</th><th>Liquidez</th><th>MOIC</th></tr></thead>
          <tbody>${exits || `<tr><td colspan="5">Sem saídas realizadas.</td></tr>`}</tbody>
        </table>
      </div>
    </section>
    <section class="panel" style="margin-top: 14px;">
      <h2>Ideias para expansão da jogabilidade</h2>
      <div class="cards">
        ${expansionIdeas.map((idea, index) => `
          <article class="action-card">
            <span class="tag teal">Roadmap ${index + 1}</span>
            <p class="muted">${idea}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderRightbar() {
  const effects = fundEffects();
  const concentration = state.portfolio.length ? Math.max(...state.portfolio.map((company) => equityValue(company))) / Math.max(1, portfolioValue()) * 100 : 0;
  const leverage = totalDebt() / Math.max(1, nav());
  return `
    <aside class="rightbar">
      ${renderBoardPanel()}
      <section class="side-panel">
        <h2>Pauta do comitê</h2>
        <div class="stats">
          <div><span>Próxima reunião</span><strong>${state.year} T${state.quarter}</strong></div>
          <div><span>Originação</span><strong>${effects.sourcing}</strong></div>
          <div><span>Operações</span><strong>${effects.ops}</strong></div>
          <div><span>LPs</span><strong>${effects.lp}</strong></div>
        </div>
      </section>
      <section class="side-panel">
        <h2>Reputações</h2>
        <div class="stats">
          <div><span>LPs</span><strong>${fmt.format(reputation("lps"))}</strong></div>
          <div><span>Bancos</span><strong>${fmt.format(reputation("banks"))}</strong></div>
          <div><span>Fundadores</span><strong>${fmt.format(reputation("founders"))}</strong></div>
          <div><span>Mercado público</span><strong>${fmt.format(reputation("public"))}</strong></div>
        </div>
      </section>
      <section class="side-panel">
        <h2>Alertas de risco</h2>
        <div class="log">
          <div class="log-item"><strong class="${leverage > 1.35 ? "bad" : leverage > 0.8 ? "warn" : "good"}">Alavancagem</strong><br><span class="muted">Dívida total/NAV em ${pct(leverage * 100)}. Alertas de covenant: ${state.covenantWarnings}/3.</span></div>
          <div class="log-item"><strong class="${concentration > 45 ? "bad" : "good"}">Concentração</strong><br><span class="muted">Maior ativo representa ${pct(concentration)} do portfólio.</span></div>
          <div class="log-item"><strong class="${state.cash < 80 ? "bad" : "good"}">Liquidez</strong><br><span class="muted">Caixa cobre despesas e oportunidades.</span></div>
        </div>
      </section>
      <section class="side-panel">
        <h2>Log de ações recentes</h2>
        <div class="log">${state.log.map((entry) => `<div class="log-item">${entry}</div>`).join("")}</div>
      </section>
    </aside>
  `;
}

function renderBoardPanel() {
  if (!state.pendingDecision) {
    return `
      <section class="side-panel">
        <h2>Board</h2>
        <div class="empty">Sem decisão pendente.</div>
      </section>
    `;
  }
  const company = state.portfolio.find((item) => item.id === state.pendingDecision.companyId);
  return `
    <section class="side-panel">
      <h2>Board${company ? `: ${company.name}` : ""}</h2>
      <div class="decision-grid">
        ${boardDecisions.map((decision) => `<button onclick="chooseBoardDecision('${decision.id}')">${decision.name}</button>`).join("")}
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="status-strip">
        <span>Modo: padrão</span>
        <span>Ranking simulado: #${Math.max(1, 120 - Math.round(grossIrr() * 3))} de 128</span>
        <span>Distribuições: ${money(state.distributions)}</span>
        <span>Último evento: ${state.event ? state.event.title : "Nenhum"}</span>
      </div>
      <div>
        <button onclick="showScreen('home')">Início</button>
        <button onclick="showRules()">Regras</button>
        <button onclick="resetGame()">Reiniciar</button>
        <button class="primary" onclick="advanceQuarter()">Avançar trimestre</button>
      </div>
    </footer>
  `;
}

function renderGameOver() {
  return `
    <div class="modal-backdrop">
      <div class="modal">
        <h2>${state.gameOver.includes("Covenants") ? "Fundo em crise" : "Mandato concluído"}</h2>
        <p>${state.gameOver}</p>
        <div class="stats">
          <div><span>NAV final</span><strong>${money(nav())}</strong></div>
          <div><span>IRR bruto</span><strong>${pct(grossIrr())}</strong></div>
          <div><span>Reputação</span><strong>${fmt.format(state.reputation)} / 5</strong></div>
        </div>
        <div class="modal-actions"><button class="primary" onclick="resetGame()">Jogar novamente</button></div>
      </div>
    </div>
  `;
}

render();
