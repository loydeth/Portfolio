const RK = 'assets/radikal/';
const RK_MAIN = [
  { n: 'Blanco', hex: 'FFFFFF', rgb: '255 · 255 · 255', cmyk: '0 · 0 · 0 · 0', fg: '#0A0A0A' },
  { n: 'Negro', hex: '000000', rgb: '0 · 0 · 0', cmyk: '91 · 79 · 62 · 97', fg: '#F5F2EA' },
  { n: 'Golden Brown', hex: 'A1631F', rgb: '161 · 99 · 31', cmyk: '27 · 60 · 95 · 23', fg: '#0A0A0A' },
];
const RK_COMP = ['686868', 'BAAC9E'];
const RK_VERS = [
  { f: 'original.jpg', t: 'Original', bg: '#000' },
  { f: 'ink-white.jpg', t: 'Una tinta · blanco', bg: '#000' },
  { f: 'ink-black.jpg', t: 'Una tinta · negro', bg: '#ccc' },
];
const RK_FACADE = [
  { f: 'door.png', t: 'Puerta de vidrio' },
  { f: 'window.png', t: 'Ventana' },
];
const RK_APPS = [
  { f: 'bag.jpg', t: 'Bolsa de compra', cls: 'c8', ar: '3/2', fit: 'cover' },
  { f: 'polo-front.jpg', t: 'T-shirt · frente', cls: 'c6', ar: '5/4', bg: '#fff' },
  { f: 'polo-back.jpg', t: 'T-shirt · espalda', cls: 'c6', ar: '5/4', bg: '#fff' },
];
const RK_CARDS = [{ f: 'card-front.png', t: 'Tarjeta · frente' }, { f: 'card-back.png', t: 'Tarjeta · reverso' }];
const RK_ALL = [
  ...RK_VERS, ...RK_FACADE, ...RK_APPS, ...RK_CARDS,
  { f: 'instagram.jpg', t: 'Perfil de Instagram' },
].map(s => ({ ...s, src: RK + s.f, c: 'Radikal Ink' }));
const rkIdx = (f) => RK_ALL.findIndex(s => s.f === f);

function BeforeAfter({ before, after, ratio, fit = 'contain', bg = '#0A0A0A' }) {
  const [p, setP] = React.useState(50);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - t0) / 1600);
        setP(50 - 32 * Math.sin(k * Math.PI) * (1 - k * 0.4));
        if (k < 1) raf = requestAnimationFrame(step); else setP(50);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);
  const layer = { background: bg };
  return (
    <div className="ba" ref={ref} style={{ aspectRatio: ratio }}>
      <div className="ba-layer" style={layer}><img src={after} alt="Después" style={{ objectFit: fit }} /></div>
      <div className="ba-layer" style={{ ...layer, clipPath: `inset(0 ${100 - p}% 0 0)` }}><img src={before} alt="Antes" style={{ objectFit: fit }} /></div>
      <div className="ba-line" style={{ left: p + '%' }}><span>↔</span></div>
      <span className="ba-tag l">Antes</span><span className="ba-tag r">Después</span>
      <input type="range" min="0" max="100" value={p} onChange={(e) => setP(+e.target.value)} aria-label="Comparar antes y después" />
    </div>
  );
}

function RkTile({ s, cls = '', ar, fit = 'contain', bg, open }) {
  return (
    <figure className={`rk-tile ${cls}`} style={{ aspectRatio: ar, background: bg }} onClick={() => open(rkIdx(s.f))}>
      <img src={RK + s.f} alt={s.t} loading="lazy" style={{ objectFit: fit }} />
      <figcaption>{s.t}</figcaption>
    </figure>
  );
}

function Radikal() {
  const [idx, setIdx] = React.useState(null);
  return (
    <section className="case rk" id="radikal">
      <div className="case-head">
        <div className="tag">§ 02 — PROYECTO / 002</div>
        <h2>radikal <em>ink</em> —<br/>old school, elegante.</h2>
      </div>
      <div className="case-body">
        <div className="col-info">
          <div className="block"><div className="k">Cliente</div><div className="v">Radikal Ink Tattoo Studio</div></div>
          <div className="block"><div className="k">Ubicación</div><div className="v">David, Chiriquí</div></div>
          <div className="block"><div className="k">Fundador</div><div className="v">Joel "Periko"</div></div>
          <div className="block"><div className="k">Desde</div><div className="v">2005</div></div>
          <div className="block"><div className="k">Alcance</div><div className="v">Rediseño de logo, letrero, puerta de vidrio, ventana, t-shirt, bolsa de compra, tarjetas</div></div>
        </div>
        <div className="col-hero reveal rk-hero"><img src={RK + 'original.jpg'} alt="Logo Radikal Ink" /></div>
        <div className="col-text">
          <p><b>El contexto.</b> Radikal Ink fue el primer estudio de tatuaje de Chiriquí. Lo fundó Joel, conocido como Periko, uno de los pioneros del tatuaje en Panamá. Después de casi dos décadas, el estudio necesitaba una imagen más fresca y actual, a la altura de su trayectoria.</p>
          <p><b>La solución.</b> Rediseñé el logo y la fachada del estudio: letrero, puerta de vidrio y ventana. La identidad se extendió también a camisetas, bolsas de compra y tarjetas de presentación.</p>
          <p>El reto era que la marca transmitiera años de experiencia sin verse anticuada. Por eso elegí un lenguaje vintage old school, con ornamentos y tipografía grabada, pero resuelto con una paleta sobria de negro, blanco y café dorado que le da un aire elegante y de alto nivel.</p>
        </div>
        <div className="col-pull">Una marca con historia, vestida para el presente.</div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">01 — Logo · antes / después</span><span className="eyebrow muted">Arrastra para comparar</span></div>
          <div className="c6"><BeforeAfter before={RK + 'logo-old.png'} after={RK + 'logo-new.png'} ratio="1/1" /></div>
          <div className="rk-pal c6">
            <div className="sw-main">
              {RK_MAIN.map(s => (
                <div key={s.hex} className="sw" style={{ background: '#' + s.hex, color: s.fg }}>
                  <b>{s.n}</b>
                  <div className="sw-data"><span>#{s.hex}</span><span>RGB {s.rgb}</span><span>CMYK {s.cmyk}</span></div>
                </div>
              ))}
            </div>
            {RK_COMP.map(h => (
              <div key={h} className="sw-bar" style={{ background: '#' + h }}><span>Complementario</span><span>#{h}</span></div>
            ))}
          </div>
        </div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">02 — Versiones del logo</span><span className="eyebrow muted">{RK_VERS.length} versiones</span></div>
          {RK_VERS.map(s => <RkTile key={s.f} s={s} cls="c4 reveal" ar="1/1" bg={s.bg} open={setIdx} />)}
        </div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">03 — Fachada · antes / después del rotulado</span><span className="eyebrow muted">Av. Bolívar, David</span></div>
          <div className="c4"><BeforeAfter before={RK + 'before.jpg'} after={RK + 'after.jpg'} ratio="9/16" fit="cover" /></div>
          {RK_FACADE.map(s => <RkTile key={s.f} s={s} cls="c4 reveal" ar="9/16" open={setIdx} />)}
        </div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">04 — Aplicaciones</span><span className="eyebrow muted">Merch · papelería · exterior</span></div>
          {RK_APPS.slice(0, 1).map(s => <RkTile key={s.f} s={s} cls={s.cls + ' reveal'} ar={s.ar} fit={s.fit} bg={s.bg} open={setIdx} />)}
          <div className="c4 rk-cards">
            {RK_CARDS.map(s => <RkTile key={s.f} s={s} ar="516/284" open={setIdx} />)}
          </div>
          {RK_APPS.slice(1).map(s => <RkTile key={s.f} s={s} cls={s.cls + ' reveal'} ar={s.ar} fit={s.fit} bg={s.bg} open={setIdx} />)}
        </div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">05 — En redes</span><span className="eyebrow muted">@radikalinktattoo</span></div>
          <RkTile s={{ f: 'instagram.jpg', t: 'Perfil de Instagram' }} cls="c4 reveal" ar="1284/1542" open={setIdx} />
          <div className="c8 rk-note">
            <p>En Instagram, el sello circular funciona como foto de perfil y unifica las portadas de las historias destacadas.</p>
          </div>
        </div>
      </div>
      {idx !== null && <Lightbox list={RK_ALL} idx={idx} setIdx={setIdx} label="Radikal Ink · Tattoo Studio" />}
    </section>
  );
}

Object.assign(window, { Radikal, BeforeAfter });
