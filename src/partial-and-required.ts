export {};

// utility types: pertial型
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// 既存のtypeを全てoptionalにしたいとき
type PartialType = Partial<Profile>;

// 全てのプロパティを必須にしたい時
type RequiredTyep = Required<Profile>;
