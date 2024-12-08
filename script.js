document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene il comportamento di invio predefinito
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Messaggio: ${message}`);

        alert('Grazie per averci contattato!');
        form.reset(); // Resetta il modulo dopo l'invio
    });
});
