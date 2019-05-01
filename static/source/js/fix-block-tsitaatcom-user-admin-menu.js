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
