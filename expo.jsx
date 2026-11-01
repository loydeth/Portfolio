const EX = 'assets/expo/';
const EDITIONS = [
  {
    y: '2023', n: '6ª', when: '4 y 5 de febrero de 2023', hero: { f: 'logo-expo.jpg', t: 'Logo 6ª edición', bg: '#10121F' },
    pieces: ['Logo de edición', 'Plantillas de redes', 'Gafetes', 'Certificados'],
    text: 'Rosa y máquinas de tatuar cruzadas: un lenguaje de tatuaje tradicional en verde azulado, rojo y naranja sobre fondo oscuro. Las plantillas de redes presentan a cada artista con su foto, su bandera y dos muestras de su trabajo, y a cada patrocinador dentro de un mismo sello circular.',
    items: [
      { f: 'logo-fondo.jpg', t: 'Logo con fondo' },
      { f: 'ig-g.jpg', t: 'Post de anuncio', phone: true },
      { f: 'ig-e.jpg', t: 'Plantilla · artistas', phone: true },
      { f: 'ig-f.jpg', t: 'Plantilla · patrocinadores', phone: true },
    ],
  },
  {
    y: '2024', n: '7ª', when: '2, 3 y 4 de febrero de 2024', hero: { f: 'logo24.png', t: 'Logo 7ª edición', bg: '#10121F' },
    pieces: ['Logo de edición', 'Plantillas de redes', 'Gafete', 'Certificado', 'Sticker'],
    text: 'La edición toma una raíz panameña: una mujer empollerada y tatuada acompaña al logotipo tipográfico. La paleta se abre a rosas y fucsias sin perder el verde azulado que ya identificaba a la expo.',
    credit: 'Ilustración de la mujer empollerada: TEMYM',
    items: [
      { f: 'invitacion.jpg', t: 'Invitación' },
      { f: 'gafete24-front.png', t: 'Gafete · expositor' },
      { f: 'tshirt24.jpg', t: 'T-shirt' },
      { f: 'ig-d.jpg', t: 'Plantilla · artistas', phone: true },
    ],
  },
  {
    y: '2025', n: '8ª', when: '3, 4 y 5 de octubre de 2025', hero: { f: 'poster25.jpg', t: 'Afiche 8ª edición', bg: '#EFE1A0' },
    pieces: ['Logo de edición', 'Plantillas de redes', 'Gafete', 'Ticket'],
    text: 'Un dragón japonés marca el giro hacia una estética oriental: marcos de inspiración asiática, patrón de ondas, caracteres japoneses y una paleta de dorado, rojo y crema que se repite en afiches, tickets, gafetes y uniformes.',
    credit: 'Ilustración del dragón: Balbino Baquero',
    items: [
      { f: 'flyer25.jpg', t: 'Flyer impreso' },
      { f: 'tickets25.jpg', t: 'Tickets · 1 día y 3 días' },
      { f: 'lanyard25-front.jpg', t: 'Gafete y lanyard' },
      { f: 'ig-a.jpg', t: 'Plantilla · expositores e invitados', phone: true },
      { f: 'polo25-back.jpg', t: 'Polo · espalda' },
      { f: 'sticker25.jpg', t: 'Sticker' },
      { f: 'ig-c.jpg', t: 'Plantilla · artistas y eventos', phone: true },
      { f: 'polo25-front.jpg', t: 'Polo · frente' },
    ],
  },
];

function Expo() {
  const [ed, setEd] = React.useState(0);
  const [idx, setIdx] = React.useState(null);
  const e = EDITIONS[ed];
  const list = [e.hero, ...e.items].map(s => ({ ...s, src: EX + s.f, c: `${e.n} edición · ${e.y}` }));
  const pick = (i) => { setEd(i); setIdx(null); };
  return (
    <section className={`case ex e${e.y}`} id="expo">
      <div className="case-head">
        <div className="tag">§ 02 — PROYECTO / 003</div>
        <h2>expo tatuaje <em>chiriquí</em> —<br/>tres ediciones, una voz.</h2>
      </div>
      <div className="case-body">
        <div className="col-info">
          <div className="block"><div className="k">Evento</div><div className="v">Expo Tatuaje Chiriquí</div></div>
          <div className="block"><div className="k">Organiza</div><div className="v">Joel "Periko" · Radikal Ink</div></div>
          <div className="block"><div className="k">Sede</div><div className="v">Salón Don Ramón, Feria Internacional de David</div></div>
          <div className="block"><div className="k">Rol</div><div className="v">Dirección creativa y diseño</div></div>
          <div className="block"><div className="k">Ediciones</div><div className="v">2023 · 2024 · 2025</div></div>
        </div>
        <div className="col-hero reveal ex-hero-main"><img src={EX + 'logo-original.png'} alt="Logotipo Expo Tatuaje Chiriquí" /></div>
        <div className="col-text">
          <p>Expo Tatuaje Chiriquí es la convención de tatuaje que organiza Joel "Periko" junto a Radikal Ink en David, Chiriquí. Reúne a tatuadores nacionales e internacionales, marcas del sector y actividades culturales durante tres días.</p>
          <p>Desde la edición de 2023 llevo su dirección creativa. Cada edición tiene un concepto visual propio, pero todas comparten el mismo sistema: un logotipo que se adapta a cada año, plantillas de redes para presentar artistas, expositores y patrocinadores, y las piezas impresas que acompañan a la expo, como gafetes, certificados, tickets y stickers.</p>
        </div>
        <div className="col-pull">Cada año cambia de piel. La identidad se mantiene.</div>

        <div className="ex-tabs" role="tablist">
          {EDITIONS.map((x, i) => (
            <button key={x.y} role="tab" aria-selected={ed === i} className={ed === i ? 'active' : ''} onClick={() => pick(i)}>
              <b>{x.y}</b>{x.n} edición
            </button>
          ))}
        </div>

        <div className="ex-panel" key={e.y}>
          <div className="ex-meta">
            <div className="ex-num">{e.n}</div>
            <div className="when">{e.when}<br/>Feria Internacional de David</div>
            <p>{e.text}</p>
            <div className="ex-chips">{e.pieces.map(p => <span key={p}>{p}</span>)}</div>
            {e.credit && <div className="ex-credit">{e.credit}</div>}
          </div>
          <figure className="ex-hero" style={{ background: e.hero.bg }} onClick={() => setIdx(0)}>
            <img src={EX + e.hero.f} alt={e.hero.t} />
            <figcaption>{e.hero.t}</figcaption>
          </figure>
          <div className="ex-masonry">
            {e.items.map((s, i) => (
              <figure key={s.f} className={s.phone ? 'phone' : ''} onClick={() => setIdx(i + 1)}>
                <img src={EX + s.f} alt={s.t} loading="lazy" />
                <figcaption>{s.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      {idx !== null && <Lightbox list={list} idx={idx} setIdx={setIdx} label={`Expo Tatuaje Chiriquí · ${e.y}`} />}
    </section>
  );
}

Object.assign(window, { Expo });
