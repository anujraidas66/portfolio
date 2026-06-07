"use client";

import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="h-full w-full"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#facc15",
            },
            links: {
              enable: true,
              color: "#facc15",
              distance: 150,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.5,
            },
            opacity: {
              value: 0.4,
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 150,
              },
            },
          },
        }}
      />
    </div>
  );
}