export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

// 欲しい型だけをpick
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;

// いらない型をommit
type SmalProfile = Omit<DetailedProfile, 'height'>;

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// 解剖してみる
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type MySmallProfile = MyOmit<DetailedProfile, 'height'>;
