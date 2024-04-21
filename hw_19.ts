/* Задача 1.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
удалить ключи из объекта.
 */

let obj: { a?: number, b: string } = {
    a: 5,
    b: 'vasya',
}
console.log(obj);
delete obj.a;
console.log(obj);

/* Задача 2.
Создать любой объект с двумя ключами и любыми значениями в них, а затем
проверить есть ли в объекте определенный ключ и если есть вывести в
консоль true .
 */

const obj1: { a: number, b: string } = {
    a: 5,
    b: 'vasya',
}
if (obj1.a) {
    console.log('true');
} else {
    console.log('false')
}

/* Задача 3.
Дан объект:
const student = {
  name: 'John',
  age: 19,
  isHappy: true
}
C помощью цикла for..in вывести в консоль сначала все ключи, потом
значения ключей объект.
 */
const student: {
    name: string,
    age: number,
    isHappy: boolean,
} = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (let key in student) {
    console.log(key);
}
for (let key in student) {
    console.log(student[key]);
}

/* Задача 4.
Дан объект:
const colors = {
  'ru pum pu ru rum': {
     red: 'красный',
     green: 'зеленый',
     blue: 'синий'
   },
}
Вывести в консоль слово красный и синий
 */
const colors = {
    "ru pum pu ru rum": {
        red: "красный",
        green: "зеленый",
        blue: "синий",
    },
};
console.log(colors["ru pum pu ru rum"].red, colors["ru pum pu ru rum"].blue);

/* Задача 5.
Дан объект:
let salaries = {
  andrey: 500,
  sveta: 413,
  anton: 987,
  igor: 664,
  alexandra: 199
}
Вычислите среднюю зарплату сотрудников и результат поместите в
соответствующую переменную */
interface Obj {
    andrey: number, sveta: number, anton: number, igor: number, alexandra: number
}
let salaries: Obj = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199,
};
let averageSalary = function (obj: Obj): number {
    let sum:number = 0;
    let count:number = 0;
    let result:number = 0;
    for (let key in obj) {
        sum += obj[key];
        count++;
    }
    return result = sum / count;
};
console.log(averageSalary(salaries));

/* Задача 6.
Создать валидатор, запросить у пользователя логин и пароль для регистрации.
Затем данные записать в объект.
Потом попросить пользователя подтвердить данные. Если верно введен логин
и пароль, вывести сообщение Добро пожаловать . */
type StNl = string | null;
interface Obj1 {
    login:StNl,
    password:StNl;
    getInfo: () => void,
}

const user:Obj1 = {
    login: prompt('Введите логин'),
    password: prompt('Введите пароль'),
    getInfo: function () {
        let againLogin:StNl = prompt('Повторите логин');
        let againPassword:StNl = prompt('Повторите пароль');
        if (this.login === againLogin && this.password === againPassword) {
            alert('Добро пожаловать');
        } else {
            alert('В доступе отказано');
        }
    }
}
user.getInfo();

/* Продвинутый уровень
Задача 1.
Мы на футбольном матче, счет забитых голов одной команды не может
превышать 9 мячей. Жаль что нам присылают результат матча в формате
«2:5», ведь нам надо это вывести в консоль словами. Давайте напишем
программу, которая будет за нас переводить формат и выводить результат в
консоль. */

let firstTeam:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let secondTeam:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstTeamResult:StNl|number = prompt('Введите количество голов первой команды');
let secondTeamResult:StNl|number = prompt('Введите количество голов второй команды');
firstTeamResult = Number(firstTeamResult);
secondTeamResult = Number(secondTeamResult);
switch (firstTeamResult) {
    case firstTeam[0]: firstTeamResult = 'ноль';
        break;
    case firstTeam[1]: firstTeamResult = 'один';
        break;
    case firstTeam[2]: firstTeamResult = 'два';
        break;
    case firstTeam[3]: firstTeamResult = 'три';
        break;
    case firstTeam[4]: firstTeamResult = 'четыре';
        break;
    case firstTeam[5]: firstTeamResult = 'пять';
        break;
    case firstTeam[6]: firstTeamResult = 'шесть';
        break;
    case firstTeam[7]: firstTeamResult = 'семь';
        break;
    case firstTeam[8]: firstTeamResult = 'восемь';
        break;
    case firstTeam[9]: firstTeamResult = 'девять';
        break;
}
switch (secondTeamResult) {
    case secondTeam[0]: secondTeamResult = 'ноль';
        break;
    case secondTeam[1]: secondTeamResult = 'один';
        break;
    case secondTeam[2]: secondTeamResult = 'два';
        break;
    case secondTeam[3]: secondTeamResult = 'три';
        break;
    case secondTeam[4]: secondTeamResult = 'четыре';
        break;
    case secondTeam[5]: secondTeamResult = 'пять';
        break;
    case secondTeam[6]: secondTeamResult = 'шесть';
        break;
    case secondTeam[7]: secondTeamResult = 'семь';
        break;
    case secondTeam[8]: secondTeamResult = 'восемь';
        break;
    case secondTeam[9]: secondTeamResult = 'девять';
        break;
}
