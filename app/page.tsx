import Link from "next/link";
import SingerVideo from "./components/SingerVideo";

export default function Home() {
  return (
    <main className="studio-home">
      <a className="skip-link" href="#work">Skip to selected work</a>
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
            <Link href="/gallery">Gallery</Link>
            <a href="#music">Music</a>
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


      <section className="gallery-entry shell" id="work" aria-labelledby="gallery-title">
        <div>
          <p className="section-label">Images / 02</p>
          <h2 id="gallery-title">A world<br /><em>in images.</em></h2>
          <p>Quiet landscapes, imagined characters and drawings. Take your time with the full collection.</p>
          <Link className="text-link" href="/gallery">Explore the gallery <span aria-hidden="true">↗</span></Link>
        </div>
        <Link className="gallery-entry-image" href="/gallery" aria-label="Explore photography, digital art and drawings">
          <img src="/images/art/quiet-dissolve.webp" alt="Portrait dissolving into delicate black smoke" width="1086" height="1448" loading="lazy" decoding="async" />
          <span>Photography · Digital art · Drawings</span>
        </Link>
      </section>

      <section className="music-feature" id="music" aria-labelledby="music-title">
        <div className="music-feature-art" aria-hidden="true" />
        <div className="shell music-feature-content">
          <SingerVideo />
          <div className="music-feature-copy">
          <p className="section-label">Sound / 03</p>
          <h2 id="music-title">PM’s <em>Music.</em></h2>
          <p>Original songs. Honest emotion.<br />A feeling that stays with you.</p>
          <div className="music-actions">
            <a className="studio-button" href="https://open.spotify.com/search/PM%E2%80%99s" target="_blank" rel="noreferrer">Listen on Spotify <span aria-hidden="true">↗</span></a>
            <Link className="text-link" href="/music">Inside the music <span aria-hidden="true">→</span></Link>
          </div>
          </div>
        </div>
      </section>

      <section className="studio-closing shell" id="about">
        <div>
          <p className="section-label">Behind the name</p>
          <h2>Always<br /><em>creating.</em></h2>
        </div>
        <div id="contact">
          <p>I’m Marius Føyner, a frontend developer, photographer and music maker from Bergen. This is where my different creative worlds meet.</p>
          <a className="text-link" href="mailto:hello@xn--fyner-qra.no">hello@føyner.no <span aria-hidden="true">↗</span></a>
          <Link className="closing-projects" href="/gallery#web">Explore my web projects →</Link>
        </div>
      </section>
      <footer className="simple-footer shell">
        <Link className="brand" href="/">FØYNER<span>STUDIO</span></Link>
        <nav aria-label="Footer navigation">
          <a href="https://www.instagram.com/p_marius_/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://github.com/PMariusf" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://foyner.no/family" target="_blank" rel="noreferrer">Family archive</a>
        </nav>
        <p>© 2026 Føyner Studio</p>
      </footer>
    </main>
  );
}
