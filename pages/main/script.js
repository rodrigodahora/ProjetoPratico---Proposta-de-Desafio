const body = document.querySelector('body');
const nome = document.querySelector('.nome-modal');
const email = document.querySelector('.email-modal');
const telefone = document.querySelector('.telefone-modal');
const adicionar = document.querySelector('.adicionar');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const addModal = document.querySelector('.adc-button-modal');
const limpbtModal = document.querySelector('.limp-button-modal');


adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modalContent.style.visibility = 'visible';
    modalContent.style.opacity = '1';
    body.style.background = 'rgb(58, 58, 58)';
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    modalContent.style.visibility = 'hidden';
    modalContent.style.opacity = '0';
    body.style.background = 'white';
});


limpbtModal.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    nome.textContent = '';
    email.textContent = '';
    telefone.textContent = '';
});


