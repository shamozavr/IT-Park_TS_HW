/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 5: Generics — обобщения в функциях, классах и типах
console.log("Блок 5: Generics — обобщения в функциях, классах и типах");

/*
Задание 41. Функция-обёртка identity
Создай универсальную функцию identity, которая принимает значение любого типа и возвращает это же значение.Функция должна работать одинаково хорошо с числом, строкой, массивом и объектом.
*/
function identity<T>(value: T): T {
  return value;
}

/*
Задание 42. Функция с ограничением extends
Напиши универсальную функцию logLength, которая принимает значение любого типа, но только если у него есть поле length.Функция должна выводить в консоль длину значения.
*/
function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

/*
Задание 43. Первый элемент массива
Создай функцию firstElement, которая принимает массив любого типа и возвращает первый элемент этого массива.
Функция должна работать с массивами строк, чисел, объектов и т.д.
*/
function firstElement<T>(value: T[]): (typeof value)[0] {
  return value[0];
}
console.log(firstElement(["a", "b", "c", "d", "f"]));
console.log(firstElement([1, 2, 3, 4, 5, 6]));

/*
Задание 44. Тип Pair
Определи обобщённый тип Pair<T, U>, который описывает пару значений разного типа. После этого создай 2-3 переменные с этим типом и разными типами данных внутри.
*/
type Pair_44<T, U> = [T, U];

const point: Pair_44<number, number> = [10, 10];
const stringInfo: Pair_44<string, boolean> = ["user123", true];

/*
Задание 45. Тип ApiResponse<T>
Создай обобщённый интерфейс ApiResponse<T>, который описывает результат запроса к серверу.У него должны быть поля:
	data (объект любого типа)
	success (boolean)
	error (опциональная строка)
*/
interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}

/*
Задание 47. Объединение двух объектов
Создай функцию merge, которая принимает два объекта разных типов и возвращает объединённый объект, содержащий свойства обоих.
Функция должна сохранять типизацию возвращаемого объекта, чтобы к его полям можно было обращаться без ошибок.
*/

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

/*
Задание 48. Обобщённый тип с параметром по умолчанию
Создай интерфейс Box<T = string>, который описывает объект { value: T }.Если тип T не указан — он должен быть строкой по умолчанию.
Создай переменные с этим типом:
	без указания типа
	с указанием number
	с указанием { title: string }
*/
interface Box<T = string> {
  value: T;
}
const box1: Box = { value: "123123" };
const box2: Box = { value: 123123 };
const box3: Box<number> = { value: 123123 };
const box4: Box<{ title: string }> = { value: { title: "Заголовок" } };

/*
Задание 49. Безопасный доступ к полям объекта
Создай функцию getProperty, которая принимает:
	объект
	имя одного из его свойств (ключ)
Функция должна возвращать значение этого свойства. При этом имя свойства должно быть строго ограничено ключами объекта.
*/

function getProperty<Type, Key extends keyof Type>(a: Type, b: Key) {
  return a[b];
}
const obj_49 = {
  alfa: "number_1",
  betta: "number_2",
  gamma: "number_3",
};
console.log(getProperty(obj_49, "alfa"));
