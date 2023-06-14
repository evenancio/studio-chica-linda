const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavItems = document.querySelectorAll('.mobile-nav__item');

for (var i = 0; i < mobileNavItems.length; i++) {
  mobileNavItems[i].addEventListener('click', function () {
    setTimeout(() => {
      mobileNav.classList.remove('open');
      closeModal();
    }, 10);
  });
}

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});

function closeModal() {
  backdrop.style.display = 'none';
  setTimeout(() => {
    backdrop.classList.remove('open');
  }, 200);
}

toggleButton.addEventListener('click', function () {
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('open');
  closeModal();
});
