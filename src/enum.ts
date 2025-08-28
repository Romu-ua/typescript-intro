export {};

// 連番を振れる
// Cと同じで最初に番号をつけれる
enum Months {
  January = 1,
  February,
  March,
  April,
  Mya,
  Jun,
  July = 10000 + Jun + 1, // こんなのもできるのか
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}
let green = COLORS.GREEN;
console.log(green);

// 必要になった場面で付け足せる
enum COLORS {
  YELLOW = '#FFFF00',
}
console.log(COLORS.YELLOW);
