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
        // body의 top의 위칫값을 변수 top한테 저장(대입)
        // offest()함수는 원하는 선택자의 위치값을 top, left형식을 변환하여 줍니다.
        $('html, body').animate({scrollTop:(top)}, 2000);
    });
});
