$(document).ready(function () {

  // SCROLL TO CHANGE NAV BACKGROUND
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 570) {
      $("nav").css({
        'background-color': '#4caf50',
        'border-bottom': '0.5px solid #000'
      });
    }
    else {
      $("nav").css({
        'background-color': 'transparent',
        'transition': '0.7s',
        'border-bottom': 'none'

      });
    }
  });

  // CLICK TO REDIRECT TO URL

  // INSTAGRAM
  $("._insta").click(function (e) {

    e.preventDefault();
    window.open('https://www.instagram.com/vineeth_pai/');

  });

  // GITHUB REPO
  $("._git").click(function (e) {

    e.preventDefault();
    window.open('https://github.com/vinipai45?tab=repositories');

  });

  //TWITTER
  $("._tweet").click(function (e) {

    e.preventDefault();
    window.open('https://twitter.com/vinipai45');

  });

  //FACEBOOK
  $("._fb").click(function (e) {

    e.preventDefault();
    window.open('https://www.facebook.com/vineeth.pai.79');

  });

  






});