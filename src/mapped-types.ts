export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

// Partialの定義
// type Partial<T> = { [P in keyof T]?: T[P]; }

// keyofはkeyを文字列リテラル型のunion型をin演算子で取り出すことができる
// T[P]はProfile[name] -> stringという意味
// つまりこの例ではname?: string, age?: numberとなる新しい方が得られる
type PropertyTyeps = keyof Profile;

// nullableにするには
type myOptional<T> = { [P in keyof T]?: T[P] | null };
