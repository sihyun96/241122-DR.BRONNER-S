 // a태그 속성 default
 $('a[href="#"]').on('click', function (e) {
  e.preventDefault();
});
// header on
$(window).on('scroll', function() {
  if(scrollY > 500) {
    $('.header-wrapper').addClass('on')
  }else {
    $('.header-wrapper').removeClass('on')
  }
});
// 메뉴버튼
$('.btn-wrapper').on('click', function () {
  $('.header-nav').css({ left: 0 });
});

$('.close-btn').on('click', function () {
  $('.header-nav').css({ left: -450 });
});

// $('.menu-list li').on('click', function () {
//   $('.sub-menu li').toggle();
// });

// 메뉴 li evt
// $('.menu-list > li > a').each(function (idx, elem) {
//   $(elem).on('click', function (e) {
//     e.preventDefault();
    
//     $('.menu-list .sub-menu').removeClass('dropdown');
//     $(this).next('.sub-menu').toggleClass('dropdown');
//   });
// });

$('.menu-list > li > a').on('click', function (e) {
  e.preventDefault();

  // 클릭된 링크의 바로 아래 sub-menu 선택
  const currentSubMenu = $(this).next('.sub-menu');

  // 다른 열린 sub-menu를 모두 닫음
  $('.menu-list .sub-menu').not(currentSubMenu).removeClass('dropdown');

  // 클릭된 메뉴의 sub-menu를 열거나 닫음
  currentSubMenu.toggleClass('dropdown');
});

// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,  //브라우저가 990보다 클 때
      spaceBetween: 0,
    },
    985: {
      slidesPerView: 3,  //브라우저가 990보다 클 때
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 4,  //브라우저가 990보다 클 때
      spaceBetween: 50,
    },
    1700: {
      slidesPerView: 5,  //브라우저가 990보다 클 때
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".mainSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }
});

var swiper = new Swiper(".bestSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  }, breakpoints: {
    990: {//브라우저가 990보다 클 때
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
});

// 위로 버튼
$(window).on('scroll', function () {
  if (scrollY > 1000) {
    $('.go-to-up').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('.go-to-up').css({ opacity: 0, pointerEvents: 'none' });
  }
});

// 클릭하면 부드럽게 위로 스크롤!
$('.go-to-up').on('click', function (e) {
  e.preventDefault();
  scrollTo({
    behavior: 'smooth',
    top: 0
  });
});


// 스크롤 이동시 fade-in
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 들어옴
        entry.target.classList.add("fade-in");
      } else {
        // 화면에서 나감
        entry.target.classList.remove("fade-in");
      }
    });
  },
  { threshold: 0.4,
    990: {
      threshold: 0.2
    }
  }
);

// 관찰 대상 설정
const targetElements = document.querySelectorAll(".fade-wrap");
targetElements.forEach((element) => {
  observer.observe(element);
});

// 헤더
$(window).on('scroll', function () {
  if (scrollY > 300) {
    $('.go-to-up').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('.go-to-up').css({ opacity: 0, pointerEvents: 'none' });
  }
});