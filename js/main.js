$(document).ready(function() {
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

});//end ready()