
$(document).ready(function () {
  $("#navbarNav").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(document).ready(function(){
  if ( $(window).width() > 739) {
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
  }
  else{
      let divElement = document.querySelector("#navigation");
      divElement.classList.add("sticky-nav");
      $(".sticky-nav").css("background-color" , "black");
  } 
})