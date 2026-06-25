import React from "react";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <LandingPage />
      <div
        className="paper-overlay"
        aria-hidden="true"
        style={{ backgroundImage: "url(/assets/paper-texture.jpg)" }}
      />
    </div>
  );
}

export default App;
