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
  }//if
    
  else if ($(window).width() >= 1024){
      
    $(".nav-content").hide().delay(750).fadeIn(500);
  }//else if
    
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
      $('body').fadeOut(200, newpage);
      function newpage() {
          window.location = newLocation;
      }
  });
    
  var overlayArray = $('body').find('.project-overlay');
  var overlayArrayJr = overlayArray.children('.overlay-content');
  
  if($(window).width() < 1024){
    
    $('.icon-container').on('click', function() {
        
        var whiteBox = $(this).children('.project-overlay');
        var blackBox = whiteBox.children('.overlay-content');
        
        if($(whiteBox).css('display') == 'none') {
            
            whiteBox.fadeIn(400).css('display', 'flex');
            blackBox.delay(400).fadeIn(400).css('display', 'flex');
            overlayArrayJr.not(blackBox).fadeOut(400);
            overlayArray.not(whiteBox).delay(200).fadeOut(400);
        }//if
         
        else if($(whiteBox).css('display') == 'flex'){
            
            blackBox.fadeOut(400);
            whiteBox.delay(200).fadeOut(400);
        }//else if
    })//end on()
  }//if
   
  else if($(window).width() >= 1024){
      
    $('.icon-container').on('click mouseenter', function() {
        
        var whiteBox = $(this).children('.project-overlay'); //targets white background
        var blackBox = whiteBox.children('.overlay-content'); //targets all other content
        var whiteBoxDisplay = whiteBox.css('display'); //gets the display property value for this .project-overlay
        
        if($(whiteBox).css('display') == 'none') {
            
            whiteBox.fadeIn(400).css('display', 'flex');
            blackBox.delay(400).fadeIn(400).css('display', 'flex');
            overlayArrayJr.not(blackBox).fadeOut(400);
            overlayArray.not(whiteBox).delay(200).fadeOut(400);
        }//if
          
        else if($(whiteBox).css('display') == 'flex'){
            
            blackBox.fadeOut(300);
            whiteBox.delay(150).fadeOut(300);
        }//else if
    });//end on()
      
    $('.icon-container').on('mouseleave', function() {
        
        var whiteBox = $(this).children('.project-overlay'); //targets white background
        var blackBox = whiteBox.children('.overlay-content'); //targets all other content
        var whiteBoxDisplay = whiteBox.css('display'); //gets the display property value for this .project-overlay
        
        blackBox.fadeOut(300);
        whiteBox.delay(150).fadeOut(300);
    });//end on()
  }//else if
});//end ready