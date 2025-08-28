export {};

let bim: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

console.log(bim(1.78, 86));
