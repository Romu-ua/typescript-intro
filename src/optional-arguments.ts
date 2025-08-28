export {};

let bmi: (
  height: number,
  weight: number,
  printable?: boolean | undefined
) => void = (height: number, weight: number, printable?: boolean): void => {
  if (printable) {
    console.log(weight / (height * height));
  }
};

bmi(1.78, 86, true);

// bim(身長、体重、console.logで出力するかどうか？)
