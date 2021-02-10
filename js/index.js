var ww = $(window).width()
console.log(ww)

if (ww>=769) {
    $('#nav .depth1 > li').hover(
        function(){
            $(this).addClass('on') 
        },
        function(){
            $(this).removeClass('on')
        }
    )
} else {
    $('#nav .depth1 > li').on('click', function(){
        $(this).toggleClass('on') // 방법1

        // if (!$(this).hasClass('on')) {   방법2
        //     $(this).addClass('on')
        // } else {
        //     $(this).removeClass('on')
        // }
        
        $(this).siblings().removeClass('on')  // 공통
    })
}




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

$('#header .open').on('click', function(){
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
    $(this).next().next().css({
        display:'block'
    })
})
$('#header .close').on('click', function(){
    $(this).prev().css({
        display:'none'
    })
    $(this).css({
        display:'none'
    })
    $(this).prev().prev().css({
        display:'block'
    })
})

// p.326 : 이벤트 추가 mouseenter, mouseleave
// $('#nav .depth1 > li').on('mouseover', function(){
//     $(this).addClass('on')
// })
// $('#nav .depth1 > li').on('mouseleave', function(){
//     $(this).removeClass('on')
// })

// $('#nav .depth1 > li').hover(
// function(){
//     $(this).addClass('on') 
// },
// function(){
//     $(this).removeClass('on')
// }
// )

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if(sct>=10 && !$('#header').hasClass('on')){
        $('#header').addClass('on')
    } else if(sct<10 && $('#header').hasClass('on')){
        $('#header').removeClass('on')
    }
})

