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


