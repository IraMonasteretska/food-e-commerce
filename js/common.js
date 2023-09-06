$(document).ready(function () {
    // HEADER================================================
    // header select
    if ($('.customselect').length) {
        $('.customselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }


    // header acc dropdown
    $('.header__account').click(function () {
        $(this).toggleClass('active');
        $(this).next('.header__accdropdown').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.headeraccwrap').length && !$target.closest('.sellacc__brandnamehead').length && !$target.closest('.header__accdropdown').length) {
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
            320: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            576: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
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


    if ($(window).width() > 991) {
        if ($('.example').length) {
            $(function () {
                $(".example").imagezoomsl();
            });
        }
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
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {
            // Custom options for all galleries
        });
    }

    // Upload photo

    if ($('.uploadphoto').length) {
        $('input[type="file"]').imageuploadify();
    }

    // popups

    $('.popup__btn').on('click', function (e) {
        $('body').addClass('offscroll');

        e.preventDefault;
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });

    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
        $('body').removeClass('offscroll');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.popup__body').length) {
            $('.popup__window').removeClass('active');
            $('body').removeClass('offscroll');
        }
    });

    // add shipping
    $('.addshipping').click(function (e) {
        e.preventDefault();
        $('.addshipping-text').addClass('edit');
        $('.addshipping-text').focus();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.addshipping').length && !$target.closest('.addshipping-text').length) {
            $('.addshipping-text').removeClass('edit');
        }
    });

    // add card
    $('.addcard').click(function (e) {
        e.preventDefault();
        $('.paymethod').addClass('hide');
        $('.paymentform').removeClass('hide');
    })

    // Recipes --------------------------------------------------------
    var swiper4 = new Swiper(".recipes-vslider", {
        slidesPerView: 3,
        spaceBetween: 35,
        // loop: true,

        navigation: {
            nextEl: ".swiper-button-next.custom.slv",
            prevEl: ".swiper-button-prev.custom.slv",
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

    // printlink
    $('.printlink').click(function () {
        window.print();
    });


    // VIDEO
    // const player = new Plyr('#player');
    if ($('.js-player').length) {
        const players = Plyr.setup('.js-player');
    }


    $('.videopopup .popup__close').click(function () {
        player.pause();
    });

    // $('.addingr').on('click', function () {


    //     const newIngrinp = $('<div class="ingrinp"><textarea class="auto-resize-textarea"></textarea></div>');

    //     $(this).parent('.addingredients').find('.ingrwrap').append(newIngrinp);

    //     newIngrinp.find('textarea').focus();

    // });


    //   POST
    //   upload photo

    $('#chooseFile').bind('change', function () {
        var filename = $("#chooseFile").val();
        if (/^\s*$/.test(filename)) {
            $(".file-upload").removeClass('active');
            $("#noFile").text("No file chosen...");
        }
        else {
            $(".file-upload").addClass('active');
            $("#noFile").text(filename.replace("C:\\fakepath\\", ""));
        }
    });

    // text editor




    if ($('#editor').length) {
        CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
            toolbar: {
                items: [
                    // 'exportPDF','exportWord', '|',
                    // 'findAndReplace', 
                    // 'selectAll', '|',
                    'heading', '|',
                    'bold', 'italic', 'strikethrough', 'underline',
                    // 'code', 'subscript', 'superscript', 'removeFormat', '|',
                    'bulletedList', 'numberedList',
                    // 'todoList', '|',
                    // 'outdent', 'indent', '|',
                    // 'undo', 'redo',
                    // '-',
                    // 'fontSize', 'fontFamily', 'fontColor', 
                    // 'fontBackgroundColor', 
                    // 'highlight', '|',
                    'alignment', '|',
                    'link', 'insertImage', 'blockQuote',
                    // 'insertTable',
                    'mediaEmbed',
                    //   'codeBlock', 
                    // 'htmlEmbed', '|',
                    // 'specialCharacters', 'horizontalLine', 'pageBreak', '|',
                    // 'textPartLanguage', '|',
                    // 'sourceEditing'
                ],
                shouldNotGroupWhenFull: true
            },
            // Changing the language of the interface requires loading the language file using the <script> tag.
            // language: 'es',
            list: {
                properties: {
                    styles: true,
                    startIndex: true,
                    reversed: true
                }
            },
            heading: {
                options: [
                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                    { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                    { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                    { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                    { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                    { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                    { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
                ]
            },
            placeholder: 'Add a text description...',
            fontFamily: {
                options: [
                    'default',
                    'Arial, Helvetica, sans-serif',
                    'Courier New, Courier, monospace',
                    'Georgia, serif',
                    'Lucida Sans Unicode, Lucida Grande, sans-serif',
                    'Tahoma, Geneva, sans-serif',
                    'Times New Roman, Times, serif',
                    'Trebuchet MS, Helvetica, sans-serif',
                    'Verdana, Geneva, sans-serif'
                ],
                supportAllValues: true
            },
            fontSize: {
                options: [10, 12, 14, 'default', 18, 20, 22],
                supportAllValues: true
            },
            htmlSupport: {
                allow: [
                    {
                        name: /.*/,
                        attributes: true,
                        classes: true,
                        styles: true
                    }
                ]
            },
            htmlEmbed: {
                showPreviews: true
            },
            link: {
                decorators: {
                    addTargetToExternalLinks: true,
                    defaultProtocol: 'https://',
                    toggleDownloadable: {
                        mode: 'manual',
                        label: 'Downloadable',
                        attributes: {
                            download: 'file'
                        }
                    }
                }
            },
            mention: {
                feeds: [
                    {
                        marker: '@',
                        feed: [
                            '@apple', '@bears', '@brownie', '@cake', '@cake', '@candy', '@canes', '@chocolate', '@cookie', '@cotton', '@cream',
                            '@cupcake', '@danish', '@donut', '@dragée', '@fruitcake', '@gingerbread', '@gummi', '@ice', '@jelly-o',
                            '@liquorice', '@macaroon', '@marzipan', '@oat', '@pie', '@plum', '@pudding', '@sesame', '@snaps', '@soufflé',
                            '@sugar', '@sweet', '@topping', '@wafer'
                        ],
                        minimumCharacters: 1
                    }
                ]
            },
            removePlugins: [
                // 'ExportPdf',
                // 'ExportWord',
                'CKBox',
                'CKFinder',
                'EasyImage',
                // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
                // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
                // Storing images as Base64 is usually a very bad idea.
                // Replace it on production website with other solutions:
                // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
                // 'Base64UploadAdapter',
                'RealTimeCollaborativeComments',
                'RealTimeCollaborativeTrackChanges',
                'RealTimeCollaborativeRevisionHistory',
                'PresenceList',
                'Comments',
                'TrackChanges',
                'TrackChangesData',
                'RevisionHistory',
                'Pagination',
                'WProofreader',
                // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
                // from a local file system (file://) - load this site via HTTP server if you enable MathType
                'MathType'
            ]
        });

    }

    // Account edit personal info
    $('.personalinfobox__right a').click(function (e) {
        e.preventDefault();
        $(this).parents('.personalinfobox').find('input').addClass('edit');

        var input = $(this).parents('.personalinfobox').find('input');
        input.focus();

        var val = input.val();
        var length = val.length;

        input[0].setSelectionRange(length, length);
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.personalinfobox__right a').length && !$target.closest('.personalinfobox__left input').length) {
            $('.personalinfobox input').removeClass('edit');
        }
    });


    // toggle accsect
    $('.togglebtn').click(function () {
        $(this).toggleClass('rotate');
        $(this).parents('.acccontentsect__header').next('.acccontentsect__body').slideToggle();
    })

    // sidebar
    $('.aside-menubtn').click(function () {
        $('.accountsidebar').addClass('open');
    });

    $('.closesidebar').click(function () {
        $('.accountsidebar').removeClass('open');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.aside-menubtn').length && !$target.closest('.accountsidebar__wrap').length) {
            $('.accountsidebar').removeClass('open');
        }
    });

    // Edit cards - set billing
    $('.selectbilling .setdefault').click(function () {
        $('.addressinfobox').removeClass('active');
        $(this).parents('.addressinfobox').addClass('active');
    })

    // my acc - my posted reviews
    // tabs
    $('.tabbtn').click(function (e) {
        e.preventDefault();
        $('.tabbtn').removeClass('active');
        $(this).addClass('active');

        var tabId = $(this).data('tab');
        $('.tabcontent').removeClass('show');
        $('#' + tabId).addClass('show');


    });

    // edit btn
    $('.postedreview__edit').click(function (e) {
        e.preventDefault();
        $(this).parents('.postedreviewbox__right').addClass('edit');
    });

    // seller registration
    // verification code
    const inputsNL = document.querySelectorAll('.number_input');

    const inputsList = Array.prototype.slice.call(inputsNL);

    inputsList.forEach((input, index) => {
        input.addEventListener('keyup', function (ev) {
            if (ev.which === 69) return input.value = '';
            let value = input.value;
            let len = value.length;
            if (ev.which === 8 && inputsList[index - 1]) {
                return inputsList[index - 1].focus();
            }
            if (len === 1) {
                input.value = value.substr(0, 1);
                if (inputsList[index + 1]) inputsList[index + 1].focus();
            } else if (inputsList[index + 1] && ev.which != 8) {
                input.value = value.substr(0, 1);
                inputsList[index + 1].focus();
                inputsList[index + 1].value = value.substr(1, 1);
            } else if (len > 1 && !inputsList[index + 1]) {
                input.value = value.substr(0, 1);
            }
        })
    })

    // cart page - select all

    $('.hselall').click(function () {
        $('.cart__product-check input').prop('checked', true);
    });



    // SELLER ACCOUNT
    // header dropdown
    $('.sellacc__brandnamehead').click(function () {
        $('.header__accdropdown').toggle();
    });

    // sidebar dropdowns
    $('.dropdownli a').click(function (e) {
        e.preventDefault();
        $(this).next('.sellacc__sublist').slideToggle();
    });


    // edit date

    $('.editdate').click(function () {
        var spanElement = $(this).closest('.date').find('span');
        spanElement.attr('contenteditable', 'true');
        spanElement.focus();

        var textNode = spanElement[0].childNodes[0];

        var range = document.createRange();
        range.setStart(textNode, textNode.length); // Встановлюємо курсор вкінці тексту
        range.collapse(true);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.date span').length && !$target.closest('.editdate').length) {
            $('.date span').attr('contenteditable', 'false')
        }
    });

    $('#selectall').click(function () {
        if ($(this).prop('checked')) {
            $('tbody .tablecheckbox input').prop('checked', true);
        } else {
            $('tbody .tablecheckbox input').prop('checked', false);
        }
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Seller acc - delete items

    $('.actionsbox__btn').click(function () {
        $(this).toggleClass('active')
        $(this).next('.actionsbox__dropdown').toggle();
    });


    // Coupon code edit
    $('.coupon .code').click(function () {
        var spanElement = $(this).closest('.coupon .code').find('span');
        spanElement.attr('contenteditable', 'true');
        spanElement.focus();

        var textNode = spanElement[0].childNodes[0];

        var range = document.createRange();
        range.setStart(textNode, textNode.length); // Встановлюємо курсор вкінці тексту
        range.collapse(true);

        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.coupon .code span').length && !$target.closest('.editcouponcode button').length) {
            $('.coupon .code span').attr('contenteditable', 'false')
        }
    });


    // create recipes - textarea height

    $('.addingr').on('click', function () {
        const newIngrinp = $('<div class="ingrinp"><p class="editcontent" contenteditable="true"></p></div>');
        $(this).parent('.addingredients').find('.ingrwrap').append(newIngrinp);
        newIngrinp.find('.editcontent').focus();
    });



    // ADMIN pages
    // sidebar
    $('.adminmenu').click(function () {
        $('.adminpage').toggleClass('hidemenu');
        $('.adsidebarlist .subitem a').next('.sublist').hide();
    });


    $('.adsidebarlist .subitem a').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('open');
        $(this).next('.sublist').slideToggle();
    });

    $('.admincontent__user span').click(function () {
        $('.admincontent__userdd').toggle();
    });
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.admincontent__user span').length && !$target.closest('.admincontent__userdd').length) {
            $('.admincontent__userdd').hide();
        }
    });

    // action dropdown
    $('.admaction__btn').click(function () {
        $(this).toggleClass('open');
        $(this).next('.admaction__dropdown').toggle();
    });


    $('.switchpage__btn').click(function () {
        $(this).next('ul').toggle();
    });

    // admin notification

    $('.notification').click(function(){
        $('.notification__dropdown').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.notification').length && !$target.closest('.notification__dropdown').length) {
            $('.notification__dropdown').hide();
        }
    });
    



});







