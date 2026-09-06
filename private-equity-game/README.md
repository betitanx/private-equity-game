# PE Strategy Simulator

Jogo estático de estratégia sobre private equity. Abra `index.html` no navegador ou sirva a pasta com qualquer servidor estático.

## Como jogar

Após escolher nome e tese, o fundo passa por uma captação inicial. Um LP âncora compromete entre R$ 300 e R$ 500 milhões, e o jogador escolhe uma abordagem em cada uma de quatro rodadas adicionais. O cenário de mercado, a aderência à tese e as chances de aceite determinam o capital captado. No fechamento, 40% é integralizado; o restante fica disponível para chamadas de capital. Propostas e respostas são salvas, inclusive ao recarregar a página. Partidas antigas mantêm seu capital.

Você administra um fundo de private equity com caixa, capital comprometido, capital integralizado, reputação, dívida do fundo, dívida das investidas e portfólio. O objetivo é terminar o mandato com NAV, IRR e reputação fortes, sem acumular três alertas de covenant.

Principais ações:

- Escolher a tese do fundo: buyout defensivo, growth equity, fronteira tecnológica ou infraestrutura digital.
- Captar capital com LPs antes de comprar empresas.
- Fazer roadshow para melhorar o momentum de captação.
- Chamar capital comprometido para aumentar o caixa disponível.
- Rodar due diligence antes da aquisição.
- Comprar empresas com três estruturas de deal: equity majoritário, LBO balanceado ou LBO agressivo.
- Ajustar o LBO com uma barra de dívida, escolhendo quanto será equity e quanto será loan.
- Separar equity investido e loan usado na aquisição.
- Avaliar empresas conservadoras, empresas estabelecidas, scale-ups de IA, biotech, healthtech e outros nichos de maior risco e maior potencial.
- Disputar deals com competição variável.
- Pegar empréstimos no nível do fundo para liquidez tática.
- Amortizar dívida quando a alavancagem estiver alta.
- Contratar personas para melhorar originação, operações, risco e relacionamento com LPs.
- Melhorar infraestrutura do fundo.
- Executar melhorias operacionais nas empresas.
- Fazer M&A com dívida add-on e equity incremental.
- Resolver decisões trimestrais de board.
- Sair por venda estratégica ou ajudar a empresa a fazer IPO com venda parcial de participação.
- Manter participação após o IPO para capturar valorização ou sofrer volatilidade de mercado.
- Preparar IPO, respeitar lock-up e fazer follow-on em empresas listadas.
- Acompanhar o gráfico de NAV do fundo para visualizar crescimento ou deterioração dos ativos.
- Acompanhar TVPI, DPI, carry estimado, reputação com LPs, bancos, fundadores e mercado público.
- Avançar trimestres para processar custos, crescimento mais dinâmico, eventos macro, eventos setoriais, amortização de dívida, flutuação de empresas listadas e evolução de valuation.

O jogo salva o progresso em `localStorage` quando o navegador permite.
