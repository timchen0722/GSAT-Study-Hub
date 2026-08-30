const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Replace the :root variables
const newRoot = `:root {
  /* Primary Colors */
  --color-bg-primary: #fdfbf7;
  --color-bg-secondary: #f4f0e6;
  --color-bg-tertiary: #ebe5d9;
  --color-bg-card: #ffffff;
  --color-bg-card-hover: #fcfbfa;
  --color-bg-glass: rgba(255, 255, 255, 0.7);
  --color-bg-glass-hover: rgba(255, 255, 255, 0.9);

  /* Text Colors */
  --color-text-primary: #4a453f;
  --color-text-secondary: #6e675e;
  --color-text-muted: #9c958b;
  --color-text-accent: #9e6451;

  /* Accent Colors (Japanese muted palette) */
  --color-accent-gold: #c2a173;
  --color-accent-gold-light: #d6b78a;
  --color-accent-teal: #78928c;
  --color-accent-teal-light: #94b0a9;
  --color-accent-purple: #867994;
  --color-accent-pink: #bf868f;
  --color-accent-blue: #6d869a;
  --color-accent-green: #89a380;
  --color-accent-orange: #c4916a;
  --color-accent-red: #c26969;

  /* Subject Colors */
  --color-chinese: #c26969;
  --color-english: #6d869a;
  --color-math-a: #867994;
  --color-math-b: #a39178;
  --color-social: #89a380;
  --color-science: #c4916a;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #fdfbf7 0%, #f4f0e6 100%);
  --gradient-card: linear-gradient(135deg, #ffffff 0%, #fdfbf7 100%);
  --gradient-gold: linear-gradient(135deg, #c2a173 0%, #d6b78a 100%);
  --gradient-teal: linear-gradient(135deg, #78928c 0%, #94b0a9 100%);
  --gradient-hero: linear-gradient(180deg, #fdfbf7 0%, #f4f0e6 40%, #ebe5d9 100%);
  --gradient-glow: radial-gradient(circle at 50% 50%, rgba(194, 161, 115, 0.15) 0%, transparent 60%);

  /* Borders */
  --border-glass: 1px solid rgba(74, 69, 63, 0.08);
  --border-glass-strong: 1px solid rgba(74, 69, 63, 0.15);
  --border-accent: 1px solid rgba(194, 161, 115, 0.3);
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(74, 69, 63, 0.04);
  --shadow-md: 0 4px 16px rgba(74, 69, 63, 0.06);
  --shadow-lg: 0 8px 24px rgba(74, 69, 63, 0.08);
  --shadow-xl: 0 16px 40px rgba(74, 69, 63, 0.1);
  --shadow-glow-gold: 0 0 20px rgba(194, 161, 115, 0.2);
  --shadow-glow-teal: 0 0 20px rgba(120, 146, 140, 0.2);

  /* Typography */
  --font-sans: 'Noto Sans TC', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Consolas', monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  --font-size-6xl: 3.75rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 500ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Z-index */
  --z-base: 0;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}`;

css = css.replace(/:root\s*\{[\s\S]*?\/\*\s*Z-index\s*\*\/[\s\S]*?--z-toast:\s*500;\s*\}/, newRoot);

// 2. Replace RGBAs globally
const replacements = [
  { search: /rgba\(255, 255, 255,/g, replace: 'rgba(74, 69, 63,' }, // White alpha to dark brown alpha (for glass)
  { search: /rgba\(10, 10, 26,/g, replace: 'rgba(253, 251, 247,' }, // Navbar bg
  { search: /rgba\(26, 26, 62,/g, replace: 'rgba(255, 255, 255,' }, // Card bg
  { search: /rgba\(15, 52, 96,/g, replace: 'rgba(244, 240, 230,' }, // Card gradient end
  { search: /rgba\(0, 210, 211,/g, replace: 'rgba(120, 146, 140,' }, // Teal
  { search: /rgba\(226, 183, 20,/g, replace: 'rgba(194, 161, 115,' }, // Gold
  { search: /rgba\(168, 85, 247,/g, replace: 'rgba(134, 121, 148,' }, // Purple
  { search: /rgba\(59, 130, 246,/g, replace: 'rgba(109, 134, 154,' }, // Blue
  { search: /rgba\(34, 197, 94,/g, replace: 'rgba(137, 163, 128,' },  // Green
  { search: /rgba\(249, 115, 22,/g, replace: 'rgba(196, 145, 106,' }, // Orange
  { search: /rgba\(239, 68, 68,/g, replace: 'rgba(194, 105, 105,' },  // Red
  { search: /rgba\(0, 0, 0, 0\.3\)/g, replace: 'rgba(255, 255, 255, 0.5)' }, // Formula block background fix
  { search: /rgba\(0, 0, 0, 0\.4\)/g, replace: 'rgba(255, 255, 255, 0.7)' },
  { search: /rgba\(0, 0, 0, 0\.5\)/g, replace: 'rgba(255, 255, 255, 0.8)' },
  { search: /rgba\(0, 0, 0, 0\.7\)/g, replace: 'rgba(255, 255, 255, 0.9)' },
  { search: /rgba\(0, 0, 0, 0\.8\)/g, replace: 'rgba(253, 251, 247, 0.9)' }
];

replacements.forEach(({ search, replace }) => {
  css = css.replace(search, replace);
});

fs.writeFileSync(cssPath, css, 'utf8');
console.log('CSS transformed to Japanese minimalist warm style.');
