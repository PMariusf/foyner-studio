import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "PM’s Music — Føyner Studio" };
export default function Music() {
  return (
    <main className="music-page">
      <a className="skip-link" href="#music">Skip to music</a>
      <header className="subpage-nav shell">
        <Link className="brand" href="/">FØYNER<span>STUDIO</span></Link>
        <Link className="text-link" href="/#music">← Back to studio</Link>
      </header>
      <h1 className="music-page-title shell">PM’s Music</h1>
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

          <div className="sound-media">
            <figure className="sound-video-card">
              <video
                controls
                playsInline
                preload="none"
                poster="/images/music/rock-singer.webp"
                aria-label="Rock singer performing on stage"
              >
                <source src="/images/music/rock-singer.mp4" type="video/mp4" />
              </video>
              <figcaption>
                <span>In motion</span>
                <strong>Energy becomes sound</strong>
              </figcaption>
            </figure>

            <div className="sound-stills">
              <figure className="sound-cover-card">
                <img
                  src="/images/music/pm-music-cover.webp"
                  alt="PM’s Music artwork with the words Feel it. Live it. Be it."
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>PM’s Music</figcaption>
              </figure>

              <figure className="sound-portrait-card">
                <img
                  src="/images/music/rock-singer.webp"
                  alt="Rock singer recording beside a studio microphone"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Studio atmosphere</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>


      <footer className="simple-footer shell"><Link href="/#music">← Back to Føyner Studio</Link><p>© 2026 Føyner Studio</p></footer>
    </main>
  );
}
