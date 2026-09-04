// Theme + particles setup for a simple academic layout.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  let storedTheme = null;
  try {
    storedTheme = localStorage.getItem("theme");
  } catch (error) {
    // Storage can be unavailable in privacy modes; the HTML still defaults dark.
  }
  const initialTheme = storedTheme || "dark";

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        localStorage.setItem("theme", nextTheme);
      } catch (error) {
        // The toggle still works for the current page when storage is unavailable.
      }
    });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;

    if (toggle) {
      // NB: only the label changes here — the sun/moon SVGs live in the
      // markup and are swapped by CSS. Never overwrite the button's
      // content, or the icons get destroyed on the first toggle.
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }

    // Particles are decorative: a failure here must never stop the
    // theme itself from switching.
    try {
      initParticles(theme);
    } catch (error) {
      console.warn("Particle background failed to initialise:", error);
    }
  }

  function initParticles(theme) {
    if (typeof particlesJS !== "function") {
      return;
    }

    // Muted neutrals with a hint of the accent blue
    const palette = theme === "dark"
      ? { particle: "#8ba4ff", link: "#4a5570" }
      : { particle: "#8e9bb5", link: "#aab3c4" };

    // Clean existing canvas before reinitializing.
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((instance) => {
        const vendors = instance && instance.pJS && instance.pJS.fn && instance.pJS.fn.vendors;
        if (vendors && typeof vendors.destroypJS === "function") {
          vendors.destroypJS();
        }
      });
      window.pJSDom = [];
    }

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 190,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: palette.particle
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.6,
          random: true,
          anim: {
            enable: false
          }
        },
        size: {
          value: 3.2,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 145,
          color: palette.link,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        // "window" so hovering works even where cards cover the canvas
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 160,
            line_linked: {
              opacity: 0.7
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });

    startCursorAttraction();
  }

  /* particles.js ships grab/repulse/bubble but no cursor attraction, so
     steer particles toward the pointer by hand: each frame, particles
     within RADIUS get a small nudge toward the cursor, with the speed
     clamped so they drift rather than accelerate into it. */
  let attractionRunning = false;
  const pointer = { x: null, y: null };

  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });

  window.addEventListener("mouseout", () => {
    pointer.x = null;
    pointer.y = null;
  });

  function startCursorAttraction() {
    if (attractionRunning) {
      return;
    }
    attractionRunning = true;

    const RADIUS = 220;    // px: how close the cursor must be to pull
    const PULL = 0.035;    // how hard it pulls per frame
    const MAX_SPEED = 2.2; // keeps particles from slingshotting

    function step() {
      const instance = window.pJSDom && window.pJSDom[0];
      const particles = instance && instance.pJS && instance.pJS.particles.array;

      if (particles && pointer.x !== null) {
        const ratio = instance.pJS.canvas.pxratio || 1;
        const targetX = pointer.x * ratio;
        const targetY = pointer.y * ratio;

        particles.forEach((particle) => {
          const dx = targetX - particle.x;
          const dy = targetY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 4 && distance < RADIUS * ratio) {
            // Falls off with distance: nearer particles are pulled harder
            const force = PULL * (1 - distance / (RADIUS * ratio));
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;

            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > MAX_SPEED) {
              particle.vx = (particle.vx / speed) * MAX_SPEED;
              particle.vy = (particle.vy / speed) * MAX_SPEED;
            }
          }
        });
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }
});
