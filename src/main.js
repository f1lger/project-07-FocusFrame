document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елемент та кнопки
  let myElement = document.getElementById('myElement');
  let addButton = document.getElementById('addButton');
  let removeButton = document.getElementById('removeButton');

  // Додаємо обробник подій для кнопки "Додати текст"
  addButton.addEventListener('click', function () {
    // Зчитуємо поточне значення атрибуту "class"
    let currentClassValue = myElement.getAttribute('class');

    // Додаємо текст до поточного значення
    let newText = ' is-open';
    let updatedClassValue = currentClassValue + newText;

    // Встановлюємо оновлене значення атрибуту "class"
    myElement.setAttribute('class', updatedClassValue);
  });

  // Додаємо обробник подій для кнопки "Видалити текст"
  removeButton.addEventListener('click', function () {
    // Зчитуємо поточне значення атрибуту "class"
    let currentClassValue = myElement.getAttribute('class');

    // Видаляємо текст з поточного значення
    let newText = ' is-open';
    let updatedClassValue = currentClassValue.replace(newText, '');

    // Встановлюємо оновлене значення атрибуту "class"
    myElement.setAttribute('class', updatedClassValue);
  });
});
