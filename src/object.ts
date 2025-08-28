export {};

// objectだと制約が甘い
// 構造が差し代わっていても気づけいない
let profile1: object = { name: 'Ham' };
profile1 = { birthYear: 1976 };

let profile2: {
  name: string;
} = { name: 'Ham' };
// profile2 = { birthYear: 1976 };
profile1 = { name: 'Nimo' };
