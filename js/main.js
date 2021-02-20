 $(window).on("load", function(){
 $('#header').vide('libs/video/vzh',{

 })
 });


 if(location.pathname.includes('portfolio')){
  var galleryThumbs = new Swiper('.gallery-thumbs', {
   spaceBetween: 10,
   loop: true,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesVisibility: true,
   watchSlidesProgress: true,
   breakpoints: {
    320: {
      slidesPerView: 1
    },
    380: {
      slidesPerView: 2
    },
    640: {
        slidesPerView: 3
    },
    1000: {
        slidesPerView: 4
    }
  }
  });
  var galleryTop = new Swiper('.gallery-top', {
   spaceBetween: 10,
   loop: true,
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
   thumbs: {
    swiper: galleryThumbs
   }
  });
 }
 document.addEventListener("click",function (e){
  if(e.target.classList.contains("register-button")){
   document.querySelector('.form-popap').classList.add("form-popap-active")

  }
  if(e.target.classList.contains("fa-times")){
   document.querySelector('.form-popap').classList.remove("form-popap-active")
  }
  if(e.target.classList.contains("form-popap")){
   document.querySelector('.form-popap').classList.remove("form-popap-active")
  }
 } )
 // document.addEventListener("scroll", function(e){
 //     if(document.documentElement.scrollTop > 500){
 //         console.log(1)
 //     }
 // })
 AOS.init({
  once : true
 });