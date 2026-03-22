export const uiStyles = [
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    era: '2021 – present',
    tags: ['trending', '3d'],
    desc: 'Creates a frosted-glass illusion using background blur, transparency, and light borders on vivid gradient backgrounds. Popularized by Apple macOS Big Sur.',
    uses: ['Dashboard overlays', 'Auth modals', 'Music apps', 'Portfolio sites', 'Mobile UIs'],
    preview: `<div class="p-glass"><div class="glass-card"><div class="glass-avatar"></div><div class="glass-line"></div><div class="glass-line short"></div><div class="glass-btn">Follow</div></div></div>`,
    css: `.glass { background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.3); backdrop-filter: blur(12px); border-radius: 16px; }`
  },
  {
    id: 'neobrutalism',
    name: 'Neo-Brutalism',
    era: '2022 – present',
    tags: ['trending', 'playful'],
    desc: 'Deliberately bold and "raw" — thick black borders, hard drop shadows with no blur, flat bright colors.',
    uses: ['Startup landing pages', 'Creative portfolios', 'SaaS tools', 'Personal blogs', 'Gen-Z products'],
    preview: `<div class="p-nb"><div class="nb-box" style="background:#ffd60a">★</div><div style="display:flex;flex-direction:column;gap:8px"><div class="nb-big">Click me!</div></div></div>`,
    css: `.neo-btn { background: #ff6b35; color: #000; font-weight: 900; border: 2.5px solid #000; box-shadow: 4px 4px 0 #000; }`
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism (Soft UI)',
    era: '2020 – 2021',
    tags: ['3d', 'minimal'],
    desc: 'Elements appear to be extruded from or pressed into the background surface using dual soft shadows on a monochromatic background.',
    uses: ['Music players', 'Smart home apps', 'Fitness trackers', 'Calculator apps', 'Health dashboards'],
    preview: `<div class="p-neu"><div class="neu-card"><div class="neu-icon-c"></div><div class="neu-txt">Music</div></div><div style="display:flex;flex-direction:column;gap:12px;align-items:center"><div class="neu-slider"><div class="neu-thumb"></div></div></div></div>`,
    css: `.neu-raised { background: #e0e5ec; box-shadow: 6px 6px 12px #b8bec7, -6px -6px 12px #ffffff; }`
  },
  {
    id: 'skeuomorphism',
    name: 'Skeuomorphism',
    era: '2000s – 2013',
    tags: ['classic', 'retro', '3d'],
    desc: 'Mimics real-world textures and objects — leather, metal, wood, stitching, switches. Pioneered by Apple under Steve Jobs.',
    uses: ['Notes apps', 'Calendar apps', 'Audio plugins', 'Games', 'Productivity tools'],
    preview: `<div class="p-skeu"><div class="skeu-note"><div class="skeu-note-title">My Notes</div><div class="skeu-note-line"></div><div class="skeu-note-line"></div><div class="skeu-note-line"></div></div><div class="skeu-btn-r">Delete</div></div>`,
    css: `.skeu-btn { background: linear-gradient(180deg, #f5f5f0 0%, #d8d3c8 50%, #c8c3b8 100%); border: 1px solid #a8a398; box-shadow: 0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8); }`
  },
  {
    id: 'flat',
    name: 'Flat Design',
    era: '2013 – 2017',
    tags: ['classic', 'minimal'],
    desc: 'Radical simplification — no shadows, no gradients, no textures. Just clean geometry, solid colors, and simple iconography.',
    uses: ['Dashboards', 'Mobile apps', 'Web apps', 'Icon sets', 'Data visualization'],
    preview: `<div class="p-flat"><div class="flat-card-p"><div class="flat-icon-p"></div><div class="flat-num">128</div><div class="flat-lbl">USERS</div></div><div class="flat-card-g"><div class="flat-icon-p"></div><div class="flat-num">94%</div><div class="flat-lbl">UPTIME</div></div><div class="flat-card-r"><div class="flat-icon-p"></div><div class="flat-num">3.2k</div><div class="flat-lbl">SALES</div></div></div>`,
    css: `.flat-btn { background: #3498db; color: #fff; border: none; padding: 10px 20px; font-weight: 500; }`
  },
  {
    id: 'material',
    name: 'Material Design',
    era: '2014 – present',
    tags: ['classic'],
    desc: "Google's comprehensive design system. Based on the metaphor of physical paper and ink with realistic lighting and elevation via layered shadows.",
    uses: ['Android apps', 'Google products', 'Enterprise tools', 'Web apps', 'Cross-platform UI'],
    preview: `<div class="p-mat"><div class="mat-card-p"><div class="mat-media"></div><div class="mat-card-title">Material Design</div><div class="mat-card-sub">Elevation creates depth</div><div class="mat-chip-row"><span class="mat-chip-p">Primary</span><span class="mat-chip-p">Tag</span></div></div></div>`,
    css: `.elevation-3 { box-shadow: 0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08); }`
  },
  {
    id: 'minimalism',
    name: 'Minimalism',
    era: '1990s – present',
    tags: ['classic', 'minimal'],
    desc: 'Maximum whitespace, minimum elements. Typography is the design. Every element earns its place.',
    uses: ['Editorial / blogs', 'Luxury brands', 'Portfolios', 'Landing pages', 'Documentation'],
    preview: `<div class="p-min"><div class="min-comp"><div class="min-eyebrow">Collection 2025</div><div class="min-big-text">Less is more.</div><div class="min-divider"></div><div class="min-body-text">Clarity through restraint. Every pixel justified.</div></div></div>`,
    css: `.min-rule { height: 2px; background: #111; width: 40px; margin: 24px 0; }`
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    era: '2022 – present',
    tags: ['trending', 'playful', '3d'],
    desc: 'Inflated, puffy 3D shapes that look like clay or rubber toys. Achieved with a thick bottom shadow, rounded corners, and bright saturated colors.',
    uses: ['Games / apps', "Children's apps", 'Fintech for Gen-Z', 'Onboarding flows', '3D icon sets'],
    preview: `<div class="p-clay"><div class="clay-c p">🎵</div><div class="clay-c b">⚡</div><div class="clay-c y">🌟</div><div class="clay-btn-p">Play</div></div>`,
    css: `.clay-btn { background: #a855f7; box-shadow: 0 8px 0 #7c22b8, 0 10px 20px rgba(0, 0, 0, 0.15); }`
  },
  {
    id: 'retro-y2k',
    name: 'Retro / Y2K',
    era: '1995–2005, revived 2023',
    tags: ['retro', 'playful'],
    desc: 'Windows 95 chrome, beveled buttons, system fonts, pixel-perfect inset/outset borders. Now a popular nostalgia-driven aesthetic.',
    uses: ['Nostalgia brands', 'Game UIs', 'Creative agencies', 'Art projects', 'Gen-Z fashion'],
    preview: `<div class="p-retro"><div class="win95"><div class="win95-bar"><span>My Computer</span><div class="win95-btn">_</div><div class="win95-btn">□</div><div class="win95-btn">✕</div></div><div class="win95-body"><div class="win95-lbl">Loading...</div><div class="win95-progress-wrap"><div class="win95-progress"></div></div></div><div class="win95-foot"><div class="win95-foot-btn">OK</div><div class="win95-foot-btn">Cancel</div></div></div></div>`,
    css: `.win95-raised { border-top: 2px solid #ffffff; border-left: 2px solid #ffffff; border-right: 2px solid #808080; border-bottom: 2px solid #808080; background: #c0c0c0; }`
  },
  {
    id: 'dark-elegance',
    name: 'Dark Mode Elegance',
    era: '2019 – present',
    tags: ['dark', 'minimal', 'trending'],
    desc: 'Premium dark surfaces with precise borders, muted accent colors, and subtle glows. Popular in dashboards, dev tools, and financial products.',
    uses: ['Analytics dashboards', 'Developer tools', 'Crypto / trading', 'SaaS tools', 'Music apps'],
    preview: `<div class="p-dark"><div class="dark-stat"><div class="dark-stat-lbl">Revenue</div><div class="dark-stat-val">$4.2k</div><div class="dark-stat-badge up">↑ 12.4%</div></div><div><div class="dark-graph"><div class="dark-bar" style="height:40%;background:#2a2a2a"></div><div class="dark-bar" style="height:65%;background:#2a2a2a"></div><div class="dark-bar" style="height:45%;background:#2a2a2a"></div><div class="dark-bar" style="height:80%;background:#4ade80"></div><div class="dark-bar" style="height:60%;background:#2a2a2a"></div><div class="dark-bar" style="height:90%;background:#4ade80"></div><div class="dark-bar" style="height:70%;background:#2a2a2a"></div></div></div></div>`,
    css: `.dark-card { background: #141414; border: 1px solid #242424; border-radius: 12px; }`
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk / Neon',
    era: '2020 – present',
    tags: ['dark', 'trending'],
    desc: 'Neon colors on dark backgrounds, grid lines, glitch effects, angular clipping.',
    uses: ['Gaming products', 'Crypto / NFT', 'Tech brands', 'Event pages', 'Futuristic UIs'],
    preview: `<div class="p-cyber"><div class="cyber-card"><div class="cyber-tag">SYS // ACCESS</div><div class="cyber-title">NEON</div><div class="cyber-sub">Grid interface v2.77</div><div class="cyber-btn">CONNECT</div><div class="cyber-bar-wrap"><div class="cyber-bar-bg"><div class="cyber-bar-fill"></div></div></div></div></div>`,
    css: `.cyber-card { border: 1px solid #00fff7; background: rgba(0, 255, 247, 0.03); clip-path: polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px); }`
  },
  {
    id: 'aurora',
    name: 'Aurora / Gradient Mesh',
    era: '2022 – present',
    tags: ['trending', 'dark'],
    desc: 'Overlapping radial gradient blobs ("mesh gradients") create soft, luminous backgrounds.',
    uses: ['SaaS hero sections', 'AI product pages', 'Creative tools', 'Portfolio sites', 'App stores'],
    preview: `<div class="p-aurora"><div class="aurora-blob a"></div><div class="aurora-blob b"></div><div class="aurora-blob c"></div><div class="aurora-card"><div class="aurora-title">Aurora UI</div><div class="aurora-sub">Mesh gradient magic</div><div class="aurora-progress"><div class="aurora-fill a"></div></div><div class="aurora-progress"><div class="aurora-fill b"></div></div></div></div>`,
    css: `.aurora-bg { background-image: radial-gradient(ellipse at 20% 30%, rgba(124, 58, 237, 0.6) 0%, transparent 50%); }`
  },
  {
    id: 'memphis',
    name: 'Memphis Design',
    era: '1980s, revived 2018+',
    tags: ['retro', 'playful'],
    desc: 'Bold geometric shapes, clashing colors, squiggly lines, and polka dots. Born in 1980s Italian design.',
    uses: ['Fashion brands', 'Music events', 'Art projects', "Children's products", 'Bold marketing'],
    preview: `<div class="p-memphis"><div class="memphis-bg"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="8" fill="#ff6b35" opacity=".7"/><rect x="160" y="10" width="20" height="20" fill="#ffd60a" opacity=".8"/><circle cx="260" cy="140" r="12" fill="#a855f7" opacity=".6"/><line x1="0" y1="60" x2="340" y2="60" stroke="#00c2cb" stroke-width="2" opacity=".4"/><line x1="0" y1="120" x2="340" y2="120" stroke="#ff2d95" stroke-width="2" opacity=".4"/><circle cx="300" cy="40" r="5" fill="#000" opacity=".3"/><circle cx="60" cy="140" r="6" fill="#ffd60a" opacity=".6"/><rect x="10" y="100" width="14" height="14" fill="#ff2d95" transform="rotate(25,17,107)" opacity=".6"/></svg></div><div class="memphis-card"><div class="memphis-card-title">MEMPHIS '84</div><div class="memphis-tag-row"><div class="mem-tag" style="background:#ffd60a">BOLD</div><div class="mem-tag" style="background:#ff6b35;color:#fff">RAW</div></div></div></div>`,
    css: `.memphis-card { border: 3px solid #000; padding: 16px; box-shadow: 6px 6px 0 #000; }`
  },
  {
    id: 'swiss',
    name: 'Swiss / International',
    era: '1950s – present',
    tags: ['classic', 'minimal'],
    desc: 'Rigid grid systems, asymmetric layouts, Helvetica/sans-serif typography, bold red accents, and brutally clean hierarchy.',
    uses: ['Design agencies', 'Museum / gallery', 'Editorial design', 'Brand identity', 'Typography-first sites'],
    preview: `<div class="p-swiss"><div class="swiss-comp"><div class="swiss-red"></div><div class="swiss-headline">Swiss Design</div><div class="swiss-rule"></div><div class="swiss-body">Grid systems. Rational typography. Objective photography. Universal communication.</div></div></div>`,
    css: `.swiss-headline { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 900; letter-spacing: -2px; }`
  },
  {
    id: 'bento',
    name: 'Bento Box Grid',
    era: '2023 – present',
    tags: ['trending', 'minimal'],
    desc: 'Asymmetric grid layouts where cards of varying sizes tile together like a Japanese bento box.',
    uses: ['Feature showcases', 'Portfolio grids', 'App landing pages', 'Keynote slides', 'Dashboard layouts'],
    preview: `<div class="p-bento"><div class="bento-grid"><div class="bento-item b1">Hello, World.</div><div class="bento-item b2">🚀</div><div class="bento-item b3">✦</div><div class="bento-item b4">v2.0 — now live</div><div class="bento-item b5">···</div></div></div>`,
    css: `.bento-card.wide { grid-column: span 2; }`
  },
  {
    id: 'cyberpunk-glitch',
    name: 'Cyberpunk Glitch',
    era: 'Current',
    tags: ["neon","glitch","gaming"],
    desc: 'An auto-generated beautiful implementation for the Cyberpunk Glitch aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-cyberpunk-glitch">
  <div class="card-cyberpunk-glitch">
    <h3>Cyberpunk Glitch</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-cyberpunk-glitch { background: #000; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'retro-synthwave',
    name: 'Retro Synthwave',
    era: 'Current',
    tags: ["80s","retro","gradient"],
    desc: 'An auto-generated beautiful implementation for the Retro Synthwave aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-retro-synthwave">
  <button class="btn-retro-synthwave">Retro Synthwave</button>
</div>`,
    css: `.p-retro-synthwave { background: #2b00ff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'cosmic-ui',
    name: 'Cosmic UI',
    era: 'Current',
    tags: ["space","stars","dark"],
    desc: 'An auto-generated beautiful implementation for the Cosmic UI aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-cosmic-ui">
  <div class="box-cosmic-ui">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-cosmic-ui { background: #0b0c10; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'holographic-card',
    name: 'Holographic Card',
    era: 'Current',
    tags: ["3d","hologram","glass"],
    desc: 'An auto-generated beautiful implementation for the Holographic Card aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-holographic-card">
  <div class="card-holographic-card">
    <h3>Holographic Card</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-holographic-card { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'blob-morphing',
    name: 'Blob Morphing',
    era: 'Current',
    tags: ["organic","animation","soft"],
    desc: 'An auto-generated beautiful implementation for the Blob Morphing aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-blob-morphing">
  <button class="btn-blob-morphing">Blob Morphing</button>
</div>`,
    css: `.p-blob-morphing { background: #fdfbfb; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'geometric-abstract',
    name: 'Geometric Abstract',
    era: 'Current',
    tags: ["shapes","modern","art"],
    desc: 'An auto-generated beautiful implementation for the Geometric Abstract aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-geometric-abstract">
  <div class="box-geometric-abstract">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-geometric-abstract { background: #fff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'frosted-matte',
    name: 'Frosted Matte',
    era: 'Current',
    tags: ["matte","modern","clean"],
    desc: 'An auto-generated beautiful implementation for the Frosted Matte aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-frosted-matte">
  <div class="card-frosted-matte">
    <h3>Frosted Matte</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-frosted-matte { background: #e0e5ec; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'aurora-gradient',
    name: 'Aurora Gradient',
    era: 'Current',
    tags: ["colorful","gradient","mesh"],
    desc: 'An auto-generated beautiful implementation for the Aurora Gradient aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-aurora-gradient">
  <button class="btn-aurora-gradient">Aurora Gradient</button>
</div>`,
    css: `.p-aurora-gradient { background: #ff9a9e; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'minimalist-wire',
    name: 'Minimal Wireframe',
    era: 'Current',
    tags: ["minimal","lines","tech"],
    desc: 'An auto-generated beautiful implementation for the Minimal Wireframe aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-minimalist-wire">
  <div class="box-minimalist-wire">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-minimalist-wire { background: #fff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'pastel-pop',
    name: 'Pastel Pop',
    era: 'Current',
    tags: ["cute","colors","soft"],
    desc: 'An auto-generated beautiful implementation for the Pastel Pop aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-pastel-pop">
  <div class="card-pastel-pop">
    <h3>Pastel Pop</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-pastel-pop { background: #ffecd2; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'brutalist-shadow',
    name: 'Brutalist Shadow',
    era: 'Current',
    tags: ["bold","shadow","retro"],
    desc: 'An auto-generated beautiful implementation for the Brutalist Shadow aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-brutalist-shadow">
  <button class="btn-brutalist-shadow">Brutalist Shadow</button>
</div>`,
    css: `.p-brutalist-shadow { background: #ffeb3b; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'clean-scandi',
    name: 'Clean Scandinavian',
    era: 'Current',
    tags: ["white","wood","minimal"],
    desc: 'An auto-generated beautiful implementation for the Clean Scandinavian aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-clean-scandi">
  <div class="box-clean-scandi">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-clean-scandi { background: #fafafa; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'liquid-morph',
    name: 'Liquid Morph',
    era: 'Current',
    tags: ["liquid","animation","cool"],
    desc: 'An auto-generated beautiful implementation for the Liquid Morph aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-liquid-morph">
  <div class="card-liquid-morph">
    <h3>Liquid Morph</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-liquid-morph { background: #4facfe; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'neon-outlines',
    name: 'Neon Outlines',
    era: 'Current',
    tags: ["neon","dark","border"],
    desc: 'An auto-generated beautiful implementation for the Neon Outlines aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-neon-outlines">
  <button class="btn-neon-outlines">Neon Outlines</button>
</div>`,
    css: `.p-neon-outlines { background: #000; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'elegant-mono',
    name: 'Elegant Monospace',
    era: 'Current',
    tags: ["typography","clean","tech"],
    desc: 'An auto-generated beautiful implementation for the Elegant Monospace aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-elegant-mono">
  <div class="box-elegant-mono">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-elegant-mono { background: #111; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'dark-elegant',
    name: 'Dark Elegant',
    era: 'Current',
    tags: ["premium","gold","black"],
    desc: 'An auto-generated beautiful implementation for the Dark Elegant aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-dark-elegant">
  <div class="card-dark-elegant">
    <h3>Dark Elegant</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-dark-elegant { background: #000; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'pixel-8bit',
    name: 'Pixel Art 8-bit',
    era: 'Current',
    tags: ["gaming","retro","pixel"],
    desc: 'An auto-generated beautiful implementation for the Pixel Art 8-bit aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-pixel-8bit">
  <button class="btn-pixel-8bit">Pixel Art 8-bit</button>
</div>`,
    css: `.p-pixel-8bit { background: #8b9bb4; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'industrial-metal',
    name: 'Industrial Metal',
    era: 'Current',
    tags: ["textures","grey","heavy"],
    desc: 'An auto-generated beautiful implementation for the Industrial Metal aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-industrial-metal">
  <div class="box-industrial-metal">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-industrial-metal { background: #434343; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'velvet-texture',
    name: 'Velvet Texture',
    era: 'Current',
    tags: ["soft","fabric","luxury"],
    desc: 'An auto-generated beautiful implementation for the Velvet Texture aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-velvet-texture">
  <div class="card-velvet-texture">
    <h3>Velvet Texture</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-velvet-texture { background: #800020; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'floating-soft',
    name: 'Floating Soft UI',
    era: 'Current',
    tags: ["shadows","airy","light"],
    desc: 'An auto-generated beautiful implementation for the Floating Soft UI aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-floating-soft">
  <button class="btn-floating-soft">Floating Soft UI</button>
</div>`,
    css: `.p-floating-soft { background: #f0f2f5; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'futuristic-dash',
    name: 'Futuristic Dash',
    era: 'Current',
    tags: ["sci-fi","hud","data"],
    desc: 'An auto-generated beautiful implementation for the Futuristic Dash aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-futuristic-dash">
  <div class="box-futuristic-dash">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-futuristic-dash { background: #001a33; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'typo-hero',
    name: 'Typographic Hero',
    era: 'Current',
    tags: ["big-text","bold","design"],
    desc: 'An auto-generated beautiful implementation for the Typographic Hero aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-typo-hero">
  <div class="card-typo-hero">
    <h3>Typographic Hero</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-typo-hero { background: #fff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'grid-construct',
    name: 'Grid Construct',
    era: 'Current',
    tags: ["blueprint","architect","structure"],
    desc: 'An auto-generated beautiful implementation for the Grid Construct aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-grid-construct">
  <button class="btn-grid-construct">Grid Construct</button>
</div>`,
    css: `.p-grid-construct { background: #0055ff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: '3d-bevel',
    name: '3D Bevel',
    era: 'Current',
    tags: ["buttons","tactile","retro"],
    desc: 'An auto-generated beautiful implementation for the 3D Bevel aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-3d-bevel">
  <div class="box-3d-bevel">
    <div class="inner"></div>
  </div>
</div>`,
    css: `.p-3d-bevel { background: #dcdcdc; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'trans-hologram',
    name: 'Transparent Hologram',
    era: 'Current',
    tags: ["glass","future","light"],
    desc: 'An auto-generated beautiful implementation for the Transparent Hologram aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-trans-hologram">
  <div class="card-trans-hologram">
    <h3>Transparent Hologram</h3>
    <button>Action</button>
  </div>
</div>`,
    css: `.p-trans-hologram { background: #1a1a2e; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  },
  {
    id: 'midnight-gloss',
    name: 'Midnight Gloss',
    era: 'Current',
    tags: ["shiny","dark","sleek"],
    desc: 'An auto-generated beautiful implementation for the Midnight Gloss aesthetic.',
    uses: ['Dashboard components', 'Hero sections', 'Cards'],
    preview: `<div class="p-midnight-gloss">
  <button class="btn-midnight-gloss">Midnight Gloss</button>
</div>`,
    css: `.p-midnight-gloss { background: #121212; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }`
  }
];
