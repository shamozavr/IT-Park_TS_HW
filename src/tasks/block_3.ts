/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 3: Интерфейсы и расширение типов
console.log("Блок 3: Интерфейсы и расширение типов");

/*
21. Создание интерфейса
Определи интерфейс Product с полями:
	id: number
	name: string
	price: number
Создай переменную с типом Product и задай ей пример значения.
*/
interface Product {
  id: number;
  name: string;
  price: number;
}

/*
22. Функция с объектом типа интерфейса
Напиши функцию printProduct(product: Product), которая принимает объект Product и выводит информацию о нём: Товар: NAME, цена: PRICE.
*/
function printProduct(product: Product): void {
  console.log(
    `Товар: ${product.name}
Цена: ${product.price}`
  );
}

/*
23. Расширение интерфейса
Создай интерфейс DigitalProduct, который расширяет Product, добавляя поле fileSize: number. Создай объект такого типа.
*/
interface DigitalProduct extends Product {
  fileSize: number;
}
const digitalProduct: DigitalProduct = {
  id: 1,
  name: "Moovie",
  price: 100,
  fileSize: 1.5,
};

/*
24. Объект с необязательными полями
Создай интерфейс UserProfile с полями:
	name: string
	email?: string
	phone?: string
Создай два объекта с типом UserProfile: один с необязательными полями, другой — без.
*/
interface UserProfile {
  name: string;
  email?: string;
  phone?: string;
}

const user_1: UserProfile = {
  name: "Victor",
  email: "victor@gmail.com",
  phone: "+79992223344",
};
const user_2: UserProfile = {
  name: "Daniil",
};

/*
25. readonly поля
Создай интерфейс Point с полями readonly x: number, readonly y: number. Попробуй изменить координаты после создания — должно быть невозможно.
*/
interface Point {
  readonly x: number;
  readonly y: number;
}
//автоматически меняет с let на const
const starterPoint: Point = {
  x: 1,
  y: 2,
};
// starterPoint.x = 10; // Cannot assign to 'x' because it is a read-only property

/*
26. Функция с интерфейсом параметров
Создай интерфейс Credentials с login: string, password: string. Функция loginUser принимает объект этого типа и возвращает true, если логин и пароль не пустые.
*/
interface Credentials {
  login: string;
  password: string;
}

function loginUser(obj: Credentials): boolean {
  return obj.login && obj.password ? true : false;
}
// console.log(loginUser({ login: "valera", password: "Qweasdzxc" }));

/*
27. Интерфейс с методами
Определи интерфейс Clock, в котором есть метод tick(): void. Создай объект, реализующий этот интерфейс.
*/
interface Clock {
  tick(): void;
}
const tissot: Clock = {
  tick() {
    console.log("tick");
  },
};
tissot.tick();

/*
28. Интерфейс массива
Определи интерфейс StringArray, который представляет массив строк ({ [index: number]: string }). Создай переменную с этим типом.
*/
interface StringArray {
  [index: number]: string;
}
const stringArray = ["string1", "string2", "string3"];
//не понял зачем тут интерфейс

/*
29. Интерфейс функции
Создай интерфейс MathOperation, описывающий функцию вида (a: number, b: number) => number. Реализуй функцию add, соответствующую этому интерфейсу.
*/
interface MathOperation {
  (a: number, b: number): number;
}
const add: MathOperation = (a, b) => {
  return a + b;
};

/*
30. Расширение интерфейсов
Создай два интерфейса:
	Animal { name: string }
	Dog extends Animal { breed: string }
Создай объект типа Dog.
*/
interface Animal {
  name: string;
}
interface Dog extends Animal {
  breed: string;
}
const sharik = {
  name: "Шарик",
  breed: "Наша, дворовая",
};
