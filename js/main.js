$(document).ready(function() {
  function iconAdjust() {
    var iconHeight = $('.portfolio-icon2').first().height();
    console.log(iconHeight);
    var iconWrapper = $('.icon-wrapper');
        
    iconWrapper.each(function(){
      var self = $(this);
      self.css('height', iconHeight);
    });
  }
  
  $(".nav-content-background").hide();
  $(".container").hide();
  $("body").show();
  $(".nav-content-background").delay(250).fadeIn(500);
  $(".container").delay(1250).fadeIn(1000, iconAdjust());
    
    
  if($(window).width() >= 768 && $(window).width() < 1024) {
      
    $(".nav-heading").hide().delay(500).fadeIn(500);
    $(".nav-links-overlay").hide().delay(750).fadeIn(500);
    $(".nav-links-content").hide().delay(750).fadeIn(500);
  }//if
    
  else if ($(window).width() >= 1024){
      
    $(".nav-content").hide().delay(750).fadeIn(500);
  }//else if
    
    
  $(window).resize(function(){
    
      iconAdjust();
      
      if($(window).width() >= 768){
        $('#nav-links-overlay').show();
      }
      else {
        $('#nav-links-overlay').css('display', 'none');
      }
  });//end resize()
    
//  $(window).resize(function(){//trying to make big screens go half and half
//      
//      if ($(window).width() >= 2560){
//        var windowWidth = window.innerWidth; //finds current window size
//                                             //returns number, not a string like "2560px"
//        console.log(windowWidth);
//        var navWidth = (windowWidth / 2 + 'px');
//        console.log(navWidth);
//        
//        $('.nav-content-background').css('width', navWidth);
//      }
//      else if ($(window).width() < 2560){
//        var blah = $('.nav-content-background').hasClass('.nav-content-background-toggle');
//        if (blah) {
//         console.log('has class');
//       }
//       else {
//         console.log('no has a class');
//       }
//     }//created a new css class '.nav-content-background-toggle'.
        //Gonna switch it on when shifting from 2560 to below, and remove when going back.
        //make sure to change width of INDEX COMPONENT as well.
//  });//end resize()
  
  $('.navToggleButton').on('click', function(){
      
      $('#nav-links-overlay').fadeToggle(200, function(){
        //callback to hide then fadeIn the content of the nav-links-overlay
      }); //end fadeToggle()
  }).children('object').bind('click', function(event){
      console.log(event);
      console.log('dis shit getting clicked');
      $('#nav-links-overlay').fadeToggle(200, function(){
        //callback
      }); //end fadeToggle()
      event.stopPropagation();
  }); //end on()
    
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