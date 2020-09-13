

//WebP script

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    };
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    }); 
    

//Anim script

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else {
                if (!animItem.classList.contains('_anim-no-hiden')){
                    animItem.classList.remove('_active'); 
                };
            };
        };
    };
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    };

    setTimeout(() => {
        animOnScroll();
    }, 300);
};


//burger-nav 
$('.main-header__burger').on('click', function (){
    $('.main-header__nav').toggleClass('main-header__nav--active');
    $('.main-header__burger').toggleClass('main-header__burger--active');
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        $('.main-header__nav').removeClass('main-header__nav--active');
        $('.main-header__burger').removeClass('main-header__burger--active');
    });
});

//menu scroll
let menuHeight = document.querySelector('.main-header__menu-row').scrollHeight;
let activHeader = document.querySelector('.main-header__wraper').scrollHeight;
let scrollCoef = 0.0019;
$(window).scroll(function(){
    if ( $(this).scrollTop() > (activHeader - menuHeight)) {
        $('.main-header__menu-row').addClass('_menu-activ');
    } else {
        $('.main-header__menu-row').removeClass('_menu-activ');
    };
    
	$('.main-header__wraper').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	});
});

// link scroll

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - menuHeight*0.8;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

//slider
$('.team__slider').slick({
    arrows:false,
    dots:false,  
    slidesToShow: 1, 
    slidesToScroll: 1, 
    speed: 1000, 
    cssEase: 'ease',
    invinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: false
});