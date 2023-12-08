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
                closeSpan.addEventListener("click", function () {
                    closeCustomModal(modalId);
                });
            }

            document.addEventListener("click", function (event) {
                if (closeModalClickOnBackground) {
                    closeModalClickOnBackground.addEventListener("click", function () {
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

document.addEventListener("DOMContentLoaded", function () {
    var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasWithBothOptions'));
    var links = document.querySelectorAll(".navItemMobile .nav-link");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
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

                if (window.innerWidth <= 480) {
                    scrollConfig = {
                        'anclaFirma': { top: -115, behavior: 'smooth', block: 'start' },
                        'anclaService': { top: -140, behavior: 'smooth' },
                        'anclaContacto': { top: -20, behavior: 'smooth' },
                        'anclaNosotros': { top: -100, behavior: 'smooth', block: 'start' }
                    };
                } else if (window.innerWidth <= 800) {
                    scrollConfig = {
                        'anclaFirma': { top: -130, behavior: 'smooth', block: 'start' },
                        'anclaService': { top: -150, behavior: 'smooth', block: 'center' },
                        'anclaContacto': { top: -30, behavior: 'smooth' },
                        'anclaNosotros': { top: -100, behavior: 'smooth', block: 'start' }
                    };
                } else if (window.innerWidth <= 1024) {
                    scrollConfig = {
                        'anclaFirma': { top: -130, behavior: 'smooth', block: 'start' },
                        'anclaService': { top: -100, behavior: 'smooth', block: 'center' },
                        'anclaContacto': { top: -30, behavior: 'smooth' },
                        'anclaNosotros': { top: -10, behavior: 'smooth', block: 'start' }
                    };
                } else if (window.innerWidth <= 1366) {
                    scrollConfig = {
                        'anclaFirma': { top: -125, behavior: 'smooth', block: 'start' },
                        'anclaService': { top: -100, behavior: 'smooth', block: 'center' },
                        'anclaContacto': { top: -30, behavior: 'smooth' },
                        'anclaNosotros': { top: -5, behavior: 'smooth', block: 'start' }
                    };
                } else {
                    scrollConfig = {
                        'anclaFirma': { top: -175, behavior: 'smooth', block: 'start' },
                        'anclaService': { top: -170, behavior: 'smooth', block: 'center' },
                        'anclaContacto': { top: -50, behavior: 'smooth' },
                        'anclaNosotros': { top: -15, behavior: 'smooth', block: 'start' }
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
            } else {
                console.log(`El elemento con el ID ${targetId} no fue encontrado.`);
            }
        });
    });
});




$(document).ready(function () {
    $("#carouselExampleFade").on("touchstart", function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;

            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel('prev');
            }
        });
        $("#carouselExampleFade").on("touchend", function () {
            $(this).off("touchmove");
        });
    });
});



document.querySelectorAll('.transicion').forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      const link = this.href;
      document.body.style.opacity = 0; // Hacer que el cuerpo se desvanezca
      setTimeout(function() {
        window.location.href = link; // Redirigir a la página después del tiempo de espera
      }, 800); // Ajustar el tiempo de espera según sea necesario
    });
  });
  


//   terminos -------------------------------

const privacyPolicyLink = document.getElementById("termOfServiceLink");

termOfServiceLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    swal.fire({
      icon: 'info',
      title: 'Aza Consultores',
      html: '<p> Por cargar </p>',
      confirmButtonColor: '#2A2528'  
    });
  });