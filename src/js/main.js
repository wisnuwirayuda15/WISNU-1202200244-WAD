$(document).ready(function () {
    AOS.init();

    $('#theme-switch').click(function () {
        if ($(this).is(':checked')) {
            $('html').attr('data-bs-theme', 'dark');
        } else {
            $('html').attr('data-bs-theme', 'light');
        }
    });

    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('#back-to-top').addClass('show');
            $('#navbar').addClass('shadow');
        } else {
            $('#back-to-top').removeClass('show');
            $('#navbar').removeClass('shadow');
        }

        const navLinks = $('#navbar ul.nav li a');
        navLinks.each(function () {
            const target = $(this).attr('href');
            const targetElement = $(target);
            if (targetElement.length) {
                const targetPosition = targetElement.offset().top;
                const windowHeight = $(window).height();
                const scrollPosition = $(window).scrollTop();
                if (
                    targetPosition <= scrollPosition + windowHeight &&
                    targetPosition + targetElement.outerHeight() >
                        scrollPosition
                ) {
                    navLinks.removeClass('active-nav-link');
                    $(this).addClass('active-nav-link');
                }
            }
        });
    });
});
