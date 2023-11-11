document.addEventListener("DOMContentLoaded", function () {
    const openModalLinks = document.querySelectorAll('.open-modal');

    openModalLinks.forEach(link => {
        link.addEventListener('click', () => {
            const modalId = link.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    const closeModalButtons = document.querySelectorAll('.close');

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', event => {
        closeModalButtons.forEach(button => {
            const modalId = button.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);

            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});


// -----------------------------------------------



const profileCards = document.querySelectorAll(".cardProfile");

profileCards.forEach(card => {
    card.addEventListener("click", function (event) {
        event.preventDefault();
        const modalId = card.getAttribute("data-modal-id");
        const modal = document.getElementById(modalId + "CustomModal");
        if (modal) {
            modal.style.display = "block";

            const closeSpan = modal.querySelector(".closeCustomModal");
            if (closeSpan) {
                closeSpan.addEventListener("click", function() {
                    closeCustomModal(modalId);
                });
            }

            document.addEventListener("click", function(event) {
                if (closeModalClickOnBackground) {
                    closeModalClickOnBackground.addEventListener("click", function() {
                        closeCustomModal(modalId);
                    });
                }
            });
            
        }
    });
});


function closeCustomModal(modalId) {
    const modal = document.getElementById(modalId + "CustomModal");
    if (modal) {
        modal.style.display = "none";
    }
}


// ---------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasWithBothOptions'));
    var links = document.querySelectorAll(".navItemMobile .nav-link");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            offcanvas.hide();
        });
    });
});


// Anclas ---------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          console.log(`Haciendo clic en el enlace hacia ${targetId}`);
  
          let scrollConfig;
  
          // Configuraciones para pantallas pequeñas (máx. 480px)
          if (window.innerWidth <= 480) {
            scrollConfig = {
              'anclaFirma': { top: 50, behavior: 'smooth', block: 'start' },
              'anclaService': { top: -150, behavior: 'smooth' },
              'anclaContacto': { top: -20, behavior: 'smooth' },
              'anclaNosotros': { top: -100, behavior: 'smooth', block: 'start' }
            };
          } else {
            // Configuraciones para pantallas más grandes
            scrollConfig = {
              'anclaFirma': { top: -50, behavior: 'smooth', block: 'start' },
              'anclaService': { top: -180, behavior: 'smooth' },
              'anclaContacto': { top: -30, behavior: 'smooth' },
              'anclaNosotros': { top: 20, behavior: 'smooth', block: 'start' }
            };
          }
  
          const config = scrollConfig[targetId] || { behavior: 'smooth' };
  
          if (config.top !== undefined) {
            const rect = targetElement.getBoundingClientRect();
            const offsetTop = window.scrollY + rect.top;
            window.scrollTo({
              top: offsetTop + config.top,
              behavior: config.behavior
            });
          } else {
            targetElement.scrollIntoView(config);
          }
  
          console.log(`Desplazando hacia ${targetId}`);
        }
      });
    });
  });
  
  
  
  