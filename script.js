let flag = false; 
$('.menu-burger').click(function () {
    if(!flag) {
        $('.menu__burder-home').slideDown();
    }else {
        $('.menu__burder-home').slideUp();
    }
    flag = !flag;
});