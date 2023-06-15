const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const noButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
});

const hideModal = () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};

backdrop.addEventListener('click', hideModal);
noButton.addEventListener('click', hideModal);
