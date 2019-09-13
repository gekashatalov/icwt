$(document).ready(function() {

  var topMenu = $('.menuBar'),
      viewport = Math.max(document.documentElement.clientWidth, window.innerWidth);


  topMenu.click(function(){
      $('.menuBar').toggleClass('menuBar_active');
      if(viewport < 480) {
        if(topMenu.hasClass('menuBar_active')){
            $('html, body').css({'overflow-y':'hidden'});
        }else{
            $('html, body').css({'overflow-y':'initial'});
        }

     
      }
  });
});
