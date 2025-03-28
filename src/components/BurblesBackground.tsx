import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const BubblesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          color: {
            value: ["#3498db", "#9b59b6", "#1abc9c", "#f1c40f", "#e74c3c"],
          },
          links: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.7,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 10, max: 50 },
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
};
