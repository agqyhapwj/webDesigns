
// 新增 SmallNav 的內容

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

