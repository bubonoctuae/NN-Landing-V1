import React, { useState, useEffect, useRef } from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

const BG       = "/assets/background.jpg";
const SIGIL    = "/assets/sigil.png";
const DIVIDER1 = "/assets/divider-1.png";  // diamond
const DIVIDER2 = "/assets/divider-2.png";  // ornate fleuron
const DIVIDER3 = "/assets/divider-3.png";  // small simple
const COMPASS  = "/assets/compass.png";
const WORDMARK = "/assets/wordmark-img.png";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const videoRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4500);
  };

  // Lock body + auto-play after delay when modal opens
  useEffect(() => {
    if (videoOpen) {
      document.body.classList.add("modal-open");
      const t = setTimeout(() => {
        const v = videoRef.current;
        if (v) v.play().catch(() => {});
      }, 2200);
      return () => {
        clearTimeout(t);
        document.body.classList.remove("modal-open");
      };
    }
  }, [videoOpen]);

  // ESC closes modal
  useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  return (
    <main className="relative w-full bg-black text-gold-light" data-testid="landing-root">
      {/* ============== HERO ============== */}
      <section
        className="relative w-full overflow-hidden"
        style={{ isolation: "isolate" }}
        data-testid="hero-section"
      >
        <div
          className="hero-bg breathing"
          aria-hidden="true"
          style={{ backgroundImage: `url(${BG})` }}
        />
        <div className="mist mist-a mist-1" aria-hidden="true" />
        <div className="mist mist-b mist-2" aria-hidden="true" />
        <div className="mist mist-c mist-3" aria-hidden="true" />
        <div className="mist-front mist-front-a" aria-hidden="true" />
        <div className="mist-front mist-front-b" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-6 pb-8 text-center sm:pt-8 md:pt-10 lg:pt-12">
          {/* Sigil + clickable eye button */}
          <div
            className="rise relative"
            style={{ animationDelay: "120ms" }}
            data-testid="hero-sigil"
          >
            <img
              src={SIGIL}
              alt="Nocturnal Nine sigil — Lux Ex Nocte"
              draggable={false}
              className="sigil-breathe block w-[218px] sm:w-[264px] md:w-[312px] lg:w-[348px] select-none"
            />
            {/* Eye area — clickable, glows on hover. Positioned precisely on the eye. */}
            <button
              type="button"
              aria-label="Open the inner sight"
              data-testid="eye-button"
              className="eye-button"
              onClick={() => setVideoOpen(true)}
              style={{
                /* Centered on the eye inside the 9-point star */
                top: "17.5%",
                left: "41%",
                width: "18%",
                height: "9%",
              }}
            />
          </div>

          {/* Grungy divider underneath the sigil (below LUX EX NOCTE) */}
          <div
            className="rise mt-2 flex w-full justify-center"
            style={{ animationDelay: "320ms" }}
            data-testid="sigil-divider"
          >
            <img
              src={DIVIDER1}
              alt=""
              aria-hidden="true"
              className="grunge-mask h-auto w-[230px] sm:w-[280px] md:w-[320px]"
              style={{
                opacity: 0.9,
                filter: "saturate(1.45) hue-rotate(-10deg) brightness(1.05)",
              }}
            />
          </div>

          {/* Eyebrow + Wordmark wrapper */}
          <div
            className="rise mt-5 inline-flex flex-col items-center sm:mt-6"
            style={{ animationDelay: "560ms" }}
          >
            {/* THE ✦ ORDER ✦ OF */}
            <div
              className="font-body uppercase flex items-center justify-center"
              data-testid="hero-eyebrow"
              style={{
                fontSize: "clamp(0.92rem, 1.5vw, 1.45rem)",
                fontWeight: 600,
                color: "#E6D7A6",
                marginBottom: "-0.05em",
                gap: "0.9em",
                textShadow: "0 1px 8px rgba(0,0,0,0.95)",
              }}
            >
              <span style={{ letterSpacing: "0.28em", paddingLeft: "0.28em" }}>THE</span>
              <span aria-hidden="true" style={{ color: "rgba(220,170,90,0.75)", fontSize: "0.7em" }}>✦</span>
              <span style={{ letterSpacing: "0.28em", paddingLeft: "0.28em" }}>ORDER</span>
              <span aria-hidden="true" style={{ color: "rgba(220,170,90,0.75)", fontSize: "0.7em" }}>✦</span>
              <span style={{ letterSpacing: "0.28em", paddingLeft: "0.28em" }}>OF</span>
            </div>

            {/* Wordmark image — pulled up tight to eyebrow */}
            <img
              src={WORDMARK}
              alt="Nocturnal Nine"
              draggable={false}
              data-testid="hero-title"
              className="block h-auto w-[440px] sm:w-[600px] md:w-[760px] lg:w-[880px] select-none"
              style={{
                marginTop: "-0.55em",
                marginBottom: "-0.4em",
                filter:
                  "brightness(1.2) saturate(1.2) contrast(1.05) hue-rotate(-6deg) drop-shadow(0 2px 18px rgba(200,140,70,0.20)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))",
              }}
            />
          </div>
        </div>

        {/* MANIFESTO — tight to wordmark */}
        <div
          className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 pb-14 pt-0 text-center sm:pb-18 md:pb-22"
          data-testid="manifesto-section"
        >
          <h2
            className="font-body kerning-wide text-[0.95rem] uppercase text-gold-light sm:text-base md:text-[1.05rem] rise"
            style={{ animationDelay: "1050ms", textShadow: "0 1px 8px rgba(0,0,0,0.95)" }}
            data-testid="manifesto-headline"
          >
            From the shadows, we create.
          </h2>

          <div className="mt-4 flex justify-center rise" style={{ animationDelay: "1200ms" }}>
            <img
              src={DIVIDER3}
              alt=""
              aria-hidden="true"
              className="h-auto w-[160px] sm:w-[200px] opacity-90"
              style={{ filter: "saturate(1.45) hue-rotate(-10deg) brightness(1.05)" }}
            />
          </div>

          <p
            className="font-quote rise mt-6 max-w-xl text-[1.05rem] leading-[1.8] text-gold-light/90 sm:text-[1.15rem] md:text-[1.25rem] md:leading-[1.9]"
            style={{ animationDelay: "1350ms", textShadow: "0 1px 6px rgba(0,0,0,0.9)" }}
            data-testid="manifesto-body"
          >
            Nocturnal Nine is a creative order devoted to art,
            mysticism and the strange beauty hidden in the world.
            <br />
            <br />
            We create what lingers between shadow and light.
          </p>
        </div>
      </section>

      {/* ============== MAILING LIST (aged parchment) ============== */}
      <section
        className="relative w-full overflow-hidden bg-black px-6 pb-20 pt-2 sm:pb-24"
        data-testid="email-section"
        style={{ isolation: "isolate" }}
      >
        <div className="mist-dark mist-dark-a" aria-hidden="true" />
        <div className="mist-dark mist-dark-b" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div
            className="ml-frame relative px-7 py-16 sm:px-12 sm:py-18 md:px-16 md:py-20"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 40%, rgba(80,55,30,0.55) 0%, rgba(28,18,10,0.95) 70%, rgba(10,6,4,1) 100%), url(/assets/paper-texture.jpg)",
              backgroundSize: "cover, cover",
              backgroundPosition: "center, center",
              backgroundBlendMode: "multiply, normal",
            }}
          >
            <div className="ml-frame-inner" />
            <span className="ml-corner tl" />
            <span className="ml-corner tr" />
            <span className="ml-corner bl" />
            <span className="ml-corner br" />

            <div className="relative flex justify-center">
              <img
                src={DIVIDER2}
                alt=""
                aria-hidden="true"
                className="h-auto w-[260px] sm:w-[320px] md:w-[360px] opacity-95"
                style={{ filter: "saturate(1.45) hue-rotate(-10deg) brightness(1.05)" }}
              />
            </div>

            <h3
              className="font-display distressed gold-foil relative mt-6 text-center text-[2rem] sm:text-[2.4rem] md:text-[2.8rem]"
              data-testid="email-heading"
              style={{
                filter:
                  "drop-shadow(0 2px 12px rgba(200,166,106,0.12)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))",
              }}
            >
              Join The Circle
            </h3>

            <p
              className="font-body kerning-wide relative mt-4 text-center text-[0.7rem] uppercase text-gold-light/85 sm:text-xs md:text-[0.78rem]"
              data-testid="email-caption"
            >
              Subscribe to our mailing list for
              <br />
              News, releases, mysteries &amp; exclusive updates.
            </p>

            <form
              onSubmit={handleSubmit}
              className="relative mt-9 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
              data-testid="email-form"
              noValidate
            >
              <input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitted) setSubmitted(false);
                }}
                className="input-ritual flex-1 px-5 py-4 text-sm sm:py-[14px]"
                aria-label="Email address"
                data-testid="email-input"
                required
              />
              <button
                type="submit"
                className="btn-join whitespace-nowrap px-10 py-4 text-[0.7rem] uppercase sm:py-[14px] sm:text-xs"
                data-testid="subscribe-button"
              >
                Join
              </button>
            </form>

            <div
              className="relative mt-4 min-h-[1.25rem] text-center text-[0.7rem] uppercase tracking-[0.32em]"
              aria-live="polite"
            >
              {submitted && (
                <span className="text-gold" data-testid="email-success">
                  ✶ welcomed into the circle
                </span>
              )}
            </div>

            <img
              src={COMPASS}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="pointer-events-none absolute left-1/2 -bottom-[55px] z-10 h-auto w-[70px] -translate-x-1/2 sm:-bottom-[68px] sm:w-[88px] md:-bottom-[78px] md:w-[100px]"
              data-testid="compass-ornament"
              style={{
                filter:
                  "saturate(1.45) hue-rotate(-10deg) brightness(1.05) drop-shadow(0 4px 18px rgba(0,0,0,0.85)) drop-shadow(0 0 20px rgba(220,140,70,0.2))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer
        className="relative w-full bg-black px-6 pb-12 pt-4"
        data-testid="footer-section"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <div className="flex items-center justify-center gap-5 sm:gap-7" data-testid="footer-quote-row">
            <span aria-hidden="true" style={{ color: "rgba(200,166,106,0.7)", fontSize: "1.4rem" }}>✦</span>
            <p
              className="font-display italic text-gold-light/90 text-[1.05rem] leading-[1.7] sm:text-[1.2rem] md:text-[1.35rem]"
              data-testid="footer-quote"
              style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
            >
              &ldquo;In the stillness of the night,
              <br />
              we remember what the world has forgotten.&rdquo;
            </p>
            <span aria-hidden="true" style={{ color: "rgba(200,166,106,0.7)", fontSize: "1.4rem" }}>✦</span>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src={DIVIDER3}
              alt=""
              aria-hidden="true"
              className="h-auto w-[150px] sm:w-[180px] opacity-80"
              style={{ filter: "saturate(1.45) hue-rotate(-10deg) brightness(1.05)" }}
            />
          </div>

          <div className="mt-6 flex items-center justify-center gap-12 sm:gap-14" data-testid="footer-socials">
            <a href="https://instagram.com/nocturnalnine" aria-label="Instagram" target="_blank" rel="noopener noreferrer" data-testid="social-instagram" className="social-ico">
              <Instagram strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="https://x.com/nocturnalnine" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer" data-testid="social-x" className="social-ico">
              <Twitter strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a href="mailto:contact@nocturnalnine.com" aria-label="Email" data-testid="social-mail" className="social-ico">
              <Mail strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>

          <p
            className="font-body kerning-widest mt-8 text-[0.65rem] uppercase text-gold-light/60 sm:text-xs"
            data-testid="copyright"
          >
            Nocturnal Nine © MMXXV
          </p>
        </div>
      </footer>

      {/* ============== VIDEO MODAL ============== */}
      {videoOpen && (
        <div
          className="video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Nocturnal Nine — sight"
          data-testid="video-modal"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="video-modal-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setVideoOpen(false)}
              aria-label="Close"
              data-testid="video-modal-close"
            >
              ×
            </button>
            <video
              ref={videoRef}
              src="/assets/intro-video.mp4"
              controls
              playsInline
              data-testid="intro-video"
              preload="metadata"
            />
            <div className="video-modal-loading">awakening…</div>
          </div>
        </div>
      )}
    </main>
  );
};

export default LandingPage;
