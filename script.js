document.addEventListener("DOMContentLoaded", () => {
  const coll = document.querySelectorAll(".collapsible");
  coll.forEach((collapsible) => {
      collapsible.addEventListener("click", function() {
          this.classList.toggle("active");
          // Find the closest .collapsible-container and then find the next .content
          const content = this.closest('.collapsible-container').nextElementSibling;
          if (content && content.classList.contains('content')) {
              if (content.style.display === "block") {
                  content.style.display = "none";
              } else {
                  content.style.display = "block";
              }
          }

      });
  });


  // Sorting functionality
  const sortOrderSelect = document.getElementById("sortOrder");
  sortOrderSelect.addEventListener("change", sortProjects);

  function sortProjects() {
      const sortOrder = sortOrderSelect.value;
      const projectsContainer = document.querySelector("#projects");
      const projectItems = Array.from(projectsContainer.querySelectorAll(".collapsible-container"));

      projectItems.sort((a, b) => {
          if (sortOrder === "date") {
              return new Date(b.dataset.date) - new Date(a.dataset.date);
          } else if (sortOrder === "relevance") {
              return a.dataset.relevance - b.dataset.relevance;
          }
      });

      projectItems.forEach(item => {
        const content = item.closest('.collapsible-container').nextElementSibling;
        projectsContainer.appendChild(item);
        projectsContainer.appendChild(content);
      }); 
  }
  
  // Initial sorting by date
  sortProjects();


  // Button to download the CV
  const downloadCvButton = document.getElementById("downloadCvButton");
  downloadCvButton.addEventListener("click", () => {
      window.open('files/JULIA LOPEZ GOMEZ_CV.pdf', '_blank');
  });

  // Button to download the MINF
  const downloadMinfButton = document.getElementById("downloadMINFButton");
  downloadMinfButton.addEventListener("click", () => {
      window.open('files/MINF1.pdf', '_blank');
  });

  // Button to download the Sheep
  const downloadSheepButton = document.getElementById("downloadSheepButton");
  downloadSheepButton.addEventListener("click", () => {
      window.open('files/sheep.pdf', '_blank');
  });

  const downloadIoTButton = document.getElementById("downloadIoTButton");
  downloadIoTButton.addEventListener("click", () => {
      window.open('files/IoT_cnns_for_HAR.pdf', '_blank');
  });

  const downloadIoTButton2 = document.getElementById("downloadIoTButton2");
  downloadIoTButton.addEventListener("click", () => {
      window.open('files/IoT_healthcare.pdf', '_blank');
  });
});

/* ---- particles.js config ---- */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area":1000
      }
    },
    "color": {
      "value": "#333"
    },
    
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 0.2,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 160,
      "color": "#333",
      "opacity": 0.6,
      "width": 1
    },
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});