// sticky button


$(window).scroll(function () {

    if($(document).scrollTop() >= ($('.first-section').position().top-100)) {
        $('.button-po:not(.isSticky)').css({ visibility: 'hidden'});
        $('.button-po.isSticky').css({ visibility: 'visible'});
    } else {
        $('.button-po:not(.isSticky)').css({ visibility: 'visible'});
        $('.button-po.isSticky').css({ visibility: 'hidden'});
    }

    $(document).on('scroll', function() {
        if($(document).scrollTop() >= ($('.first-section').position().top-100)) {
            $('.button-po:not(.isSticky)').css({ visibility: 'hidden'});
            $('.button-po.isSticky').css({ visibility: 'visible'});
        } else {
            $('.button-po:not(.isSticky)').css({ visibility: 'visible'});
            $('.button-po.isSticky').css({ visibility: 'hidden'});
        }

    });
});
