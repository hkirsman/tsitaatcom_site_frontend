(function ($) {
  $loginLink = $('#block-system-user-menu .login a');
  $blockLogin = $('#block-user-login');

  $loginLink.click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    if ($blockLogin.hasClass('active')) {
      closeLoginPopup(this);
    }
    else {
      openLoginPopup(this);
    }
  })

  $('body').click(function() {
    $blockLogin.fadeOut(50);
  });

  $blockLogin.click(function(e) {
    e.stopPropagation();
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) { $blockLogin.fadeOut(50); }
  });

  var openLoginPopup = function(that) {
    $blockLogin.fadeIn(50);
    $(that).addClass('active');
  }

  var closeLoginPopup = function(that) {
    $blockLogin.fadeOut(50);
    $(that).removeClass('active');
  }

})(jQuery);
