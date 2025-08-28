export {};

// readonly修飾子
// 省略した初期化処理
// public == public readonlyだが、public readonlyの方が可読性良い
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('Ham-san');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'hoge';
