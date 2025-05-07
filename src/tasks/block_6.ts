/* eslint-disable @typescript-eslint/no-unused-vars */

//Блок 6: Утилитные типы в TypeScript
console.log("Блок 6: Утилитные типы в TypeScript");

/*
Задание 51. Частичный объект с Partial<T>
У тебя есть интерфейс:
interface User {
  id: number;
  name: string;
  email: string;
}

Создай переменную draftUser, которая может содержать только часть полей из User. 
*/

interface User_51 {
  id: number;
  name: string;
  email: string;
}

let draftUser: Partial<User_51>;

/*
Задание 52. Все поля обязательны — Required<T>

Есть интерфейс:
interface Settings {
  darkMode?: boolean;
  fontSize?: number;
}

Создай тип StrictSettings, в котором все поля становятся обязательными, даже если они были опциональными. Затем создай переменную этого типа и заполни все поля.
*/

interface Settings_52 {
  darkMode?: boolean;
  fontSize?: number;
}

type StrictSettings = Required<Settings_52>;
type al = Partial<StrictSettings>;

const settings_52: StrictSettings = {
  darkMode: true,
  fontSize: 19,
};

/*
Задание 53. Только для чтения — Readonly<T>
Есть интерфейс:
interface Config {
  baseUrl: string;
  port: number;
}

Создай тип ImmutableConfig, в котором нельзя изменять значения свойств.
Затем попробуй создать переменную такого типа и изменить одно из полей. Что произойдёт?
*/

interface Config_53 {
  baseUrl: string;
  port: number;
}

type ImmutableConfig = Readonly<Config_53>;
const basicConfiguration: ImmutableConfig = {
  baseUrl: "https://logo.ru",
  port: 3001,
};
basicConfiguration.port = 5001; //Cannot assign to 'port' because it is a read-only property.

/*
Задание 54. Выбери часть полей — Pick<T, K>
Дан интерфейс:
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}
Создай тип ProductPreview, в котором есть только id, title и price, используя Pick.
Затем создай переменную этого типа с корректными значениями.
*/

interface Product_54 {
  id: number;
  title: string;
  description: string;
  price: number;
}

type ProductPreview = Pick<Product_54, "id" | "title" | "price">;
const prod: ProductPreview = {
  id: 1,
  title: "kettle",
  price: 10,
};

/*
Задание 55. Удали поля — Omit<T, K>
Снова возьми интерфейс Product из предыдущего задания.Создай тип ProductWithoutDescription, в котором нет поля description.
Используй Omit, чтобы исключить одно или несколько полей из типа.
*/
type ProductWithoutDescription = Omit<Product_54, "description">;
type ProductWithoutDescriptionAndTitle = Omit<ProductWithoutDescription, "id">;

/*
Задание 56. Объект на основе ключей — Record<K, T>
Создай тип UserRole = 'admin' | 'user' | 'guest'
Теперь с помощью Record создай объект roleDescriptions, в котором каждому типу роли сопоставлено описание (строка).
*/
type UserRole = "admin" | "user" | "guest";

const roleDescriptions: Record<UserRole, string> = {
  admin: "Valeriy",
  user: "Valera",
  guest: "Valerka",
};

/*
Задание 57. Удаление из объединения — Exclude<T, U>
Есть тип:
type Status = 'draft' | 'published' | 'archived';

Создай тип VisibleStatus, который исключает значение 'archived'.
Затем создай переменную, которая может принимать только 'draft' или 'published'.
*/

type Status = "draft" | "published" | "archived";
type VisibleStatus = Exclude<Status, "archived">;
const availableStatus: VisibleStatus = "draft";

/*
Задание 58. Извлечение из объединения — Extract<T, U>
Есть два типа:
type Fruits = 'apple' | 'banana' | 'cherry'
type RedFruits = 'cherry' | 'strawberry'

Создай тип CommonFruits, который содержит только те значения, которые есть в обоих объединениях.
*/
type Fruits = "apple" | "banana" | "cherry";
type RedFruits = "cherry" | "strawberry";

type CommonFruits = Extract<Fruits, RedFruits>;

/*
Задание 59. Удаление null и undefined — NonNullable<T>
Есть тип:
type MayBeNumber = number | null | undefined

Создай новый тип SafeNumber, который не допускает null и undefined.
Затем создай переменную с этим типом и попробуй присвоить ей null — проверь, сработает ли.
*/
type MayBeNumber = number | null | undefined;
type SafeNumber = NonNullable<MayBeNumber>;
const num: SafeNumber = null; //не сработает =)

/*
Задание 60. Получить тип возвращаемого значения — ReturnType<T>
У тебя есть функция:
function createUser(name: string, age: number) {
  return {
    id: Date.now(),
    name,
    age,
  };
}

С помощью ReturnType создай тип UserFromFunction, который будет соответствовать возвращаемому значению createUser.
Затем создай переменную newUser: UserFromFunction и заполни её вручную.
*/

function createUser(name: string, age: number) {
  return {
    id: Date.now(),
    name,
    age,
  };
}

type UserFromFunction = ReturnType<typeof createUser>;
const newUser: UserFromFunction = {
  id: 1, //наверное тут с датой так не получится, или я не понял что ты тут хотел показать
  name: "Oleg",
  age: 32,
};
