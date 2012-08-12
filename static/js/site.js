(function ($) {
    $(".small-photo.opens-content").bind('click', function() {
        $(this).siblings('.hide').slideToggle();
        return false;
    });
    
    var lightbox_images_root = '/static/js/lib/jquery-lightbox/';
    var lightbox_settings = {
        imageLoading: lightbox_images_root + 'images/lightbox-ico-loading.gif',
        imageBtnPrev: lightbox_images_root + 'images/lightbox-btn-prev.gif',
        imageBtnNext: lightbox_images_root + 'images/lightbox-btn-next.gif',
        imageBtnClose: lightbox_images_root + 'images/lightbox-btn-close.gif',
        imageBlank: lightbox_images_root + 'images/lightbox-blank.gif'
    };
    $("ul.photo-list").each(function() {
        $("a.lightbox", this).lightBox(lightbox_settings);
    });
})(jQuery);
