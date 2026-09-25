# TrailHive Landing Page

A pixel-matched, responsive React rebuild of the TrailHive landing page, split into individual components.

## Structure
```
src/
  assets/img/        Photo assets sourced from the mockups (logo drawn as inline SVG)
  components/
    Navbar.jsx / Navbar.css               (with a mobile hamburger menu)
    HeroHeading.jsx / HeroHeading.css     ("Your Ultimate Outdoor Companion" hero)
    Section1.jsx / Section1.css           ("Stay Active and Healthy" features)
    HeroStack.jsx / HeroStack.css         ("Find new trails to explore" image band)
    Section2.jsx / Section2.css           (both testimonial blocks, reused via `variant` prop)
    Footer.jsx / Footer.css
  App.jsx        Composes all sections above
  main.jsx       React entry point
  index.css
index.html
package.json
vite.config.js
```

## Run it
```bash
npm install
npm run dev
```
Then open the printed local URL (usually http://localhost:5173).

To build a production bundle:
```bash
npm run build
```

## Responsive behavior
- Breakpoints at 900px, 700px, 560px and 480px across every section.
- Navbar collapses into a hamburger menu with a slide-down panel below 900px.
- Feature/testimonial grids stack to a single column on tablet and phone widths.
- Images, type sizes, and section padding scale down for small screens.
- Footer's newsletter row wraps instead of overflowing on narrow viewports.

## Notes
- Photos (lake, mountain trail, feature shots, testimonial background, topo texture) are sourced directly from the supplied mockups.
- The TrailHive mountain-icon logo is recreated as inline SVG for crispness at any size.
- The "trusted by" brand row uses icon + wordmark lockups (distinct weight/case/icon per brand) styled after each company's identity, rather than exact trademarked logo artwork.
