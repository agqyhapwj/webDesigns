// 指定圖片路徑的陣列
// 電腦版
let Pimages = ['images/banner/01.jpg', 'images/banner/02.jpg', 'images/banner/03.jpg', 'images/banner/04.jpg', 'images/banner/05.jpg'];
// 平版
let Timages = ['images/banner/t/01.jpg', 'images/banner/t/02.jpg', 'images/banner/t/03.jpg', 'images/banner/t/04.jpg', 'images/banner/t/05.jpg'];
// 手機
let Simages = ['images/banner/s/01.jpg', 'images/banner/s/02.jpg', 'images/banner/s/03.jpg', 'images/banner/s/04.jpg', 'images/banner/s/05.jpg'];

// 自訂索引變數[current]，紀錄目前正在顯示第幾張圖片，儲存著圖片對應的索引編號
let current = 0;

// 方法 宣告變數，將執行方法直接寫入變數中
let ChangeImage = function(num) {
    // // 判斷式條件 -- 索引編號 + 自訂參數值 >=0 && 索引編號 + 自訂參數 < 圖片陣列的長度成立時

    current = ( current + num + images.length) % Pimages.length;
    // img 預設圖
    document.getElementById('Bannerimg').src = Pimages[current];

    // 電腦版
    document.getElementById('Pimg').src = Pimages[current];

    // 平版
    document.getElementById('Timg').src = Timages[current];

    // 手機版
    document.getElementById('Simg').src = Simages[current];

    // current += num;

    // 不循環寫法
    // if(current < 0) {
    //     current = 0
    // } else if ( current > images.length - 1){
    //     current = images.length - 1
    // }

    // 循環寫法
    // if(current < 0) {
    //     current = images.length -1
    // } else if ( current > images.length - 1){
    //     current = 0
    // }

    // if(current + num >= 0 && current + num < images.length) {
    //     // 索引變數 = 索引變數 + 自訂參數 current = current + num
    //     current += num;
    //     // 更變 圖片的連結檔案
    //     document.getElementById('Bannerimg').src = images[current];
    // } 
    // else {
    //     // 這段 else 是後來加的，才會一直循環；否則執行 0 1 2 3 4 後就停止了
    //     current = -1;
    // }
    document.getElementById('Bannerimg').src = Pimages[current];
    console.log(current);

}

// 按鈕執行 方法
document.getElementById('prev').onclick = function() {
    ChangeImage(-1);
}

document.getElementById('next').onclick = function() {
    ChangeImage(1);
}

// 自動播放 3000毫秒 = 三秒
// let Timer = setInterval(() => {
//     if ( current < images.length ) {
//         ChangeImage(1);
//         // 用console.log(current)，印出它執行的次數
//         console.log(current);
//     }
// },3000);