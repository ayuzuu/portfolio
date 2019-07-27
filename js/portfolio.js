$(function () {
    smoothScroll()
})

function smoothScroll() {
    $('a[href^="#menu-top"]').on('click', function () {
        // scroll speed
        var speed = 400;
        // get anchor-tag value
        var href = $(this).attr('href');
        // get target
        var target = $(href == '#' || href == '' ? 'html' : href);
        // get target position
        var position = target.offset().top;
        // smooth scroll
        $('body, html').animate({ scrollTop: position }, speed, 'swing');
        // URLにハッシュを追記
        var scrollTargetId = target.attr("id");
        setTimeout(function () {
            location.hash = scrollTargetId;
            return false;
        }, 500);
        return false;
    });
}


