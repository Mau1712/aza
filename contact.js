const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_xe7a9wh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Hemos recibido tu consulta. Pronto nos pondremos en contacto.',
        showConfirmButton: false,
        timer: 3000
      })
      form.reset();
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

const inputTelefono = document.getElementById('tel');

inputTelefono.addEventListener('input', function () {
    let numero = inputTelefono.value.replace(/\D/g, ''); // Elimina todos los caracteres que no son dígitos

    if (numero.length > 4) {
        numero = `(${numero.substring(0, 4)})${numero.substring(4)}`;
    }

    inputTelefono.value = numero;
});

