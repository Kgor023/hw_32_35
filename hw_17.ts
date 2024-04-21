

//задание 1
function min(a: number, b: number): number {
    if (a > b) {
        return b;
    }
    return a
}
console.log(min(20, 10));



//задание 2
var userText: string | null = prompt('Введиет строчку/текст');
function getText() {
    if (typeof userText === 'string') {
        for (var i: number = 0; i < userText.length; i++) {
            console.log(userText[i]);
        }
    }
}
console.log(getText());



///задание 3
var fruits: string[] = ['яблоко', 'апельсин', 'груша']
var userPrefer: string | null = prompt('Какой фрукт вы предпочитаете?');
function getFruits(list: string[]) {
    if (typeof userPrefer === 'string') {
        for (var i: number = 0; i < list.length; i++) {
            if (userPrefer === list[i]) {
                alert("Держи свой ананас");
                break;
            } else {
                var allFruits = confirm('Показать все фрукты,которые есть?');
                if (allFruits) {
                    console.log(list);
                } else {
                    alert('Пока');
                }
                break;
            }
        }
    }
}
getFruits(fruits);



///ДЗ///
/* Задача 1.
Написать функцию getSum , которая будет высчитывать сумму чисел от нуля до
переданного в нее параметра. Если передадим число 100 то, надо вычислить
сумму чисел от 0 до 100 (должно получится 5050). */

function getSum(secondParam: number): number {
    var sum: number = 0;
    for (var i: number = 0; i <= secondParam; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(100));



/* Задача 2.
Напишите функцию, она в качестве аргумента принимает в себя сумму кредита,
который хочет получить клиент и верните результат переплаты по кредиту:
процентная ставка в год — 17%,
количество лет — 5.
Мы пишем функцию для хорошего банка, поэтому сумма кредита не
увеличивается. */

function getCredit(creditSum: number): number {
    var rate: number = 0.17 / 100 / 12;
    var monthlyPayment: number = creditSum * (rate * ((1 + rate) ** 60)) / (((1 + rate) ** 60) - 1);
    var overpatment: number = monthlyPayment * 60 - creditSum;
    return overpatment;

}
console.log(getCredit(100000))


/* Задача 3.
Написать функцию trimString , которая в качестве аргумента принимает три
параметра:
строку
значение «от»
значение «по»
После вызова функция должна вернуть переданную строку, обрезанную по
значениям «от» и «по». */
// function trimString(str: string, from: string, to: string): string {
//     var string: string = '';
//     for (var i: number = 0; i <= str.length; i++) {
//         if (str[i] === from) {
//             for (i = from; i <= str.length; i++) {
//                 if (str[i] === to) {
//                     for (i = from; i <= to; i++) {
//                         string += str[i]
//                     }
//                 }
//             }
//         }
//     }
//     return str = string;
// }
// console.log(trimString('привет', 'р', 'е'));




/* Задача 4.
Написать функцию getSumNumbers . Она будет принимать число и вычислять
сумму цифр, из которых состоит число. Для 2021 это будет 5. */
function getSumNumbers(num: number | string) {
    var sum: number = 0;
    if (typeof num === 'number') {
        num = String(num);
        for (var i = 0; i < num.length; i++) {
            sum = sum + Number(num[i]);
        }
        return sum;
    }

}
console.log(getSumNumbers(2021));




/* Задача 5.
Написать функцию getSum , которая принимает два целых числа a и b, они могут
быть положительными или отрицательными, найти сумму всех чисел между
ними, включая их, и вернуть ее. Если два числа равны, верните a или b.
getSum(1, 0) == 1 // 1 + 0 = 1
getSum(1, 2) == 3 // 1 + 2 = 3
getSum(0, 1) == 1 // 0 + 1 = 1
getSum(1, 1) == 1 // 1 Since both are same
getSum(-1, 0) == -1 // -1 + 0 = -1
getSum(-1, 2) == 2 // -1 + 0 + 1 + 2 = 2 */
function getSum1(a: number, b: number): number {
    var sum:number = 0;
    if (a > b) {
        for (var i = b; i <= a; i++) {
            sum = sum + i;
        }
        return sum;
    } else if (b > a) {
        for (i = a; i <= b; i++) {
            sum = sum + i;
        }
        return sum;
    } else {
        return a || b;
    }
}
console.log(getSum1(-1, 2));


/* Задача 6.
Напишите функцию fooBoo которая принимает в качестве аргумента три
параметра:
булевое значение
функцию foo которая выводит в консоль свое имя
функцию boo которая выводит в консоль свое имя
Если переданное булевое значение true , то запускаем функцию foo, иначе boo. */

function foo() {
    console.log('foo');
}
function boo() {
    console.log('boo');
}
function fooBoo(bool:boolean) {
    if (bool) {
        foo();
    } else {
        boo();
    }
}
console.log(fooBoo(false))



/* Продвинутый уровень
Задача 1.
Реализуйте функцию, который принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true , если треугольник можно построить со
сторонами заданной длины, и false в любом другом случае. */

function isTriangle(a:number, b:number, c:number):boolean {
    if (a < (b + c) && b < (a + c) && c < (a + b)) {
        return true;
    } else {
        return false;
    }
}
console.log(isTriangle(1, 2, 2)); 