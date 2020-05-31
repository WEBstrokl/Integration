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