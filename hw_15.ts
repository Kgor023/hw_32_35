
type Prompt = string | null;

// //основное задание
// var firstNumber: Prompt | number = (prompt('Введите 1 число'));
// var secondNumber: Prompt | number = (prompt('Введите 2 число'));
// var thirdNumber:  Prompt | number = (prompt('Введите 3 число'));
// var result: string | null = prompt('Числа сложить или умножить?');
// if (typeof result === 'string') {
//     if (result == 'сложить') {
//         alert(`Сумма равна ${Number(firstNumber) + Number(secondNumber) + Number(thirdNumber)}`);
//     } else if (result == 'умножить') {
//         alert(`Произведение равно ${Number(firstNumber) * Number(secondNumber) * Number(thirdNumber)}`);
//     } else {
//         alert('Дан невреный ответ на вопрос');
//     }
// }

//задание со *
var firstNum: Prompt | number = (prompt('Введите 1 число'));
var secondNum: Prompt | number = (prompt('Введите 2 число'));
var thirdNum: Prompt | number = (prompt('Введите 3 число'));
if (typeof firstNum === 'string' || typeof secondNum === 'string' || typeof thirdNum === 'string') {
    if (firstNum === '') {
        firstNum = Number(prompt('Введите  число еще раз'));

    } else if (secondNum === '') {
        secondNum = Number(prompt('Введите  число еще раз'));

    } else if (thirdNum === '') {
        thirdNum = Number(prompt('Введите  число еще раз'));

    } else if (firstNum === '' && secondNum === '' && thirdNum === '') {
        alert('Пока');
    }
}
else if (firstNum === null || secondNum === null || thirdNum === null) {
    var text: string | null = prompt('Почему вы отменили?');
    alert(`Я понял вашу причину "${text}", всего доброго...`);
} 