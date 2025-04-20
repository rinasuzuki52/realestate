
// スライド
$(document).ready(function(){
  $('#slider').slick({
  autoplay: true,
  autoplaySpeed: 3000, // 3秒ごとに切り替え
  dots: false, // ドットナビゲーションを非表示
  arrows: false // 矢印（アロー）を非表示
  });
  });

// ふわっと出てくる
$(document).ready(function() {
  AOS.init({
    duration: 600, // アニメーションの時間（ミリ秒）
    easing: 'ease-out', // 終盤にかけてゆっくり
    once: true, // アニメーションを一度だけ実行
  });
});

// ハンバーガーメニュー
$(document).ready(function () {
  // ハンバーガーメニューのトグル
  $(".hamburger-trigger").click(function () {
    $(".header-menu").toggle(300);
    $(".hamburger").toggleClass("active");
    $("#hamburger-bg").fadeToggle(300);
  });

  // ハンバーガーメニューのリンクをクリックしたら、スマホのときだけメニューを閉じる
  $(".header-nav-btn").click(function () {
    if ($(window).width() <= 768) { // 768px以下（スマホ）のときだけ閉じる
      $(".header-menu").hide(300);
      $(".hamburger").removeClass("active");
      $("#hamburger-bg").fadeOut(300);
    }
  });
});


// ヘッダー背景
$(function(){
  var fvHeight = $('#fv').outerHeight(); // #fv の高さを取得

  $(window).scroll(function(){
    if ($(this).scrollTop() > fvHeight) {
      // #fv を通過したら .active クラスを付与
      $('.header').addClass('active');
    } else {
      // まだ #fv の位置に達していなければ .active クラスを削除
      $('.header').removeClass('active');
    }
  });
});


// モーダル
$(function () {
  // モーダルオープン処理
  $('.js_modal_open').on('click', function () {
    const id = $(this).attr('data-type');
    $('#' + id).addClass('active');
    $('.js_modal_area').css('display', 'flex').hide().fadeIn(200);
    $('body').css('overflow', 'hidden');
    $('#page-top-btn').fadeOut(200);
    return false;
  });

  // モーダルクローズ処理：共通関数
  function closeModal() {
    $('.js_modal_area').fadeOut(200, function () {
      $(this).css('display', 'none');
    });
    $('.js_modal_content').removeClass('active');
    $('body').css('overflow', '');
    $('#page-top-btn').fadeIn(200);
  }

  // ×（close-icon）をクリックしたとき
  $('.js_modal_close .close-icon').on('click', function () {
    closeModal();
    return false;
  });

  // 背景をクリックしたとき
  $('.modal__bg').on('click', function () {
    closeModal();
    return false;
  });

  // モーダル本体内クリックは閉じない
  $('.modal__content').on('click', function (e) {
    e.stopPropagation();
  });
});


// $(function() {
//   $('.js_modal_open').on('click', function() {
//       const id = $(this).attr('data-type');
//       $('#' + id).addClass('active');
//       $('.js_modal_area').css('display', 'flex').hide().fadeIn(200); // 修正
//       $('body').css('overflow', 'hidden'); // 背景スクロールを無効化
//       $('#page-top-btn').fadeOut(200); // トップへ戻るボタンを非表示
//       return false;
//   });


//   $('.js_modal_close').on('click', function() {
//       $('.js_modal_area').fadeOut(200,function() {
//           $(this).css('display', 'none'); // displayを確実にnoneに戻す
//       });
//       $('.js_modal_content').removeClass('active');
//       $('body').css('overflow', ''); // 背景スクロールを元に戻す
//       $('#page-top-btn').fadeIn(200); // トップへ戻るボタンを表示
//       return false;
//   });
// });


// セレクトボックス
document.addEventListener("DOMContentLoaded", function() {
  const selectContainer = document.querySelector(".select-container");
  const selectBox = selectContainer.querySelector(".select-box");

  selectContainer.addEventListener("click", function() {
      selectBox.focus(); // セレクトボックスをフォーカス
      selectBox.click(); // クリックイベントを発火（Safari対応）
  });
});


// トップへ戻るボタン
$(function () {
  var topBtn = $('#page-top-btn');  // トップへ戻るボタン
  var aboutSection = $('#about');   // `#about` セクション

  topBtn.hide();  // 初期状態ではボタンを非表示

  $(window).on('scroll', function () {
      var scrollTop = $(window).scrollTop();
      var aboutTop = aboutSection.offset().top;
      var aboutBottom = aboutTop + aboutSection.outerHeight();

      if (scrollTop + $(window).height() >= aboutTop) {
          topBtn.fadeIn(200);  // `#about` エリアに入ったら0.2秒で表示
      } else {
          topBtn.fadeOut(200);  // `#about` より上なら0.2秒で非表示
      }
  });

  // ボタンをクリックしたら、スクロールしてトップへ戻る
  topBtn.on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 500, "linear"); // 0.5秒で上に戻る
      return false;
  });
});

