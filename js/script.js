$(window).scroll(function()                // всплывающее меню
{
    if($(window).scrollTop() > 250)
    {
        $('.hidden-header').addClass('out');
    } else
    {
        $('.hidden-header').removeClass('out');
    }
})

$(document).ready(function(){               // карусель элементов
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 550,
        dots: false
    });
  });

  var acc = document.getElementsByClassName("box-main");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
  
      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }