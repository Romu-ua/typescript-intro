export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ham', 43];
let ham = new Person(...profile);
console.log(ham);

// 他の人が作成したクラスの中身を取り出して、
// 配列にして、その中身を定義して、展開して使用する

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

// extends abstract new (...args: any) => anyクラスであることの保証
// inferされた型を返しているだけ。
