# Portfolio - Angular

Projeto de portfólio profissional migrado para **Angular 19** com **Standalone Components**, **Signals** e deferrable views (`@defer`).

## Scripts Disponíveis

- `npm start` ou `ng serve` - Inicia o servidor local de desenvolvimento do Angular (`http://localhost:4200`)
- `npm run build` ou `ng build` - Gera a compilação de produção em `dist/portfolio-ng19`
- `npm test` - Executa a suíte de testes unitários com Karma/Jasmine

## Estrutura do Projeto

- `src/main.ts` - Ponto de inicialização do Angular com `bootstrapApplication`
- `src/index.html` - HTML base da aplicação montando `<app-root></app-root>`
- `src/styles.css` - Estilos globais e tipografia (DM Mono & Manrope)
- `src/app/app.config.ts` - Provedores e configurações da aplicação
- `src/app/app.component.ts` - Componente principal Standalone com estado reativo via Signals
- `src/app/app.component.html` - Template reativo com `@defer (on viewport)`, `@for` e blocos de fallback
- `src/app/models/portfolio.model.ts` - Interfaces TypeScript (`Project`, `SkillCategory`, `TimelineEntry`)
