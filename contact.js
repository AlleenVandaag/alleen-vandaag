document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_re00izk', 'template_rju8phl', this)
    .then(() => {
      document.getElementById('form-status').textContent = 'Bericht verzonden!';
      document.getElementById('contact-form').reset();
    }, (error) => {
      document.getElementById('form-status').textContent = 'Er is iets misgegaan. Probeer het later opnieuw.';
      console.error(error);
    });
});
