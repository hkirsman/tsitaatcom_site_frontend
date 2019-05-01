/**
 * Hack to add active-trail class.
 */
(function ($) {
  $blockTsitaatcomUserAdminMenu = $('#block-menu-block-1');
  $subItemActive = $blockTsitaatcomUserAdminMenu.find('.menu .menu li.active');
  if ($subItemActive.length) {
    // $subItemActive.parent().closest('li').addClass('active-trail').find('> a').addClass('active-trail');
    var level1 = $subItemActive.parent().closest('li').addClass('active-trail').find('> a').addClass('active-trail')
    while(level1.parent().closest('li').length) {
      level1 = level1.parent().closest('li');
      level1.addClass('active-trail').find('> a').addClass('active-trail')
    }
    $blockTsitaatcomUserAdminMenu.addClass('subitems-are-active');
  }
})(jQuery);

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

/*
(function ($) {
 //...
})(jQuery);
*/