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

Pageload();
function Pageload() {
    $('header').load("web/header.html");
    $('footer').load("web/footer.html");
}