const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const newRoot = `:root {
  /* Primary Colors - Muji Light */
  --color-bg-primary: #fcfcfc;
  --color-bg-secondary: #f3f1ec;
  --color-bg-tertiary: #e8e4db;
  --color-bg-card: #ffffff;
  --color-bg-card-hover: #fafafa;
  --color-bg-glass: #ffffff;
  --color-bg-glass-hover: #fdfdfd;

  /* Text Colors - High Contrast */
  --color-text-primary: #2d2d2d;
  --color-text-secondary: #5c5c5c;
  --color-text-muted: #888888;
  --color-text-accent: #6b7a5a;

  /* Accent Colors (Muji palette) */
  --color-accent-gold: #c1a986;
  --color-accent-gold-light: #d8c6a8;
  --color-accent-teal: #7c9593;
  --color-accent-teal-light: #9db2b0;
  --color-accent-purple: #968c9c;
  --color-accent-pink: #cc9999;
  --color-accent-blue: #728c9e;
  --color-accent-green: #88a07c;
  --color-accent-orange: #c49170;
  --color-accent-red: #c07a7a;

  /* Subject Colors */
  --color-chinese: #c07a7a;
  --color-english: #728c9e;
  --color-math-a: #968c9c;
  --color-math-b: #bda282;
  --color-social: #88a07c;
  --color-science: #c49170;

  /* Gradients - Flat and clean */
  --gradient-primary: linear-gradient(135deg, #fcfcfc 0%, #f3f1ec 100%);
  --gradient-card: #ffffff;
  --gradient-gold: linear-gradient(135deg, #c1a986 0%, #d8c6a8 100%);
  --gradient-teal: linear-gradient(135deg, #88a07c 0%, #a4bfa3 100%); /* Swapped to matcha */
  --gradient-hero: linear-gradient(180deg, #f3f1ec 0%, #fcfcfc 100%);
  --gradient-glow: none;

  /* Borders */
  --border-glass: 1px solid #eaeaea;
  --border-glass-strong: 1px solid #dcdcdc;
  --border-accent: 1px solid rgba(136, 160, 124, 0.4);
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-full: 9999px;

  /* Shadows - Crisp */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.06);
  --shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.08);
  --shadow-glow-gold: 0 4px 12px rgba(193, 169, 134, 0.2);
  --shadow-glow-teal: 0 4px 12px rgba(136, 160, 124, 0.2);

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

// 1. Replace the entire :root
css = css.replace(/:root\s*\{[\s\S]*?\/\*\s*Z-index\s*\*\/[\s\S]*?--z-toast:\s*500;\s*\}/, newRoot);

// 2. Remove backdrop-filter (glassmorphism is ugly on white themes unless done perfectly, solid is better for Muji)
css = css.replace(/backdrop-filter:\s*blur\([^)]+\);?/g, '');
css = css.replace(/-webkit-backdrop-filter:\s*blur\([^)]+\);?/g, '');

// 3. Fix the weird muddy background colors that might have been hardcoded previously
// (In previous step, we replaced white glass with rgba(74, 69, 63, x). Let's remove those hardcoded RGBA if they are applied to backgrounds where var(--color-bg-card) is better)
css = css.replace(/background:\s*rgba\(74,\s*69,\s*63,\s*0\.7\);/g, 'background: var(--color-bg-card);');
css = css.replace(/background:\s*rgba\(74,\s*69,\s*63,\s*0\.8\);/g, 'background: var(--color-bg-card);');
css = css.replace(/background:\s*rgba\(74,\s*69,\s*63,\s*0\.9\);/g, 'background: var(--color-bg-card);');
css = css.replace(/background:\s*rgba\(74,\s*69,\s*63,\s*0\.08\);/g, 'background: var(--color-bg-secondary);'); // Extremely muddy grey

// Fix borders that used the muddy grey
css = css.replace(/border:\s*1px\s*solid\s*rgba\(74,\s*69,\s*63,\s*0\.08\);/g, 'border: var(--border-glass);');
css = css.replace(/border:\s*1px\s*solid\s*rgba\(74,\s*69,\s*63,\s*0\.15\);/g, 'border: var(--border-glass-strong);');

// The hero pseudo elements (radial gradients) should be removed entirely for a cleaner Muji look
css = css.replace(/body::before\s*\{[\s\S]*?\}/g, 'body::before { display: none; }');
css = css.replace(/body::after\s*\{[\s\S]*?\}/g, 'body::after { display: none; }');

// Button text color for primary buttons (Muji buttons should have white text if background is wood/matcha)
// Let's ensure .btn-primary has color: white (or light)
css = css.replace(/\.btn-primary\s*\{([^}]*)\}/, (match, inner) => {
  if (!inner.includes('color:')) {
    return `.btn-primary {${inner} color: #ffffff; }`;
  } else {
    return match.replace(/color:\s*[^;]+;/, 'color: #ffffff;');
  }
});

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Applied Muji Light Theme to style.css');
