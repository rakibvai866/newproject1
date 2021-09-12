$(function(){
    // Counter Up Part Start
    $('.counter').counterUp({
        delay: 80,
        time: 2000
      });
      // Counter Up Part End

      // About Slick Slider Part Start
    $('.about-slick-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });    
      // About Slick Slider Part End

      // Team Slider Part Start
    $('.teamSlider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: '<i class="far fa-angle-left team-left"></i>',
        nextArrow: '<i class="far fa-angle-right team-right"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    // Team Slider Part End
});