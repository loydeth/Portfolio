const IWF = 'assets/iwf/';
const SIGNS = [
  { f: 'control-acceso', t: 'Control de acceso', c: 'Acceso' },
  { f: 'sala-caucedo', t: 'Sala de juntas Caucedo', c: 'Ubicación', w: true },
  { f: 'alarma', t: 'Alarma de emergencias', c: 'Emergencia' },
  { f: 'cocina', t: 'Cocina', c: 'Ubicación' },
  { f: 'tocar-timbre', t: 'Tocar el timbre', c: 'Acceso' },
  { f: 'punto-encuentro', t: 'Punto de encuentro', c: 'Emergencia', w: true },
  { f: 'bano', t: 'Baño', c: 'Ubicación' },
  { f: 'extintor', t: 'Extintor', c: 'Emergencia', reg: true },
  { f: 'presionar-salir', t: 'Presionar para salir', c: 'Acceso' },
  { f: 'sala-haina', t: 'Sala de juntas Haina', c: 'Ubicación', w: true },
  { f: 'archivo', t: 'Archivo', c: 'Ubicación' },
  { f: 'salida-emergencia', t: 'Salida de emergencia', c: 'Emergencia', w: true },
  { f: 'presionar', t: 'Presionar', c: 'Acceso' },
  { f: 'peligro-voltaje', t: 'Peligro alto voltaje', c: 'Emergencia', reg: true },
  { f: 'puerta-cerrada', t: 'Mantener la puerta cerrada', c: 'Acceso' },
];
const CATS = ['Todas', 'Ubicación', 'Acceso', 'Emergencia'];
const SITE = [
  { n: '04', t: 'Control de acceso' }, { n: '03', t: 'Presionar para salir' },
  { n: '06', t: 'Alarma de emergencias' }, { n: '13', t: 'Sala de juntas Caucedo' },
  { n: '12', t: 'Sala de juntas Haina' }, { n: '07', t: 'Cocina' },
  { n: '09', t: 'Pasillo' }, { n: '14', t: 'Buzón de sugerencias' },
].map(s => ({ ...s, f: 'site-' + s.n, src: IWF + 'site/s' + s.n + '.jpg', c: 'En sitio · RD' }));

function Lightbox({ list, idx, setIdx, label }) {
  const s = list[idx];
  React.useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') setIdx((idx + 1) % list.length);
      if (e.key === 'ArrowLeft') setIdx((idx - 1 + list.length) % list.length);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [idx, list]);
  return (
    <div className="lightbox" onClick={(e) => { if (e.target === e.currentTarget || e.target.classList.contains('lb-stage')) setIdx(null); }}>
      <div className="lb-top"><span>{label || ('Interworld Freight · ' + (s.src ? 'En sitio' : 'Señalética'))}</span><button onClick={() => setIdx(null)}>Cerrar ✕</button></div>
      <div className="lb-stage"><img key={s.f} src={s.src || IWF + s.f + '.png'} alt={s.t} /></div>
      <div className="lb-bot">
        <button onClick={() => setIdx((idx - 1 + list.length) % list.length)}>← Anterior</button>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h3>{s.t}</h3>
          <span>{String(idx + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')} — {s.c}{s.reg ? ' · Reglamentaria' : ''}</span>
        </div>
        <button onClick={() => setIdx((idx + 1) % list.length)}>Siguiente →</button>
      </div>
    </div>
  );
}

function Portfolio() {
  const [cat, setCat] = React.useState('Todas');
  const [idx, setIdx] = React.useState(null);
  const list = cat === 'Todas' ? SIGNS : SIGNS.filter(s => s.c === cat);
  return (
    <section className="portfolio" id="work">
      <header className="section-head">
        <div>
          <span className="section-num">§ 01 — DISEÑO GRÁFICO</span>
          <h2>diseño <em>gráfico</em>,<br/>cliente por cliente.</h2>
        </div>
        <div className="side">04 proyectos<br/>Señalética · Identidad · Eventos<br/>Panamá · Rep. Dominicana</div>
      </header>
      <nav className="clients">
        <div className="clients-head"><span>N.º</span><span>Proyecto</span><span>Disciplina</span><span></span></div>
        <a className="client" href="#case"><b>01</b><h3>Interworld Freight</h3><span className="disc">Señalética corporativa</span><i>→</i></a>
        <a className="client" href="#radikal"><b>02</b><h3>Radikal Ink</h3><span className="disc">Identidad + rotulación</span><i>→</i></a>
        <a className="client" href="#expo"><b>03</b><h3>Expo Tatuaje Chiriquí</h3><span className="disc">Dirección creativa · 3 ediciones</span><i>→</i></a>
        <a className="client" href="#pulse"><b>04</b><h3>Pulse TV</h3><span className="disc">Logotipo</span><i>→</i></a>
        <a className="client" href="#cm"><b>05</b><h3>Interworld Freight</h3><span className="disc">Community management</span><i>→</i></a>
      </nav>
      <div className="sub-lbl"><span className="eyebrow">01 — Interworld Freight · Señalética</span><span className="eyebrow" style={{ color: 'var(--muted)' }}>15 piezas · Práctica profesional</span></div>
      <div className="filters">
        {CATS.map(c => (
          <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>
            {c}<sup>{c === 'Todas' ? SIGNS.length : SIGNS.filter(s => s.c === c).length}</sup>
          </button>
        ))}
      </div>
      <div className="sign-grid" key={cat}>
        {list.map((s, i) => (
          <figure key={s.f} className={`sign ${s.w ? 'wide' : ''}`} style={{ animationDelay: `${i * 40}ms` }} onClick={() => setIdx(i)}>
            <span className="idx">{String(i + 1).padStart(2, '0')}</span>
            <img src={IWF + s.f + '.png'} alt={s.t} loading="lazy" />
            <figcaption className="cap"><span>{s.t}</span><span>{s.reg ? 'Reglamentaria' : s.c}</span></figcaption>
          </figure>
        ))}
      </div>
      {idx !== null && <Lightbox list={list} idx={idx} setIdx={setIdx} />}
    </section>
  );
}

function Case() {
  const [idx, setIdx] = React.useState(null);
  return (
    <section className="case" id="case">
      <div className="case-head">
        <div className="tag">§ 02 — PROYECTO / 001</div>
        <h2>interworld <em>freight</em> —<br/>una oficina que se lee.</h2>
      </div>
      <div className="case-body">
        <div className="col-info">
          <div className="block"><div className="k">Cliente</div><div className="v">Interworld Freight</div></div>
          <div className="block"><div className="k">Sucursal</div><div className="v">República Dominicana</div></div>
          <div className="block"><div className="k">Contexto</div><div className="v">Práctica profesional</div></div>
          <div className="block"><div className="k">Alcance</div><div className="v">Señalética de ubicación, acceso y emergencia</div></div>
          <div className="block"><div className="k">Piezas</div><div className="v">15 letreros + visualización en espacio</div></div>
        </div>
        <div className="col-hero reveal"><img src={IWF + 'mock-1.jpg'} alt="Visualización de señalética en oficina" /></div>
        <div className="col-text">
          <p><b>El reto.</b> La oficina necesitaba una guía visual clara y profesional: algo que ayudara a cualquier persona a orientarse en el espacio y que, en caso de emergencia, indicara con precisión las rutas de evacuación.</p>
          <p><b>La solución.</b> Diseñé un sistema de letreros con los colores de la marca, reservando los colores reglamentarios solo para las señales de seguridad básicas. Así, cada pieza orienta y comunica sin romper con la identidad visual de la empresa.</p>
        </div>
        <div className="col-pull">Señalética que orienta, protege y se siente parte de la marca.</div>
        <div className="case-gallery">
          <div className="g g6 reveal"><img src={IWF + 'mock-2.jpg'} alt="Visualización de señalética 2" /></div>
          <div className="g g6 reveal"><img src={IWF + 'mock-3.jpg'} alt="Visualización de señalética 3" /></div>
        </div>
        <div className="onsite">
          <div className="lbl"><span className="eyebrow">En sitio — aplicación real, sucursal RD</span><span className="eyebrow" style={{ color: 'var(--muted)' }}>{SITE.length} fotos</span></div>
          {SITE.map((s, i) => (
            <figure key={s.n} className="slot" onClick={() => setIdx(i)}>
              <img src={s.src} alt={s.t} loading="lazy" />
              <figcaption>{s.t}</figcaption>
            </figure>
          ))}
        </div>
        {idx !== null && <Lightbox list={SITE} idx={idx} setIdx={setIdx} />}
      </div>
    </section>
  );
}

Object.assign(window, { Portfolio, Case });
