const projects = [
  {
    number: "01",
    type: "Photography",
    title: "North in focus",
    text: "Quiet landscapes, city light and the moments between.",
    className: "project-bergen",
  },
  {
    number: "02",
    type: "Music",
    title: "PM’s Music",
    text: "Original songs, cover art and the feeling behind every release.",
    className: "project-music",
  },
  {
    number: "03",
    type: "Digital art",
    title: "Other worlds",
    text: "Portraits and visual experiments shaped by imagination.",
    className: "project-art",
  },
  {
    number: "04",
    type: "Web",
    title: "Ideas in motion",
    text: "Selected digital experiences made to feel alive.",
    className: "project-web",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <section className="hero" id="top">
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
          <span>25</span>
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
              <a href="#contact" aria-label={`View ${project.title}`}>
                <div className={`project-visual ${project.className}`}>
                  <span className="project-number">{project.number}</span>
                  <div className="visual-mark" aria-hidden="true" />
                  <span className="project-arrow" aria-hidden="true">
                    ↗
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

      <section className="sound-section">
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
            <a className="text-link" href="#contact">
              Discover the music <span>↗</span>
            </a>
          </div>

          <div className="sound-art" aria-label="Abstract sound artwork">
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

      <section className="about shell" id="about">
        <div className="portrait-block" aria-hidden="true">
          <span>FØYNER</span>
          <div className="portrait-glow" />
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
          <a href="#contact" aria-label="Ask for private gallery access">
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
              <a href="#work">Instagram</a>
              <a href="#work">Spotify</a>
              <a href="#work">GitHub</a>
            </div>
            <p>© 2026 Føyner Studio</p>
          </footer>
        </div>
      </section>
    </main>
  );
}
