(function (appl) {
  'use strict';

  console.log('main.js')
  /*
  ******************************************************************************
    Left Menu
  ******************************************************************************
  */
  $("#leftMenu a").click(function() {
    var link = $(this);

    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active")
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;

    closest_ul.find("ul").slideUp(function() {
        if (++count == closest_ul.find("ul").length)
            parallel_active_links.removeClass("active");
    });

    if (!link_status) {
        closest_li.children("ul").slideDown();
        closest_li.addClass("active");
    }
  });

  /*
  ******************************************************************************
    Carusels
  ******************************************************************************
  */


var sliderNews = {
    margin:0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        loop:true,
        dots:true
      },
      768:{
          items:1,
          nav:false,
          loop:true,
          dots:true,
      },
      1000:{
          items:2,
          loop:true,
          nav:false
      },
      1200:{
          items:3,
          loop:false,
          nav:true,
          dots:false
      }
    }
  };
    $('#sliderNews').owlCarousel(sliderNews);

var instagramPhoto = {
    margin:0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        loop:true,
        dots:true
      },
      768:{
        items:1,
        nav:false,
        loop:true,
        dots:true,
      },
      1000:{
        items:3,
        loop:true,
        nav:false
      },
      1200:{
        items:4,
        loop:false,
        nav:true,
        dots:false
      }
    }
  };
  $('#instagramPhoto').owlCarousel(instagramPhoto);

})(window);
