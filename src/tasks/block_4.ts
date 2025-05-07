/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 4: Классы, наследование, модификаторы доступа
console.log("Блок 4: Классы, наследование, модификаторы доступа");

/*
31. Простой класс
Создай класс User, у которого есть поля name и age. Добавь конструктор, принимающий эти параметры, и метод sayHello(), который возвращает строку вида: "Привет, меня зовут NAME".
*/
class User_31 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Привет, меня зовут ${this.name}`;
  }
}

/*
32. Модификаторы доступа
В классе User сделай поле age приватным, а name — публичным. Добавь метод getAge() для чтения возраста.
*/
class User_32 {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Привет, меня зовут ${this.name}`;
  }
  getAge() {
    return `Мой возраст ${this.age}`;
  }
}

/*
33. Сеттер и геттер
Добавь в User геттер и сеттер для поля age. Сделай проверку: если передан возраст меньше 0, выбрасывай ошибку.
*/
class User_33 {
  public name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Возрвст не может быть меньше 0");
    } else {
      this._age = value;
    }
  }

  sayHello(): string {
    return `Привет, меня зовут ${this.name}`;
  }
  getAge(): string {
    return `Мой возраст ${this.age}`;
  }
}

/*
34. Наследование
Создай класс Admin, который наследуется от User. Добавь поле permissions: string[] и метод hasPermission(permission: string): boolean.
*/
class Admin extends User_33 {
  private permissions: string[];

  constructor(name: string, age: number, permissions: string[]) {
    super(name, age);
    this.permissions = permissions;
  }

  hasPermission(permission: string): boolean {
    return this.permissions.includes(permission);
  }
}

/*
35. Конструктор в классе-наследнике
В Admin переопредели конструктор и передай туда name, age и permissions. Используй super() для вызова конструктора родителя.
*/
//Чет как будто уже сделано в предыдущем примере. Или я там не понял что надо было сделать..

/*
36. Класс с приватными методами
Добавь приватный метод log(message: string) в User, который просто выводит текст в консоль. Вызови его из sayHello().
*/
class User_36 {
  public name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Возрвст не может быть меньше 0");
    } else {
      this._age = value;
    }
  }

  log(message: string): void {
    console.log(message);
  }
  sayHello(message: string): string {
    this.log(message);
    return `Привет, меня зовут ${this.name}`;
  }
  getAge(): string {
    return `Мой возраст ${this.age}`;
  }
}

/*
37. Статические свойства и методы
Добавь в User статическое свойство count и увеличивай его в конструкторе при каждом создании объекта. Добавь метод getCount(), возвращающий общее число пользователей.
*/
class User_37 {
  public name: string;
  private _age: number;
  static count: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this._age = age;
    User_37.count += 1;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value < 0) {
      throw new Error("Возрвст не может быть меньше 0");
    } else {
      this._age = value;
    }
  }

  log(message: string): void {
    console.log(message);
  }
  sayHello(message: string): string {
    this.log(message);
    return `Привет, меня зовут ${this.name}`;
  }
  getAge(): string {
    return `Мой возраст ${this.age}`;
  }
  static getCount(): number {
    return User_37.count;
  }
}

/*
38. Реализация интерфейса классом
Создай интерфейс Renderable с методом render(): string. Реализуй его в классе Page, метод должен возвращать HTML-строку.
*/
interface Renderable {
  render(): string;
}

class Page implements Renderable {
  render() {
    return `<html><body><h1>Header</h1></body></html>`;
  }
}

/*
39. Абстрактный класс
Создай абстрактный класс Shape с абстрактным методом area(): number и полем name: string. Реализуй классы Circle и Rectangle, которые наследуются от Shape и реализуют area()
*/
abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract area(): number;
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number, name: string = "circle") {
    super(name);
    this.radius = radius;
  }
  area(): number {
    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

const circle_1 = new Circle(5, "circle_1");
console.log(circle_1.area());

class Rectangle extends Shape {
  side_A: number;
  side_B: number;

  constructor(side_A: number, side_B: number, name: string = "rectange") {
    super(name);
    this.side_A = side_A;
    this.side_B = side_B;
  }
  area(): number {
    return Number((this.side_A * this.side_B).toFixed(2));
  }
}

const rectangle_1 = new Rectangle(2, 5, "rectangle_1");
console.log(rectangle_1.area());

/*
40. Инкапсуляция и полиморфизм
Создай массив Shape[], добавь туда объекты Circle и Rectangle, и выведи площади всех фигур, вызывая .area() по всем элементам — не зная точный тип.
*/

const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Circle(3),
  new Rectangle(2, 8),
];

shapes.forEach((shape) => {
  console.log(`${shape.name} имеет площадь ${shape.area()}`);
});
