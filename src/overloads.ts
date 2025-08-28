export {};

//シグネチャ, 宣言
function double(value: number): number;
function double(value: string): string;

// 実体の方がanyで記述。
// 型安全はシグネチャで定義する。
function double(value: any): any {
  if (typeof value == 'number') {
    return value * 2;
  } else {
    return value + ' ' + value;
  }
  // else {
  // シグネチャ以外で定義したもの以外はここにこない。
  // throw 'value type is not number or string';
  // }
}

console.log(double(100));
console.log(double('hello'));
// console.log(double(true));
