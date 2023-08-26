// // // Tasks: Variables
// // // 1) Створіть дві змінні a та b. Виведіть у консоль результат їх множення.

const a = 5;
const b = 10;
console.log(a * b);

// // // 2) Створіть дві змінні c та d. Виведіть у консоль результат ділення першого на друге.

const c = 50;
const d = 16;
console.log(c / d);

// // // 3) Створіть дві змінні e та f. Виведіть у консоль результат додавання.

const e = 186;
const f = 100000000;
console.log(e + f);

// // // 4) Визначте змінні зі значеннями 11, true, "java script", "100" і виведіть їх в консоль

console.log("11:", typeof 11);
console.log("true:", typeof true);
console.log("`java script:`", typeof `java script`);
console.log('"100:"', typeof "100");

// // // 5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --

let num = 1;
num += 11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);

// // //////////////////////////////////////////////////////////////////////

// // // Tasks: Prompt
// // // 1) Запитати число у користувача, піднести його до квадрату і вивести результат.

const userSquareNumber = Number(prompt("Enter a number:"));
alert(userSquareNumber * userSquareNumber);

// // // 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

const userArithmeticMean1 = +prompt("Enter the first number:");
const userArithmeticMean2 = +prompt("Enter the second number:");
alert((userArithmeticMean1 + userArithmeticMean2) / 2);

// // // 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача.

const userTime = +prompt("Enter the number of minutes:");
alert(userTime * 60);

// // // 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName.
// // // Запитайте ім'я користувача та внесіть це значення у змінну userName.
// // // Виведіть повідомлення з привітанням, наприклад, 'Hello, Vasya!'. (згадайте про конкатенацію)

const greeting = "Hello, ";
const userName = prompt("Your name?");
console.log(greeting + userName);
alert("Hi, Victoria!");

// // ////////////////////////////////////////////////////////////////

// // // Tasks: Conditions
// // // 1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

const userVariable = +prompt("How much is 5x2 ?");
if (userVariable === 10) {
  console.log("That`s right");
} else {
  console.log("Incorrect");
}

// // // 2) Напишіть дві перевірки.
// // // Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
// // // Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
// // // Перевірте роботу скрипта при test, що дорівнює true, false.

const test = true;
if (test) {
  console.log("True");
} else {
  console.log("False");
}

// const test = false;
if (test) {
  console.log("True");
} else {
  console.log("False");
}

// // // 3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн.,
// // // а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.

const userPurchase = +prompt("Your purchase amount:");
let userDiscount;
let userNewAmount;
if (userPurchase > 500 && userPurchase <= 800) {
  userDiscount = (userPurchase * 3) / 100;
  userNewAmount = userPurchase - userDiscount;
  alert("You`re got a 3% discount! Now your purchace is " + userNewAmount);
} else if (userPurchase > 800) {
  userDiscount = (userPurchase * 5) / 100;
  userNewAmount = userPurchase - userDiscount;
  alert("You`re got a 5% discount! Now your purchace is " + userNewAmount);
} else {
  alert("Thanks for your purchase!");
}

// // /////////////////////////////////////////////////////////////

// // // Tasks: Cycles
// // // Кожне завдання вирішити циклами while, do..while.
// // // 1) Виведення чисел від 25 до 0 (порядок зменшення).

let currentNumber = 25;
const TOTAL_NUMBER = 0;
while (currentNumber >= TOTAL_NUMBER) {
  console.log("Number output:", currentNumber);
  currentNumber--;
}

let currentNumber2 = 25;
const TOTAL_NUMBER2 = 0;
do {
  console.log("Number output:", currentNumber2);
  currentNumber2--;
} while (currentNumber2 >= TOTAL_NUMBER2);

// // // 2) Виведення чисел від 10 до 50, які кратні 5.

let startNumber = 10;
const LAST_NUMBER = 50;
while (startNumber <= LAST_NUMBER) {
  console.log("Number output:", startNumber);
  startNumber += 5;
}

let startNumber2 = 10;
const LAST_NUMBER2 = 50;
do {
  console.log("Number output:", startNumber2);
  startNumber2 += 5;
} while (startNumber2 <= LAST_NUMBER2);

// // // 3) *Знайти суму чисел в межах від 1 до 100.

let sum = 0;
oneNumber = 1;
endNumber = 100;
while (oneNumber <= endNumber) {
  sum += oneNumber;
  oneNumber++;
}
console.log(sum);

do {
  oneNumber++;
  console.log(sum);
  sum += oneNumber;
} while (oneNumber <= endNumber);
