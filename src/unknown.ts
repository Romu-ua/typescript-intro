export {};

const func = (): number => 43;

let numberAny: any = func();
let numberunknown: unknown = func();

let sumAny = numberAny + 10;
console.log(typeof numberunknown); // > number

// typeofで型を確認して動作させることをtypeガードという
// if文で型の絞り込み(narrowing)している。
if (typeof numberunknown == 'number') {
  let sumUnknown = numberunknown + 10;
}
