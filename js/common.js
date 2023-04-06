/** 스와이퍼 */
const mainSwiper = new Swiper('.main-swiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    type: "custom",
    renderCustom:function(swiper, current, total){

        const currentNum = (current < 10) ? '0'+current : current;
        const totalNum = (total < 10) ? '0'+total : total;

        return `<span class="page-current">${currentNum}</span> 
                <span class="page-total">${totalNum}</span>`;
    }
  },
  navigation: {
    nextEl: ".main-swiper .swiper-button-next",
    prevEl: ".main-swiper .swiper-button-prev",
  },
});//

const eventSwiper = new Swiper('.event-swiper', {
  centeredSlides: true,
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".event-swiper .swiper-button-next",
    prevEl: ".event-swiper .swiper-button-prev",
  },
});//

const serviceSwiper = new Swiper('.service-swiper', {
  centeredSlides: true,
  loop: true,
  speed: 300,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    type: "custom",
    renderCustom:function(swiper, current, total){

        const currentNum = (current < 10) ? '0'+current : current;
        const totalNum = (total < 10) ? '0'+total : total;

        return `<span class="page-current">${currentNum}</span> 
                <span class="page-total">${totalNum}</span>`;
    }
  },
  navigation: {
    nextEl: ".service-swiper .swiper-button-next",
    prevEl: ".service-swiper .swiper-button-prev",
  },
});//

const footerBanner = new Swiper('.footer-banner', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  loop: true,
  touchRatio: 0
});//


/** 스와이퍼 제어 버튼 */
const mainControl = $('.sc-banner .btn-control');

mainControl.click(function(){
  if($(this).hasClass('on')){
      $(this).removeClass('on');
      mainSwiper.autoplay.start();
  }else{
      $(this).addClass('on');
      mainSwiper.autoplay.stop();
  }
});//

const eventControl = $('.sc-event .btn-control');

eventControl.click(function(){
  if($(this).hasClass('on')){
      $(this).removeClass('on');
      eventSwiper.autoplay.start();
  }else{
      $(this).addClass('on');
      eventSwiper.autoplay.stop();
  }
});//

/** nav */
const header = $('.header');
const gnbI = $('.header .gnb-item');
const gnbL = $('.header .gnb-link');
const subMenu = $('.header .submenu');

gnbI.mouseover(function(event){
  $(event.target).parents().siblings().removeClass('on');
  $(event.target).parents().addClass('on');
  header.addClass('on');
});
gnbI.mouseout(function(event){
  $(event.target).parents().removeClass('on')
  header.removeClass('on')
});


gnbI.focusin(function(event){
  $(event.target).parents().siblings().removeClass('on');
  $(event.target).parents().addClass('on')
  header.addClass('on');
});

gnbI.focusout(function(event){
  $(event.target).parents().removeClass('on')
  header.removeClass('on');
});//


/** sc-pick 버튼 ani*/
const opTitle = document.querySelector('.sc-pick .select-op');
const opList = document.querySelector('.sc-pick .op-list');

//리스트 열고 닫기
opTitle.addEventListener('click',function(){
  opList.classList.toggle('on')
});

//리스트 선택 이벤트
opList.addEventListener('click', function(event){
  if(event.target.tagName !== 'BUTTON') return false;
  opTitle.innerText = event.target.innerText;
  opList.classList.remove('on');
});

/** footer toggle */
$(".familysite").click(function(){
  $(".site-list").slideToggle(200);
})


//gsap 플러그인 안정화
gsap.registerPlugin(ScrollTrigger);

//header ani
const headerAni = gsap.timeline({scrollTrigger: {
  trigger: ".header",
  start: "20px top",
  end: "40px top",
  scrub: true,
}});

headerAni
.addLabel('a')
.to(".header",{
  top: -30,
  backgroundColor:"rgba(255,255,255,.8)",
  boxShadow:"0 30px 30px -30px rgba(53,53,55,.3)"
},'a')
.to(".header .event",{opacity:0},'a');//

//best ani
gsap.set('.sc-best .best-link', {y:100, opacity:0});
gsap.to(".sc-best .best-link", {
  scrollTrigger: {
    trigger:".sc-best",
    start:"25% 90%",
    end:"35% 85%",
    scrub: 3,
  },
  y:0,
  opacity:1,
  stagger: {
    each: 0.2,
    from: "end",
  }
});//

//pick ani
const pickAni = gsap.timeline({scrollTrigger: {
  trigger:".sc-pick",
  start:"20% bottom",
  end:"60% 90%",
  scrub: 3,
}});

gsap.set('.sc-pick .product-item', {y:200});
pickAni
.to('.sc-pick .product-item.st01',{y:0})
.to('.sc-pick .product-item.st02',{y:0});//

//review ani
const reviewAni = gsap.timeline({scrollTrigger: {
  trigger:".sc-review",
  start:"0% bottom",
  end:"45% 90%",
  scrub: 3,
}});

gsap.set('.sc-review .review-item', {y:200});
reviewAni
.to('.sc-review .review-item.st01',{y:0})
.to('.sc-review .review-item.st02',{y:0});//
