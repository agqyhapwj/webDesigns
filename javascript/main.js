// 瀏覽器的控制台，就是「console.log」的列印語法
/* 單或雙引號裡的(' , ")皆為字串 */

// 呼叫來使用
TestCode();

TimeCode();

function TimeYear() {
    // 日期函數 Date 產生每年都會自動更新的 Date↓
    var year = new Date().getFullYear();

    // 年份變數↑
    // var Year = "2022";
    // 由html 顯示資料
    document.getElementById('Year').textContent = year;
}


// 自定義一個 function name(參數引數或空自) {程式碼}
function TestCode() {
    // 變數命名：英文開頭 + 數字 + 底線，不能以數字開頭，javascript的關鍵字不能設定，英文大小寫混用
    // es5版本 var
    // var 宣告全域變數
    var one;
    var ONE;
    var One;
    var O_ne;
    var O_01ne;

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

    // 多向式判斷 if else
    var Num = 20;
    if (NumBer < Num)
        console.log("NumBer比較小");
    else
        console.log("NumBer 比較大");
}

    
    