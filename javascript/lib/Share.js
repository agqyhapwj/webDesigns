// 主頁商品 共用變數區(全域)變數


// 新增 好物分享 的內容
function ShareCon(Number) {
    //設定 div class 名稱陣列
    let DClass = ['Images','LName','Brief'];
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
        Img.setAttribute("src", "images/Merchandise/002.jpg");
        // 在 a 內新增
        A.appendChild(Img);

        let H3Name = ['商品名稱1', '商品名稱2', '商品名稱3', '商品名稱4', '商品名稱5', '商品名稱6', '商品名稱7', '商品名稱8'];

        New_ClassTagContent('LName', 'h3', i, H3Name);
        New_Class_TagContent('LName', 'li', 'class', 'LineId', i, '聯絡客服');

        document.getElementsByClassName('Brief')[i].innerHTML = "商品簡介:字數限制(<mark>中文13個字，英文與數字26個字</mark>)會利用...設計"
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
function New_ClassTagContent(ClassName, NewTagName, i, Content) {
    // 指定在 框架(自訂) 內新增標籤，宣告變數
        let BoxTag = document.getElementsByClassName(ClassName)[i];

        // 新增標籤 宣告變數
        let TagName = document.createElement(NewTagName);

        // // 在 框架 內建立 標籤
        // BoxTag.appendChild(TagName).innerHTML = Content;

        // i=8  b=0  8-8=0  ~  i(8)-8=0  i(9)-8=1
        BoxTag.appendChild(TagName).innerHTML = Content[ i - 8 ];
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