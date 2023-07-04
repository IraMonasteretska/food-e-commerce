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

    $('.closefilter').click(function(){
        $('body').removeClass('hidden');
        $('.categorysect__body .categorysect__filter').removeClass('show');
    });























    // range slider

    // // maps a value from one range to another
    // Number.prototype.map = function (inMin, inMax, outMin, outMax) {
    //     return (this - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    // }

    // // remaps a value from a range to a logarithmic scale
    // Number.prototype.mapLog = function (min, max) {
    //     const mapped = (this - min) * (Math.log(max) - Math.log(min)) / (max - min) + Math.log(min);
    //     return Math.exp(mapped);
    // }

    // // remaps a value from a range to a logarithmic scale (reversed)
    // Number.prototype.mapLogRev = function (min, max) {
    //     return (Math.log(this) - Math.log(min)) * (max - min) / (Math.log(max) - Math.log(min)) + Math.log(min);
    //     //return (Math.log(this) - Math.log(min)) / (Math.log(max) - Math.log(min)) / (max - min) + min;
    // }

    // // -------------------------------------------
    // // Variables
    // // -------------------------------------------

    // let MIN = 1;
    // let MAX = 200;
    // let initFrom = 1;
    // let initTo = 200;

    // const $logSlider = $('.range-slider');
    // const $inputMin = $('.input-min');
    // const $inputMax = $('.input-max');
    // const $inputFrom = $('.input-from');
    // const $inputTo = $('.input-to');

    // // -------------------------------------------
    // // Initializing
    // // -------------------------------------------

    // // min
    // $inputMin.attr('placeholder', `min $${MIN.toLocaleString()}`);
    // $inputMin.attr('data-value', MIN);

    // // max
    // $inputMax.attr('placeholder', `max $${MAX.toLocaleString()}`);
    // $inputMax.attr('data-value', MAX);

    // // from
    // $inputFrom.attr('placeholder', `from $${initFrom.toLocaleString()}`);
    // $inputFrom.attr('data-value', initFrom);
    // $inputFrom.attr('min', MIN);
    // $inputFrom.attr('max', MAX);

    // // to
    // $inputTo.attr('placeholder', `to $${initTo.toLocaleString()}`);
    // $inputTo.attr('data-value', initTo);
    // $inputTo.attr('min', MIN);
    // $inputTo.attr('max', MAX);

    // // slider
    // $logSlider.ionRangeSlider({
    //     type: 'double',
    //     grid: false,
    //     min: mapLogarithmicReverse(MIN),
    //     max: mapLogarithmicReverse(MAX),
    //     from: mapLogarithmicReverse(initFrom),
    //     to: mapLogarithmicReverse(initTo),
    //     prettify: prettifyLog,
    //     prefix: '$',
    //     postfix: '',
    //     onStart: printSliderData,
    //     onChange: printSliderData,
    //     onUpdate: printSliderData
    // });


    // // -------------------------------------------
    // // Helper functions
    // // -------------------------------------------

    // function mapLogarithmic(value) {
    //     return Math.ceil(value.mapLog(MIN, MAX));
    // }

    // function mapLogarithmicReverse(value) {
    //     return parseFloat(value).mapLogRev(MIN, MAX);
    // }

    // function prettifyLog(value) {
    //     return mapLogarithmic(value).toLocaleString('en-US');
    // }

    // // -------------------------------------------
    // // Event Handler
    // // -------------------------------------------

    // // slider
    // function printSliderData() {
    //     const prettyFrom = mapLogarithmic($logSlider.data('from'));
    //     const prettyTo = mapLogarithmic($logSlider.data('to'));

    //     $('.output-from').text(prettyFrom);
    //     $('.output-to').text(prettyTo);
    // }








    // number inputs
    // $('.number-input').on('focus', e => {
    //     const currentTarget = e.currentTarget;
    //     currentTarget.value = currentTarget.dataset.value;
    // });

    // $('.number-input').on('change', e => {
    //     const min = $inputMin.val() || $inputMin.attr('data-value');
    //     const max = $inputMax.val() || $inputMax.attr('data-value');
    //     const from = $inputFrom.val() || $inputFrom.attr('data-value');
    //     const to = $inputTo.val() || $inputTo.attr('data-value');

    //     $logSlider.data('ionRangeSlider').update({
    //         min: mapLogarithmicReverse(min),
    //         max: mapLogarithmicReverse(max),
    //         from: mapLogarithmicReverse(from),
    //         to: mapLogarithmicReverse(to)
    //     });
    // });

    // $('.number-input').on('blur', e => {
    //     const currentTarget = e.currentTarget;
    //     const prefix = currentTarget.dataset.prefix;
    //     const localizedValue = Math.trunc(currentTarget.value).toLocaleString();

    //     currentTarget.placeholder = `${prefix} $${localizedValue}`;
    //     currentTarget.dataset.value = currentTarget.value;
    //     currentTarget.value = '';
    // });







});