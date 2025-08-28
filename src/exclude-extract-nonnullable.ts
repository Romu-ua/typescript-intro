export {};

type DebugType = () => void;

// --typeで関数を使うとき (復習)--
type MyFunc = (x: number, y: number) => string;
const f: MyFunc = (a, b) => {
  return `${a} + ${b} = ${a + b}`;
};
// ---------------------------

// union型で特定の型を除外したいとき exclude
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
// 以下同じ意味
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// 特定の型を取り出したいとき
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// union型からunllやundefinedを排除
type NullableType = string | number | null | undefined;
type NonNullableTypess = NonNullable<NullableType>;
