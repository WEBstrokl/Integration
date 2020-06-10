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
/*
$(document).ready(function(){               // карусель элементов
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 550,
        dots: false
    });
  });

$(document).getElementById('testButton').addEventListener("click", function (event) {
    $(document).getElementsByTagName('form')[0].classList.add('newTheme');
    $(document).getElementsByTagName('form')[0].classList.remove('invisibleTest');
  });
  */