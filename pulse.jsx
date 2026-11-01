const PL_IMG = 'assets/pulse/board.jpg';
const PL_H = 2576;
const PL_PAL = ['334A80', '7A3DF3', '572EBB', 'FFFF00', 'F91E62', 'AA0641', '321768'];
const PL_CROPS = {
  logo: { y0: 82, y1: 688, t: 'Logotipo principal' },
  mark: { y0: 688, y1: 1230, t: 'Isotipo y aplicación' },
  vers: { y0: 1230, y1: 1880, t: 'Versiones de color' },
  pat: { y0: 1880, y1: 2576, t: 'Patrón con isotipo' },
};

function PlCrop({ k }) {
  const c = PL_CROPS[k];
  const h = c.y1 - c.y0;
  const pos = PL_H - h > 0 ? (c.y0 / (PL_H - h)) * 100 : 0;
  return (
    <figure className="pl-crop reveal" style={{ aspectRatio: `1415/${h}`, backgroundImage: `url(${PL_IMG})`, backgroundPosition: `0 ${pos}%` }} role="img" aria-label={c.t}>
      <figcaption>{c.t}</figcaption>
    </figure>
  );
}

function Pulse() {
  return (
    <section className="case pl" id="pulse">
      <div className="case-head">
        <div className="tag">§ 02 — PROYECTO / 004</div>
        <h2>pulse <em>tv</em> —<br/>un logo con ritmo.</h2>
      </div>
      <div className="case-body">
        <div className="col-info">
          <div className="block"><div className="k">Cliente</div><div className="v">Pulse TV</div></div>
          <div className="block"><div className="k">Encargo</div><div className="v">Diseño de logotipo</div></div>
          <div className="block"><div className="k">Paleta</div><div className="v">Definida por el cliente</div></div>
          <div className="block"><div className="k">Entregables</div><div className="v">Logotipo, isotipo, versiones de color y patrón</div></div>
        </div>
        <div className="col-hero"><PlCrop k="logo" /></div>
        <div className="col-text">
          <p>El encargo fue puntual: crear el logotipo de Pulse TV a partir de una paleta que el cliente ya había definido, con violetas profundos, amarillo y fucsia.</p>
          <p>El isotipo traduce el nombre en una forma: barras inclinadas y puntos dentro de un círculo, como una onda de pulso o de sonido. Lo acompaña una tipografía redonda y de peso alto, con "TV" en fucsia y condensado como acento. El sistema se completa con versiones para fondos claros y oscuros y un patrón construido con el isotipo.</p>
        </div>
        <div className="col-pull">Una señal que se reconoce incluso sin el nombre.</div>

        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">01 — Paleta</span><span className="eyebrow muted">{PL_PAL.length} colores</span></div>
          <div className="pl-pal">
            {PL_PAL.map((h, i) => (
              <div key={h} className="pl-sw" style={{ background: '#' + h, animationDelay: `${i * 70}ms` }}><span>#{h}</span></div>
            ))}
          </div>
        </div>
        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">02 — Isotipo</span><span className="eyebrow muted">Aplicación sobre fotografía</span></div>
          <div className="pl-full"><PlCrop k="mark" /></div>
        </div>
        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">03 — Versiones</span><span className="eyebrow muted">Fondo claro · oscuro · ícono</span></div>
          <div className="pl-full"><PlCrop k="vers" /></div>
        </div>
        <div className="rk-block">
          <div className="lbl"><span className="eyebrow">04 — Patrón</span><span className="eyebrow muted">Isotipo en repetición</span></div>
          <div className="pl-full"><PlCrop k="pat" /></div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Pulse });
