// 藤井愛弓
'use strict';

// ハンバーガー
{
  const Header = document.getElementById('js-header');
  const HeaderButton = document.getElementById('js-headerButton');

  HeaderButton.addEventListener('click', () => {
    Header.classList.toggle('is-open')
  })
}

//ドロップダウンメニュー
function top_menu(){
  const width = $(window).width();
  if(width <= 768) {//横幅が768px以下の場合
    $(".has_child>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $(".has_child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
      const parentElement =  $(this).parent();// aタグから見た親要素の<li>を取得し
      $(parentElement).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
      $(parentElement).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
      return false;//リンクの無効化
    });
  }else{//横幅が768px以上の場合
    $(".has_child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
    $(".has_child").removeClass('active');//activeクラスを削除
    $('.has_child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
  }
}

// ページがリサイズされたら動かす
$(window).resize(function() {
  top_menu();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かすす
$(window).on('load',function(){
  top_menu();/* ドロップダウンの関数を呼ぶ*/
});