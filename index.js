const formulario = document.getElementById('inscripcion');
const emailInput = document.getElementById('email');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        alert('ingresa una dirección de correo electrónico válida.');
        return;
    }

    console.log('El correo electrónico es válido:', email);
});
if (!regex.test(email)) {
    emailInput.classList.add('error');
    // ...
}
