/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 1: Базовые типы, аннотации, типизация переменных и функций
console.log("Блок 1: Базовые типы, аннотации, типизация переменных и функций");

/*
1. Типизация переменных
Создай переменные с явной типизацией:
	имя пользователя (string),
	возраст (number),
	флаг активности (boolean),
	массив оценок (number[]),
	объект профиля пользователя с полями: name: string, age: number, isActive: boolean.
*/
const userName: string = "Roman";
const userAge: number = 33;
const userIsActive: boolean = true;
const userRating: number[] = [1, 2, 3, 4, 5];
const userObj: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "Roman",
  age: 33,
  isActive: true,
};

/*
2. Типизация функции сложения
Напиши функцию sum(a, b), которая принимает два аргумента типа number и возвращает их сумму. Укажи типы аргументов и возвращаемого значения.
*/
function sum(a: number, b: number): number {
  return a + b;
}

/*
3. Типизация функции приветствия
Функция greet(name) принимает имя пользователя и возвращает строку приветствия ("Привет, NAME!"). Задай правильный тип параметру и возвращаемому значению.
*/
function greet(name: string): string {
  return `Привет, ${name}`;
}

/*
4. Массив строк
Создай переменную fruits и задай ей тип “массив строк”. В массив добавь 3 фрукта: 'apple', 'banana', 'orange'.
*/
const fruits: string[] = ["apple", "banana", "orange"];

/*
5. Типизация функции с массивом
Напиши функцию getFirstElement, принимающую массив чисел и возвращающую первый элемент. Типизируй и аргумент, и возвращаемое значение.
*/
function getFirstElement(arr: number[]): number {
  return arr[0];
}

/*
6. Функция с необязательным параметром
Создай функцию log(message: string, prefix?: string), которая выводит prefix: message, если prefix передан, иначе просто message.
*/
function log(message: string, prefix?: string): void {
  if (prefix) {
    console.log(`${prefix}: ${message}`);
  } else {
    console.log(message);
  }
}

/*
7. Функция с параметром по умолчанию
Функция multiply(a: number, b: number = 2) должна возвращать произведение чисел. Если b не передан, использовать 2.
*/
function multiply(a: number, b: number = 2): number {
  return a * b;
}

/*
8. Объект с вложенной структурой
Определи тип объекта user, содержащего поля:
	name: string
	address: { city: string; street: string; zip: number } Создай пример объекта с такими данными.
*/
type TUser = {
  name: string;
  address: { city: string; street: string; zip: number };
};

const userOleg: TUser = {
  name: "Oleg",
  address: {
    city: "Moscow",
    street: "Lenina",
    zip: 101234,
  },
};

/*
9. Функция с возвращаемым объектом
Напиши функцию createUser, которая принимает имя (string) и возраст (number), и возвращает объект с этими данными и полем isActive: true.
*/
interface ICreatedUser {
  name: string;
  age: number;
  isActive: true; //ну потому что мы же заранее знаем что там только true может быть и ничего иного
}
function createUser(name: string, age: number): ICreatedUser {
  return {
    name,
    age,
    isActive: true,
  };
}
//либо можно было содержимое интерфейса прописать сразу в типизации функции но было бы громоздко

/*
10. Аннотируй тип возвращаемого значения
Функция getFullName(firstName: string, lastName: string) возвращает строку полного имени. Укажи тип возвращаемого значения.
*/
function getFullName(firstName: string, lastName: string): string {
  return firstName + " " + lastName;
}
//если я правильно понял то вот:
const FullNameType = typeof getFullName("Vittorio", "Scaletta");
