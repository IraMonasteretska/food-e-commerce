$(document).ready(function () {
    // HEADER================================================
    // header select
    $('.customselect').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: "headerselectdropdown"
    });

    // header acc dropdown
    $('.header__account').click(function () {
        $(this).toggleClass('active');
        $(this).next('.header__accdropdown').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.headeraccwrap').length) {
            $('.header__account').removeClass('active');
            $('.header__accdropdown').hide();
        }
    });

    // Header cart dropdown - show/hide
    $('.header__cart').click(function () {
        $('.header__cartdropdown').toggle();
    });
    $('.closecart').click(function () {
        $('.header__cartdropdown').hide();
    })
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.headercartwrap').length) {
            $('.header__cartdropdown').hide();
        }
    });

    // Header cart dropdown +-
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // MAIN================================================

    // main slider

    var swiper = new Swiper(".mainslider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl1",
            prevEl: ".swiper-button-prev.custom.sl1",
        },
    });

    // products slider

    var swiper2 = new Swiper(".productsection-slider.ps1", {
        slidesPerView: 4,
        spaceBetween: 36,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl2",
            prevEl: ".swiper-button-prev.custom.sl2",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 4,
                spaceBetween: 36,
            },
        },
    });

    // product box - show +-
    $('.addtocart').click(function () {
        $(this).parent('.prodcount').addClass('show');

    });

    var swiper3 = new Swiper(".productsection-slider.ps2", {
        slidesPerView: 4,
        spaceBetween: 36,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl3",
            prevEl: ".swiper-button-prev.custom.sl3",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 4,
                spaceBetween: 36,
            },
        },
    });

    var swiper4 = new Swiper(".recipes-slider", {
        slidesPerView: 3,
        spaceBetween: 35,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl4",
            prevEl: ".swiper-button-prev.custom.sl4",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
    });

    var swiper5 = new Swiper(".discuss-slider", {
        slidesPerView: 3,
        spaceBetween: 35,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl5",
            prevEl: ".swiper-button-prev.custom.sl5",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
    });

    // mob search
    $('.mobsearchbtn').click(function () {
        $('.header__searchbox').toggleClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.mobsearchbtn').length && !$target.closest('.header__searchbox').length) {
            $('.header__searchbox').removeClass('show');
        }
    });

    // Contact Us - faq

    $('.faqsect__rowheader').click(function () {
        $(this).toggleClass('open');
        $(this).next('.faqsect__rowbody').slideToggle();
    });

    // input password 

    $('.passeye').click(function () {
        $(this).toggleClass('showpass');

        var input = $(this).parent('.inputfield').find('.passinput');
        var type = input.attr('type');

        if (type === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }
    });

    // Category page
    // toggle blocks
    $('.filter__toogleblock-head').click(function () {
        $(this).toggleClass('rotatearr')
        $(this).next('.filter__toogleblock-body').slideToggle();
    });

    // show checkboxes
    $('.showall').click(function (e) {
        e.preventDefault();
        $(this).find('span').toggle();
        $(this).prev('.filter__checksect').toggleClass('show');
    });

    // range slider init

    if ($('#rangeslider').length) {
        $("#rangeslider").ionRangeSlider({
            type: 'double',
            min: 0,
            max: 200,
            from: 0,
            to: 200,
            prefix: '$ '
        });
    }

    // Catalog filter (tablet/mobile)

    $('.filterbtn').click(function () {
        $('body').addClass('hidden');
        $('.categorysect__body .categorysect__filter').addClass('show');
    });

    $('.closefilter').click(function () {
        $('body').removeClass('hidden');
        $('.categorysect__body .categorysect__filter').removeClass('show');
    });

    // PRODUCT PAGE
    // slider
    var swiper = new Swiper(".prodsmall", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,

        breakpoints: {
            
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1500: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
        },
    });
    var swiper2 = new Swiper(".prodbig", {
        loop: true,
        spaceBetween: 50,
        thumbs: {
            swiper: swiper,
        },
    });


    if ($('.example').length) {
        $(function () {
            $(".example").imagezoomsl();
        });
    }

    var swiper6 = new Swiper(".productsection-slider.ps3", {
        slidesPerView: 5,
        // spaceBetween: 19,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl2",
            prevEl: ".swiper-button-prev.custom.sl2",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1550: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        },
    });

    // accordeon
    $('.accordeonsect_header').click(function () {
        $(this).toggleClass('open');
        $(this).next('.accordeonsect__body').slideToggle();
    });

    // gallery
    Fancybox.bind("[data-fancybox]", {
        // Custom options for all galleries
    });




});