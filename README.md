# UI Vault

**UI Vault** is a high-contrast, Neo-Brutalist (Comic-Style) component gallery and UI inspiration board. It provides a unique space to Collect, Remix, and Reuse UI components within a profoundly stylized, interactive environment.

## 🚀 Features
- **Authentic Comic-Style Theme:** Heavy inking borders (3px), deep drop shadows (6px+), classic halftone dot backgrounds, and ultra-vibrant interactive states.
- **Dynamic Component Library:** Filter through dozens of UI categories (Glass, Minimal, Neon, Cards, Retro, etc.) with a clean, horizontally scrollable tag interface.
- **Infinite Scrolling Background:** A massive, smooth-scrolling ambient background gallery displaying raw UI inspiration boards with high-contrast cinematic overlay.
- **Magnetic Interactions:** Silky smooth, physics-based magnetic hovering effects on key navigation and layout elements.
- **Zustand State Management:** Lightweight, predictable global state handling for filters and Vault queries.

## 🛠️ Built With
- **React 18** + **TypeScript**
- **Tailwind CSS** (Custom Neo-brutalist utilities configured in `tailwind.config.js` and `index.css`)
- **Framer Motion** (Physics-based animations and layout transitions)
- **Lenis** (Smooth scroll hijacking)
- **Zustand** (Global state management)
- **Vite** (Build tooling)

## 📦 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/bunnybot1121/UI-Vault.git
   ```
2. Navigate into the directory and install dependencies:
   ```bash
   npm install
   ```
3. Run the fast local development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` to view the Vault in your browser.

## 🎨 Styling Architecture
If you want to add your own components, simply wrap them with the global Neo-Brutalist classes to match the environment:
- `.neo-brutal` – A massive bordered container with a heavy bottom-right shadow.
- `.neo-btn` – An interactive button base that translates on click, removing the shadow for a "pressed" effect.
- `.neo-btn-dark` – The inverted, ultra-contrasting version of the standard button.

Happy building! ⚡
