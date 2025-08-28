export {};

let name: any = 'Ham';
let lentght = (name as string).length;
// let length = (<string>name).length; 非推奨

// let lentght = name.lentght;

// 現在のtsのバージョンだとasつけなくても弾ける
// length = 'foo';
