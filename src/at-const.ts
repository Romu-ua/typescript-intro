export {};

let name = 'Atushi';
name = 'Ham';

// : "Ham"という型がある。
// 文字列リテラルになっている。
let nickname = 'Ham' as const;

// objectにas constを記述するとreadonlyになる
// どれだけネストしているオブジェクトでもreadonlyになる
let profile = {
  name: 'Atushi',
  height: 178,
} as const;
