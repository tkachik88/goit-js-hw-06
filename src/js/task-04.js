// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const decrementButton = document.querySelector('button[data-action-decrement]');
const incrementButton = document.querySelector('button[data-action-increment]');
const value = document.querySelector('value');

function onButttonDecrementClick() {
  counterValue -= 1;
  console.log(counterValue);
  value.textContent = counterValue;
}

function onButttonIncrementClick() {
  counterValue += 1;
  console.log(counterValue);
  value.textContent = counterValue;
}

decrementButton.addEventListener('click', onButttonDecrementClick);
incrementButton.addEventListener('click', onButttonIncrementClick);
