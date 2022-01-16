// 新增自動更新年份
// TimeYear();
function TimeYear() {
    var year = new Date().getFullYear();
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
    // 1:在被選取的元素開頭插入內容 prepend() 置入被選取元素之中
    let Address = document.getElementById('Address');
    Address.prepend(div);
}
