export {};

// 前回までの内容
type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham-san',
  age: 43,
};

// -- 独自 --
// interfaceは継承ができるので
// オブジェクト中心、継承、の時使用
// typeはなんでも型にできる。
// 基本的にはtypeで統一して、拡張されることがある構造体
// はinterfaceにする
