// Language, theme, and particles setup for the academic site.
document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const spanishTranslations = (window.siteTranslations && window.siteTranslations.es) || {};
  const englishTitle = document.title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const englishDescription = descriptionMeta ? descriptionMeta.content : "";
  const textRecords = collectTextRecords();
  const attributeRecords = collectAttributeRecords();

  let storedTheme = null;
  let storedLanguage = null;
  try {
    storedTheme = localStorage.getItem("theme");
    storedLanguage = localStorage.getItem("language");
  } catch (error) {
    // Storage can be unavailable in privacy modes; HTML still defaults to light and English.
  }
  const initialTheme = storedTheme || "light";
  let currentLanguage = storedLanguage === "es" ? "es" : "en";
  let attractionRunning = false;
  const pointer = { x: null, y: null, pressed: false };

  applyTheme(initialTheme);
  applyLanguage(currentLanguage);

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

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.language;
      if (language !== "en" && language !== "es") {
        return;
      }

      applyLanguage(language);
      try {
        localStorage.setItem("language", language);
      } catch (error) {
        // The language switch still works for the current page without storage.
      }
    });
  });

  function collectTextRecords() {
    const records = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!node.nodeValue.trim() || !parent || parent.closest("script, style, svg")) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    while (walker.nextNode()) {
      records.push({ node: walker.currentNode, english: walker.currentNode.nodeValue });
    }
    return records;
  }

  function collectAttributeRecords() {
    const records = [];
    document.querySelectorAll("[aria-label], [title], [alt]").forEach((element) => {
      ["aria-label", "title", "alt"].forEach((attribute) => {
        if (element.hasAttribute(attribute) && !(element === toggle && attribute === "aria-label")) {
          records.push({ element, attribute, english: element.getAttribute(attribute) });
        }
      });
    });
    return records;
  }

  function translatePhrase(english, language = currentLanguage) {
    return language === "es" && spanishTranslations[english]
      ? spanishTranslations[english]
      : english;
  }

  function translateText(english, language) {
    const content = english.trim();
    if (!content) {
      return english;
    }
    const leadingWhitespace = english.match(/^\s*/)[0];
    const trailingWhitespace = english.match(/\s*$/)[0];
    return `${leadingWhitespace}${translatePhrase(content, language)}${trailingWhitespace}`;
  }

  function applyLanguage(language) {
    currentLanguage = language;
    root.lang = language;
    root.dataset.language = language;

    textRecords.forEach(({ node, english }) => {
      node.nodeValue = translateText(english, language);
    });
    attributeRecords.forEach(({ element, attribute, english }) => {
      element.setAttribute(attribute, translatePhrase(english, language));
    });

    document.title = translatePhrase(englishTitle, language);
    if (descriptionMeta) {
      descriptionMeta.content = translatePhrase(englishDescription, language);
    }

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    updateThemeToggleLabel(root.dataset.theme);
  }

  function updateThemeToggleLabel(theme) {
    if (!toggle) {
      return;
    }
    const englishLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
    toggle.setAttribute("aria-label", translatePhrase(englishLabel));
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;

    // Only the label changes here; CSS swaps the existing sun/moon icons.
    updateThemeToggleLabel(theme);

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
      ? { particle: "#9db1ff", link: "#6072a1", opacity: 0.5, linkOpacity: 0.3 }
      : { particle: "#526a9a", link: "#687b9e", opacity: 0.5, linkOpacity: 0.28 };

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
          value: 120,
          density: {
            enable: true,
            value_area: 1100
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
          value: 3.8,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: palette.link,
          opacity: palette.linkOpacity,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.75,
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
            distance: 185,
            line_linked: {
              opacity: 0.68
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
     steer particles toward the pointer by hand. Hover pulls the network
     toward the pointer; pressing reverses the force for a playful burst. */
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

    const RADIUS = 230;          // px: responsive area around the pointer
    const HOVER_PULL = 0.04;     // subtle attraction while exploring
    const PRESS_REPEL = 0.14;    // outward burst while pressing
    const HOVER_MAX_SPEED = 2.2;
    const PRESS_MAX_SPEED = 3.8;

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
