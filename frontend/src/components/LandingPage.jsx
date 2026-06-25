import React, { useState } from "react";
import { Instagram, Twitter, Mail } from "lucide-react";

const BG       = "/assets/background.jpg";
const SIGIL    = "/assets/sigil.png";
const DIVIDER1 = "/assets/divider-1.png";  // diamond
const DIVIDER2 = "/assets/divider-2.png";  // ornate fleuron
const DIVIDER3 = "/assets/divider-3.png";  // small simple
const COMPASS  = "/assets/compass.png";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4500);
  };

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

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-16 pb-12 text-center sm:pt-20 md:pt-24 lg:pt-28">
          {/* Sigil */}
          <div
            className="rise"
            style={{ animationDelay: "120ms" }}
            data-testid="hero-sigil"
          >
            <img
              src={SIGIL}
              alt="Nocturnal Nine sigil — Lux Ex Nocte"
              draggable={false}
              className="glow-pulse block w-[180px] sm:w-[220px] md:w-[260px] lg:w-[290px] select-none"
              style={{
                filter:
                  "drop-shadow(0 2px 14px rgba(0,0,0,0.85)) drop-shadow(0 0 30px rgba(200,166,106,0.12))",
              }}
            />
          </div>

          {/* Wordmark */}
          <h1
            className="font-display gold-foil rise mt-6 text-[2.6rem] leading-[1.02] sm:text-[3.6rem] md:text-[4.6rem] lg:text-[5.4rem]"
            style={{
              animationDelay: "560ms",
              filter:
                "drop-shadow(0 2px 18px rgba(200,166,106,0.18)) drop-shadow(0 1px 2px rgba(0,0,0,0.85))",
            }}
            data-testid="hero-title"
          >
            Nocturnal Nine
          </h1>

          {/* Diamond divider beneath wordmark */}
          <div
            className="rise mt-5 flex w-full justify-center"
            style={{ animationDelay: "820ms" }}
            data-testid="hero-divider"
          >
            <img
              src={DIVIDER1}
              alt=""
              aria-hidden="true"
              className="h-auto w-[260px] sm:w-[320px] md:w-[380px] opacity-90"
            />
          </div>
        </div>

        {/* ============== MANIFESTO (still over hero bg, fading into black) ============== */}
        <div
          className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 pt-2 pb-24 text-center sm:pb-28 md:pb-32"
          data-testid="manifesto-section"
        >
          <h2
            className="font-body kerning-wide text-[0.95rem] uppercase text-gold-light sm:text-base md:text-[1.05rem] rise"
            style={{
              animationDelay: "1050ms",
              textShadow: "0 1px 8px rgba(0,0,0,0.95)",
            }}
            data-testid="manifesto-headline"
          >
            From the shadows, we create.
          </h2>

          <div
            className="mt-5 flex justify-center rise"
            style={{ animationDelay: "1200ms" }}
          >
            <img
              src={DIVIDER3}
              alt=""
              aria-hidden="true"
              className="h-auto w-[160px] sm:w-[200px] opacity-85"
            />
          </div>

          <p
            className="font-body rise mt-8 max-w-xl text-[0.95rem] leading-[2.05] text-gold-light/90 sm:text-[1rem] md:text-[1.05rem] md:leading-[2.15]"
            style={{
              animationDelay: "1350ms",
              textShadow: "0 1px 6px rgba(0,0,0,0.9)",
            }}
            data-testid="manifesto-body"
          >
            Nocturnal Nine is an independent creative house dedicated to artistry,
            mysticism, visual storytelling and timeless expression.
            <br />
            Rooted in darkness. Driven by purpose.
            <br />
            Guided by the light that rises from within.
          </p>
        </div>
      </section>

      {/* ============== MAILING LIST ============== */}
      <section
        className="relative w-full bg-black px-6 pb-32 pt-2 sm:pb-40"
        data-testid="email-section"
      >
        <div className="mx-auto w-full max-w-2xl">
          <div className="ml-frame relative px-6 py-12 sm:px-12 sm:py-14 md:px-16 md:py-16">
            <span className="ml-corner tl" />
            <span className="ml-corner tr" />
            <span className="ml-corner bl" />
            <span className="ml-corner br" />

            {/* Ornate divider at top of box */}
            <div className="flex justify-center">
              <img
                src={DIVIDER2}
                alt=""
                aria-hidden="true"
                className="h-auto w-[260px] sm:w-[320px] md:w-[360px] opacity-95"
              />
            </div>

            {/* Heading */}
            <h3
              className="font-display gold-foil mt-6 text-center text-[2rem] sm:text-[2.4rem] md:text-[2.8rem]"
              data-testid="email-heading"
              style={{
                filter:
                  "drop-shadow(0 2px 12px rgba(200,166,106,0.12)) drop-shadow(0 1px 2px rgba(0,0,0,0.75))",
              }}
            >
              Join The Circle
            </h3>

            {/* Caption (Cinzel) */}
            <p
              className="font-body kerning-wide mt-4 text-center text-[0.7rem] uppercase text-gold-light/80 sm:text-xs md:text-[0.78rem]"
              data-testid="email-caption"
            >
              Subscribe to our mailing list for
              <br />
              News, releases, mysteries &amp; exclusive updates.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0"
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

            {/* Status */}
            <div
              className="mt-4 min-h-[1.25rem] text-center text-[0.7rem] uppercase tracking-[0.32em]"
              aria-live="polite"
            >
              {submitted && (
                <span className="text-gold" data-testid="email-success">
                  ✶ welcomed into the circle
                </span>
              )}
            </div>

            {/* Compass — overlaps bottom of frame */}
            <img
              src={COMPASS}
              alt=""
              aria-hidden="true"
              draggable={false}
              className="pointer-events-none absolute left-1/2 -bottom-[55px] z-10 h-auto w-[70px] -translate-x-1/2 sm:-bottom-[68px] sm:w-[88px] md:-bottom-[78px] md:w-[100px]"
              data-testid="compass-ornament"
              style={{
                filter:
                  "drop-shadow(0 4px 18px rgba(0,0,0,0.85)) drop-shadow(0 0 20px rgba(200,166,106,0.18))",
              }}
            />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer
        className="relative w-full bg-black px-6 pb-16 pt-6"
        data-testid="footer-section"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Quote */}
          <p
            className="font-display italic text-gold-light/90 text-[1.05rem] leading-[1.7] sm:text-[1.2rem] md:text-[1.35rem]"
            data-testid="footer-quote"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
          >
            &ldquo;In the stillness of the night,
            <br />
            we remember what the world has forgotten.&rdquo;
          </p>

          {/* Small divider */}
          <div className="mt-8 flex justify-center">
            <img
              src={DIVIDER3}
              alt=""
              aria-hidden="true"
              className="h-auto w-[150px] sm:w-[180px] opacity-70"
            />
          </div>

          {/* Socials */}
          <div
            className="mt-8 flex items-center justify-center gap-12 sm:gap-14"
            data-testid="footer-socials"
          >
            <a
              href="https://instagram.com/nocturnalnine"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-instagram"
              className="social-ico"
            >
              <Instagram strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="https://x.com/nocturnalnine"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-x"
              className="social-ico"
            >
              <Twitter strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="mailto:contact@nocturnalnine.com"
              aria-label="Email"
              data-testid="social-mail"
              className="social-ico"
            >
              <Mail strokeWidth={1.3} className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
          </div>

          {/* Copyright */}
          <p
            className="font-body kerning-widest mt-10 text-[0.65rem] uppercase text-gold-light/60 sm:text-xs"
            data-testid="copyright"
          >
            Nocturnal Nine © MMXXV
          </p>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
