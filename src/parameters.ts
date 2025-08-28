export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};
debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Gloria', 76];

// 他の人が作成した引数のみの型を取り出したいときに使う
debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

// extends (...args: any) => any 関数であること
// extends (...args: infer P) => anyここ上記で制約をかけているので常に真
// 単に inferされたPを返しているだけ
