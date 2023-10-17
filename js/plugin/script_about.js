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
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '.con01', // 효과를 적용할 요소
    start: 'top top', // 효과 시작 위치
    pin: true, // 화면 상단에 고정
    pinSpacing: false, // 고정된 요소 사이의 간격 유지
    // markers: true // 디버깅을 위한 마커 표시
});


  // con02 섹션 선택
  const con02Section = document.querySelector('.con02');

  // ScrollTrigger를 사용하여 con02 섹션에 효과 적용
  ScrollTrigger.create({
      trigger: con02Section, // 효과를 적용할 요소
      start: 'top top', // 효과 시작 위치
      end: '100% 100%',
      pin: false, // 화면 상단에 고정
      pinSpacing: false, // 고정된 요소 사이의 간격 유지
      // markers: true // 디버깅을 위한 마커 표시
  });

  // 다음 섹션으로 스냅 효과 추가
  ScrollTrigger.create({
      snap: 1 / (con02Section.length - 1) // 다음 섹션으로 이동하는 비율 (섹션 수에 따라 조절)
  });
});



$(function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('.con02 .box .right ul li:nth-child(1)',{
    'width':'717px', 'height':'1103px',
    scrollTrigger: {
        trigger: '.con02 .box .right ul li',
        start: '30% 20%',
        end: '60% 20%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.con02 .box .right ul li:nth-child(2)',{
    'width':'597px', 'height':'919px',
    scrollTrigger: {
        trigger: '.con02 .box .right ul li',
        start: '30% 20%',
        end: '60% 20%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.con02 .box .right ul li:nth-child(3)',{
    'width':'498px', 'height':'766px',
    scrollTrigger: {
        trigger: '.con02 .box .right ul li',
        start: '30% 20%',
        end: '60% 20%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.con02 .box .right ul li:nth-child(4)',{
    'width':'415px', 'height':'636px',
    scrollTrigger: {
        trigger: '.con02 .box .right ul li',
        start: '30% 20%',
        end: '60% 20%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.con02 .box .right ul li:nth-child(5)',{
    'width':'346px', 'height':'516px',
    scrollTrigger: {
        trigger: '.con02 .box .right ul li',
        start: '30% 20%',
        end: '60% 20%',
        scrub: 1,
        // markers:true
    }
  })


});


$(function() {
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('.timeLine', {
  
      scrollTrigger: {
          trigger: '.timeLine',
          start: '0% 0%',
          end: '100% 0%',
          pin: true,
          pinSpacing: false, // 고정된 요소 사이의 간격 유지
          scrub: 1,
          // markers:true
      }
  })

  gsap.to('.timeLine .inner ul li .box:nth-child(1)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '0% 0%',
        end: '0% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .inner ul li .box:nth-child(2)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '17% 0%',
        end: '17% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .inner ul li .box:nth-child(3)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '34% 0%',
        end: '34% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .inner ul li .box:nth-child(4)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '51% 0%',
        end: '51% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .inner ul li .box:nth-child(5)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '68% 0%',
        end: '68% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .inner ul li .box:nth-child(6)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '83% 0%',
        end: '83% 0%',
        scrub: 1,
        // markers:true
    }
  })


  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('.timeLine', {
  
      scrollTrigger: {
          trigger: '.timeLine',
          start: '0% 0%',
          end: '100% 0%',
          pin: true,
          scrub: 1,
          // markers:true
      }
  })

  gsap.to('.timeLine .tit-wrap .text:nth-child(1)',{
    'opacity':'1', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '0% 0%',
        end: '15% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(1)',{
    'opacity':'0', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '17% 0%',
        end: '17% 0%',
        
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(2)',{
    'opacity':'1', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '17% 0%',
        end: '17% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(2)',{
    'opacity':'0',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '34% 0%',
        end: '49% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(3)',{
    'opacity':'1', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '34% 0%',
        end: '34% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(3)',{
    'opacity':'0', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '51% 0%',
        end: '51% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(4)',{
    'opacity':'1', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '51% 0%',
        end: '51% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(4)',{
    'opacity':'0',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '68% 0%',
        end: '68% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(5)',{
    'opacity':'1', 
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '68% 0%',
        end: '68% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(5)',{
    'opacity':'0',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '83% 0%',
        end: '83% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(6)',{
    'opacity':'1',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '83% 0%',
        end: '83% 0%',
        scrub: 1,
        // markers:true
    }
  })
  gsap.to('.timeLine .tit-wrap .text:nth-child(6)',{
    'opacity':'0',
    scrollTrigger: {
        trigger: '.timeLine .inner',
        start: '100% 0%',
        end: '100% 0%',
        scrub: 1,
        // markers:true
    }
  })
  
  



    // gsap.to('.panel', {
    //   scrollTrigger: {
    //     trigger: '.panel', // 효과를 적용할 요소
    //     start: '0% 0%', // 효과 시작 위치 (요소의 중앙이 화면 중앙에 오면 효과 시작)
    //     end: '100% 100%', // 효과 종료 위치 (요소의 중앙이 화면 중앙에 오면 효과 종료)
    //     pin: true, // 고정 설정
    //     pinSpacing: false, // 고정된 요소 사이의 간격 유지하지 않음
    //     markers: true // 디버깅을 위한 마커 표시
    //   }
    // })

  
   
  });


  $(function(){
    gsap.registerPlugin(ScrollTrigger);

    // gsap.utils.toArray(".hobby").forEach((hobby, i) => {
    //     ScrollTrigger.create({
    //         trigger: hobby,
    //         start: "top top",
    //         pin: true, 
    //         pinSpacing: false,
    //         markers:true
    //     });
    // });

  //   gsap.utils.toArray(".hobby").forEach((hobby, i) => {
  //     ScrollTrigger.create({
  //         trigger: hobby,
  //         start: i === 0 ? "top top" : `${-i * 5}% top`, // 각 섹션의 시작 위치를 조정
          
  //         pin: true,
  //         pinSpacing: false,
  //         markers: true
  //     });
  // });

//   gsap.utils.toArray(".hobby").forEach((hobby, i) => {
//     const trigger = hobby;
//     const sectionHeight = hobby.offsetHeight; // 섹션의 높이 얻기
//     const start = i === 0 ? "top top" : `${-i * 5}% top`; // 각 섹션의 시작 위치를 조정
//     if (i === gsap.utils.toArray(".hobby").length - 1) {
//       end = "100% top";
//   } else {
//       switch (i) {
//           case 0:
//               end = "400% top";
//               break;
//           case 1:
//               end = "300% top";
//               break;
//           case 2:
//               end = "200% top";
//               break;
//           case 3:
//               end = "100% top";
//               break;
//           default:
//               end = undefined;
//       }
//   }
//     ScrollTrigger.create({
//         trigger: trigger,
//         start: start,
//         end: end,
//         pin: true,
//         pinSpacing: false,
//         markers: true
        
//     });
// });





gsap.utils.toArray(".hobby").forEach((hobby, i) => {
  const trigger = hobby;
  const sectionHeight = hobby.offsetHeight; // 섹션의 높이 얻기
  const start = i === 0 ? "top top" : `${-i * 4}% top`; // 각 섹션의 시작 위치를 조정
  let end;

  // 마지막 섹션인 경우에만 endTrigger 설정
  if (i === gsap.utils.toArray(".hobby").length - 1) {
    end = "56.5% top";
  } else {
    switch (i) {
      case 0:
        end = "330% top";
        break;
      case 1:
        end = "226% top";
        break;
      case 2:
        end = "106% top";
        break;
      case 3:
        end = "160% top";
        break;
      
    }
  }

  ScrollTrigger.create({
    trigger: trigger,
    start: start,
    end: end,
    pin: true,
    pinSpacing: false,
    // markers: true,
    // 마지막 섹션에서 효과가 끝나면 해당 요소를 unpin
    endTrigger: gsap.utils.toArray(".hobby").length - 1 === i ? "top bottom" : undefined,
    onEnterBack: self => self.progress(1), // 마지막 섹션에서 역방향으로 스크롤할 때 효과를 끝내기 위한 설정
    onLeaveBack: self => self.progress(0) // 역방향으로 스크롤할 때 효과 초기화
    
  });
});
});

$(function(){
  gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger : {
      trigger : ".con07",
      start: '0% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
  }
})


.fromTo('.con07 .textBox .a', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},0)

gsap.timeline({
  scrollTrigger : {
      trigger : ".con07",
      start: '10% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
  }
})

.fromTo('.con07 .textBox .b', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},1)

gsap.timeline({
  scrollTrigger : {
      trigger : ".con07",
      start: '20% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
  }
})

.fromTo('.con07 .textBox .c', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},2)

gsap.timeline({
  scrollTrigger : {
      trigger : ".con07",
      start: '30% 40%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
  }
})

.fromTo('.con07 .textBox .d', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},3)

gsap.timeline({
  scrollTrigger : {
      trigger : ".con07",
      start: '40% 45%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
  }
})

.fromTo('.con07 .textBox .e', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},4)

});

$(function(){
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: '.con08', // 효과를 적용할 요소
    start: 'top top', // 효과 시작 위치
    end: '100% 20%',
    pin: true, // 화면 상단에 고정
    pinSpacing: false, // 고정된 요소 사이의 간격 유지
    // markers: true // 디버깅을 위한 마커 표시
});
});



$(function(){
  gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger : {
      trigger : ".con10",
      start: '0% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
    }
  })
  .fromTo('.con10 .inner .a', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},0)


gsap.timeline({
  scrollTrigger : {
      trigger : ".con10",
      start: '10% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
    }
  })
  .fromTo('.con10 .inner .b', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},0)

gsap.timeline({
  scrollTrigger : {
      trigger : ".con10",
      start: '20% 50%',
      end: '0% 50%',
      scrub: 1,
      // markers:true
    }
  })
  .fromTo('.con10 .inner .c', {x:'10%',opacity:'0'},{x:'0%', opacity:'1', ease:'none', duration:5},0)


});





$(function(){
  gsap.registerPlugin(ScrollTrigger);

  let startValue, endValue;
  if (window.innerWidth >= 1368) {
    startValue = '60% 70%';
    endValue = '100% 40%';
  } else {
    startValue = '50% 70%';
    endValue = '90% 40%';
  }
  if (window.innerWidth >= 968) {
    startValue = '60% 70%';
    endValue = '100% 40%';
  } else {
    startValue = '50% 70%';
    endValue = '90% 40%';
  }



  gsap.to('.con10 .inner .imgBox',{
    'width':'40%',
    scrollTrigger: {
        trigger: '.con10 .inner .imgBox',
        start: '60% 70%',
        end: '100% 40%',
        scrub: 1,
        // markers:true
    }
  })
});





$(function(){
  $('.goTop').on('click', function(){
      const top = $('body').offset().top;
      // body의 top의 위칫값을 변수 top한테 저장(대입)
      // offest()함수는 원하는 선택자의 위치값을 top, left형식을 변환하여 줍니다.
      $('html, body').animate({scrollTop:(top)}, 2000);
  });
});