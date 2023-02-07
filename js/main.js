$(function() {

   $("#preloader_wrapper").fadeOut(3000);




   $(window).on('scroll', function() {
      if ($(this).scrollTop() > window.innerHeight * 0.9) {
         $('.header__top').addClass('fixed');
      } else {
         $('.header__top').removeClass('fixed');
      }
   });



   $('.header__burger, .menu__link').on('click', function() {
      $('.header__burger,.menu__list').toggleClass('active');
   });




   $(".menu__link, .header__link, .header__arrow").on('click', function() {
      //отменяем стандартную обработку нажатия по ссылке
      // event.preventDefault();

      //забираем идентификатор бока с атрибута href
      let href = $(this).attr('href');

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      // top = $(id).offset().top;

      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({
         scrollTop: $(href).offset().top
      }, {
         duration: 450, // по умолчанию «400» 
         easing: "linear" // по умолчанию «swing»
      });
      return false;
   });

   $('[data-fancybox]').fancybox({
      margin: [80, 0, 80, 0],
      helpers: {
         overlay: {
            css: {
               'background': 'rgba(58, 42, 45, 0.9)'
            }
         }
      }
   });




   $('.blog__items').on('click', function(e) {
      e.preventDefault();

      $(this).find('.blog__content,.blog__item').slideToggle();


   });


   var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function(box) {
         // the callback is fired every time an animation is started
         // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
   });
   wow.init();


   // $('*').addClass('wow');

   $('.blog__content').removeClass('wow animate__animated');
   $('.blog__content').find('*').each(function() {
      $(this).removeClass('wow animate__animated');
   })





   $('.menu__item').addClass('wow animate__animated animate__bounceInDown');
   $('.title').addClass('wow animate__animated animate__backInDown');

   $('.about__item-pic').addClass('wow animate__animated animate__rotateIn');
   $('.about__item-pic').attr('data-wow-offset="150"');


   $('.works__item').addClass('wow animate__animated animate__fadeInUp');
   $('.works__item').attr('data-wow-offset="150"');


   $('.price__item').addClass('wow animate__animated animate__backInRight');
   $('.price__item').attr('data-wow-offset="150"');

   $('.fiber__item').addClass('wow animate__animated animate__fadeInUp');
   $('.fiber__item').attr('data-wow-offset="150"');



   var mixer = mixitup('.works__content', {
      selectors: {
         control: '.works__btn'
      },
      animation: {
         duration: 700,
         effects: 'stagger(34ms) rotateZ(20deg) fade scale(0.41)',
         easing: 'ease'
      }

   });

   $(".contact__form").submit(function() { //Change
      var th = $(this);
      $.ajax({
         type: "POST",
         url: "mail.php", //Change
         data: th.serialize()
      }).done(function() {
         alert("Ваше сообщение отправлено!");
         setTimeout(function() {
            // Done Functions
            th.trigger("reset");
         }, 1000);
      });
      return false;
   });
});