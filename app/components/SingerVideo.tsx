"use client";

import { useEffect, useRef, useState } from "react";

export default function SingerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let active = true;
    const updatePlayback = () => {
      if (visible && !paused && !motion.matches && !document.hidden) {
        void video.play().then(() => {
          if (!active || !visible || paused || motion.matches || document.hidden) video.pause();
        }).catch(() => { /* Keep the poster if autoplay is unavailable. */ });
      } else {
        video.pause();
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updatePlayback();
    }, { threshold: 0.15 });
    observer.observe(video);
    motion.addEventListener("change", updatePlayback);
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      active = false;
      observer.disconnect();
      motion.removeEventListener("change", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
      video.pause();
    };
  }, [paused]);

  return (
    <figure className="music-singer">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster="/images/music/rock-singer.webp"
        aria-label="Rock singer performing"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/images/music/rock-singer.mp4" type="video/mp4" />
      </video>
      <button
        className="music-singer-toggle"
        type="button"
        onClick={() => {
          if (playing) {
            setPaused(true);
            videoRef.current?.pause();
          } else {
            setPaused(false);
            void videoRef.current?.play().catch(() => {});
          }
        }}
        aria-label={playing ? "Pause singer video" : "Play singer video"}
      >
        {playing ? "Pause video" : "Play video"}
      </button>
    </figure>
  );
}
