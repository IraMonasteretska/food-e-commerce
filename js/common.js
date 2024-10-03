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
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next.custom.sl1",
            prevEl: ".swiper-button-prev.custom.sl1",
        },
    });

    // products slider

    var swiper2 = new Swiper(".productsection-slider.ps1", {
        slidesPerView: 4,
        spaceBetween: 36,

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

    // Recipes --------------------------------
    var swiper4 = new Swiper(".recipes-vslider", {
        slidesPerView: 3,
        spaceBetween: 35,
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
    $('.dropdownli > a').click(function (e) {
        e.preventDefault();
        $(this).next('ul').slideToggle();
        $(this).toggleClass('open');
    });

    $('.sellacc__sublink').click(function (e) {
        e.preventDefault();
        console.log('sdsd')
        $(this).next('ul').slideToggle();
    })






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

    if ($(window).width() < 768) {
        $(document).click(function (event) {
            let $target = $(event.target);
            if (!$target.closest('.adminmenu').length && !$target.closest('.asminsidebar__body').length) {
                $('.adminpage').removeClass('hidemenu');
            }
        });
    }

    $('.adsidebarlist .subitem > a').click(function (e) {
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

    $('.notification').click(function () {
        $('.notification__dropdown').toggle();
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.notification').length && !$target.closest('.notification__dropdown').length) {
            $('.notification__dropdown').hide();
        }
    });

    // datepicker
    if ($('input[name="u-daterange"]').length) {
        $(function () {

            $('input[name="u-daterange"]').daterangepicker({
                "autoApply": true,
                "opens": "center"
            });

            $('.daterangepicker').addClass('u-daterangepicker');

        });

    }

    // Chart
    if ($('#myChart').length) {
        //   chart
        // Дані для графіка
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var values = [
            [700, 900, 1500, 300, 700, 900, 1500, 300, 700, 900, 1500, 300], // group 1
            [750, 850, 1400, 500, 700, 900, 1500, 300, 700, 900, 1500, 300], // group 2 
        ];

        // Отримати посилання на контейнер графіка
        var ctx = document.getElementById('myChart').getContext('2d');

        // Створити графік
        var myChart = new Chart(ctx, {
            type: 'bar',
            // maintainAspectRatio: false,
            data: {
                labels: months, //  X 
                datasets: [{
                    label: 'label 1',
                    data: values[0],
                    backgroundColor: 'rgba(19, 176, 134, 1)', // Колір стовпців
                    borderColor: 'rgba(19, 176, 134, 1)', // Колір межі стовпців
                    borderWidth: 1, // Товщина межі стовпців
                    borderRadius: 10,
                    // barThickness: 8,
                },
                {
                    label: 'label 2', // Підпис для групи 2 (при бажанні, додайте ще групи)
                    data: values[1], // Дані для групи 2
                    backgroundColor: 'rgba(23, 157, 121, 0.30)', // Колір стовпців для групи 2
                    borderColor: 'rgba(23, 157, 121, 0.30)', // Колір межі стовпців для групи 2
                    borderWidth: 1,
                    borderRadius: 10,
                    // barThickness: 8,
                }]
            },
            options: {
                barPercentage: 0.6,
                categoryPercentage: 0.7,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value, index, values) {
                                return '$' + value; // Додаємо знак долару перед числом
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }
        });


        window.addEventListener('resize', function () {
            myChart.resize(); // Оновлюємо графік при зміні розмірів вікна браузера
        });

    }

    // DONUT CHART
    if ($('#donutChart').length) {

        // Отримайте контекст для вашого canvas
        var ctx = document.getElementById('donutChart').getContext('2d');

        // Ваші дані для діаграми
        var data = {
            labels: ['Order Completed', 'Order Pending', 'Order Unpaid', 'Order Canceled', 'Order Returned', 'Order Broken'],
            datasets: [{
                data: [25, 10, 15, 20, 5, 8], // Значення для кожної категорії
                backgroundColor: ['#13B086', '#1378B0', '#158466', '#FF810D', '#AED76C', '#C9273A'], // Кольори секторів
                borderWidth: 5,

            }],
        };

        // Створення і відображення діаграми
        var myDonutChart = new Chart(ctx, {
            type: 'doughnut', // Вказуємо тип діаграми
            data: data,
            options: {
                cutout: '80%',
                plugins: {
                    legend: {
                        display: false,
                        // position: 'bottom',
                        labels: {
                            font: {
                                size: 16,
                            }
                        }
                    }

                }
            }
        });


    }

    // Pauments dashboard
    $('.ps-amount img').click(function () {
        $(this).parents('.paymentssection__bodysect').toggleClass('active');
    });

    if ($('.datatable').length) {
        $('#example').DataTable({
            columnDefs: [
                { targets: [0], orderable: false }
            ],
            "language": {
                "search": "",
                searchPlaceholder: "Search on Food...",
                sLengthMenu: " _MENU_"
            },
            "drawCallback": function (settings) {
                var info = $(this).DataTable().page.info();
                $('.dataTables_info').text('');
            }
        });
    }










    // UPDATE 

    $('.selectcheck__choose').click(function () {
        $(this).toggleClass('open');
        $(this).next('.selectcheck__list').toggle()
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.selectcheck__choose').length && !$target.closest('.selectcheck__list').length) {
            $('.selectcheck__list').hide()
            $('.selectcheck__choose').removeClass('open');
        }
    });

    // selected rec
    var spans = document.querySelectorAll('li > p > span');

    spans.forEach(function (span) {
        span.addEventListener('mouseover', function () {
            var ul = this.closest('li').querySelector('ul.recipe-infopanel__prlist');
            if (ul) {
                ul.style.display = 'block';
            }
        });

        span.addEventListener('mouseout', function () {
            var ul = this.closest('li').querySelector('ul.recipe-infopanel__prlist');
            if (ul) {
                ul.style.display = 'none';
            }
        });
    });

    // template editor

    if ($('#temaplateeditor').length) {
        CKEDITOR.ClassicEditor.create(document.getElementById("temaplateeditor"), {
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
                    // 'mediaEmbed',
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
            placeholder: 'Add body text',
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


    // add new faq question
    if ($('.faqquestions').length) {
        var addBtn = document.querySelector('.faqquestions .addbtn');
        var addqboxes = document.querySelector('.faqquestions .addqboxes');

        addBtn.addEventListener('click', function () {

            var newAddqbox = document.createElement('div');
            newAddqbox.classList.add('addqbox');

            newAddqbox.innerHTML = `
        <div class="row">
            <div class="col-xl-8">
                <div class="inputfield">
                    <input type="text" placeholder="Musclefit Protein Pancake Prepared Fast easy..." required="">
                    <label for="posname">Question
                        <img src="img/selleracc/question-icon.svg" alt="question" data-bs-toggle="tooltip" data-bs-title="Default tooltip">
                    </label>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="inputfield">
                    <textarea placeholder="This description will be located after the title and price. For example: Etiam non nunc vehicula, facilisis nunc vitae, tristique leo. Suspendisse lectus justo, commodo ut dapibus nec, aliquam vitae nulla. Maecenas "></textarea>
                    <label for="posname">Answer
                        <img src="img/selleracc/question-icon.svg" alt="question" data-bs-toggle="tooltip" data-bs-title="Default tooltip">
                    </label>
                </div>
            </div>
        </div>
    `;

            addqboxes.appendChild(newAddqbox);

            var tooltips = newAddqbox.querySelectorAll('[data-bs-toggle="tooltip"]');
            tooltips.forEach(function (tooltip) {
                new bootstrap.Tooltip(tooltip);
            });
        });
    }

    // update profile picture

    if ($('.updateava__img').length) {
        const fileInput = document.getElementById('updateimg');
        const profilePicture = document.querySelector('.updateava__img img');

        fileInput.addEventListener('change', function (event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                profilePicture.src = e.target.result;
            };

            reader.readAsDataURL(file);
        });
    }

    // strip
    $('.topinfoblock .closetrip').click(function () {
        $(this).parents('.topinfoblock').slideUp();
    });


    // upd1
    function addChangeEventToInput(input) {
        input.addEventListener('change', function () {
            var file = this.files[0];
            var reader = new FileReader();
            var img = this.closest('.addedsertificate').querySelector('.selectedImage');

            reader.onload = function (e) {
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    if ($('.addkoshercertificate').length) {
        var addCertificateButton = document.getElementById('addCertificate');

        addCertificateButton.addEventListener('click', function () {
            var certificateContainer = document.getElementById('certificateContainer');
            var newCertificate = document.createElement('div');
            newCertificate.classList.add('addedsertificate');

            newCertificate.innerHTML = `
                <div class="addedsertificate__file">
                    <div class="file-upload">
                        <div class="file-select">
                            <label>
                                <div class="file-select-button"><img src="img/blog/photo-ic.svg" alt="icon">Add icon</div>
                                <input type="file" class="chooseFile">
                            </label>
                        </div>
                    </div>
                </div>
                <div class="addedsertificate__img">
                    <img class="selectedImage" src="" alt="">
                </div>
                <div class="addedsertificate__text">
                    <input type="text">
                </div>
            `;

            certificateContainer.appendChild(newCertificate);

            var newInput = newCertificate.querySelector('.chooseFile');
            addChangeEventToInput(newInput);
        });
    }

    var existingInputs = document.querySelectorAll('.chooseFile');
    existingInputs.forEach(function (input) {
        addChangeEventToInput(input);
    });


    // upd2
    if ($('.datatable').length) {
        $('#example1').DataTable({
            "dom": 'rtip',
            "bInfo" : false,
            columnDefs: [
                { targets: [0], orderable: false }
            ],
            // "language": {
            //     "search": "",
            //     searchPlaceholder: "Search on Food...",
            //     sLengthMenu: " _MENU_"
            // },
            // "drawCallback": function (settings) {
            //     var info = $(this).DataTable().page.info();
            //     $('.dataTables_info').text('');
            // }
        });
    }






    // cart page - slider

    var swiper2 = new Swiper(".productsection-slider.prevboughtslider", {
        spaceBetween: 15,

        navigation: {
            nextEl: ".swiper-button-next.custom.sl2",
            prevEl: ".swiper-button-prev.custom.sl2",
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1550: {
                slidesPerView: 5,
            },
        },
    });





    // prevboughtslider

});