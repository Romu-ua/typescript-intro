export {};

let numbers: number[] = [1, 2, 3];
console.log(numbers);

let strings: string[] = ['tyep', 'script', 'is fun'];
console.log(strings);

let xy: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let mix: (number[] | string[] | boolean[])[] = [
  [1, 2, 3],
  ['hello', 'world', 'xy'],
  [true, true],
];
