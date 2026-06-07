"use client";

import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        className="h-full w-full"
        options={{
          fullScreen: false,

          background: {
            color: "transparent",
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
              outModes: {
                default: "bounce",
              },
            },

            opacity: {
              value: 0.4,
            },

            size: {
              value: { min: 1, max: 3 },
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
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
        }}
      />
    </div>
  );
}