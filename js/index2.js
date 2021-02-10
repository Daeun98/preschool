$(".slide-group").slick({           
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive:[{
        breakpoint:769,
        settings:{
            arrows:false
        }
    }]
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

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if(sct>=10 && !$('#header').hasClass('on')){
        $('#header').addClass('on')
    } else if(sct<10 && $('#header').hasClass('on')){
        $('#header').removeClass('on')
    }
})


$('#header .open').on('click', function(){
    $(this).removeClass('on')
    $(this).next().addClass('on')
    $(this).next().next().addClass('on')
})
$('#header .close').on('click', function(){
    $(this).removeClass('on')
    $(this).prev().removeClass('on')
    $(this).prev().prev().addClass('on')
    $(this).prev().find('.depth1 > li').removeClass('on')
})

// 여기서부터 resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램
var deviceSize1 = 1024;
var deviceSize2 = 768;

function scrollox(status){
    $('html').css({
        overflowY:status
    })
    var htmlWidth = $('html').width()
    return htmlWidth
}
var swh = scrollox('hidden')
var sws = scrollox('scroll')
var swd = swh - sws
if (swd>0) {
    deviceSize1 -= swd;
    deviceSize2 -= swd;
}

var ww;
function init(){
    ww = $(window).width()  // &&작은화면에서 큰화면으로 왔을때 처음 한번은 pc가 아니고 mobile이 붙어있음
    if (ww>deviceSize1 && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile tablet')
        $('html').scrollTop(0)
    } else if (ww<=deviceSize1 && ww>deviceSize2 && !$('html').hasClass('tablet')) {
        $('html').addClass('tablet').removeClass('pc mobile')
        $('html').scrollTop(0)
        $('.depth1 > li').removeClass('on')
    } else if (ww<=deviceSize2 && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('tablet')
        $('html').scrollTop(0)
        $('#nav').removeClass('on')
        $('#header .close').removeClass('on')
        $('#header .open').addClass('on')
    }
}

init()

$(window).on('resize', function(){
    init()
})
// 여기까지resize 이벤트 발생시 스크롤바 유무에 따른 상태제어 프로그램


$('#header .depth1 > li').hover(
    function(){
        if ($('html').hasClass('pc') || $('html').hasClass('tablet'))
        $(this).addClass('on')
    },
    function(){
        if ($('html').hasClass('pc') || $('html').hasClass('tablet'))
        $(this).removeClass('on')
    }
)

$('#header .depth1 > li').on('click', function(e){
    if($('html').hasClass('mobile')){
        e.preventDefault()
        $(this).toggleClass('on').siblings().removeClass('on')
    }
})

$('#header .depth2 > li').on('click', function(e){
        e.stopPropagation()
})