// 藤井愛弓
'use strict'
{
  $(".content_title").off('click');
    //has-childクラスがついたaタグをクリックしたら
  $(".content_title").on('click', function() {
    // aタグから見た親要素の<li>を取得し
    const parentElement =  $(this).parent();
    //矢印方向を変えるためのクラス名を付与して
    $(parentElement).toggleClass('active');
    //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
    $(parentElement).children('ul').stop().slideToggle(500);
    //リンクの無効化
    return false;
    });
}