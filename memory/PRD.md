# Nocturnal Nine — Landing Page PRD

## Original brief
High-end, cinematic, gallery-like single-page entrance for an independent creative house "Nocturnal Nine" (tagline: "Lux Ex Nocte"). Must match the user-supplied reference image exactly with real HTML DOM text, responsive layout, dark ritual aesthetic.

## Stack
- React (CRA) + Tailwind CSS
- Custom CSS (animations, ornate frame, gold-foil text)
- Lucide React for social icons
- Google Fonts: Cinzel (body/UI), IM Fell English (used as the closest free substitute for licensed Medici Text Regular)

## Architecture
- `/app/frontend/src/components/LandingPage.jsx` — main page (single component, Grid/Flex layout)
- `/app/frontend/src/index.css` — global styles, animations, ornate frame, paper texture overlay
- `/app/frontend/public/assets/` — all visual assets (background, sigil, dividers, compass, paper texture)
- `/app/backend/server.py` — minimal FastAPI; no email persistence (frontend-only mailing list per spec)

## Implemented (Jun 25, 2026)
- Hero: sigil image + "Nocturnal Nine" wordmark (DOM text) + diamond divider, atmospheric moonlit-ruins bg
- Manifesto: "FROM THE SHADOWS, WE CREATE." headline + 3-line body, real DOM text
- Mailing list box: ornate fleuron, "Join The Circle" heading, Cinzel caption, email input + Join button (functional, frontend-only validation), compass overlapping bottom edge
- Footer: italic quote, IG/X/Mail icons linking to nocturnalnine.com socials, "NOCTURNAL NINE © MMXXV"
- Subtle paper-texture overlay (10% opacity) across entire page via mix-blend overlay
- Fully responsive (mobile-first, flex column on small screens, clamp-based fluid type)
- Subtle entrance + breathing animations

## Backlog
- P1: License + load actual Medici Text Regular from Adobe Fonts (currently using IM Fell English as substitute)
- P1: Wire mailing list to a real provider (Mailchimp/ConvertKit/Resend) so subscribers persist
- P2: Add a success confirmation screen after subscribing
- P2: Add a tiny grain/film animation overlay (1-3%) for cinematic depth
- P2: Open Graph + favicon assets
