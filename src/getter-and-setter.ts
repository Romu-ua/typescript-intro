export {};

// - owner
//    - 所有者
//    - 初期化時に設定できる。
//    - 途中で変更できない。
//    - 参照できる。

// -secretNumber
//    - 個人番号
//    - 初期化時に設定できる
//    - 途中で変更できる
//    - 参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secreteNumber: number) {
    this._owner = owner;
    this._secretNumber = secreteNumber;
  }

  get owner(): string {
    return this._owner;
  }

  set secretNumber(newNumber: number) {
    this._secretNumber = newNumber;
  }

  debugPrint() {
    return `secretNumber ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('Ham-san', 1234567890);
console.log(card.owner);

console.log(card.debugPrint());
card.secretNumber = 987654321;
console.log(card.debugPrint());

console.log(card.secretNumber);
