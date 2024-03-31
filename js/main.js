 

 $(function(){
 
    $('.slider').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        // fade: true,
        arrows: false,
        asNavFor: '.thumbs'
      });
      $('.thumbs').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
        // dots: true,
        // centerMode: true,
        
      });

      $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        prevArrow: '  <button class="slick-arrow slick-prev"><img src="images/slider/slide-left.svg" alt=""></button> ',
        nextArrow: ' <button class="slick-arrow slick-next"><img src="images/slider/slide-rihgt.svg" alt=""></button>',
      });

  });