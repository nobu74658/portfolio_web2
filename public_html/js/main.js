'use strict';
{
  $(function() {
    $('.slider').slick({
      autoplay:true,
      speed:1000,
      autoplaySpeed:5000,
      fade:true,
      pauseOnFocus: false,
      pauseOnHover: false,
      arrows: false
    });
  });

  function sleep(waitSec, callbackFunc) {
    var spanedSec = 0;
    var id = setInterval(function () {
      spanedSec++;
      if (spanedSec >= waitSec) {
        clearInterval(id);
        if (callbackFunc) callbackFunc();
      }
    }, 1000);
  }

  var bartimer = 1;
  for (let step = 0; step < 100; step++){
    const barstep = 5;
    const barfase = 1;
    sleep(bartimer, function(){
      $('#top_mv01').addClass('zoomout');
    });
    bartimer += barstep;
    sleep(bartimer, function() {
      $('#top_mv01').removeClass('zoomout');
    });
    bartimer += barfase;
    
    sleep(bartimer, function(){
      $('#top_mv02').addClass('zoomout');
    });
    bartimer += barstep;
    sleep(bartimer, function() {
      $('#top_mv02').removeClass('zoomout');
    });

    bartimer += barfase;
    sleep(bartimer, function(){
      $('#top_mv03').addClass('zoomout');
    });
    bartimer += barstep;
    sleep(bartimer, function() {
      $('#top_mv03').removeClass('zoomout');
    });
    bartimer += barfase;
  }

  jQuery(document).ready(function($) {
    // 480px以上の場合
    if (window.matchMedia('(min-width: 480px').matches) {
      $(window).on('scroll', function() {
        if (460 < jQuery(this).scrollTop() && 6920 > jQuery(this).scrollTop()) {
          $('#to-pagetop').addClass('fixed');
          $('#to-pagetop').removeClass('absoluted');
        } 
        if (6920 < jQuery(this).scrollTop()){
          $('#to-pagetop').addClass('absoluted');
          $('#to-pagetop').removeClass('fixed');
        } 
      });
    }
    // 480px以下の場合
    else {
      $(window).on('scroll', function() {
        if (460 < jQuery(this).scrollTop() && 8420 > jQuery(this).scrollTop()) {
          $('#to-pagetop').addClass('fixed');
          $('#to-pagetop').removeClass('absoluted');
        } 
        if (8420 < jQuery(this).scrollTop()){
          $('#to-pagetop').addClass('absoluted');
          $('#to-pagetop').removeClass('fixed');
        } 
      });
    }
  });

  $(window).on('scroll', function() {
    if (720 < jQuery(this).scrollTop()) {
      $('#top1-head01').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (760 < jQuery(this).scrollTop()) {
      $('#top1-head02').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (780 < jQuery(this).scrollTop()) {
      $('#top1-head03').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (880 < jQuery(this).scrollTop()) {
      $('#top1-head04').addClass('effect');
    }
  });

  $(window).on('scroll', function() {
    if (1440 < jQuery(this).scrollTop()) {
      $('#top2-main01').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (1440 < jQuery(this).scrollTop()) {
      $('#top2-main02').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (1480 < jQuery(this).scrollTop()) {
      $('.top2-sub03').addClass('effect');
    }
  });
  $(window).on('scroll', function() {
    if (1640 < jQuery(this).scrollTop()) {
      $('#top2-btn04').addClass('effect');
    }
  });

  $(window).on('scroll', function() {
    if (2000 < jQuery(this).scrollTop()) {
      $('#top3-head01').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2060 < jQuery(this).scrollTop()) {
      $('#top3-head02').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2080 < jQuery(this).scrollTop()) {
      $('#top3-head03').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2200 < jQuery(this).scrollTop()) {
      $('#top3-head04').addClass('effect');
    }
  });

  $(window).on('scroll', function(){
    if (2540 < jQuery(this).scrollTop()) {
      $('#lineup-change01').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2540 < jQuery(this).scrollTop()) {
      $('#lineup-change02').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2640 < jQuery(this).scrollTop()) {
      $('#lineup-change03').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (2720 < jQuery(this).scrollTop()) {
      $('.lineup-change04').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (3200 < jQuery(this).scrollTop()){
      $('#lineup-list01').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3240 < jQuery(this).scrollTop()){
      $('#lineup-list02').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3280 < jQuery(this).scrollTop()){
      $('#lineup-list03').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3320 < jQuery(this).scrollTop()){
      $('#lineup-list04').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3600 < jQuery(this).scrollTop()){
      $('#lineup-list05').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3640 < jQuery(this).scrollTop()){
      $('#lineup-list06').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3680 < jQuery(this).scrollTop()){
      $('#lineup-list07').addClass('slideup');
    }
  });
  $(window).on('scroll', function(){
    if (3720 < jQuery(this).scrollTop()){
      $('#lineup-list08').addClass('slideup');
    }
  });

  $(window).on('scroll', function(){
    if (4240 < jQuery(this).scrollTop()) {
      $('#machine-change01').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (4240 < jQuery(this).scrollTop()) {
      $('#machine-change02').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (4280 < jQuery(this).scrollTop()) {
      $('#machine-change03').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (4340 < jQuery(this).scrollTop()) {
      $('.machine-change04').addClass('effect');
    }
  });

  $(window).on('scroll', function(){
    if (5400 < jQuery(this).scrollTop()) {
      $('.outline-change01').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (5560 < jQuery(this).scrollTop()) {
      $('.outline-change02').addClass('effect');
    }
  });
  $(window).on('scroll', function(){
    if (5720 < jQuery(this).scrollTop()) {
      $('#outline-change03').addClass('effect');
    }
  });

  jQuery(document).ready(function($) {
    // 480px以上の場合
    if (window.matchMedia('(min-width: 480px)').matches){
      $(window).on('scroll', function(){
        if (6500 < jQuery(this).scrollTop()) {
          $('#firm-list01').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6520 < jQuery(this).scrollTop()) {
          $('#firm-list02').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6540 < jQuery(this).scrollTop()) {
          $('#firm-list03').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6560 < jQuery(this).scrollTop()) {
          $('#firm-list04').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6700 < jQuery(this).scrollTop()) {
          $('#bnr01').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6720 < jQuery(this).scrollTop()) {
          $('#bnr02').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6740 < jQuery(this).scrollTop()) {
          $('#bnr03').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6760 < jQuery(this).scrollTop()) {
          $('#bnr04').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6780 < jQuery(this).scrollTop()) {
          $('#bnr05').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6780 < jQuery(this).scrollTop()) {
          $('#outline-notes').addClass('slideup');
        }
      });
    }
    // 480px以下の場合 
    else {
      $(window).on('scroll', function(){
        if (6500 < jQuery(this).scrollTop()) {
          $('#firm-list01').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (6800 < jQuery(this).scrollTop()) {
          $('#firm-list02').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (7200 < jQuery(this).scrollTop()) {
          $('#firm-list03').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (7500 < jQuery(this).scrollTop()) {
          $('#firm-list04').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8100 < jQuery(this).scrollTop()) {
          $('#bnr01').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8100 < jQuery(this).scrollTop()) {
          $('#bnr02').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8200 < jQuery(this).scrollTop()) {
          $('#bnr03').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8200 < jQuery(this).scrollTop()) {
          $('#bnr04').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8300 < jQuery(this).scrollTop()) {
          $('#bnr05').addClass('slideup');
        }
      });
      $(window).on('scroll', function(){
        if (8300 < jQuery(this).scrollTop()) {
          $('#outline-notes').addClass('slideup');
        }
      });
    }
  });

}