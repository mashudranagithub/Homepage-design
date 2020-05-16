$(document).ready(function(){

    // Mega Menu Start Here
    $('.mega-menu').css({
        "display":"none",
    });

    $('.menu-cross').css({
        "display":"none",
    });

    $('.menu-btn').click(function(){
        $('.mega-menu').slideToggle(500);
        $('.menu-cross').toggle(0);
        $('.fa-bars').toggle(0);
    });
    // Mega Menu End Here

    // Search Start Here
    $('.search-btn').click(function(){
        $(this).hide(0);
        $('.search-bar').addClass('show');
        
    });
    $('.search-cross').click(function(){
        $('.search-bar').removeClass('show');
        $('.search-btn').show();
        
    });
    // Search End Here



    // Slider Start Here
    $('.owl-carousel.main-slider').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        autoplay:true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.single-slider').addClass('clear');

    // Slider End Here



    //jQuery Code for back to top Start Here

    $('#top').hide();
    
    $(window).scroll(function(){    
        var wScroll = $(this).scrollTop();

        var showScrollButton = 50;

        if(wScroll > showScrollButton){
            $('#top').fadeIn();  
        }else{
            $('#top').fadeOut();
        }

    });
    //creating click function for back to top
    $('#top').click(function(){
        $('body, html').animate({
           scrollTop:0 
        }, 2000);
        return false;
    });
    //jQuery Code for back to top End Here



    // Code for Etra section start here
    $('.etra-contents').children('.training').css({
        "opacity": "0",
    });

    $('.etra-contents').children('.research').css({
        "opacity": "0",
    });

    $('.etra-contents').children('.advocacy').css({
        "opacity": "0",
    });

    $('.etra-backgrounds').children('.etra-part').addClass('skewed');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var etrascroll = 10;
        if(scroll > etrascroll){    
            $('.etra-backgrounds').children('.etra-part').addClass('scrolled');
        }else{
            $('.etra-backgrounds').children('.etra-part').removeClass('scrolled');
        }

        if(scroll> 100){
            $('.etra-contents').children('.education').css({
                "opacity": "1",
            });
        }else{
            $('.etra-contents').children('.education').css({
                "opacity": "0",
            });
        }

        if(scroll> 220){
            $('.etra-contents').children('.training').css({
                "opacity": "1",
            });
        }else{
            $('.etra-contents').children('.training').css({
                "opacity": "0",
            });
        }

        if(scroll> 320){
            $('.etra-contents').children('.research').css({
                "opacity": "1",
            });
        }else{
            $('.etra-contents').children('.research').css({
                "opacity": "0",
            });
        }

        if(scroll> 420){
            $('.etra-contents').children('.advocacy').css({
                "opacity": "1",
            });
        }else{
            $('.etra-contents').children('.advocacy').css({
                "opacity": "0",
            });
        }

    });
    // Code for etra section end here



    // News Slider Start Here
    
    $('.owl-carousel.news-slider').owlCarousel({
        items:4,
        center:true,
        loop:true,
        autoplay:false,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:1,
        nav:true,
        navText:['Prev', 'Next'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            },
            1367:{
                items:6
            },
        }
    });

    $('.single-news-content').hover(function(){
        $(this).parent('.owl-item').css({
            "z-index": "99999",
        });
    });

    $('.single-news-content').mouseleave(function(){
        $(this).parent('.owl-item').css({
            "z-index": "0",
        });
    });

    // News Slider End Here



    // News Slider Start Here
    $('.owl-carousel.publication-slider').owlCarousel({
        items:3,
        loop:true,
        autoplay:true,
        responsiveClass: true,
        autoplayHoverPause: true, // Stops autoplay
        responsiveRefreshRate : 10,
        autoplaySpeed:2000,
        autoplayTimeout:10000,
        smartSpeed:500,
        margin:10,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            },
            1367:{
                items:4
            },
        }
    });
    // News Slider End Here







    //Code for sticky menu Start Here
    var x = $('.header-top').offset().top; 
    
    $(window).scroll(function(){
        var y = $(window).scrollTop();
        
        if(y>x){
            $('.header-top').addClass('sticky');
           }else{
            $('.header-top').removeClass('sticky');
           }
    });
    $('.header-top').wrapAll('<div class="cover">');
    $('.cover').css('min-height', $('.header-top').outerHeight());
    $('.cover').css('height', 'auto');
    //Code for sticky menu End Here


    $('.second-drop-menu').mouseenter(function(){
        $(this).children('.second-dropped-menu').slideDown(500);
    });

    $('.second-drop-menu').mouseleave(function(){
        $(this).children('.second-dropped-menu').slideUp(0);
    });



});

// Wow initialize
new WOW().init();