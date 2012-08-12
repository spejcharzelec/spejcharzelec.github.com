(function ($) {
    $(".small-photo.opens-content").bind('click', function() {
        $(this).siblings('.hide').slideToggle();
        return false;
    });
})(jQuery);
