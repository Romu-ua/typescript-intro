export {};

class Person {
  // アクセス修飾子はprivateでも良い
  // 自動で初期化処理をやってくれる。独特な実装
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Ham-sam', 43);
console.log(me);
