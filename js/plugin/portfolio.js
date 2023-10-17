//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
//preventDefault 는 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드입니다

$(function(){
    Splitting();
});


document.addEventListener("DOMContentLoaded", function() {
  var liElements = document.querySelectorAll('.image-list li');

  // 각 li 요소에 대한 반복문을 실행합니다.
  liElements.forEach(function(li, index) {
      // li 요소에 애니메이션을 추가합니다.
      li.style.animation = `fade-in 0.03s ease-in-out ${1+index * 0.05}s forwards`;
  });
});


$(function() {
    $('.animate').scrolla({
       mobile: true, //모바일버전시 활성화
       once: false //스크롤시 딱 한번만 하고싶을땐 true
    });    
 }); 

 $(function(){
    $('.goTop').on('click', function(){
        const top = $('body').offset().top;
        $('html, body').animate({scrollTop:(top)}, 2000);
    });
});


$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.con02', {
    
        scrollTrigger: {
            trigger: '.con02 .inner',
            start: '0% 0%',
            end: '300% 0%',
            pin: true,
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 .left .num',
            start: '0% 0%',
            end: '100% 30%',
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    .fromTo('.con02 .left .num', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5},0)


    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 .textBox .a',
            start: '10% 100%',
            end: '100% 50%',
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    .fromTo('.con02 .textBox .a', {y:'600%',opacity:'1'},{y:'0%', opacity:'1', ease:'none', duration:5},0)

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 .textBox .b',
            start: '30% 100%',
            end: '100% 50%',
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    .fromTo('.con02 .textBox .b', {y:'800%',opacity:'1'},{y:'0%', opacity:'1', ease:'none', duration:5},0)

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 .textBox .c',
            start: '50% 100%',
            end: '100% 50%',
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    .fromTo('.con02 .textBox .c', {y:'1000%'},{y:'0%', opacity:'1', ease:'none', duration:5},0)

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02 .textBox .d',
            start: '50% 100%',
            end: '100% 50%',
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })

    .fromTo('.con02 .textBox .d', {y:'1200%'},{y:'0%', opacity:'1', ease:'none', duration:5},0)





});

$(function() {
    gsap.registerPlugin(ScrollTrigger);
gsap.to('.con02 .inner .right .box img', {
    y: '-50%',
    scrollTrigger: {
      trigger: '.con02 .inner .right .box img',
      start: '65% 50%',
      end: '120% 0% ',
      scrub: 0.5,
    //   markers: true
    }
  });
});


$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.con03', {
    
        scrollTrigger: {
            trigger: '.con03 .inner',
            start: '0% 0%',
            end: '300% 0%',
            pin: true,
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })


    gsap.fromTo('.con03 .num', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con03 .num',
        start: '0% 0%',
        end: '100% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con03 .txtBox li:nth-child(1)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con03 .inner .txtBox',
        start: '220% 0%',
        end: '230% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con03 .txtBox li:nth-child(2)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con03 .inner .txtBox',
        start: '530% 0%',
        end: '550% 30%',
        scrub: 1,
        // markers:true
    }
    })


gsap.to('.con03 .inner .box img', {
    y: '-50%',
    scrollTrigger: {
      trigger: '.con03 .inner .box img',
      start: '40% 60%',
      end: '120% 0% ',
      scrub: 0.5,
    //   markers: true
    }

  });
});

$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.con04', {
    
        scrollTrigger: {
            trigger: '.con04 .inner',
            start: '0% 0%',
            end: '300% 0%',
            pin: true,
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })


    gsap.fromTo('.con04 .num', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con04 .num',
        start: '0% 0%',
        end: '100% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con04 .txtBox li:nth-child(1)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con04 .inner .txtBox',
        start: '220% 0%',
        end: '230% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con04 .txtBox li:nth-child(2)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con04 .inner .txtBox',
        start: '530% 0%',
        end: '550% 30%',
        scrub: 1,
        // markers:true
    }
    })


gsap.to('.con04 .inner .box img', {
    y: '-50%',
    scrollTrigger: {
      trigger: '.con04 .inner .box img',
      start: '40% 30%',
      end: '120% 0% ',
      scrub: 0.5,
    //   markers: true
    }

  });
});



$(function() {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to('.con05', {
    
        scrollTrigger: {
            trigger: '.con05 .inner',
            start: '0% 0%',
            end: '200% 0%',
            pin: true,
            pinSpacing: false, // 고정된 요소 사이의 간격 유지
            scrub: 1,
            // markers:true
        }
    })


    gsap.fromTo('.con05 .num', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con05 .num',
        start: '0% 0%',
        end: '100% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con05 .txtBox li:nth-child(1)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con05 .inner .txtBox',
        start: '220% 0%',
        end: '230% 30%',
        scrub: 1,
        // markers:true
    }
    })

    gsap.fromTo('.con05 .txtBox li:nth-child(2)', {y:'50%',opacity:'0'},{y:'0%', opacity:'1', ease:'none', duration:5,
    scrollTrigger: {
        trigger: '.con05 .inner .txtBox',
        start: '530% 0%',
        end: '550% 30%',
        scrub: 1,
        // markers:true
    }
    })


gsap.to('.con05 .inner .box img', {
    y: '-50%',
    scrollTrigger: {
      trigger: '.con05 .inner .box img',
      start: '40% 30%',
      end: '100% 0% ',
      scrub: 0.5,
    //   markers: true
    }

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