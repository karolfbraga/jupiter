$(function() {

    'use strict';

    $('html').removeClass('no-js');

    flexslider();
    
    responsive();

    $(window).resize(responsive);

    var $btnNavTop = $('.btn-nav-top');

    $('body').on('click', '.btn-nav-top', function() {

        $($btnNavTop).toggleClass('click')
            
        $('.nav-top').toggleClass('ative');

    });

    if (typeof mqLg !== 'undefined' && mqLg.matches == false) {
        $('.nav-header').addClass('nav-mobile');
    }
});

function flexslider() {
    $('.banner').flexslider({
        animation: 'slide',
        animationLoop: true,
        controlNav: true,
        slideshow: true,
        prevText: '<i class="icon icon-arrow-right"></i>',
        nextText: '<i class="icon icon-arrow-left"></i>'
    });

    $('.testimonials').flexslider({
        animation: 'slide',
        animationLoop: true,
        controlNav: true,
        slideshow: true,
        prevText: '<i class="icon icon-arrow-right"></i>',
        nextText: '<i class="icon icon-arrow-left"></i>'
    });

    $('.modes').flexslider({
        animation: 'slide',
        animationLoop: true,
        directionNav: false,
        controlNav: true,
        slideshow: true
    });

}

function inputMasks() {
    $('input.tel').focus(function () {
        $(this).mask('(99) 9999-9999?9', {
            completed: function () {
                $(this).mask('(99) 99999-9999');
            }
        });
    });
    $('input.cep').mask('99999-999');
    $('input.cpf').mask('999.999.999-99');
    $('input.date').mask('99/99/9999');
}

function responsive() {
    $('[data-bg-sm],[data-bg-md],[data-bg-lg]').css('background-image', dataBackgroundImage);
    $('[data-img-src]').each(dataImgSrc);
}

function dataBackgroundImage() {
    var data;

    if ((typeof mqMd === 'undefined' || mqMd.matches) && typeof $(this).attr('data-bg-md') !== 'undefined') {
        data = $(this).attr('data-bg-md');
    }
    if ((typeof mqLg === 'undefined' || mqLg.matches) && typeof $(this).attr('data-bg-lg') !== 'undefined') {
        data = $(this).attr('data-bg-lg');
    }

    if (typeof $(this).attr('data-bg') !== 'undefined' && $('.lt-ie9').length > 0) {
        data = $(this).attr('data-bg');
    }

    if (typeof data !== 'undefined')
        return ['url(', data, ')'].join('');
    else return 'none';
}

function dataImgSrc() {
    var img_src = $(this).attr('data-img-src'),
		img_alt = $(this).text();

    $(this)
		.removeAttr('data-img-src')
		.append(['<img src="', img_src, '" alt="', img_alt, '"/>'].join(''));
}
