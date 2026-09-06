const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(`${__dirname}/game.js`, 'utf8');

function game(random, saved = null) {
  const app = {};
  const input = { value: 'Aurora <Capital>', setCustomValidity() {}, reportValidity: () => true };
  const math = Object.create(Math);
  math.random = () => random;
  const context = vm.createContext({ Intl, Math: math, JSON,
    localStorage: { getItem: () => saved, setItem: (_, value) => { saved = value; } },
    document: { querySelector: (selector) => selector === '#app' ? app : selector === '#fund-name' ? input : null },
    window: { scrollTo() {} },
  });
  vm.runInContext(source, context);
  return { run: (code) => vm.runInContext(code, context), saved: () => saved, app };
}

test('Captação varia, mantém contabilidade e bloqueia fechamento antecipado e repetido', () => {
  const totals = [];
  for (const random of [0, 0.5, 0.999]) {
    const g = game(random);
    g.run('startFund({preventDefault(){}}); closeInitialFund()');
    assert.equal(g.run('state.cash'), 0);
    assert.equal(g.run('state.fundraising.closed'), false);
    for (let round = 0; round < 4; round++) {
      g.run(`pitchInitialLP(${round}, 'family')`);
      const committed = g.run('state.committed');
      g.run(`pitchInitialLP(${round}, 'family')`);
      assert.equal(g.run('state.committed'), committed);
    }
    assert.equal(g.run('state.committed === state.fundraising.anchor + state.fundraising.results.reduce((sum, r) => sum + r.amount, 0)'), true);
    g.run('closeInitialFund()');
    assert.equal(g.run('state.cash'), Math.round(g.run('state.committed') * 0.4));
    assert.equal(g.run('state.called'), g.run('state.cash'));
    assert.equal(g.run('state.navHistory[0].value'), g.run('state.cash'));
    assert(g.app.innerHTML.includes('Aurora &lt;Capital&gt;'));
    const cash = g.run('state.cash');
    g.run('closeInitialFund()');
    assert.equal(g.run('state.cash'), cash);
    assert(cash >= 120);
    totals.push(g.run('state.committed'));
  }
  assert.equal(new Set(totals).size, 3);
});

test('Recarregar preserva propostas, resultados e retomada da captação', () => {
  const g = game(0.5);
  g.run('startFund({preventDefault(){}}); pitchInitialLP(0, "family")');
  const resumed = game(0.999, g.saved());
  resumed.run('showScreen("game")');
  assert.equal(resumed.run('screen'), 'fundraising');
  assert.equal(resumed.run('JSON.stringify(state.fundraising)'), g.run('JSON.stringify(state.fundraising)'));
});

test('Partidas antigas não entram na captação nem perdem capital', () => {
  const g = game(0.5, JSON.stringify({ version: 4, started: true, cash: 777, called: 800, committed: 1800 }));
  g.run('showScreen("game")');
  assert.equal(g.run('screen'), 'game');
  assert.equal(g.run('state.cash'), 777);
});

test('A tese altera a chance de aceite do LP', () => {
  const g = game(0.5);
  g.run('startFund({preventDefault(){}})');
  const buyout = g.run('state.fundraising.rounds[0].find(lp => lp.id === "family").chance');
  g.run('setupDraft.thesis = "growth"; startFund({preventDefault(){}})');
  assert(g.run('state.fundraising.rounds[0].find(lp => lp.id === "family").chance') > buyout);
});
