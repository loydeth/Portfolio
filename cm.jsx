const CM = 'assets/cm/';
const CM_YEARS = [
  {
    y: '2022–23', stage: 'Inicio', text: 'Tomé las redes en 2022 y aprendí el oficio sobre la marcha. En 2023 armé el primer control mensual de seguidores e interacción, y la cuenta empezó a crecer de forma constante: valores corporativos, responsabilidad social, servicios y vida del equipo.',
    items: [
      { f: '2023/post-a.jpg', t: 'Planificación estratégica · ene 2023', phone: true },
      { f: '2023/post-b.jpg', t: 'Valor corporativo · ene 2023', phone: true },
      { f: '2023/post-c.jpg', t: 'Interworld Freight Cares · ene 2023', phone: true },
      { f: '2023/post-d.jpg', t: 'Servicio de almacenaje · feb 2023', phone: true },
    ],
  },
  {
    y: '2024', stage: 'Consolidación', text: 'El foco se concentró en LinkedIn e Instagram y empecé a registrar qué contenido rendía mejor. Las publicaciones protagonizadas por el equipo comenzaron a superar al resto, y los carruseles abrieron espacio a temas curiosos del sector.',
    items: [
      { car: ['2024/carrusel-1.jpg', '2024/carrusel-2.jpg', '2024/carrusel-3.jpg'], t: 'Carrusel · Transporte poco convencional' },
      { f: '2024/inicio-semana.jpg', t: 'Inicia tu semana · equipo comercial' },
      { f: '2024/carga-aerea.jpg', t: 'Nuevo servicio de carga aérea' },
      { f: '2024/feliz-2025.jpg', t: 'Cierre de año' },
    ],
  },
  {
    y: '2025', stage: 'Profesionalización', text: 'Llegaron los reportes cuatrimestrales, el resumen ejecutivo y nuevas métricas como CTR y engagement. La línea gráfica se volvió más sólida: contenido educativo, infografías y la presencia de la marca en eventos internacionales.',
    items: [
      { car: ['2025/lcl-1-portada.jpg', '2025/lcl-2-secreto.jpg', '2025/lcl-3-consolida.jpg'], t: 'Carrusel · Consolidación LCL' },
      { f: '2025/costos-ocultos.jpg', t: 'Infografía · Costos ocultos' },
      { f: '2025/twig.jpg', t: 'Evento · TWIG Punta Cana' },
      { f: '2025/dia-trabajador.jpg', t: 'Día del Trabajador' },
    ],
  },
  {
    y: '2026', stage: 'Estandarización', text: 'Una plantilla anual única para medir alcance, clics e interacción, con análisis de contenido cada mes. Es el año de mayor alcance: market updates, efemérides, memes del sector y momentos reales del equipo, que son los que más conectan.',
    items: [
      { f: '2026/dos-hitos.jpg', t: 'Efeméride · 15 de agosto' },
      { f: '2026/canal-update.jpg', t: 'IWF Market Update · Canal de Panamá' },
      { f: '2026/meme-iphone.jpg', t: 'Trend · meme logístico' },
      { f: '2026/detras-operacion.jpg', t: 'Cultura · el equipo' },
    ],
  },
];
const CM_STATS = [
  { v: 2.8, pre: '×', t: 'Comunidad en LinkedIn desde 2023' },
  { v: 2.4, pre: '×', t: 'Alcance en LinkedIn en 2026 vs. 2025' },
  { v: 4.4, pre: '×', t: 'Clics hacia la marca en 2026' },
  { v: 100, suf: '%', t: 'Crecimiento orgánico, sin pauta pagada', int: true },
];
const CM_PROFILES = [
  { f: 'perfil/ig-perfil.jpg', t: 'Perfil de Instagram' },
  { f: 'perfil/li-perfil.jpg', t: 'Página de LinkedIn' },
  { f: 'perfil/ig-grid-1.jpg', t: 'Grid de Instagram 2026' },
  { f: 'perfil/li-post.jpg', t: 'Publicaciones en LinkedIn' },
];

function CountUp({ v, pre = '', suf = '', int }) {
  const ref = React.useRef(null);
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const step = (t) => { const k = Math.min(1, (t - t0) / 1400); setN(v * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <span ref={ref}>{pre}{int ? Math.round(n) : n.toFixed(1)}{suf}</span>;
}

function CmCarousel({ it, open }) {
  const [i, setI] = React.useState(0);
  const ref = React.useRef(null);
  const go = (k) => { const el = ref.current; const j = Math.max(0, Math.min(it.car.length - 1, k)); el.scrollTo({ left: j * el.clientWidth, behavior: 'smooth' }); };
  return (
    <figure className="cm-tile cm-car">
      <div className="cm-car-track" ref={ref} onScroll={(e) => setI(Math.round(e.target.scrollLeft / e.target.clientWidth))}>
        {it.car.map((f, k) => <img key={f} src={CM + f} alt={`${it.t} ${k + 1}`} loading="lazy" onClick={() => open(f)} />)}
      </div>
      <div className="cm-car-ui">
        <button onClick={() => go(i - 1)} aria-label="Anterior">←</button>
        <span>{i + 1} / {it.car.length}</span>
        <button onClick={() => go(i + 1)} aria-label="Siguiente">→</button>
      </div>
      <figcaption>{it.t}</figcaption>
    </figure>
  );
}

function CommunityManagement() {
  const [yi, setYi] = React.useState(CM_YEARS.length - 1);
  const [lb, setLb] = React.useState(null);
  const yr = CM_YEARS[yi];
  const flat = yr.items.flatMap(it => it.car ? it.car.map((f, k) => ({ f, t: `${it.t} · ${k + 1}/${it.car.length}` })) : [it]).map(s => ({ ...s, src: CM + s.f, c: `${yr.y} · ${yr.stage}` }));
  const open = (f) => setLb({ list: flat, idx: flat.findIndex(s => s.f === f), label: `Interworld Freight · ${yr.y}` });
  const openProf = (f) => { const list = CM_PROFILES.map(s => ({ ...s, src: CM + s.f, c: 'Perfiles' })); setLb({ list, idx: list.findIndex(s => s.f === f), label: 'Interworld Freight · Perfiles' }); };
  return (
    <section className="case cm" id="cm">
      <header className="section-head">
        <div>
          <span className="section-num">§ 03 — COMMUNITY MANAGEMENT</span>
          <h2>interworld freight —<br/>redes que <em>crecen</em> sin pauta.</h2>
        </div>
        <div className="side">LinkedIn · Instagram<br/>2022 → hoy<br/>Panamá</div>
      </header>
      <div className="case-body">
        <div className="col-info">
          <div className="block"><div className="k">Cliente</div><div className="v">Interworld Freight Panamá</div></div>
          <div className="block"><div className="k">Canales</div><div className="v">LinkedIn e Instagram</div></div>
          <div className="block"><div className="k">Desde</div><div className="v">2022</div></div>
          <div className="block"><div className="k">Rol</div><div className="v">Estrategia, gestión de comunidad, reportes, diseño de posts, carruseles y stories, edición y creación de reels</div></div>
        </div>
        <div className="col-text cm-intro">
          <p>Desde 2022 llevo las redes sociales de Interworld Freight. No solo diseño las piezas: planifico la estrategia de contenido, gestiono la comunidad, mido resultados y presento reportes para tomar decisiones con datos.</p>
          <p>En estos años la cuenta pasó de una medición básica a un sistema con metas, métricas de alcance, clics e interacción, y un análisis mensual de lo que funciona. Todo el crecimiento ha sido orgánico.</p>
        </div>
        <div className="cm-stats">
          {CM_STATS.map(s => (
            <div key={s.t} className="cm-stat reveal">
              <div className="big"><CountUp v={s.v} pre={s.pre} suf={s.suf} int={s.int} /></div>
              <div className="lbl">{s.t}</div>
            </div>
          ))}
        </div>
        <div className="cm-insight">
          <span className="eyebrow">Lo que aprendí</span>
          <p>El contenido con personas reales, el equipo, su cultura y sus eventos, conecta mucho más que el contenido educativo, por bien diseñado que esté. Hoy la estrategia combina ambos: lo educativo como base y lo humano como motor de alcance.</p>
        </div>

        <div className="ex-tabs cm-tabs" role="tablist">
          {CM_YEARS.map((x, i) => (
            <button key={x.y} role="tab" aria-selected={yi === i} className={yi === i ? 'active' : ''} onClick={() => setYi(i)}>
              <b>{x.y}</b>{x.stage}
            </button>
          ))}
        </div>
        <div className="cm-panel" key={yr.y}>
          <p className="cm-year-text">{yr.text}</p>
          <div className="cm-grid">
            {yr.items.map(it => it.car
              ? <CmCarousel key={it.t} it={it} open={open} />
              : (
                <figure key={it.f} className={`cm-tile ${it.phone ? 'phone' : ''}`} onClick={() => open(it.f)}>
                  <img src={CM + it.f} alt={it.t} loading="lazy" />
                  <figcaption>{it.t}</figcaption>
                </figure>
              ))}
          </div>
        </div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">Perfiles hoy</span><span className="eyebrow muted">Los reels viven en Instagram</span></div>
          {CM_PROFILES.map(s => (
            <figure key={s.f} className="cm-tile phone c3" onClick={() => openProf(s.f)}>
              <img src={CM + s.f} alt={s.t} loading="lazy" />
              <figcaption>{s.t}</figcaption>
            </figure>
          ))}
          <div className="cm-links">
            <a href="https://www.instagram.com/interworldfreightpty/" target="_blank" rel="noopener">Ver Instagram ↗</a>
            <a href="https://www.linkedin.com/company/interworld-freight-panama/" target="_blank" rel="noopener">Ver LinkedIn ↗</a>
          </div>
        </div>
      </div>
      {lb && <Lightbox list={lb.list} idx={lb.idx} setIdx={(v) => setLb(v === null ? null : { ...lb, idx: typeof v === 'function' ? v(lb.idx) : v })} label={lb.label} />}
    </section>
  );
}

Object.assign(window, { CommunityManagement });
