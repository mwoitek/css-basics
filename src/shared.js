const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const modal = document.querySelector('.modal');
const noButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
});

const hideModal = () => {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
};

backdrop.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  hideModal();
});

noButton.addEventListener('click', hideModal);

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
