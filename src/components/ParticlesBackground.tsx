import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
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
            value: "#6e6e6e",
          },
          links: {
            color: "#6e6e6e",
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "polygon",
            options: {
              polygon: {
                sides: 6,
              },
            },
          },
          size: {
            value: { min: 3, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );

  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadSlim(engine);
  // }, []);

  // return (
  //   <Particles
  //     id="tsparticles"
  //     init={particlesInit}
  //     className="absolute inset-0 -z-10"
  //     options={{
  //       fullScreen: { enable: false },
  //       fpsLimit: 60,
  //       particles: {
  //         color: {
  //           value: "#ffffff",
  //         },
  //         links: {
  //           enable: false,
  //         },
  //         move: {
  //           enable: true,
  //           speed: 1,
  //           direction: "bottom",
  //           random: true,
  //           straight: false,
  //           outModes: {
  //             default: "out",
  //           },
  //         },
  //         number: {
  //           density: {
  //             enable: true,
  //             area: 800,
  //           },
  //           value: 80,
  //         },
  //         opacity: {
  //           value: 0.7,
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         size: {
  //           value: { min: 1, max: 5 },
  //           random: true,
  //         },
  //         wobble: {
  //           enable: true,
  //           distance: 10,
  //           speed: 10,
  //         },
  //       },
  //       detectRetina: true,
  //     }}
  //   />
  // );

  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadSlim(engine);
  // }, []);

  // return (
  //   <Particles
  //     id="tsparticles"
  //     init={particlesInit}
  //     className="absolute inset-0 -z-10"
  //     options={{
  //       fullScreen: { enable: false },
  //       fpsLimit: 60,
  //       particles: {
  //         color: {
  //           value: "#6e6e6e",
  //         },
  //         links: {
  //           color: "#6e6e6e",
  //           distance: 150,
  //           enable: true,
  //           opacity: 0.2,
  //           width: 1,
  //         },
  //         move: {
  //           direction: "none",
  //           enable: true,
  //           outModes: {
  //             default: "bounce",
  //           },
  //           random: true,
  //           speed: 0.5,
  //           straight: false,
  //         },
  //         number: {
  //           density: {
  //             enable: true,
  //             area: 900,
  //           },
  //           value: 80,
  //         },
  //         opacity: {
  //           value: 0.3,
  //         },
  //         shape: {
  //           type: "circle",
  //         },
  //         size: {
  //           value: { min: 1, max: 3 },
  //         },
  //       },
  //       detectRetina: true,
  //     }}
  //   />
  // );
};

export default ParticlesBackground;
