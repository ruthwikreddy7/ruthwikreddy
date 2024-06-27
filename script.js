
$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

    
      $('section').each(function () {
          let height = $(this).height();
          let offset = $(this).offset().top - 200;
          let top = $(window).scrollTop();
          let id = $(this).attr('id');

          if (top > offset && top < offset + height) {
              $('.navbar ul li a').removeClass('active');
              $('.navbar').find(`[href="#${id}"]`).addClass('active');
          }
      });
  });

  $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      }, 500, 'linear')
  });



});
const form=document.getElementById('myform');
 
function handleClick(event) {
    
    event.preventDefault(); // Prevent default behavior (redirection)
  }


document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Ruthwik's Portfolio";
          $("#favicon").attr("href", "assets/images/favicon.png");
      }
      else {
          document.title = "Please come back";
          $("#favicon").attr("href", "assets/images/favhand.png");
      }
  });



var typed = new Typed(".typing-text", {
    strings: ["frontend developer", "video editor", "aspiring software developer", "web developer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 500,
});
form.addEventListener('submit',(event)=>{

    
    
    });
  


















