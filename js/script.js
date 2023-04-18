const form = document.querySelector('form');
const email = document.querySelector('.input-email');
const password = document.querySelector('.input-password');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!email.value || !password.value) {
        alert('Precisa informar email e senha!');
        return;
    }

    window.location = "./pages/main/index.html";

})