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
    //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $(".has_child>a").off('click');
    //has-childクラスがついたaタグをクリックしたら
    $(".has_child>a").on('click', function() {
      // aタグから見た親要素の<li>を取得し
      const parentElement =  $(this).parent();
      //矢印方向を変えるためのクラス名を付与して
      $(parentElement).toggleClass('active');
      //liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
      $(parentElement).children('ul').stop().slideToggle(500);
      //リンクの無効化
      return false;
    });
  }else{//横幅が768px以上の場合
    //has-childクラスがついたaタグのonイベントをoff(無効)に
    $(".has_child>a").off('click');
    //activeクラスを削除
    $(".has_child").removeClass('active');
    //スライドトグルで動作したdisplayも無効化にする
    $('.has_child').children('ul').css("display","");
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