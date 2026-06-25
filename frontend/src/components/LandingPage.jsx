import React, { useState } from "react";

const REF = "/assets/reference.jpg";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return;
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="relative w-full bg-black" data-testid="landing-root">
      <div
        className="relative mx-auto w-full"
        style={{ maxWidth: "1024px", aspectRatio: "1024 / 1536" }}
        data-testid="reference-canvas"
      >
        <img
          src={REF}
          alt="Nocturnal Nine — Lux Ex Nocte"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none"
          style={{ objectFit: "cover" }}
        />

        {/* SR-only structure */}
        <h1 className="sr-only">The Order Of Nocturnal Nine — Lux Ex Nocte</h1>

        {/* Email form overlay (transparent, positioned over the form in image) */}
        <form
          onSubmit={handleSubmit}
          data-testid="email-form"
          className="absolute flex"
          style={{
            left: "20.5%",
            right: "9.0%",
            top: "80.7%",
            height: "3.0%",
          }}
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (submitted) setSubmitted(false);
            }}
            aria-label="Your email address"
            data-testid="email-input"
            required
            placeholder=""
            className="h-full flex-1 bg-transparent border-0 outline-none"
            style={{
              color: "#E6D7A6",
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(10px, 1vw, 15px)",
              letterSpacing: "0.18em",
              textTransform: "lowercase",
              caretColor: "#C8A66A",
              padding: "0 2%",
            }}
          />
          <button
            type="submit"
            aria-label="Subscribe"
            data-testid="subscribe-button"
            className="h-full cursor-pointer bg-transparent border-0 outline-none"
            style={{ width: "28%" }}
          />
        </form>

        {submitted && (
          <div
            data-testid="email-success"
            className="absolute left-0 right-0 text-center"
            style={{
              top: "84.5%",
              color: "#C8A66A",
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(9px, 0.85vw, 13px)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              textShadow: "0 1px 6px rgba(0,0,0,0.95)",
            }}
          >
            ✶ welcomed into the circle
          </div>
        )}

        {/* Social icon click overlays */}
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="social-instagram"
          className="absolute block"
          style={{ left: "37.8%", top: "92.3%", width: "5.8%", height: "2.4%" }}
        />
        <a
          href="https://x.com"
          aria-label="X (Twitter)"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="social-x"
          className="absolute block"
          style={{ left: "47.2%", top: "92.3%", width: "5.8%", height: "2.4%" }}
        />
        <a
          href="mailto:hello@nocturnalnine.com"
          aria-label="Email"
          data-testid="social-mail"
          className="absolute block"
          style={{ left: "56.6%", top: "92.3%", width: "5.8%", height: "2.4%" }}
        />
      </div>
    </main>
  );
};

export default LandingPage;
