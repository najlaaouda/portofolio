

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("#btn-arrow-up").fadeIn('slow');
                        }
                        else
                        $("#btn-arrow-up").fadeOut('slow');

    })
    $("#btn-arrow-up").click(function(){
        $("html, body").animate({scrollTop:0, 
        }, 800)
        return false;
    })    
 })

 $(document).ready(function () {
  
    $('ul.navbar-nav > li').click(function (e) {
        // $('ul.navbar-nav > li') .removeClass('active');

        // var x = $('ul.navbar-nav > li').offset().top;
    //    $('html,body').animate({scrollTop:},2000);
        $(this).addClass('active');
    });
});


$(document).ready(function(){

    if ($('.text-slider').length == 1) {
      var typed_strings = $('.text-slider-items').text();
      var typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
      });
    }
  
  
  
  
    })
