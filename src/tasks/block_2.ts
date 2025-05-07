/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 2: Union, Literal, Enum, Tuple, Alias
console.log("Блок 2: Union, Literal, Enum, Tuple, Alias");

/*
11. Тип union для переменной
Создай переменную userId, которая может быть либо числом (number), либо строкой (string). Присвой ей поочерёдно оба значения и убедись, что тип работает корректно.
*/
let userId: number | string = "two";
userId = 1;

/*
12. Тип union в функции
Напиши функцию printId(id: number | string), которая принимает id и выводит его в консоль. Убедись, что функция работает и для строки, и для числа.
*/
function printId(id: number | string): void {
  console.log(id);
}
printId(1);
printId("two");

/*
13. Тип literal
Создай переменную direction, которая может принимать только одно из значений: 'left', 'right', 'up', 'down'.
*/
const direction: "left" | "right" | "up" | "down" = "down";

/*
14. Функция с literal-параметром
Функция move(direction) принимает один из четырёх литеральных параметров: 'left', 'right', 'up', 'down'. Типизируй параметр так, чтобы невозможно было передать ничего другого.
*/
type TDirections = "left" | "right" | "up" | "down";
function move(direction: TDirections): TDirections {
  return direction;
}

/*
15. Tuple: кортеж с фиксированными типами
Создай переменную person типа кортеж [string, number], где первое значение — имя, второе — возраст. Присвой ей пример: ['Иван', 30].
*/
const person: [string, number] = ["Иван", 30];

/*
16. Функция, возвращающая кортеж
Напиши функцию getCoordinates(), которая возвращает координаты в виде [number, number]. Пример: [10, 20].
*/
function getCoordinates(a: number, b: number): [number, number] {
  return [a, b];
}

/*
17. Enum для ролей
Создай enum Role с ролями 'Admin', 'User', 'Guest'. Создай переменную с типом Role и присвой ей одну из ролей.
*/
enum Role {
  "Admin",
  "User",
  "Guest",
}
const role = Role.Admin;

/*
18. Функция с параметром типа enum
Функция checkPermission(role: Role) возвращает true, если роль — Admin, иначе — false. Используй enum из предыдущего задания.
*/
function checkPermission(role: Role): boolean {
  return role === Role.Admin ? true : false;
}

/*
19. Тип-алиас с union
Создай тип-алиас Status = 'loading' | 'success' | 'error'. Используй его для переменной pageStatus, которая может принимать только одно из этих значений.
*/
type Status = "loading" | "success" | "error";
const pageStatus: Status = "loading";

/*
20. Тип-алиас для сложного объекта
Определи алиас User = { name: string; age: number; isAdmin: boolean }. Создай переменную с этим типом и задай пример объекта
*/
type User_20 = { name: string; age: number; isAdmin: boolean };
const oleg: User_20 = {
  name: "Oleg",
  age: 11,
  isAdmin: false,
};
