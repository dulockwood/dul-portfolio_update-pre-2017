$(document).ready(function() {
  $(".nav-content-background").hide();
  $(".container").hide();
  $("body").show();
  $(".nav-content-background").delay(250).fadeIn(500);
  $(".container").delay(1250).fadeIn(1000);
    
  if($(window).width() >= 768 && $(window).width() < 1024) {
    $(".nav-heading").hide().delay(500).fadeIn(500);
    $(".nav-links-overlay").hide().delay(750).fadeIn(500);
    $(".nav-links-content").hide().delay(750).fadeIn(500);
  }
  else if ($(window).width() >= 1024) {
    $(".nav-content").hide().delay(750).fadeIn(500);
  }
    
  $(window).resize(function(){
      if($(window).width() >= 768){
        $('#nav-links-overlay').show();
      }
      else {
        $('#nav-links-overlay').fadeOut(200);
      }
    });//end resize()
  $('.navToggleButton').click(function(){
      $('#nav-links-overlay').fadeToggle(200, function(){
        //callback to hide then fadeIn the content of the nav-links-overlay
      }); //end fadeToggle()
    }); //end click()
    
    
  
    
  $('.hyperlink').click(function() {
      var newLocation = this.href;
      event.preventDefault();
      $('body').fadeOut(500, newpage);
      function newpage() {
        window.location = newLocation;
      }
  });
    
    
});//end ready