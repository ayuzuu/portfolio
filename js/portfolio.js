$(function () {
    smoothScroll()
    moveText()
    moveAos()
})

function smoothScroll() {
    $('a[href^="#profile"]').on('click', function () {
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


function moveText() {
    $('.movetext').each(function () {
        //一文字ずつ<span>で括る
        $(this).children().addBack().contents().each(function () {
            if (this.nodeType == 3) {
                $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
            }
        });

        //inviewを使って画面に表れたら起動させる
        $(this).on('inview', function () {
            //一文字ずつ順番に不透明させる
            $(this).css({ 'opacity': 1 });
            for (var i = 0; i <= $(this).children('span').length; i++) {
                $(this).children('span').eq(i).delay(100 * i).animate({ 'opacity': 1 }, 800);
            };
        });
    });
}

function moveAos() {
    AOS.init({
        delay: 100,
        duration: 1000,
        easing: 'easeOutExpo',
        once: true,
    });
}


