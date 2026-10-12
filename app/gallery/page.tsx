import type { Metadata } from "next";
import Link from "next/link";
import { photographs, artworks, webProjects, sketches } from "../collections";

export const metadata: Metadata = { title: "Gallery — Føyner Studio" };

export default function Gallery() {
  return (
    <main className="gallery-page">
      <a className="skip-link" href="#photography">Skip to collection</a>
      <header className="subpage-nav shell">
        <Link className="brand" href="/">FØYNER<span>STUDIO</span></Link>
        <Link className="text-link" href="/">← Back to studio</Link>
      </header>
      <div className="collection-intro shell">
        <p className="section-label">The collection</p>
        <h1>A closer <em>look.</em></h1>
        <p>Photography, imagined worlds and the sketches behind them.</p>
        <nav className="collection-nav" aria-label="Collections">
          <a href="#photography">Photography</a>
          <a href="#art">Digital art</a>
          <a href="#sketches">Drawings</a>
          <a href="#web">Web projects</a>
        </nav>
      </div>
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
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <figcaption>
                <strong>{artwork.title}</strong>
                <span>{artwork.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="sketch-section" id="sketches">
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


      <footer className="simple-footer shell"><Link href="/">← Back to Føyner Studio</Link><p>© 2026 Føyner Studio</p></footer>
    </main>
  );
}
