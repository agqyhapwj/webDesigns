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

// 主頁商品 共用變數區(全域)變數
//設定 div class 名稱陣列
let DClass = ['Images','LName','Brief'];

LimitedCon(8);
// 新增 限量(最新商品)
function LimitedCon(Number) {
    for(let i=0; i < Number; i++ ) {
        // 新增標籤 section
        let sec = document.createElement('section');

        // 在 #LimCon 內新增 section
        let SE = document.getElementById('LimCon');

        // 建立 section 框架
        SE.appendChild(sec);

        // 給予 class
        sec.setAttribute("class", "Commodity");

        /* ===第一層 ul id=TitleBox；class=TitleBox=== */

        // 新增標籤 ul
        let ul = document.createElement('ul');
        // 在 Commodity 內新增 ul
        // 這個出錯哦let CO = document.querySelector('.Commodity');

        // 利用 class 物件的索引編號，判讀為哪一個 class 物件
        let CO = document.getElementsByClassName('Commodity')[i];
        // 建立 ul 框架
        CO.appendChild(ul);

        // 給予 id 名稱
        ul.setAttribute("id", "TitleBox");
        ul.setAttribute("class", "TitleBox");

            // /* ====== TitleBox 內的資料 ====== */
            // 設計迴圈
            // li 在 TitleBox 框加內產生，宣告 TitleBox 的變數
            let TB = document.getElementsByClassName('TitleBox')[i];

            // 宣告 li 的 class 名稱 array(陣列)
            let LiClass = ['Title','Number','Text'];

            // 宣告 li 的內容
            let LiCon = ['限量特賣','庫存','數量有限，售完為止'];

            ForLi(LiClass, TB, LiCon);
            // for 迴圈 增加 LiClass 與 LiCon 的資料
            // for(let i =0; i<LiClass.length; i++) {
            //     //建立 li
            //     let li = document.createElement('li');

            //     // 在 TitleBox (宣告在145行)
            //     TB.appendChild(li);
                
            //     // 新增 class 屬性
            //     li.setAttribute("class",LiClass[i]);

            //     // 置入 內容
            //     li.innerText = LiCon[i];
            // }

            // 建立 class 的變數 建立庫存數量
            // let Number = TB.getElementsByClassName('Number')[0]; ，這段暫時註解掉
            //querySelector() 在文件中匹配指定 css 選擇器 
            // let Number = document.querySelector('.Number');
            let Number = TB.querySelector('.Number');

            // 建立 span 標籤
            let SP = document.createElement('span');

            // 在 Number 建立 span
            Number.appendChild(SP);

            SP.innerText = '1';

            // ul id=TitleBox 同一層
            // div class=Images  // div class=LName  // div class=Brief 建立三個div框架
            

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
                // let Images = CO.getElementsByClassName('Images')[i];
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
                // 在 LName 新增; CO 在 Commodity (宣告在134行)
                let LName = CO.querySelector('.LName');
                LName.appendChild(H3).innerText = "商品名稱";
                LName.appendChild(Li).innerText = "我的最愛";

                // 在 Brief 內新增 html 資料 (mark)的轉屬html的標籤;CO 在 Commodity (宣告在134行
                let Brief = CO.querySelector('.Brief');
                Brief.innerHTML="商品簡介:若字限制(<mark>中文13字，英文與數字26字</mark>)會利用...設計";

            /*==============價格=============*/
            //  新增標籤 ul ；CO 在 Commodity (宣告在134行)
            ul = document.createElement('ul');
            ul.setAttribute("id","PriceBox");
            ul.setAttribute("class","PriceBox");
            // // 建立 ul
            CO.appendChild(ul);
            let PriceBox = document.getElementsByClassName('PriceBox')[i];
            // 陣列 class
            let PBLi = ['OriginaPrice','BargainPrice','Car'];
            // 內容
            let PBLiCon = ['原價 <span> <s> 1000 </s> </span> 元','特價 <span> 800 </span> 元','購物車'];

             ForLi(PBLi, PriceBox, PBLiCon);
        }

        // 方法
        function ForLi(Class, Name, Con) {
            for(let i =0; i<Class.length; i++) {
                //建立 li
                let li = document.createElement('li');

                // 在 TitleBox (宣告在145行)
                Name .appendChild(li);
                
                // 新增 class 屬性
                li.setAttribute("class",Class[i]);

                // 置入 內容
                li.innerHTML = Con[i];
            }
             // 終止方式(函式)執行
            return;
        }
       
    }

ShareCon(8);
// 新增 好物分享 的內容
function ShareCon(Number) {
    let i = Number;
    let a = i + Number;
    // 在同一頁面中，會將相同 名稱的 class，累加編號
    for ( i; i < a; i++) {
        New_ID_Tag('ShareCon', 'section', 'class', 'Commodity');
        New_Class_Tag('Commodity', 'p', 'class', 'Null', i);

        for(let b = 0; b < DClass.length; b++) {
            New_Class_Tag('Commodity', 'div', 'class', DClass[b], i);
        }

        let CO = document.getElementsByClassName('Commodity')[i];
        // Images 內新增資料
        let A = document.createElement('a');
        // 新增連結屬性
        A.setAttribute("href", "javascript:;");
        // 宣告指定 class 的變數
        let Images = CO.querySelector('.Images');
        // let Images = CO.getElementByClassName('Images')[i];
        // 在 Images 內新增
        Images.appendChild(A);

        // Images > a 內新增資料
        let Img = document.createElement('img');
        // 屬性
        Img.setAttribute("src", "images/Merchandise/001.jpg");
        // 在 a 內新增
        A.appendChild(Img);

        New_ClassTagContent('LName', 'h3', i, '商品名稱');
        New_Class_TagContent('LName', 'li', 'class', 'LineId', i, '聯絡客服');
    }
    return;
}

// 只渲染框架
function New_IDTag(IdName,NewTagtName) {
    let BoxTag = document.getElementById(IdName);

    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagtName);

    // 在框架 內建立 標籤
    BoxTag.appendChild(TagName);
}

//  只渲染框架
function New_ClassTag(ClassName, NewTagName, i) {
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName);
}

// 1.渲染框架給予資料內容
function New_ClassTagContent(ClassName, NewTagName, i, Content){
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName).innerHTML = Content;
}

// 2.渲染框架給予資料內容
function New_Class_TagContent(ClassName, NewTagName, IdClass, IdClassName, i, Content){
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName).innerHTML = Content;

        // 給予屬性
        TagName.setAttribute(IdClass, IdClassName);
}

// 給予 渲染框架 一個 ID 屬性
function New_ID_Tag(IdName, NewTagName, IdClass, IdClassName){
      // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementById(IdName);

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName);

        // 給予屬性
        TagName.setAttribute(IdClass, IdClassName);
}

// 給予 渲染框架 一個 Class 屬性
function New_Class_Tag(ClassName, NewTagName, IdClass, IdClassName, i){
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName);

        // // 給予屬性
        TagName.setAttribute(IdClass, IdClassName);
}

// 給予兩個屬性
function New_class_Tag2(ClassName, NewTagName, IdClass, IdClassName, IdClass, IdClassName2, i){
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // 在 框架 內建立 標籤
        BoxTag.appendChild(TagName);

        // 給予屬性
        TagName.setAttribute(IdClass, IdClassName);
        TagName.setAttribute(IdClass, IdClassName2);
}

// 圖片連結應用
function AImg(COName, ClassName, LinkPath, PhotoPath, i) {
    let CO = document.getElementsByClassName(COName)[i];
    // Images 內新增資料
    let A = document.createElement('a');
    // 新增 連結 屬性
    A.setAttribute("href", LinkPath);
    // 宣告 指定 class 的變數
    let Images = CO.querySelector(ClassName);
    // let Images = CO.getElementsByClassName('Images')[i];
    
    // 在Images 內新增
    Images.appendChild(A);

    // Images > a 內新增資料
    let Img = document.createElement('img');
    // 屬性
    Img.setAttribute("src", PhotoPath);
    // 在 a 內新增
    A.appendChild(Img);
}