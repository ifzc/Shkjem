function Hover(obj, calssName) {
    obj.hover(function () {
        $(this).addClass(calssName);
    }, function () {
        $(this).removeClass(calssName);
    })
}

$(function () {
    var nav = $(".head-nav");
    var sc = $(document);

    function fixed() {
        if (sc.scrollTop() >= 180) {
            nav.addClass('fixednav ani-view fadeInUp')
        } else {
            nav.removeClass('fixednav ani-view fadeInUp')
        }
    }
    fixed()
    $(window).scroll(function () {
        fixed()
        var _ismobile = false;
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height();
        var showNum = !_ismobile ? 4 : 16;
        $('.ani-view').each(function () {
            var pageQ1 = $(this).offset().top + $(this).height() / showNum;
            var pageQ3 = $(this).offset().top + $(this).height() / 1;
            if ((pageQ1 <= windowBottom) && (pageQ3 >= windowTop)) {
                if ($(this).hasClass("fade-in-up")) $(this).addClass('fadeInUp');
                if ($(this).hasClass("fade-in-down")) $(this).addClass('fadeInDown');
                if ($(this).hasClass("fade-in-left")) $(this).addClass('fadeInLeft');
                if ($(this).hasClass("fade-in-right")) $(this).addClass('fadeInRight');
                if ($(this).hasClass("fade-in-box")) $(this).addClass('fadeInBox');
            } else {
                // if( $(this).hasClass('fadeInDown') ) $(this).removeClass(' fadeInDown');
                // if( $(this).hasClass('fadeInLeft') ) $(this).removeClass('fadeInLeft');
                // if( $(this).hasClass('fadeInRight') ) $(this).removeClass(' fadeInRight');
                if ($(this).hasClass('fadeInBox')) $(this).removeClass('ani-view fade-in-box fadeInBox');
                if ($(this).hasClass('fadeInDown')) $(this).removeClass('ani-view fade-in-down fadeInDown');
                if ($(this).hasClass('fadeInLeft')) $(this).removeClass('ani-view fade-in-left fadeInLeft');
                if ($(this).hasClass('fadeInRight')) $(this).removeClass('ani-view fade-in-right fadeInRight');
            }
        });
    });
})