const backdrop = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-nav');
const modal = document.querySelector('.modal');
const noButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');

selectPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
});

backdrop.addEventListener('click', () => {
  backdrop.classList.remove('open');
  mobileNav.classList.remove('open');

  if (modal) {
    modal.classList.remove('open');
  }
});

if (noButton) {
  noButton.addEventListener('click', () => {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
  });
}

toggleButton.addEventListener('click', () => {
  backdrop.classList.add('open');
  mobileNav.classList.add('open');
});
