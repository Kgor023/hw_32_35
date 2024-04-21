// Задача 1.
// Дан массив:
// const colors = ['red', 'green', 'blue']
// Выведите в консоль его длину.

const colors: string[] = ['red', 'green', 'blue',];
console.log(colors.length);



// Задача 2.
// Дан массив:
// const animals = ['monkey', 'dog', 'cat']
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals: string[] = ['monkey', 'dog', 'cat'];
// console.log(animals.at(-1));
console.log(animals[animals.length - 1]); 



// Задача 3.
// Дан массив:
// 6. Массивы5const numbers = [5, 43, 63, 23, 90]
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// Реализуйте решение двумя способами.

const numbers: number[] = [5, 43, 63, 23, 90];

//1 способ
numbers.splice(0);
console.log(numbers);

//2 способ
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);



// Задача 4.
// Дан массив:
// const students = ['Polina', 'Dasha', 'Masha']
// Удалите последний элемент массива, затем вместо него добавьте в массив
// студента Borya .
// Удалите первый элемент массива, затем вместо него добавьте в массив
// студента Andrey .
// Полученный результат не забудьте вывести в консоль.

const students: string[] = ['Polina', 'Dasha', 'Masha'];
students.splice(-1, 1, 'Borya');
students.splice(0, 1, 'Andrey');
console.log(students);



// Задача 5.
// Дан массив:
// const cats = ['Gachito', 'Tom', 'Batman']
// Выведите в консоль все элементы массива. Сначала через цикл for ,
// затем for..of .

const cats: string[] = ["Gachito", "Tom", "Batman"];
for (let i:number = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (let item of cats) {
  console.log(item);
}



// Задача 6.
// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// Соедините два массива чисел в один.
// В полученном массиве попробуйте найти индекс числа 8

const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];
let allNumbers: number[] = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));



// Задача 7.
// Дан массив:
// const binary = [0, 0, 0, 0]
// Наш бинарный массив неполный, в нем явно не хватает единиц.
// Превратите данный массив в строку.
// [0, 0, 0, 0] -> '0101010'

let binary: number[] = [0, 0, 0, 0];
let newBinary: string = binary.join('1');
console.log(newBinary);




// Продвинутый уровень
// Для решения задач используйте циклы for или for..of
// Задача 1.
// Реализуйте функцию, которая будет проверять, является ли слово
// палиндромом.

function isPalindrom(str: string): boolean {
  let firstTransform: string[] = str.split("");
  let transformReversed: string[] = firstTransform.slice().reverse();
  let secondTransform: string = transformReversed.join("");
  if (secondTransform === str) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrom("abba"));
console.log(isPalindrom("abdaaa"));

// Задача 2.
// const matrix = [
// [12, 98, 78, 65, 23],
// [54, 76, 98, 43, 65],
// [13, 324, 65, 312],
// [9092, 22, 45, 90000],
// ]
// Выведите в консоль среднее значение чисел в многомерном массиве. (реализуйте так же вторым способом через методы flat и reduce)

const matrix: number[][] = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];

//1 способ
var sum: number = 0
for (let i: number = 0; i < matrix.length; i++) {
  for (let j: number = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
}
console.log(sum);

//2 способ
let matrix2:number[] = matrix.flat();
let sum2:number = matrix2.reduce(function (value:number, item:number) {
  return (value += item);
}, 0);
console.log(matrix2);
console.log(sum2);




// Задача 3.
// Дан массив:
// const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// Создайте два массива, в один поместите все положительные числа включая 0,
// в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers: number[] = [-14, 24, -89, 43, 0, -1, 412, 4];
let positiveNumbers: number[] = mixedNumbers.filter(function (item) {
  if (item >= 0) {
    return item;
  }
})
let negativeNumbers: number[] = mixedNumbers.filter(function (item) {
  if (item < 0) {
    return item;
  }
})
console.log(positiveNumbers);
console.log(negativeNumbers);


// Задача 4.
// Создать массив длинной не менее 5, из динамически созданных случайных
// чисел. Далее написать алгоритм, который берет все числа из исходного
// массива, возводит их в куб и записывает в новый массив. В конце вывести оба
// массива в консоль.

let arr: number[] = [];
for (var i: number = 0; i <= 5; i++) {
  arr.push((Math.floor(Math.random() * 100)));
}
console.log(arr);
let square: number[] = arr.map(function (item: number): number {
  return item *= item;
})
console.log(square);





