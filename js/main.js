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
          
        var disWun = $(this);
        var whiteBox = $(this).children('.project-overlay');
        var blackBox = whiteBox.children('.overlay-content');
        
        if($(whiteBox).css('display') == 'none') {
            
            whiteBox.fadeIn(300).css('display', 'flex');
            blackBox.delay(200).fadeIn(300).css('display', 'flex'); //must be set to achieve intended element design
            overlayArrayJr.not(blackBox).fadeOut(200);
            overlayArray.not(whiteBox).delay(100).fadeOut(200);
        }//if
    })//end on()
  }//if
   
  else if($(window).width() >= 1024){
      
    $('.icon-container').on('click mouseenter', function() {
        
        var whiteBox = $(this).children('.project-overlay'); //targets white background
        var blackBox = whiteBox.children('.overlay-content'); //targets all other content
        var whiteBoxDisplay = whiteBox.css('display'); //gets the display property value for this .project-overlay
        
        whiteBox.stop(true, true).fadeTo(300, 1).css('display', 'flex');
        blackBox.stop(true, true).delay(200).fadeTo(300, 1).css('display', 'flex'); //must be set to achieve intended element design
        overlayArrayJr.not(blackBox).fadeTo(200, 0, function(){
          $(this).css('display', 'none'); //resets display property to initial
        });
        
        overlayArray.not(whiteBox).delay(100).fadeTo(200, 0, function(){
          $(this).css('display', 'none'); //resets display property to satisfy condition for next .on() event
        });
    });//end on()
      
    $('.icon-container').on('mouseleave', function() {
        
        var whiteBox = $(this).children('.project-overlay'); //targets white background
        var blackBox = whiteBox.children('.overlay-content'); //targets all other content
        var whiteBoxDisplay = whiteBox.css('display'); //gets the display property value for this .project-overlay
        
        blackBox.stop(true, true).fadeTo(200, 0, function(){
          $(this).css('display', 'none'); //resets display property to initial
        });
        whiteBox.stop(true, true).delay(100).fadeTo(200, 0, function(){
          $(this).css('display', 'none'); //resets display property to satisfy condition for next .on() event
        });
    });//end on()
  }//else if
});//end ready