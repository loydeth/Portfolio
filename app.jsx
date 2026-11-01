// Main React app — Portafolio Loydeth Núñez

const { useState, useEffect, useRef } = React;

// ---------- TICKER ----------
function Ticker({ items, reverse = false }) {
  const content = (
    <span>
      {items.map((t, i) => (
        <React.Fragment key={i}>
          {t}
          <span className="dot" />
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="ticker">
      <div className={`ticker-track ${reverse ? 'reverse' : ''}`}>
        {content}{content}{content}{content}
      </div>
    </div>
  );
}

// ---------- NAV ----------
function ModeToggle() {
  const [mode, setMode] = React.useState(document.documentElement.dataset.mode || 'light');
  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.mode = next;
    localStorage.setItem('loy-mode', next);
    setMode(next);
  };
  const dark = mode === 'dark';
  return (
    <button className="mode-toggle" onClick={toggle} aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} title={dark ? 'Modo claro' : 'Modo oscuro'}>
      <span className="mode-dot" aria-hidden="true"></span>{dark ? 'Claro' : 'Oscuro'}
    </button>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="logo"><span className="logo-mark" aria-hidden="true"></span>Loydeth Núñez<sup style={{fontSize:10, marginLeft:4}}>©</sup></a>
      <ul>
        <li><a href="#work" data-num="01">Portafolio</a></li>
        <li><a href="#case" data-num="02">Proyectos</a></li>
        <li><a href="#cm" data-num="03">Redes</a></li>
        <li><a href="#services" data-num="04">Servicios</a></li>
        <li><a href="#about" data-num="05">Sobre mí</a></li>
        <li><a href="#contact" data-num="06">Contacto</a></li>
      </ul>
      <ModeToggle />
    </nav>
  );
}

// ---------- ABSTRACT FLOATING SHAPES (hero bg) ----------
function HeroShapes() {
  return (
    <div className="shapes">
      {/* big magenta blob */}
      <svg className="shape float" style={{top:'10%', right:'4%', width:220, height:220}} viewBox="0 0 200 200">
        <path d="M100 10 C 160 10, 190 60, 190 120 C 190 170, 140 195, 90 190 C 30 185, 10 140, 15 90 C 20 40, 50 10, 100 10 Z" fill="var(--accent)"/>
      </svg>
      {/* yellow circle */}
      <svg className="shape drift" style={{top:'14%', left:'24%', width:56, height:56}} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="var(--accent-2)"/>
      </svg>
      {/* blue squiggle */}
      <svg className="shape" style={{bottom:'6%', right:'38%', width:140, height:60}} viewBox="0 0 200 80">
        <path d="M10 40 Q 50 5, 90 40 T 170 40" stroke="#1E3FE8" strokeWidth="10" fill="none" strokeLinecap="round"/>
      </svg>
      {/* black arc */}
      <svg className="shape spin" style={{top:'64%', left:'6%', width:100, height:100}} viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#0A0A0A" strokeWidth="2" fill="none" strokeDasharray="4 6"/>
      </svg>
      {/* tiny star */}
      <svg className="shape float" style={{bottom:'25%', right:'20%', width:60, height:60, animationDelay:'1s'}} viewBox="0 0 60 60">
        <path d="M30 5 L 36 22 L 55 22 L 40 34 L 46 52 L 30 42 L 14 52 L 20 34 L 5 22 L 24 22 Z" fill="#0A0A0A"/>
      </svg>
    </div>
  );
}

// ---------- HERO ----------
function Hero() {
  return (
    <section className="hero" id="top">
      <HeroShapes />
      <div className="hero-grid">
        <div className="meta-col">
          <div className="stack">
            <span className="mono">N.º 01 — 2026</span>
            <span className="mono">Panamá · +4 años</span>
            <p>Diseñadora gráfica de profesión y creadora visual por vocación.</p>
            <span className="sticker">DISPONIBLE PARA PROYECTOS</span>
          </div>
        </div>
        <div className="title-col">
          <h1>
            diseño<br/>
            con <em>mucho</em><br/>
            <span className="stroke">carácter</span> <span className="slash">/</span>
          </h1>
          <div className="hero-sub">
            <p>
              Soy <b>Loydeth Núñez</b>. Transformo la personalidad de las marcas en propuestas visuales que de verdad conecten con la gente, uniendo diseño, estrategia de contenido y comunicación digital.
            </p>
            <a href="#work" className="cta">
              Ver el trabajo <span className="arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const SERVICES = [
  { n: "01", t: "Identidad de marca", d: "Sistemas de marca completos — logo, manual, paleta, tipografías, tono y aplicaciones. Desde cero o rediseños." },
  { n: "02", t: "Contenido para redes", d: "Diseño de contenido B2B y B2C para redes sociales: plantillas, carruseles, reels, estrategia visual mensual." },
  { n: "03", t: "Diseño editorial", d: "Revistas, reportes anuales, catálogos, piezas impresas. Composición tipográfica y maquetación con ritmo editorial." },
  { n: "04", t: "Dirección de arte", d: "Conceptualización y dirección creativa de campañas, sesiones fotográficas y proyectos multi-canal." },
  { n: "05", t: "Manuales de marca", d: "Guidelines claros, usables y bonitos. Para que el equipo interno y cualquier proveedor mantengan la marca." },
];

function Services() {
  return (
    <section className="services" id="services">
      <header className="section-head">
        <div>
          <span className="section-num">§ 04 — SERVICIOS</span>
          <h2>lo que <em>hago</em><br/>y cómo lo hago.</h2>
        </div>
        <div className="side">
          05 servicios<br/>
          diseño · contenido<br/>
          estrategia
        </div>
      </header>
      <div className="s-list">
        {SERVICES.map(s => (
          <div key={s.n} className="s-item reveal">
            <span className="num">{s.n}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
            <span className="plus">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  return (
    <section className="about" id="about">
      <header className="section-head" style={{padding: '0 0 20px', border:'none'}}>
        <div>
          <span className="section-num">§ 05 — SOBRE MÍ</span>
        </div>
        <div className="side">
          Panamá · Rep. Dominicana<br/>
          +4 años · Diseño · Contenido
        </div>
      </header>
      <div className="about-grid">
        <div className="portrait reveal">
          <span className="portrait-disc float"></span>
          <img src="assets/loy/foto-recorte-v2.png" alt="Loydeth Núñez" />
          <span className="portrait-tag">Loydeth Núñez · Diseñadora gráfica</span>
        </div>
        <div className="bio reveal">
          <span className="eyebrow">Hola, soy Loy —</span>
          <h2>
            hago que las marcas se <em>vean</em><br/>
            como se <em>sienten</em>.
          </h2>
          <p>
            Diseñadora Gráfica de profesión y creadora visual por vocación. Cuento con más de 4 años de experiencia transformando la personalidad de las marcas en propuestas visuales que de verdad conecten con la gente.
          </p>
          <p>
            A lo largo de mi trayectoria me he desarrollado de forma muy integral: no solo diseño, sino que también estructuro estrategias de contenido, gestiono la comunicación digital para cuentas corporativas en Panamá y República Dominicana, y cuido cada detalle visual. Me encanta ser esa aliada creativa donde la estética, la estrategia y el propósito se unen en un solo lugar.
          </p>
          <p>
            Cuando no estoy diseñando, me gusta conectar con mi lado creativo a través del dibujo, la pintura y el maquillaje artísticos. Creo que mantener viva esa chispa creativa fuera del trabajo es lo que me permite aportar ideas frescas y con personalidad a cada proyecto.
          </p>
          <p className="bio-close">¡Bienvenido a mi espacio! Pasa a ver mi trabajo y conversemos para llevar tu marca al siguiente nivel.</p>
          <div className="stats">
            <div className="stat"><div className="big">4+</div><div className="lbl">Años de experiencia</div></div>
            <div className="stat"><div className="big">02</div><div className="lbl">Países · Panamá y RD</div></div>
            <div className="stat"><div className="big">∞</div><div className="lbl">Cafés</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT ----------
function Contact() {
  return (
    <section className="contact" id="contact">
      <span className="section-num">§ 06 — HABLEMOS</span>
      <h2>
        ¿hacemos<br/>
        <span className="stroke">algo</span> <em>juntos</em>?
      </h2>
      <div className="contact-grid">
        <div className="col-lead">
          <p>Proyectos, colaboraciones y dirección de arte. Conversemos para llevar tu marca al siguiente nivel.</p>
        </div>
        <div className="col-mail">
          <a href="mailto:loydeth16@gmail.com">loydeth16@gmail.com</a>
        </div>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/design_loy/" target="_blank" rel="noopener">Instagram ↗</a>
        <a href="https://www.linkedin.com/in/loydeth/" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="https://www.behance.net/Loydeth/moodboards" target="_blank" rel="noopener">Behance ↗</a>
      </div>
      <div className="footer-bar">
        <span>© 2026 Loydeth Núñez — Hecho con tinta y café.</span>
        <span>Panamá / PAN</span>
      </div>
    </section>
  );
}

// ---------- TWEAKS ----------
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "variant": "a",
  "theme": "magenta",
  "cursor": true,
  "grain": true,
  "grid": true
}/*EDITMODE-END*/;

function TweaksPanel({ state, setState, editMode }) {
  if (!editMode) return null;
  const set = (k, v) => {
    const next = { ...state, [k]: v };
    setState(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };
  return (
    <div className="tweaks-panel open">
      <h4>Tweaks</h4>

      <div className="group">
        <div className="group-label">Variación</div>
        <div className="opts">
          {['a','b','c'].map(v => (
            <button key={v} className={state.variant===v?'active':''} onClick={()=>set('variant', v)}>
              {v.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="group">
        <div className="group-label">Paleta de acento</div>
        <div className="opts">
          {['magenta','blue','yellow'].map(v => (
            <button key={v} className={state.theme===v?'active':''} onClick={()=>set('theme', v)}>
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="group">
        <div className="group-label">Efectos</div>
        <div className="opts">
          <button className={state.cursor?'active':''} onClick={()=>set('cursor', !state.cursor)}>Cursor</button>
          <button className={state.grain?'active':''} onClick={()=>set('grain', !state.grain)}>Grano</button>
          <button className={state.grid?'active':''} onClick={()=>set('grid', !state.grid)}>Grid</button>
        </div>
      </div>
    </div>
  );
}

// ---------- CUSTOM CURSOR ----------
function CustomCursor({ enabled }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    const move = (e) => {
      if (!el) return;
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    const over = (e) => {
      if (!el) return;
      if (e.target.closest('a, button, .project, .s-item')) el.classList.add('big');
      else el.classList.remove('big');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [enabled]);
  if (!enabled) return null;
  return <div ref={ref} className="custom-cursor" />;
}

// ---------- REVEAL OBSERVER ----------
function useRevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

// ---------- APP ----------
function App() {
  const [state, setState] = useState(DEFAULTS);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  useEffect(() => {
    document.body.className = `theme-${state.theme} variant-${state.variant}`;
  }, [state.theme, state.variant]);

  useRevealObserver();

  return (
    <>
      {state.grid && <div className="grid-bg" />}
      {state.grain && <div className="grain" />}
      <CustomCursor enabled={state.cursor} />

      <Nav />
      <Hero />
      <Ticker items={[
        <span key="1">diseño editorial</span>,
        <span key="2">branding</span>,
        <span key="3">social content</span>,
        <span key="4">dirección de arte</span>,
        <span key="5">manual de marca</span>,
        <span key="6">tipografía</span>,
      ]} />
      <Portfolio />
      <Case />
      <Radikal />
      <Expo />
      <Pulse />
      <CommunityManagement />
      <Ticker reverse items={[
        <span key="1">✱ disponible para proyectos</span>,
        <span key="2">conversemos</span>,
        <span key="3">loydeth16@gmail.com</span>,
        <span key="4">@design_loy</span>,
      ]} />
      <Services />
      <About />
      <Contact />

      <TweaksPanel state={state} setState={setState} editMode={editMode} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
