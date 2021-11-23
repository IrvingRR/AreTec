// Variables
let $modalBtnOpen = document.getElementById("modal-btn-open");
let $modalBtnClose = document.getElementById("modal-btn-close");
let $modal = document.getElementById("modal");

// Functions
const handleModalOpen = () => modal.classList.add('active');


const handleModalClose = () => modal.classList.remove('active');

// Executions 
document.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(e.target === $modalBtnOpen ) {
        handleModalOpen();
    }

    if(e.target === $modalBtnClose || e.target.matches(`#modal-btn-close *`) ) {
        handleModalClose();
    }
})