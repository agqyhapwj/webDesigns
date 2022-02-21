// 手機裝置選單
// MenuNav();
function MenuNav() {
    let MenuNav = document.getElementById('MenuNav');
    MenuNav.style.display = "none";
}

// PhoneMenushow();
// menu手機版按鈕
function PhoneMenushow() {
    let Menu = document.getElementsByClassName('MenuBtn');
    // 顯示手機版選單內容
    Menu.style.display = "block";
}

PhoneMenushow2();
function PhoneMenushow2() {
    // $ jQuery的變數前綴詞
    // 隱藏選單
    $('#MenuNav').hide();

    // 開啟選單
    $('#MenuBtn').click( function() {
        $('#MenuNav').show();
    });

    // 關閉選單
    $('#Close').click( function () {
        $('#MenuNav').hide();
    });
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
};

// 新增自動更新年份，寫在footer內的div所以呼叫要注意順序
// TimeYear();
function TimeYear() {
    var year = new Date().getFullYear();
    document.getElementById('Year').textContent = year;
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

    let NavCon = ['關於我們', '|', '購物說明', '|', '地圖連結', '|', '聯絡客服']
    
    // 新增標籤時，程式的運作方式為：先新增標籤，賦予屬性，再指定新增的外框架(此為一個迴圈)
    // 迴圈內的數字 7 是因為陣列產生，故要隨著陣列值的數量而自動增減
    for (let i = 0; i < NavClass.length; i++) {
        let li = document.createElement('li');
        // 新增屬性
        li.setAttribute("class", NavClass[i]);
        // ul 內新增 li 清單
        PhoneNav.appendChild(li);

        // 新增連結 a
        let A = document.createElement('a');
        // 新增屬性 假連結 javascript:;
        A.setAttribute("href", "javascript:;");
        // li 內新增 a連結
        li.appendChild(A);
        // 置入 陣列NavCon的文字內容123
        A.innerText = NavCon[i];
    }

}

LimitedCon();
// 新增 限量(最新商品)
function LimitedCon() {
    let CommID = ["CO1","CO2","CO3","CO4","CO5","CO6","CO7","CO8"];
    for(let i=0; i < CommID.length; i++ ) {
        // 新增標籤 section
        let sec = document.createElement('section');

        // 在 #LimCon 內新增 section
        let SE = document.getElementById('LimCon');

        // 建立 section 框架
        SE.appendChild(sec);

        // 給予 class
        sec.setAttribute("class", "Commodity");
        sec.setAttribute("id", CommID[i]);
        
        /*==========================================*/
        // 新增標籤 ul
        let ul = document.createElement('ul');

        // 在 Commodity 內新增 ul
        // let CO = document.querySelector('.Commodity');
        let CO = document.getElementById(CommID[i]);

        // 建立 ul 框架
        CO.appendChild(ul);

        // 點予 id 名稱
        ul.setAttribute("id", "TitleBox");

        // 設計迴圈
        // li 在 TitleBox 框加內產生，宣告 TitleBox 的變數
        let TB = document.getElementById('TitleBox');

        // 宣告 li 的 class 名稱 array(陣列)
        let LiClass = ['Title','Number','Text'];

        // 宣告 li 的內容
        let LiCon = ['限量特賣','庫存','數量有限，售完為止'];

        ForLi(LiClass, TB, LiCon);
        // for 迴圈
        /*for(let i =0; i<LiClass.length; i++) {
            //建立 li
            let li = document.createElement('li');

            // 在 TitleBox (宣告在143行)
            TB.appendChild(li);
            
            // 新增 class 屬性
            li.setAttribute("class",LiClass[i]);

            // 置入 內容
            li.innerText = LiCon[i];
        }*/

    // 建立 class 的變數 在Number 的裡面讀取第一個元素(就是span),陣列元素第一個從[0]開始
    // let Number = TB.getElementsByClassName('Number')[0]; ，這段暫時註解掉
    //querySelector() 在文件中匹配指定 css 選擇器 
    // let Number = document.querySelector('.Number');
    let Number = TB.querySelector('.Number');

    // 建立 span 標籤
    let SP = document.createElement('span');

    // 在 Number 建立 span
    Number.appendChild(SP);

    SP.innerText = '1';
     /*==========================================*/

    //設定 div class 名稱陣列
    let DClass = ['Images','LName','Brief'];

    for(let i =0;i<DClass.length;i++) {
        // 新增 div 的框架，宣告變數
        let Div = document.createElement('div');

        // 在 Commodity (宣告在133行)
        CO.appendChild(Div);

        // 新增屬性
        Div.setAttribute("class",DClass[i]);
    }

    // Images 內新增資料 a標籤
    let A = document.createElement('a');
    // 新增 連結 屬性
    A.setAttribute("href","javascript:;");
    // 宣告 指定 class 的變數
    let Images = CO.querySelector('.Images');
    // 在 Images內新增
    Images.appendChild(A);

    // Images > a 內新增資料(圖片)
    let Img = document.createElement('img');
    // 屬性
    Img.setAttribute("src","images/Merchandise/001.jpg");
    //在 a 內新增
    A.appendChild(Img);

    // 在 LName 新增資料 h3 li
    let H3 = document.createElement('h3');
    let Li = document.createElement('li');
    // 屬性
    Li.setAttribute("class","Love");
    // 在 LName 新增; CO 在 Commodity (宣告在133行)
    let LName = CO.querySelector('.LName');
    LName.appendChild(H3).innerText = "商品名稱";
    LName.appendChild(Li).innerText = "我的最愛";

    // 在 Brief 內新增 html 資料 (mark)的轉屬html的標籤;CO 在 Commodity (宣告在133行
    let Brief = CO.querySelector('.Brief');
    Brief.innerHTML="商品簡介:若字限制(<mark>中文13字，英文與數字26字</mark>)會利用...設計";

    /*============================================================*/
    // 價格
    // 新增標籤 ul
    ul = document.createElement('ul');

    // 在 Commodity 內新增 ul
    // CO = document.querySelector('.Commodity');
    CO = document.getElementById(CommID[i]);
    ul.setAttribute("id","PriceBox");
    // // 建立 ul
    CO.appendChild(ul);

    let PriceBox = document.getElementById('PriceBox');
    // 陣列 class
    let PBLi = ['OriginaPrice','BargainPrice','Car'];
    // 內容
    let PBLiCon = ['原價 <span> <s> 1000 </s> </span> 元','特價 <span> 800 </span> 元','購物車'];

    ForLi(PBLi, PriceBox, PBLiCon);
    /*============================================================*/
    // 建新 for (新增li)方法
    function ForLi(Class, IdName, Con){
        // for 迴圈
        for(let i =0; i < Class.length; i++) {
            //建立 li
            let li = document.createElement('li');
            
            // 在 框架 新增 標籤 li
            IdName.appendChild(li);
            
            // 新增 class 屬性
            li.setAttribute("class",Class[i]);

            // 置入 內容
            li.innerHTML = Con[i];
        }
        // 終止方式(函式)執行
        return;
    }
    }
}
