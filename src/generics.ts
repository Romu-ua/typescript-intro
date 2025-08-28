export {};

// Generice
// 型を変数の様に扱える仕組み

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// これがGenerics
// Tが抽象型を意味している。型引数。慣習でT。
// <T>は関数名やクラス名の直後、アロー関数は引数の直前
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(43));
console.log(echo<string>('hello'));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<string>('hello').echo());
