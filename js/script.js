
//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다

$(function(){
    Splitting();
});

$(function() {
    $('.animate').scrolla({
       mobile: true, //모바일버전시 활성화
       once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
 }); 


// 03.scrollara.js

$(function(){
    $('.animate').scrolla({
        moblie:true,
        once: false
    });
});

$(function(){
    $(".menuOpen").on("click", function(){
        $(".gnb2").addClass("on");
    });
    $(".gnb2 .close, section").on("click", function(){
        $(".gnb2").removeClass("on");
    })
});

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.con02',
            start:'0% 10%',
            end: '+=1000',
            pin:true,
            scrub: 3,
            // markers: true
        }
    })
    .fromTo('.videoWrap video', {'clip-path': 'inset(10% 10% 10% 10% round 2%)'}, {'clip-path': 'inset(0% 0% 0% 0% round 2%)', ease: 'none', duration:10}, 0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.con05',
            start:'0% 20%',
            end: '+=800',
            pin:true,
            scrub: 3,
            // markers: true
        }
    })
    .fromTo('.con05 li:nth-child(1)',
    {'clip-path': 'inset(0% 100% 0% 0% round 2%)'},
    {'clip-path': 'inset(0% 0% 0% 0% round 2%)', ease: 'none', duration: 6}
, 2)
.fromTo('.con05 li:nth-child(2)',
    {'clip-path': 'inset(0% 100% 0% 0% round 2%)'},
    {'clip-path': 'inset(0% 0% 0% 0% round 2%)', ease: 'none', duration: 6}
, 12) // 두 번째 li 요소에 대한 애니메이션
.fromTo('.con05 li:nth-child(3)',
    {'clip-path': 'inset(0% 100% 0% 0% round 2%)'},
    {'clip-path': 'inset(0% 0% 0% 0% round 2%)', ease: 'none', duration: 6}
, 22); 
})

// path 길이 구하기
$(function(){
    $('.svgAni').find('#svgAni04').each(function(i, path){
        var length = path.getTotalLength();
    //    alert(length);  
    });
});

$(function(){
    $('.goTop').on('click', function(){
        const top = $('body').offset().top;
        // body의 top의 위칫값을 변수 top한테 저장(대입)
        // offest()함수는 원하는 선택자의 위치값을 top, left형식을 변환하여 줍니다.
        $('html, body').animate({scrollTop:(top)}, 2000);
    });
});