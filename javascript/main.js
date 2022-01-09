// 瀏覽器的控制台 列印語法
/* 單或雙引號裡的(' , ")皆為字串 */

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

    // 年份變數
    var Year = "2022";
    // 由html 顯示資料
    document.getElementById('Year').textContent = Year;