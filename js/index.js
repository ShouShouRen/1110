$(document).ready(function () {
    $('nav').find('a').click(function () {
        let target = $(this).data('target');
        let o = $(target).offset().top - 86;
        $('html,body').animate({
            scrollTop: o
        }, 300);
    })
})