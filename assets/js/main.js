

// slick slider for home page banner section
$('.banner_slider_wrap').slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right-long"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left-long"></i></button>',
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 615,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});

// slick slider for home page popular slider
$('.popular_slider').slick({
    dots: true,
    customPaging: function (slider, i) {
        return '<i class="fa-solid fa-circle"></i>';
    },
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 486,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});


// slick slider for get in touch page 
$('.getIN_slider').slick({
    dots: true,
    customPaging: function (slider, i) {
        return '<i class="fa-solid fa-circle"></i>';
    },
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 486,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});

// slick slider for single item page  More popular collection
$('.more_collection_slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 486,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});


// slick slider for single item page  More popular collection
$('.live_auction_item_slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1154,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 874,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 608,
            settings: {
                slidesToShow: 1
            }
        },
    ]

});


// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
        $('.header_sticky').addClass('fixed_menu');
    } else {
        $('.header_sticky').removeClass('fixed_menu');
    }
});


// home page 2 hero section counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//venobox (video open) 
$(document).ready(function () {
    $('.venobox').venobox();
});

// mixitup for discover product
var containers = document.querySelector('[data-ref="containers"]');
var filterCollection = document.querySelector('[data-ref="select-collection"]');
var keyupTimeout;
var mixer = mixitup(containers, {
    selectors: {
        target: '[data-ref~="target"]'
    }
});

