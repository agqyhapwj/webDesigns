// 新增 限量(最新商品)
function LimitedCon(Number) {
    let DClass = ['Images','LName','Brief'];
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