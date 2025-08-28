export {};

const reducer: (accumulator: number, currentValuse: number) => number = (
  accumulator: number,
  currentValuse: number
): number => {
  console.log({ accumulator, currentValuse });
  return accumulator + currentValuse;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  let total = values.reduce(reducer);
  console.log(values);
  return total;
};

console.log(sum(1, 2, 3, 4));
