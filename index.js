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

// Función para cerrar el modal
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