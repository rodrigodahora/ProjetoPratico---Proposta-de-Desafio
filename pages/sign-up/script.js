const form = document.querySelector('form');
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const buttonCancel = document.querySelector('.btn-cancel');


form.addEventListener('submit', (event) => {
    console.log("executando form")
    event.preventDefault();
    event.stopPropagation();

    if (!email.value || !password.value) {
        alert('Precisa informar email e senha!');
        return;
    }

    window.location = "../../index.html";
});

buttonCancel.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();

    name.value = '';
    email.value = '';
    password.value = '';
});

