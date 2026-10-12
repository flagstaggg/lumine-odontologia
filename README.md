<div align="center">

# Lumine Odontologia

Site institucional de demonstração para uma clínica odontológica fictícia em Criciúma — SC.
React + Vite, animações com Framer Motion e CSS próprio (CSS Modules), sem frameworks de UI.

[Ver o projeto](#-estrutura) · [Rodando localmente](#-rodando-localmente) · [Personalizando](#-personalizando)

</div>

---

## 📖 Sobre

O **Lumine Odontologia** é um site de portfólio/landing page criado como peça de demonstração
para uma clínica odontológica fictícia. O layout foi inspirado em um site de referência de
design premium (minimalista, muito espaço em branco, headline gigante), mas com identidade
própria: fundo branco, detalhes em azul claro e todo o conteúdo em português do Brasil.

O projeto foi feito para servir de vitrine de capacidades de front-end: composição de hero
com headline animada, carrossel com autoplay, contagem de números, formulários com validação,
responsividade real e cuidado com acessibilidade e performance.

> ⚠️ **Projeto fictício.** Clínica, profissionais, CRO, preços, endereço, telefone e depoimentos
> são dados inventados apenas para demonstração. O número de WhatsApp é um placeholder.

---

## ✨ Funcionalidades

### Hero (tela cheia, 100vh)

- **Header fixo** com logo, menu central (cada item com marcador e sublinhado animado no hover) e
  botão de contorno; ganha fundo branco translúcido com `backdrop-filter` e sombra leve ao rolar.
- **Peça principal** (implante dentário) com flutuação contínua, parallax de mouse e sombra de
  contato que reage ao movimento — em degradê radial azul claro.
- **Headline gigante** em 4 linhas revelada palavra por palavra (máscara + subida), com a palavra
  de destaque em azul vivo.
- **Carrossel da equipe** com botão "Próximo", autoplay a cada 5 s (pausado no hover/foco) e loop
  contínuo sem "salto" visual.
- **Faixa inferior** com 3 colunas e **horário local ao vivo** de Criciúma (`America/Sao_Paulo`).

### Seções

| Seção | ID | Conteúdo |
| --- | --- | --- |
| Serviços | `#servicos` | Grade com 6 cards (ícone em linha, título e descrição), elevação e brilho azul no hover |
| Implantes | `#implantes` | Duas colunas: processo em 3 etapas numeradas + imagem do implante em painel azul claro |
| Preços | `#precos` | 3 planos, card do meio em destaque com selo "Mais procurado" e **valores com contagem animada** |
| Prevenção | `#prevencao` | Faixa com 4 dicas de saúde bucal e número em destaque ("6 em 6 meses") |
| Equipe | `#equipe` | Grade com os 4 dentistas: foto, especialidade e CRO |
| Depoimentos | `#depoimentos` | 3 fichas de pacientes da região com 5 estrelas |
| Contato | `#contato` | Dados da clínica + formulário com validação em tempo real e mensagem de sucesso |
| Rodapé | — | Logo, links rápidos, contato, redes sociais e créditos |

### Detalhes técnicos

- **Animações** — revelação por palavra, entrada escalonada, `whileInView` com `once: true`,
  hover com preenchimento deslizando da esquerda, carrossel por transform (sem re-render).
- **Responsividade** — desktop ≥1024px (layout de duas colunas), tablet ≥640px (empilhado) e
  mobile <640px (menu hambúrguer com painel lateral, carrossel com scroll-snap).
  Tipografia fluida com `clamp()`.
- **Acessibilidade** — HTML semântico, um único `h1`, `alt` em todas as imagens,
  `aria-label` nos botões de ícone e no carrossel, foco visível, `aria-invalid`/`aria-describedby`
  nos campos com erro e `role="status"` para o retorno do formulário.
- **Performance** — imagens com `loading="lazy"` (exceto as do hero), `fetchpriority="high"` na
  imagem principal, `width`/`height` em todas as imagens para evitar layout shift, animações
  feitas com `transform` (sem paint) e nenhum polling ou timer ativo fora da viewport.
- **`prefers-reduced-motion`** respeitado tanto no CSS quanto nos componentes (Framer Motion
  `useReducedMotion`).

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso no projeto |
| --- | --- | --- |
| [React](https://react.dev) | 19.3 | Base da interface (JavaScript, sem TypeScript) |
| [Vite](https://vite.dev) | 8.3 | Bundler e servidor de desenvolvimento |
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) | 6.1 | Integração React + HMR |
| [Framer Motion](https://motion.dev) | 14.1 | Animações, gestos e Parallax |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | 1.87 | Lint (roda junto do projeto) |
| CSS Modules | — | Estilos componentizados, com variáveis CSS em `:root` |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | 300–700 | Tipografia via Google Fonts |

Sem Tailwind, sem biblioteca de componentes pronta, sem código morto.

---

## 📁 Estrutura

```
lumine-odontologia/
├── index.html                  # metatags, fonte e favicon da marca
├── vite.config.js
├── .oxlintrc.json
├── public/
│   └── favicon.svg             # ícone da marca
└── src/
    ├── main.jsx
    ├── App.jsx                 # composição das seções
    ├── config.js               # ← marca, WhatsApp, contato, navegação
    ├── assets/
    │   └── implante.png        # imagem principal do hero
    ├── components/
    │   ├── Header.jsx          # header fixo + menu mobile
    │   ├── Hero.jsx            # headline animada + composição do hero
    │   ├── ImplantImage.jsx    # imagem do implante (flutuação, parallax, sombra)
    │   ├── TeamCarousel.jsx    # carrossel da equipe
    │   ├── HeroFooterBar.jsx   # faixa inferior com hora ao vivo
    │   ├── Services.jsx
    │   ├── Implants.jsx
    │   ├── Pricing.jsx
    │   ├── Prevention.jsx
    │   ├── Team.jsx
    │   ├── TeamPhoto.jsx       # foto com avatar de iniciais se a URL falhar
    │   ├── Testimonials.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Logo.jsx            # logotipo em SVG
    │   ├── Icons.jsx           # ícones em linha
    │   ├── Reveal.jsx          # wrapper de animação on-scroll
    │   ├── Section.jsx         # wrapper de seção com título
    │   └── *.module.css        # um CSS Module por componente
    ├── data/
    │   ├── team.js             # dentistas + fotos
    │   ├── services.js
    │   ├── pricing.js
    │   ├── testimonials.js
    │   └── icons.jsx           # traçados dos ícones
    ├── hooks/
    │   └── useLocalTime.js     # hora de Criciúma em tempo real
    └── styles/
        ├── variables.css       # ← paleta, tipografia, raios, sombras
        └── global.css          # reset, utilitários e botões
```

Cada componente tem um arquivo `.module.css` com o mesmo nome — classes ficam com escopo local
e os poucos estilos compartilhados ficam em `global.css`.

---

## 🚀 Rodando localmente

**Pré-requisito:** Node.js `^20.19` ou `>=22.12` (requisito do Vite 8).

```bash
# 1. instalar dependências
npm install

# 2. subir o servidor de desenvolvimento (HMR)
npm run dev

# 3. gerar o build de produção
npm run build

# 4. servir localmente o build
npm run preview

# 5. lint
npm run lint
```

Scripts disponíveis em `package.json`:

| Script | O que faz |
| --- | --- |
| `npm run dev` | Sobe o dev server com hot reload |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve localmente o conteúdo de `dist/` |
| `npm run lint` | Roda o Oxlint |

---

## 🎨 Personalizando

### Cores, tipografia, raios e sombras

Tudo está centralizado em `src/styles/variables.css`:

```css
:root {
  --brand: #4fb3e8;          /* azul de destaque */
  --brand-dark: #2f9ad3;     /* hover */
  --brand-soft: #eaf6fd;     /* azul claro dos fundos */
  --ink: #0f2a43;            /* títulos */
  --muted: #5b7186;          /* texto secundário */
  --line: rgba(79, 179, 232, 0.25);
  --fs-headline: clamp(2.75rem, 6.4vw, 5.6rem);
  --radius-lg: 24px;
}
```

### Nome, WhatsApp, endereço e menus

Tudo em `src/config.js`:

```js
export const WHATSAPP_NUMBER = "5548999999999";            // número do WhatsApp
export const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma avaliação";
export const CONTACT = { address: "...", phoneHref: "...", email: "...", hours: [...] };
export const NAV_LINKS = [{ label: "Serviços", href: "#servicos" }, ...];
```

O link `WHATSAPP_LINK` é gerado a partir do número e da mensagem, e já é usado no botão do
header, nos planos da seção de preços, no botão "Agendar pelo WhatsApp" do contato e no rodapé.

### Conteúdo

| O que trocar | Arquivo |
| --- | --- |
| Headline do hero | `HEADLINE` em `src/components/Hero.jsx` |
| Serviços | `src/data/services.js` |
| Planos e preços | `src/data/pricing.js` |
| Dentistas e fotos | `src/data/team.js` |
| Depoimentos | `src/data/testimonials.js` |
| Ícones das seções | `src/data/icons.jsx` |
| Imagem do implante | `src/assets/implante.png` |

As fotos dos profissionais vêm do Unsplash por URL. Se alguma não carregar, o componente
`TeamPhoto` exibe automaticamente um avatar com as iniciais do profissional.

---

## 📐 Notas de implementação

**A imagem do hero.** O componente `ImplantImage` usa uma única imagem PNG com fundo transparente.
O "plinto" que a posiciona tem `aspect-ratio: 568 / 1298` e `height: var(--implant-height)`
(padrão 80% da altura do palco), com a base ancorada em `bottom: var(--implant-base)`. Assim a
imagem nunca distorce (`object-fit: contain`) e fica com a base apoiada perto da faixa inferior,
independentemente do tamanho da tela. O mesmo componente é usado no hero, na seção de implantes
e no layout mobile.

**Sombra de contato.** A elipse fica fixa no chão e é animada por `useTransform` do mesmo
`motionValue` da flutuação: encolhe (escala 1 → 0.74) e clareia (opacidade 0.32 → 0.12) quando o
implante sobe.

**Hora ao vivo.** `useLocalTime` usa `Intl.DateTimeFormat` com `timeZone: "America/Sao_Paulo"`,
então o relógio funciona independentemente do fuso da máquina do visitante.

---

## ⚠️ Avisos

- Dados fictícios: clínica, endereço, telefones, e-mails, CRO, preços, depoimentos e profissionais.
- Imagens de profissionais servidas pelo [Unsplash](https://unsplash.com) — verifique a licença
  antes de usar em um projeto real.
- A imagem `implante.png` é a imagem principal do hero e pesa ~660 KB. Se quiser reduzir, use uma
  versão reescalonada ou comprimida (WebP/AVIF) mantendo o caminho do arquivo.

---

## 📄 Licença

Projeto de demonstração, sem licença específica. Sinta-se à vontade para usar como base.