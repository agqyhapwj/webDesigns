// 瀏覽器的控制台，就是「console.log」的列印語法
/* 單或雙引號裡的(' , ")皆為字串 */

// 呼叫來使用
// TestCode();

TimeYear();

function TimeYear() {
    // 日期函數 Date 產生每年都會自動更新的 Date↓
    var year = new Date().getFullYear();

    // 年份變數↑
    // var Year = "2022";
    // 由html 顯示資料
    document.getElementById('Year').textContent = year;
};


// 自定義一個 function name(參數引數或空自) {程式碼}
function TestCode() {
    // 變數命名：英文開頭 + 數字 + 底線，不能以數字開頭，javascript的關鍵字不能設定，英文大小寫混用
    // es5版本 var， es6版本 let(變數) cont (常數)
    // 宣告全域變數
    var one;
    var ONE;

    // 賦予值
    one = 1;
    ONE = "01";
    console.log(one);
    console.log(ONE);
    console.log("02");

    // 單一條件判斷 if 三種寫法
    var NumBer = 12;
    // 條件成立執行這裡
    if ( NumBer < 5) {
        console.log("數字小於 5");
    }
    if ( NumBer > 10 ) console.log("數字大於 10");

    if ( NumBer > 10)
        console.log("數字為：" + NumBer);

    // 雙向式判斷 if else
    var Num = 20;
    if (NumBer < Num)
        console.log("NumBer比較小");
    else
        console.log("NumBer 比較大");

    // 多向式判斷 if (條件) {程式} else if (條件) {程式} else {程式}
    // 全域變數
    let Num_One = 1;
    let Num_Two = 2;
    if (Num_One == let_Num_Two) {
        console.log("兩個變數相等")
    } else if (Num_One > Num_Two) {
        console.log(Num_Two + "大於" + Num_One);
    } else {
        console.log("條件不成立");
    };
}

// 全域變數
var a = 1;
let b = 2;

// var 與 let 的差別
function var_LetCode() {
    // 區域變數
    var a = 3;
    let b = 4;

    console.log( a + b);
}
    
//  var_LetCode();

function var_LetCode () {
    // var 與let 的差別: 暗藍色表示找不到變數！
    // var的作用域會在function內才會區分「全域或區域」的差別，let的作域包含了全部，例：function{...} if() {...}
    // 全域變數
    var A = 4, C = 1;
    let x = 5, y = 6;
    {
        var d = A + C;
        let z = x + y;
    }
    console.log(d);
    // 呼叫不到 z 因為是「暗藍色」
    console.log(z);

    function NumCal() {
        var d = A + C;
        let z = x + y;
    }
}
 
// 迴圈 for(宣告變數起始值、條件、執行後增加或減少的次數) {程式}
let i;
for ( i = 0; i <= 10; i = i + 1) {
    console.log(i);
}

// 迴圈 while (條件) {程式} 與 for 的差別在於無法指定執行的圈數
function WhileCode() {
    // 總數
    let Number = 200;

    // 亂數(系統產生介於 0~1 之間)，將小數變為整數(數值要介於0~30之間，需乘以31)，設定為無條件捨去

    let attack;
    attack = Math.floor(Math.random() * 30);
    // console.log(attack);
    
}



// login();

function login() {
    // 變數：承接使用者輸入的資料, Acc=帳號、Pwd=密碼
    let Acc;
    let Pwd;
    // 可輸入訊自的對話視窗
    Acc = window.prompt('請輸入帳號');

    // 假設，網站有連接資料庫，帳號與密碼都由資料庫帶出
    let AccName = 'wei';
    let PwdNum = '123456';

    if ( Acc == AccName) {

        pwd = window.prompt('請輸入密碼');

        if ( pwd == PwdNum) {
            console.log('歡迎登入！');
        } 
        else {
            console.log("帳號與密碼有誤！");
        }

    } 
    else {
        console.log("帳號與密碼有誤！");
    }
}