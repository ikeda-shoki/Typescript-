var hasValue = true;
var count = 10;
// numberは少数や、マイナスの値も使うことが可能
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// 型注釈と型推論
// 型解釈とは上記のように値の後に型の名前を入れること
// 型推論とは型解釈がなくとも型を勝手に予想してエラーを出してくれること
// 基本的には下記の型推論を使用してわざわざ型注釈は使用しない
var checkValue = false;
// checkValue = 10; これはエラーになる
// 型推論をしない場合とは？
// 下記のように変数の初期化を行わない場合　※ただ何も指示しないとなんでも入ってしまう
var any;
any = 2;
any = "string";
// オブジェクトに型を定義する
// 基本は推論型で定義する為、わざわざ定義しないし、オブジェクトを: objectで定義もしない
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 配列の場合
var fruits = ['Apple', 'Banana', 'Grape'];
// 文字列と数字を入れたい場合はanyを使う
var menu = ["Apple", "Corn", "Ace", 3];
// 推論型の場合
var names = ["Yamada", "Teru", 3];
// 配列に入る型を順番通り決める為に使用するタプル
var book = ['business', 1500, false];
// pushした場合は値は入るようになる
book.push(21);
// enumについて(列挙型)
// 特定のまとまったグループを受け入れる
// enumに関しては値は大文字、変数名はパスカルケース
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// any型について
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.fji = "fji";
// anyが付くと全てJavascriptに変更される型がなんでもよくなり、代入もされる
// Javascriptから移行する際によく、使用する、基本的にはあまり使用してはいけないとわかった上で使用すること
var banana = 'banana';
banana = anything;
// ユニオン型
// | →　or演算子のような役割
var unionType = 10;
// unionType.toUpperCase();
// 上記はエラーになる
unionType = "hello";
unionType.toUpperCase();
// 配列の場合
var unionTypes = [21, 'hello'];
// リテラル型(完全に決まった値だけを使用する)
// constで定義すると推論型でリテラル型でタイプが完全に一致するものしか出来なくなる。
var apple = 'apple';
// enumのように作成する
var clothSize = 'large';
// enumとの違いはオブジェクトではないため、指定が効かなくなる
var cloth = {
    color: "white",
    size: 'medium'
};
var colorType = {
    color: "yellow"
};
// 関数に型をつける
// 型注釈で記載が必要、型推論にする場合、戻り値は型推論で問題ないが、引数に関しては型注釈が必要になり、型注釈がない場合はanyになりなんでもよくなる
// 関数の戻り値の型が決まっている場合は、型注釈で書いた方がわかりやすいコードになる
function add(num1, num2) {
    return num1 + num2;
}
// void型　undefined型
// voidは何も返さない時に使用する
function sayHello() {
    // これはundefined型を返す
    // ただ型をundefined型を指定してはいけない、Tsではundefinedを返すことを許していない！
    // undefined型を使える場合は、関数でreturn;を書く場合は書けるが基本的にundefinedを使用せずに、voidを使用すること！
    console.log("Hello!");
}
var anotherAdd = add;
// 上記の書き方だとどちらも型をしてしているがどちらか一方に型を指定すれば問題ない
// アロー関数で記載する時の型のつけ方
var doubleNumber = function (num) { return num * 2; };
// コールバック関数に型をつける時のやり方
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    doubleNum.toString;
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = false;
// 下記がanyとは違いエラーになる
// text = unknownInput;
//下記のように型をif文などで変更する際に使用する
if (typeof unknownInput === "string") {
    text = unknownInput;
}
// never型について
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
