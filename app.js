$(document).ready(function() {
    $('.menu ul li a').each(function() {
        $(this).click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    });
});