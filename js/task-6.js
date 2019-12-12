let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число");
    if (input !== null) {
        numbers.push(Number(input));
    }
} while (input !== null);

if (numbers.length) {
    for (let i of numbers) {
        total += i;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}