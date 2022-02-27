// 瀏覽器的控制台，就是「console.log」的列印語法，這裡建立的時間是 2022 0109
/* 單或雙引號裡的(' , ")皆為字串 */

// 呼叫來使用
// TestCode();

// 已經在 CopyRightContent () 內 呼叫 TimeYear(); 

function TimeYear() {
    // 日期函數 Date 產生每年都會自動更新的 Date↓
    var year = new Date().getFullYear();

    // 年份變數↑
    // var Year = "2022";
    // 由html 顯示資料
    document.getElementById('Year').textContent = year;
}

// 新增html的標籤與內容
CopyRightContent();
function CopyRightContent () {
    // 宣告變數在「html」內新增 div 標籤
    let div = document.createElement('div');

    // 宣告變數在哪個「html」標籤之內新增 div
    let Footer = document.getElementById('Footer');

    // 在footer內，新增 div 子元素
    Footer.appendChild(div);

    // 這段語法只接受「純文字」任何標籤都不行
    // div.textContent = "BsCoffee&copy;版權宣告2020 -";

    // html語法「可以包標籤」若要寫入id or class最外層要用，(單引號)
    div.innerHTML = '<h4> BsCoffee&copy;版權宣告2020 - <span id="Year"></span> </h4>';

    TimeYear();

    // 調整 框架 位置，呼叫要選取的標籤
    // 1:在被選取的元素內 (開頭) 插入內容 prepend() 置入被選取元素之中
    let Address = document.getElementById('Address');
    // Address.prepend(div);

    // 2:在被選取的元素內 (結尾) 插入內容 append() 置入被選取元素之中
    // Address.append(div);

    // 3:在被選取的元素 (之前) 插入內容 before() 置入被選取元素標籤之前
    Address.before(div);

    // 4:在被選取的元素 (之後) 插入內容 append() 置入被選取元素標籤之後
    // Address.after(div);
}


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
// let i;
// for ( i = 0; i <= 15; i = i + 1) {
//     console.log(i);
// }

WhileCode();

// 迴圈 while (條件) {程式} 與 for 的差別在於無法指定執行的圈數
function WhileCode() {
    // 總數
    let Number = 200;
    // 亂數(系統產生介於 0~1 之間)，將小數變為整數(數值要介於0~30之間，需乘以31)，設定為無條件捨去 floor
    let attack;
    let count = 1;
    
    while (Number > 0 ) {

        console.log("第" + count + "次");
        count = count + 1;

        attack = Math.floor(Math.random() * 20 + 11);
        console.log("亂數為：" + attack);

        // 將計算過後的值，再指定給 Number
        Number = Number - attack;
        console.log("計算結果：" + Number);

        
    }
    
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

        Pwd = window.prompt('請輸入密碼');

        if ( Pwd == PwdNum) {
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

ArrayCode();
// 陣列array，基本會配合for迴圈使用
function ArrayCode() {
    // 宣告陣列變數，給予值
    let Items = [101, '01', '項目'];
    // 資料輸出，迴圈讀取陣列，起始值都是由「0」開始
    for (let i = 0; i <= 2; i++) {
        console.log(Items[i]);
    }
}