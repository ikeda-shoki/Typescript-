let hasValue = true;

let count: number = 10;
// numberは少数や、マイナスの値も使うことが可能
let float: number = 3.14;
let negative: number = -0.12;

let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

// 型注釈と型推論
// 型解釈とは上記のように値の後に型の名前を入れること
// 型推論とは型解釈がなくとも型を勝手に予想してエラーを出してくれること
// 基本的には下記の型推論を使用してわざわざ型注釈は使用しない

let checkValue = false;
// checkValue = 10; これはエラーになる

// 型推論をしない場合とは？
// 下記のように変数の初期化を行わない場合　※ただ何も指示しないとなんでも入ってしまう
let any;
any = 2;
any = "string";

// オブジェクトに型を定義する
// 基本は推論型で定義する為、わざわざ定義しないし、オブジェクトを: objectで定義もしない
const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
}

// 配列の場合
const fruits: string[] = ['Apple', 'Banana', 'Grape']

// 文字列と数字を入れたい場合はanyを使う
const menu: any[] = ["Apple", "Corn", "Ace", 3]

// 推論型の場合
const names = ["Yamada", "Teru", 3]