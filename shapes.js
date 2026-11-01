// Abstract vector shape placeholders
// Inspired by curvilinear modernist compositions (like the reference)
// Each returns SVG markup — these replace image placeholders across the site

const PALETTE = {
  yellow: '#F5D800',
  magenta: '#E8247C',
  blue: '#1E3FE8',
  red: '#E8382C',
  ink: '#0A0A0A',
  paper: '#F5F2EA',
  paper2: '#EDE8D9',
};

function shapeA(label = 'LN—01') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper2}"/>
    <path d="M-20 380 C 80 300, 160 420, 240 340 S 380 280, 420 360 L 420 520 L -20 520 Z" fill="${PALETTE.blue}"/>
    <circle cx="280" cy="180" r="120" fill="${PALETTE.magenta}"/>
    <path d="M60 100 Q 160 40, 240 100 T 360 120" stroke="${PALETTE.ink}" stroke-width="20" fill="none" stroke-linecap="round"/>
    <path d="M80 260 C 120 220, 180 280, 220 240" stroke="${PALETTE.yellow}" stroke-width="26" fill="none" stroke-linecap="round"/>
    <circle cx="120" cy="180" r="18" fill="${PALETTE.yellow}"/>
    <rect x="300" y="380" width="60" height="60" fill="${PALETTE.ink}"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeB(label = 'LN—02') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.yellow}"/>
    <path d="M60 60 L 340 60 L 340 440 L 60 440 Z" fill="none" stroke="${PALETTE.ink}" stroke-width="2"/>
    <path d="M60 200 Q 140 80, 220 200 T 340 280 Q 260 400, 180 300 T 60 320 Z" fill="${PALETTE.ink}"/>
    <circle cx="130" cy="150" r="40" fill="${PALETTE.magenta}"/>
    <path d="M220 340 L 310 250" stroke="${PALETTE.paper}" stroke-width="8"/>
    <text x="72" y="90" font-family="Instrument Serif, serif" font-size="44" fill="${PALETTE.ink}" font-style="italic">poster</text>
    <text x="72" y="420" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeC(label = 'LN—03') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper2}"/>
    <path d="M0 250 C 100 100, 200 400, 300 200 S 500 300, 400 250" fill="${PALETTE.magenta}"/>
    <path d="M40 80 C 140 40, 240 120, 340 60 L 340 180 C 240 240, 140 160, 40 200 Z" fill="${PALETTE.ink}"/>
    <circle cx="80" cy="400" r="60" fill="${PALETTE.yellow}"/>
    <circle cx="320" cy="420" r="30" fill="${PALETTE.blue}"/>
    <path d="M120 360 Q 200 300, 280 360" stroke="${PALETTE.ink}" stroke-width="3" fill="none"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeD(label = 'LN—04') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.ink}"/>
    <text x="40" y="140" font-family="Instrument Serif, serif" font-size="120" fill="${PALETTE.yellow}" font-style="italic" letter-spacing="-4">grito</text>
    <text x="40" y="240" font-family="Instrument Serif, serif" font-size="120" fill="${PALETTE.paper}" letter-spacing="-4">mudo</text>
    <circle cx="320" cy="360" r="80" fill="${PALETTE.magenta}"/>
    <path d="M50 380 L 160 380 M50 400 L 200 400 M50 420 L 140 420" stroke="${PALETTE.paper}" stroke-width="2"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.paper}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeE(label = 'LN—05') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.magenta}"/>
    <path d="M200 60 Q 320 180, 200 300 T 200 460" stroke="${PALETTE.ink}" stroke-width="40" fill="none" stroke-linecap="round"/>
    <path d="M200 60 Q 80 180, 200 300 T 200 460" stroke="${PALETTE.yellow}" stroke-width="40" fill="none" stroke-linecap="round"/>
    <circle cx="200" cy="250" r="30" fill="${PALETTE.paper}"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeF(label = 'LN—06') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper2}"/>
    <rect x="40" y="40" width="160" height="220" fill="${PALETTE.blue}"/>
    <rect x="220" y="80" width="140" height="140" fill="${PALETTE.yellow}"/>
    <rect x="60" y="280" width="300" height="180" fill="${PALETTE.ink}"/>
    <circle cx="300" cy="300" r="40" fill="${PALETTE.magenta}"/>
    <path d="M80 380 L 340 380" stroke="${PALETTE.paper}" stroke-width="2"/>
    <text x="80" y="360" font-family="Instrument Serif, serif" font-size="22" fill="${PALETTE.paper}">editorial layout</text>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeG(label = 'LN—07') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper}"/>
    <path d="M60 60 L 340 60 L 200 440 Z" fill="${PALETTE.red}"/>
    <path d="M60 60 L 340 60 L 200 440 Z" fill="none" stroke="${PALETTE.ink}" stroke-width="2"/>
    <circle cx="200" cy="250" r="70" fill="${PALETTE.ink}"/>
    <circle cx="200" cy="250" r="30" fill="${PALETTE.yellow}"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeH(label = 'LN—08') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.blue}"/>
    <circle cx="200" cy="250" r="180" fill="${PALETTE.paper}"/>
    <circle cx="200" cy="250" r="120" fill="${PALETTE.magenta}"/>
    <circle cx="200" cy="250" r="60" fill="${PALETTE.yellow}"/>
    <circle cx="200" cy="250" r="20" fill="${PALETTE.ink}"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.paper}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeI(label = 'LN—09') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper2}"/>
    <path d="M40 100 C 120 40, 280 160, 360 80 L 360 420 C 280 380, 120 460, 40 400 Z" fill="${PALETTE.ink}"/>
    <text x="50" y="220" font-family="Instrument Serif, serif" font-size="72" fill="${PALETTE.yellow}" font-style="italic">form</text>
    <text x="50" y="300" font-family="Instrument Serif, serif" font-size="72" fill="${PALETTE.magenta}">follows</text>
    <text x="50" y="380" font-family="Instrument Serif, serif" font-size="72" fill="${PALETTE.paper}" font-style="italic">feeling</text>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

function shapeJ(label = 'LN—10') {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.yellow}"/>
    <path d="M-20 0 L 420 0 L 420 260 L -20 120 Z" fill="${PALETTE.magenta}"/>
    <path d="M-20 260 L 420 260 L 420 420 L -20 380 Z" fill="${PALETTE.ink}"/>
    <circle cx="100" cy="340" r="40" fill="${PALETTE.paper}"/>
    <circle cx="200" cy="340" r="40" fill="${PALETTE.yellow}"/>
    <circle cx="300" cy="340" r="40" fill="${PALETTE.blue}"/>
    <text x="20" y="480" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.ink}" letter-spacing="2">${label}</text>
  </svg>`;
}

const SHAPES = [shapeA, shapeB, shapeC, shapeD, shapeE, shapeF, shapeG, shapeH, shapeI, shapeJ];

// Big portrait shape for about section
function portraitShape() {
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="500" fill="${PALETTE.paper2}"/>
    <path d="M80 120 C 120 60, 280 60, 320 120 L 320 260 C 320 320, 280 360, 200 360 C 120 360, 80 320, 80 260 Z" fill="${PALETTE.magenta}"/>
    <path d="M100 360 C 100 340, 300 340, 300 360 L 300 500 L 100 500 Z" fill="${PALETTE.ink}"/>
    <circle cx="160" cy="200" r="10" fill="${PALETTE.ink}"/>
    <circle cx="240" cy="200" r="10" fill="${PALETTE.ink}"/>
    <path d="M170 260 Q 200 280, 230 260" stroke="${PALETTE.ink}" stroke-width="4" fill="none" stroke-linecap="round"/>
    <text x="200" y="470" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="${PALETTE.paper}" letter-spacing="3">PORTRAIT — PLACEHOLDER</text>
  </svg>`;
}

// Case-study hero shape (wider)
function caseHero() {
  return `
  <svg viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="750" fill="${PALETTE.paper2}"/>
    <path d="M-40 200 C 200 60, 400 400, 600 200 S 1000 300, 1240 150 L 1240 820 L -40 820 Z" fill="${PALETTE.blue}"/>
    <circle cx="820" cy="300" r="220" fill="${PALETTE.magenta}"/>
    <circle cx="820" cy="300" r="100" fill="${PALETTE.yellow}"/>
    <path d="M100 150 Q 400 50, 700 150 T 1100 200" stroke="${PALETTE.ink}" stroke-width="6" fill="none"/>
    <rect x="80" y="560" width="360" height="140" fill="${PALETTE.ink}"/>
    <text x="110" y="640" font-family="Instrument Serif, serif" font-size="64" fill="${PALETTE.yellow}" font-style="italic">reinvención</text>
    <text x="40" y="720" font-family="JetBrains Mono, monospace" font-size="11" fill="${PALETTE.ink}" letter-spacing="3">CASE 001 — CLIENT: CAFÉ ITINERANTE</text>
  </svg>`;
}

function galleryShape(variant) {
  const variants = [
    `<rect width="600" height="450" fill="${PALETTE.magenta}"/><circle cx="300" cy="225" r="140" fill="${PALETTE.yellow}"/><path d="M100 380 L 500 380" stroke="${PALETTE.ink}" stroke-width="4"/>`,
    `<rect width="600" height="450" fill="${PALETTE.ink}"/><text x="60" y="280" font-family="Instrument Serif, serif" font-size="160" fill="${PALETTE.paper}" font-style="italic">café</text><rect x="400" y="80" width="100" height="100" fill="${PALETTE.yellow}"/>`,
    `<rect width="600" height="450" fill="${PALETTE.yellow}"/><path d="M0 200 C 100 100, 500 300, 600 150 L 600 450 L 0 450 Z" fill="${PALETTE.magenta}"/><circle cx="150" cy="150" r="60" fill="${PALETTE.ink}"/>`,
    `<rect width="600" height="450" fill="${PALETTE.paper2}"/><rect x="60" y="60" width="240" height="330" fill="${PALETTE.blue}"/><rect x="320" y="60" width="220" height="160" fill="${PALETTE.ink}"/><rect x="320" y="230" width="220" height="160" fill="${PALETTE.magenta}"/>`,
    `<rect width="600" height="450" fill="${PALETTE.magenta}"/><path d="M300 60 Q 500 225, 300 390 Q 100 225, 300 60 Z" fill="${PALETTE.ink}"/><circle cx="300" cy="225" r="50" fill="${PALETTE.yellow}"/>`,
  ];
  return `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${variants[variant % variants.length]}</svg>`;
}

window.SHAPES = SHAPES;
window.portraitShape = portraitShape;
window.caseHero = caseHero;
window.galleryShape = galleryShape;
