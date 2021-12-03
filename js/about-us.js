
//   =======wow js linking
new WOW().init();

// ===== progress bar
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per}, {
     duration: 1800,
     step: function(){
         $this.attr('per', Math.floor(this.animatedValue) + '%');
     },
     complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
    }
    });
});
// ==== video popup js
$('.popup_video').magnificPopup({
    type: 'iframe',
  });
// menu sidebar start here
$(document).ready(function(){
    $('.hamberger_menu').click(function(){
      $('.sidebar').toggleClass('show_menu');
    });
  });