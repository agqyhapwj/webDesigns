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