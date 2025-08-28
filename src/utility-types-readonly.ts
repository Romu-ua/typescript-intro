export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;
console.log(me);

type PersonalDateType = Readonly<Profile>;
const friend: PersonalDateType = {
  name: 'Shigeru',
  age: 40,
};

type myReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

// friend.age++;

// ---------------------------------------
// Generics 復習
function identityString(arg: string) {
  return arg;
}
// => 文字列専用になってしまう

function identity<T>(arg: T) {
  return arg;
}
// => Tが型の引数

// 使用方法
console.log(identity<string>('hello'));
// console.log(identityString(43))

// 推論もできる
console.log(identity(43));

// typeで使う
type Box<T> = {
  value: T;
};
const stringBox: Box<string> = { value: 'abc' };
const numberBox: Box<number> = { value: 123 };

// interfaceで使う
interface Pair<T, U> {
  first: T;
  second: U;
}
const p1: Pair<string, string> = {
  first: 'first',
  second: 'second',
};

const p2: Pair<number, string> = {
  first: 1,
  second: '2',
};
// ---------------------------------------
