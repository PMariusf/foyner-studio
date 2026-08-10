const projects = [
  {
    number: "01",
    type: "Photography",
    title: "North in focus",
    text: "Quiet landscapes, city light and the moments between.",
    className: "project-bergen",
    image: "https://foyner.no/images/water.jpeg",
    href: "#photography",
  },
  {
    number: "02",
    type: "Music",
    title: "PM’s Music",
    text: "Original songs, cover art and the feeling behind every release.",
    className: "project-music",
    href: "#music",
  },
  {
    number: "03",
    type: "Digital art",
    title: "Other worlds",
    text: "Portraits and visual experiments shaped by imagination.",
    className: "project-art",
    image: "/images/art/aniz.webp",
    href: "#art",
  },
  {
    number: "04",
    type: "Web",
    title: "Ideas in motion",
    text: "Selected digital experiences made to feel alive.",
    className: "project-web",
    image: "/images/web/solsystem.webp",
    href: "#web",
  },
];

const photographs = [
  {
    src: "https://foyner.no/images/water.jpeg",
    alt: "Soft reflections of posts stretching across still water",
    title: "Reflection",
    note: "Waterscape",
    className: "photo-tall",
  },
  {
    src: "https://foyner.no/images/Airport.jpeg",
    alt: "Travellers silhouetted by warm light inside an airport",
    title: "Departure",
    note: "Travel",
    className: "photo-wide",
  },
  {
    src: "https://foyner.no/images/foggy-farm.jpeg",
    alt: "A quiet farm resting in mist beneath forested hills",
    title: "Morning veil",
    note: "Landscape",
    className: "photo-wide",
  },
  {
    src: "https://foyner.no/images/IMG_5928.jpeg",
    alt: "Golden clouds reflected in calm coastal water",
    title: "Afterglow",
    note: "Coast",
    className: "photo-tall",
  },
  {
    src: "https://foyner.no/images/rain-window.jpg",
    alt: "City lights glowing through a rain-covered window",
    title: "After rain",
    note: "City",
    className: "photo-tall",
  },
  {
    src: "https://foyner.no/images/laatefoss.jpeg",
    alt: "Låtefossen cascading beside the historic stone bridge",
    title: "Låtefossen",
    note: "Norway",
    className: "photo-wide",
  },
];

const artworks = [
  { src: "/images/art/aniz.webp", title: "Aniz", note: "Portrait study" },
  { src: "/images/art/viking.webp", title: "Viking", note: "Character art" },
  { src: "/images/art/demonhunter.webp", title: "Demon hunter", note: "Dark fantasy" },
  { src: "/images/art/paladin.webp", title: "Paladin", note: "Light & armour" },
  { src: "/images/art/crylina.webp", title: "Crylina", note: "Visual story" },
];

const webProjects = [
  {
    src: "/images/web/solsystem.webp",
    title: "Solar System",
    note: "Interactive 3D experience",
  },
  {
    src: "/images/web/kampsport.webp",
    title: "Nordhordaland Kampsport",
    note: "Club website",
  },
  {
    src: "/images/web/foyner-photo.webp",
    title: "Foyner Photo",
    note: "Photography & private archive",
  },
  {
    src: "/images/web/fjellveidager.webp",
    title: "Fjellveidager",
    note: "Visual identity & campaign",
  },
];

const sketches = [
  { src: "/images/sketch/elisabeth.webp", title: "Elisabeth" },
  { src: "/images/sketch/amazon-fighter.webp", title: "Amazon fighter" },
  { src: "/images/sketch/cyberpunk.webp", title: "Cyberpunk" },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />

        <header className="nav shell">
          <a className="brand" href="#top" aria-label="Føyner Studio home">
            FØYNER<span>STUDIO</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-mark" href="#contact" aria-label="Go to contact">
            F<span>Ø</span>
          </a>
        </header>

        <div className="hero-content shell">
          <p className="eyebrow reveal reveal-one">
            Creative studio <span /> Bergen, Norway
          </p>
          <h1 className="reveal reveal-two">
            Made to be
            <br />
            <em>felt.</em>
          </h1>
          <div className="hero-bottom reveal reveal-three">
            <p>
              Photography, sound, digital art and stories—created under one
              name.
            </p>
            <a className="circle-link" href="#work" aria-label="Explore the work">
              <span>Explore</span>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>F</span>
          <i />
          <span>26</span>
        </div>
      </section>

      <section className="manifesto shell" aria-label="Studio introduction">
        <p className="section-label">The studio</p>
        <div>
          <h2>
            One name.
            <br />
            <span>Many forms.</span>
          </h2>
          <p className="manifesto-copy">
            Føyner Studio is a personal creative space where images, music,
            technology and memories meet. No fixed box. Just honest work with
            atmosphere, detail and a story worth keeping.
          </p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell section-heading">
          <p className="section-label">Selected work</p>
          <p>2025 — 2026</p>
        </div>

        <div className="project-grid shell">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <a href={project.href} aria-label={`View ${project.title}`}>
                <div className={`project-visual ${project.className}`}>
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" decoding="async" />
                  ) : null}
                  <span className="project-number">{project.number}</span>
                  <span className="project-arrow" aria-hidden="true">
                    ↘
                  </span>
                </div>
                <div className="project-copy">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.text}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="photography-section" id="photography">
        <div className="shell editorial-heading">
          <div>
            <p className="section-label">Photography / 01</p>
            <h2>Quiet places.<br /><em>Honest light.</em></h2>
          </div>
          <p>
            A selection from Bergen, the Norwegian landscape and the details
            that are easy to walk past.
          </p>
        </div>

        <div className="photo-grid shell">
          {photographs.map((photo) => (
            <figure className={photo.className} key={photo.src}>
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              <figcaption>
                <span>{photo.note}</span>
                <strong>{photo.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="shell collection-link-wrap">
          <a className="text-link dark-link" href="https://foyner.no" target="_blank" rel="noreferrer">
            View the photo collection <span>↗</span>
          </a>
        </div>
      </section>

      <section className="sound-section" id="music">
        <div className="shell sound-layout">
          <div className="sound-copy">
            <p className="section-label">Sound / PM’s</p>
            <h2>
              Feel it.
              <br />
              Live it.
              <br />
              <em>Be it.</em>
            </h2>
            <p>
              Songs built from emotion, energy and the moments words cannot
              hold on their own.
            </p>
            <a className="text-link" href="https://open.spotify.com/search/PM%E2%80%99s" target="_blank" rel="noreferrer">
              Discover the music <span>↗</span>
            </a>
          </div>

          <div className="sound-art" aria-label="PM’s Music artwork">
            <div className="record-orbit orbit-one" />
            <div className="record-orbit orbit-two" />
            <div className="record-label">
              <span>PM’s</span>
              <small>Music</small>
            </div>
            <div className="wave" aria-hidden="true">
              {[30, 54, 76, 42, 90, 62, 34, 70, 48, 84, 58, 28].map(
                (height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="art-section" id="art">
        <div className="shell editorial-heading art-heading">
          <div>
            <p className="section-label">Digital art / 02</p>
            <h2>Characters from<br /><em>other worlds.</em></h2>
          </div>
          <p>
            Dark portraits, cinematic light and familiar fantasy reshaped into
            personal visual stories.
          </p>
        </div>
        <div className="art-track">
          {artworks.map((artwork, index) => (
            <figure key={artwork.src}>
              <div className="art-image">
                <img src={artwork.src} alt={`${artwork.title} digital artwork`} loading="lazy" decoding="async" />
                <span>0{index + 1}</span>
              </div>
              <figcaption>
                <strong>{artwork.title}</strong>
                <span>{artwork.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="web-section shell" id="web">
        <div className="editorial-heading web-heading">
          <div>
            <p className="section-label">Web projects / 03</p>
            <h2>Built to move.<br /><em>Made to belong.</em></h2>
          </div>
          <p>
            Selected frontend work where design, motion and clear content come
            together.
          </p>
        </div>
        <div className="web-grid">
          {webProjects.map((project, index) => (
            <article key={project.src}>
              <div className="web-image">
                <img src={project.src} alt={`${project.title} website preview`} loading="lazy" decoding="async" />
                <span>0{index + 1}</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sketch-section">
        <div className="shell sketch-layout">
          <div className="sketch-copy">
            <p className="section-label">From sketch to digital</p>
            <h2>The hand<br />comes first.</h2>
            <p>
              Drawing is where much of the visual work begins: a line, a face,
              an idea—and then the world around it.
            </p>
          </div>
          <div className="sketch-grid">
            {sketches.map((sketch) => (
              <figure key={sketch.src}>
                <img src={sketch.src} alt={`${sketch.title} hand-drawn artwork`} loading="lazy" decoding="async" />
                <figcaption>{sketch.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="about shell" id="about">
        <div className="portrait-block" aria-hidden="true">
          <img src="/images/art/viking.webp" alt="" loading="lazy" decoding="async" />
          <span>FØYNER</span>
          <p>Bergen · Norway</p>
        </div>
        <div className="about-copy">
          <p className="section-label">Behind the name</p>
          <h2>Curiosity is the starting point.</h2>
          <p>
            Føyner Studio is created by Marius Føyner—a frontend developer,
            photographer and music maker from Bergen. It is where professional
            craft and personal creativity share the same room.
          </p>
          <p>
            Some work is made for clients. Some is made for family. All of it
            begins with the need to create something that feels real.
          </p>
          <a className="text-link dark-link" href="#contact">
            Start a conversation <span>→</span>
          </a>
        </div>
      </section>

      <section className="private-story shell">
        <p className="section-label">Private stories</p>
        <div className="story-card">
          <div>
            <span className="story-kicker">Family archive</span>
            <h2>The moments closest to us stay protected.</h2>
          </div>
          <p>
            A separate, password-protected space for personal photographs and
            family memories.
          </p>
          <a href="https://foyner.no/family" target="_blank" rel="noreferrer" aria-label="Open private family gallery">
            <span>Private access</span>
            <b>→</b>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="grain" aria-hidden="true" />
        <div className="shell contact-inner">
          <p className="section-label">Contact / Bergen</p>
          <h2>
            Have an idea?
            <br />
            <em>Let’s make it real.</em>
          </h2>
          <a className="email-link" href="mailto:hello@xn--fyner-qra.no">
            hello@føyner.no <span>↗</span>
          </a>
          <footer>
            <a className="brand" href="#top">
              FØYNER<span>STUDIO</span>
            </a>
            <div>
              <a href="https://www.instagram.com/p_marius_/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://open.spotify.com/search/PM%E2%80%99s" target="_blank" rel="noreferrer">Spotify</a>
              <a href="https://github.com/PMariusf" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <p>© 2026 Føyner Studio</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
