(function($) {
  var _tOne = {};

  _tOne.toggleCardDetails = function() {
    $('.product-card .btn.reveal, .product-card .btn.dismiss').click(function(e) {
      e.preventDefault();

      var details = $(this).parents('.product-card .inner').find('.details');

      details.slideToggle();
    });
  };
  _tOne.toggleCardDetails();

  _tOne.setEqualHeights = function(arrOfElems) {
    arrOfElems.each(function(){
      var elemHeight = $(this).height();
      var currHeight = 0;
      if (elemHeight > currHeight) {
        arrOfElems.css({ height: elemHeight + "px"});
      } else {
        arrOfElems.css({ height: currHeight + "px"});
      }
    });
  };

  _tOne.slider = function() {
    $('.slider').slick({
      autoplay: true,
      dots: true,
    });
  };
  _tOne.slider();

})(jQuery)
