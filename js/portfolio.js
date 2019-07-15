

$(function(){
  smoothScroll();  
});

function smoothScroll(){
    $('a[href^="#"]').on('click', function(){
        // scroll speed
        var speed = 400;
        // get anchor-tag value
        var href = $(this).attr('href');
        // get target
        var target = $(href == '#' || href == '' ? 'html' : href);
        // get target position
        var position = target.offset().top;
        // smooth scroll
        $('body, html').animate({scrollTop:position}, speed, 'swing');
        // URLにハッシュを追記
        var scrollTargetId = target.attr("id");
        setTimeout(function(){
            location.hash = scrollTargetId;
            return false;
        },500);
        return false;
    });
}




// $(function() {
//   $('#index').on('inview', function(event, isInView){
//     if (isInView) {
//         $(this).addClass('fadeIn');
//     }else{
//     }
//   });
//   $('.contents02').on('inview', function(event, isInView){
//     if (isInView) {
//         $(this).addClass('fadeIn');
//     }else{
//     }
//   });
//   $('.balloon').on('inview', function(event, isInView){
//     if (isInView) {
//         $(this).addClass('fadeIn');
//     }else{
//     }
//   });
//   $('.profile-box').on('inview', function(event, isInView){
//     if (isInView) {
//         $(this).addClass('fadeIn slower');
//     }else{
//     }
//   });


// });

// $(function () {
//     $('#nav-menu li a').each(function () {
//         var $href = $(this).attr('href');
//         if (location.href.match($href)) {
//             $(this).addClass('active');
//         } else {
//             $(this).removeClass('active');
//         }
//     });
// });