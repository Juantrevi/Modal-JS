'use strict';

//Select the element that we need and save them in variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//The node list is created when we select all the classes with the same name


const openModal = function (){
    console.log('Open overlay');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});


