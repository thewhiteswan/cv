$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        console.log(scroll, $('#cv').offset().top)
        if (scroll > $('#cv').offset().top + -200) {
          $(".custom-nav").css("background-color" , "#000000");
        }
  
        else{
            $(".custom-nav").css("background-color" , "transparent");  	
        }
    })
  })