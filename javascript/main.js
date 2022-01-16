// 新增自動更新年份，寫在footer內的div所以呼叫要注意順序
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
    let Address = document.getElementById('Address');
    
    // 3:在被選取的元素(之前)插入內容 語法:before() 置入被選取元素標籤之前
    Address.before(div);
}

// 新增 SmallNav 的內容
SmallNavCon();
function SmallNavCon() {
    // 新增標籤 ul與li
    let ul = document.createElement('ul');
    // let li = document.createElement('li');

    // 在Smallnav內新增，宣告變數
    let SN = document.getElementById('SmallNav');

    // 在 SN 建立 ul 框架，給予 id 名稱
    SN.appendChild(ul);
    // 賦予屬性 id or class
    ul.setAttribute("id", "PhoneNav");

    let PhoneNav = document.getElementById('PhoneNav');

    let NavClass = ['About', 'VerticalLine', 'Shop', 'VerticalLine', 'LocalMap', 'VerticalLine', 'Message']
    
    // 新增標籤時，程式的運作方式為：先新增標籤，賦予屬性，再指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字 7 是因為陣列產生，故要隨著陣列值的數量而自動增減
    for (let i = 0; i < NavClass.length; i++) {
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute("class", NavClass[i]);
        // ul 內新增 li 清單
        PhoneNav.appendChild(li);
    }

}
