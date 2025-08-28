export {};

type DebugType = () => void;

// union型で特定の型を除外したいとき exclude
type SomeTypes = string | number | DebugType;

// distributive conditional types
type MyExclude<T, U> = T extends U ? never : T;

type MyFunctionType = MyExclude<SomeTypes, string | number>;

type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// 特定の型を取り出したいとき
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

// union型からunllやundefinedを排除
type NullableType = string | number | null | undefined;
type NonNullableTypess = NonNullable<NullableType>;

type MyNonNullable<T> = T & {};
