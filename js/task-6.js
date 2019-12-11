let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число");
    let userInput = Number(input);

    numbers.push(userInput);
} while (input !== null);
numbers.pop();

if (numbers.length !== 0) {
    for (let i of numbers) {
        total += i;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}