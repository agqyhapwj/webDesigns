// 只要將檔名寫入陣列中（不用給副檔名），即可直接讀取檔案內容
let IndexCon = ["jquery", "jquery.menunav", "copyright", "SmallNav", "Limited", "Share", "Banner"];
let FooterCon = ["copyright"];

define(IndexCon, function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        // 讀取檔案內的 函式名稱
        PhoneMenushow2();
        CopyRightContent ();
        LimitedCon(8);
        ShareCon(8);

    });
});

// define(FooterCon, function($) {

// });