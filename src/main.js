const myElement = document.querySelector('.myElement');
const closeButton = document.querySelector('.closeButton');
const openButton = document.querySelector('.openButton');
const modalMenus = document.querySelectorAll('.modalMenu');

openButton.addEventListener('click', () => {
  const modalClass = ' is-open';

  const currentClassValue = myElement.getAttribute('class');
  let updatedClassValue = currentClassValue + modalClass;

  myElement.setAttribute('class', updatedClassValue);
});

closeButton.addEventListener('click', () => {
  const modalClass = ' is-open';

  const currentClassValue = myElement.getAttribute('class');
  const updatedClassValue = currentClassValue.replace(modalClass, '');
  myElement.setAttribute('class', updatedClassValue);
});

modalMenus.forEach(modalMenu => {
  modalMenu.addEventListener('click', () => {
    const modalNav = ' is-open';

    const currentNavClassValue = myElement.getAttribute('class');
    const updatedNavClassValue = currentNavClassValue.replace(modalNav, '');

    myElement.setAttribute('class', updatedNavClassValue);
  });
});
