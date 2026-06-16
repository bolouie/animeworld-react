# AnimeWorld — Project Sources & References

Documentation of all images, AI-generated assets, learning resources, and tools used in the development of AnimeWorld.

---

## Images

### Hero & Section Backgrounds

All background images were sourced from WallpaperCave, a free community wallpaper platform that permits open downloading without registration. Images are used here for academic and non-commercial purposes only.

| Section | Source URL |
|---|---|
| Hero (placeholder — swords) | https://wallpapercave.com/w/wp1809658 |
| About | https://wallpapercave.com/w/uwp5044147 |
| Contact | https://wallpapercave.com/w/wp1809741 |

---

### Package Card Images — AI-Generated (Google Gemini Flash)

Package card images were generated using **Google Gemini Flash** (https://gemini.google.com/app).

Each image was produced by providing Gemini with a descriptive text prompt alongside a reference colour palette image sourced from Reddit's r/wallpaper community. The palette images were used to guide the tonal direction of each generated image. The instruction *"Use tones from the image attached but do not include the palette symbols inside the image"* was included in all prompts except the Starter Collection, where the palette was provided as context only.

---

#### Starter Collection

**Palette reference:**
https://www.reddit.com/r/wallpaper/comments/u4gqrt/anime_street_color_palette_3840x2160/

**Prompt:**
> Card image for Anime Starter Collection package includes a comic book and figurine flat lay, warm cinematic lighting, premium collector item, detailed illustration style for new fans and curious collectors.

---

#### Classic Bundle

**Palette reference:**
https://www.reddit.com/r/wallpaper/comments/p0arhw/anime_rooftop_color_palette_3840x2160/

**Prompt:**
> Card image for Anime Classic Bundle package includes fan-favourite titles and collectibles from the series that defined a generation. Flat lay, warm cinematic lighting, premium collector item, detailed illustration style. Use tones from the image attached but do not include the palette symbols inside the image.

---

#### Deluxe Edition

**Palette reference:**
https://www.reddit.com/r/wallpaper/comments/qen2qj/walk_night_color_palette_3840x2160/

**Prompt:**
> Card image for Anime Deluxe Edition package includes premium prints and exclusive items for the dedicated anime enthusiast. Flat lay, warm cinematic lighting, premium collector item, detailed illustration style. Use tones from the image attached but do not include the palette symbols inside the image.

---

#### Anniversary Box

**Palette reference:**
https://www.reddit.com/r/wallpaper/comments/qjkxe1/anime_sunset_color_palette_3840x2160/

**Prompt:**
> Card image for Anime Anniversary Box includes rare editions not found anywhere else, a limited celebration of one year. Flat lay, warm cinematic lighting, premium collector item, detailed illustration style. Use tones from the image attached but do not include the palette symbols inside the image.

---

#### Mystery Pack

**Palette reference:**
https://www.reddit.com/r/wallpaper/comments/o6wy9f/anime_color_palette_3840x2160/

**Prompt:**
> Card image for Anime Mystery Pack includes surprise selections hand-picked for fun! Flat lay on real surface, warm cinematic lighting, premium collector item, detailed illustration style. Use tones from the image attached but do not include the palette symbols inside the image.

---

## Design Reference

**Page palette inspiration:**
https://www.reddit.com/r/wallpaper/comments/p0apwm/bright_scape_color_palette_3840x2160/

Used as a visual reference when defining the project's design tokens in `index.css`.

---

## Learning Resources

### Courses

**SuperSimpleDev — React Tutorial Full Course: Beginner to Pro (React 19, 2025)**
https://youtu.be/TtPXvEcE11E?si=ZzmEKRqOw53B5ckZ
Watched in full (~11.5 hours) at 1.25–1.50× speed.

This course rebuilds, in React, the same e-commerce project SuperSimpleDev teaches in his vanilla JavaScript "Amazon clone" course — which I had separately followed in full (~20 hours, completed roughly a year prior to this project). That earlier vanilla JS build was never published to GitHub, as its close visual resemblance to Amazon's UI raised trademark concerns. The React version solves this by rebranding the UI (different colour scheme, layout, and styling) while teaching the same underlying product directory, cart, and order-flow logic — now implemented with React state and component patterns instead of direct DOM manipulation.

Having already built the cart/order/product-directory logic once in vanilla JS made the React version's concepts transfer quickly: the value of React (declarative rendering, component reuse, state-driven UI, and a clear seam for attaching a backend) was immediately legible against that prior experience. This course is also the primary reference for AnimeWorld's v2 roadmap — multi-product cart functionality and support for multiple concurrent orders.

**Understanding React — Tony Alicea (dontimitate.dev)**
https://dontimitate.dev/courses/react/
Approximately 50% complete. Modules covered: React app setup and source code, DOM and declarative programming, React Elements, JSX, Fiber and Reconciliation, Execution Context and pausing work, React DOM and rendering, Events, State, Hooks (State and Reducers), useEffect, and `use()` / fetching data (React 19+).

This course goes underneath the syntax covered by SuperSimpleDev's tutorial, into how React actually works internally — Fiber, reconciliation, and execution context in particular reframed how I reason about re-renders and state updates while building AnimeWorld's components.

---

### Books

Grinberg, M. (2018). *Flask web development: Developing web applications with Python* (2nd ed.). O'Reilly Media.

Referenced for Flask application structure, routing, and SQLAlchemy integration on the backend.

---

### Official Documentation

| Resource | URL |
|---|---|
| Tailwind CSS v4 (Vite installation) | https://tailwindcss.com/docs/installation/using-vite |
| React 19 release notes | https://react.dev/blog/2024/12/05/react-19 |

---

### General Reference

- MDN Web Docs — HTML, CSS, and JavaScript reference
- Stack Overflow — Debugging and implementation questions
- Google Search — General lookup and troubleshooting

---

## AI-Assisted Development Tools

| Tool | Usage |
|---|---|
| Claude (claude.ai) | React mentorship, code review, component architecture guidance, design direction for the ComingSoonCard holographic concept |
| Claude Code | In-editor AI assistance during development |
| GitHub Copilot | In-editor code completion and suggestions |
| Google Gemini Flash | AI image generation for all five package card images (see above) |

---

*Project: AnimeWorld — CKCS145 Final Project, The Chang School, Toronto Metropolitan University*
*Student: Bo Louie*
*Submitted: June 2026*
