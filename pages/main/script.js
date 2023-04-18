const body = document.querySelector('body');
const form = document.querySelector('form');
const nome = document.querySelector('.nome-modal');
const email = document.querySelector('.email-modal');
const telefone = document.querySelector('.telefone-modal');
const adicionar = document.querySelector('.adicionar');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const addModal = document.querySelector('.adc-button-modal');
const limpbtModal = document.querySelector('.limp-button-modal');
const lixeira = document.querySelectorAll('.lixeira');
const modalLixeira = document.querySelector('.modal-lixeira');

console.log(lixeira)
adicionar.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modalContent.style.visibility = 'visible';
    modalContent.style.opacity = '1';
    adicionar.style.background = '#006931';
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

for (let i = 0; i < lixeira.length; i++) {
    lixeira[i].addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        modalLixeira.style.visibility = 'visible';
        modalLixeira.style.opacity = '1';
        body.style.background = 'rgb(58, 58, 58)';
        adicionar.style.background = '#006931';
    });
}




