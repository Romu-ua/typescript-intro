export {};

// never, 呼び元にnever戻らないからnever？
function error(message: string): never {
  throw new Error(message);
}

try {
  let reuslt = error('test');
  console.log(reuslt);
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined;
// いつ使うのかわからない。
let bar: never = error('only me!');
