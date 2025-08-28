export {};

// 共用型(string | number)[] だと、順序性がない
// typleを用いる, 型推論でtupleは表示されない。
let profile: [string, number] = ['Ham', 43];
// profile = [43, 'Ham']; 順序を決定できる
