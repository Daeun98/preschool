$(".slide-group").slick({           
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    })

var $button = $('.article:nth-child(1) button')
var $slideGroup = $('.article:nth-child(1) .slide-group')
$button.on('click', function(){
    var $ibtn = $(this).find('i')
    if($ibtn.hasClass('fa-pause')){
        $slideGroup.slick('slickPause')
        $ibtn.removeClass('fa-pause')
        $ibtn.addClass('fa-play')
    } else {
        $slideGroup.slick('slickPlay')
        $ibtn.removeClass('fa-play')
        $ibtn.addClass('fa-pause')
    }
})