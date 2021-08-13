// Animated element removal
function cuteHide(el) {
  el.animate({opacity: '0'}, 150, function(){
    el.animate({height: '0px'}, 150, function(){
      el.remove();
    });
  });
}

$('.delete').on('click', function(){
  var el = $(this).closest('.country');
  cuteHide(el);
});