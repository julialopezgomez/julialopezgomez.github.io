// Theme + particles setup for a simple academic layout.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  const storedTheme = localStorage.getItem("theme");
  const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = storedTheme || (preferredDark ? "dark" : "light");

  applyTheme(initialTheme);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    if (toggle) {
      const isDark = theme === "dark";
      toggle.textContent = isDark ? "☀️" : "🌙";
      toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
    initParticles(theme);
  }

  function initParticles(theme) {
    if (typeof particlesJS !== "function") {
      return;
    }

    const palette = theme === "dark"
      ? { particle: "#cbd5e1", link: "#64748b" }
      : { particle: "#475569", link: "#94a3b8" };

    // Clean existing canvas before reinitializing.
    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((instance) => {
        instance.pJS.fn.vendors.destroypJS();
      });
      window.pJSDom = [];
    }

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 55,
          density: {
            enable: true,
            value_area: 950
          }
        },
        color: {
          value: palette.particle
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.16,
          random: true,
          anim: {
            enable: false
          }
        },
        size: {
          value: 2.1,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 145,
          color: palette.link,
          opacity: 0.16,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.7,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "grab"
          },
          onclick: {
            enable: false,
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }
});
