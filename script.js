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
      ? { particle: "#dfeeff", link: "#afc3de" }
      : { particle: "#333", link: "#555d68" };

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
          value: 100,
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
          value: 0.8,
          random: true,
          anim: {
            enable: false
          }
        },
        size: {
          value: 3.1,
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
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        }
      },
      retina_detect: true
    });
  }
});
