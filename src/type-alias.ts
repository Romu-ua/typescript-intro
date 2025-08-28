export {};

type Mojiretu = string;

const fooString: string = 'hello';
const fooMojiretu: Mojiretu = 'hello';

const example1 = {
  name: 'Ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Ham',
  age: 43,
};

// リバースエンジニアリング的アプローチ
// 愚直に記述すると、exmaple1が変更されても同様に変更される
type Profile2 = typeof example1;
