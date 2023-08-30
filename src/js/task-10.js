// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls > input');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

let boxWidth = 30;
let boxHeight = 30;

function onInputChange(event) {
  input.dataset.amount = event.currentTarget.value;
}

function createBoxes() {
  const boxes = [];

  for (let i = 0; i < input.dataset.amount; i += 1) {
    const boxEl = document.createElement('div');

    boxEl.style.width = `${boxWidth}px`;
    boxEl.style.height = `${boxHeight}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxes.push(boxEl);

    boxWidth += 10;
    boxHeight += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxWidth = 30;
  boxHeight = 30;
  boxesContainer.textContent = '';
  input.value = '';
  input.dataset.amount = '';
}

input.addEventListener('input', onInputChange);
createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);
