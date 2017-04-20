// You're really digging deep, aren't you?
//
// This file has served as a sandbox for refining my knowledge of JavaScript.
// I'll likely look back on how I coded this in a few months and scoff,
// but I'm happy with my progress as of now.
//
// In order to assure the timeliness of the following function (iconAdjust();),
// I defined it and its accompanying function outside $(document).ready.

function iconAdjust() {
      
    var iconHeight = $('.portfolio-icon2').first().height(); //grabs height of one of the icons.
    var iconWrapper = $('.icon-wrapper'); //creates array of all containers of portfolio icons.
    var lastIcon = $('.portfolio-icon2').last(); //targets the odd icon out that usually sizes differently.
      
    iconWrapper.each(function(){
        var self = $(this);
        self.css('height', iconHeight);
    }); //setting the height of each image container to the height of the image.
      
    lastIcon.css('height', iconHeight).css('width', iconHeight); //assuring the dimensions of the last portfolio icon match the rest.
}

function initialFadeIn() {
    
    $(".nav-content-background").delay(250).fadeIn(500);
    $(".container").fadeIn(1000);
} //these statements were originally below $(".body").show(); but have been moved to control their sequence.

$(document).ready(function() {
    
  $(".nav-content-background").hide();
  $(".container").hide();
  $("body").show(); //the big reveal!
   
  $.when(initialFadeIn()).done(iconAdjust()); //executes the fadeIn of most of the content, then fires iconAdjust();
    
  if($(window).width() >= 768 && $(window).width() < 1024) {
      
    $(".nav-heading").hide().delay(500).fadeIn(500);
    $(".nav-links-overlay").hide().delay(750).fadeIn(500);
    $(".nav-links-content").hide().delay(750).fadeIn(500);
  } //if
    
  else if ($(window).width() >= 1024){
      
    $(".nav-content").hide().delay(750).fadeIn(500);
  } //else if
    
    
  $(window).resize(function(){
      
    iconAdjust();
      
    if($(window).width() >= 768){
      $('#nav-links-overlay').show();
    }
    else {
      $('#nav-links-overlay').css('display', 'none');
    }
  }); //end resize()
    
  $('.navToggleButton').on('click', function(){ //this function still needs some help. Can't click on SVGs in FireFox or IE.
      
    $('#nav-links-overlay').fadeToggle(200, function(){
      //callback to hide then fadeIn the content of the nav-links-overlay.
    }); //end fadeToggle()
    event.stopPropagation();
  }).children('object').bind('click', function(event){
        
      console.log(event);
      console.log('dis shit getting clicked');
      $('#nav-links-overlay').fadeToggle(200, function(){
        //callback
      }); //end fadeToggle()
      event.stopPropagation();
  }); //end on()
  $('.pagenav li:nth-child(1)').on('click', function(){
    //isn't this just a lovely little workaround? now the whole bar up top in the nav closes it.
    $('#nav-links-overlay').fadeToggle(200, function(){
        //callback
    }); //end fadeToggle()
  }); //end on()
    
  $('.hyperlink').click(function() {
      
      var newLocation = this.href;
      event.preventDefault();
      $('body').fadeOut(200, newpage);
      function newpage() {
          window.location = newLocation;
      }
  }); //creating a fancy fadeOut effect whenever you navigate to a different page.
    
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