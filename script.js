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

    // Theme-specific contrast keeps the network legible without competing
    // with the content cards, especially against the pale light background.
    const palette = theme === "dark"
      ? { particle: "#9db1ff", link: "#6072a1", opacity: 0.72, linkOpacity: 0.5 }
      : { particle: "#526a9a", link: "#687b9e", opacity: 0.78, linkOpacity: 0.54 };

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
          value: palette.opacity,
          random: false,
          anim: {
            enable: false
          }
        },
        size: {
          value: 5.2,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 165,
          color: palette.link,
          opacity: palette.linkOpacity,
          width: 1.2
        },
        move: {
          enable: true,
          speed: 1.25,
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
            distance: 220,
            line_linked: {
              opacity: 0.95
            }
          },
          push: {
            particles_nb: 7
          }
        }
      },
      retina_detect: true
    });

    startCursorAttraction();
  }

  /* particles.js ships grab/repulse/bubble but no cursor attraction, so
     steer particles toward the pointer by hand. Hover pulls the network
     toward the pointer; pressing reverses the force for a playful burst. */
  let attractionRunning = false;
  const pointer = { x: null, y: null, pressed: false };

  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.pressed = event.buttons > 0;
  }, { passive: true });

  window.addEventListener("pointerdown", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.pressed = true;
  }, { passive: true });

  window.addEventListener("pointerup", () => {
    pointer.pressed = false;
  }, { passive: true });

  window.addEventListener("pointercancel", resetPointer, { passive: true });
  document.documentElement.addEventListener("pointerleave", resetPointer, { passive: true });
  window.addEventListener("blur", resetPointer);

  function resetPointer() {
    pointer.x = null;
    pointer.y = null;
    pointer.pressed = false;
  }

  function startCursorAttraction() {
    if (attractionRunning) {
      return;
    }
    attractionRunning = true;

    const RADIUS = 300;          // px: responsive area around the pointer
    const HOVER_PULL = 0.075;    // gentle attraction while exploring
    const PRESS_REPEL = 0.24;    // stronger outward burst while pressing
    const HOVER_MAX_SPEED = 3;
    const PRESS_MAX_SPEED = 5.2;

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
            // The force falls off with distance. Holding the pointer reverses
            // it, so the same area can be gathered and scattered deliberately.
            const strength = pointer.pressed ? -PRESS_REPEL : HOVER_PULL;
            const force = strength * (1 - distance / (RADIUS * ratio));
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;

            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            const maxSpeed = pointer.pressed ? PRESS_MAX_SPEED : HOVER_MAX_SPEED;
            if (speed > maxSpeed) {
              particle.vx = (particle.vx / speed) * maxSpeed;
              particle.vy = (particle.vy / speed) * maxSpeed;
            }
          }
        });
      }

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }
});
