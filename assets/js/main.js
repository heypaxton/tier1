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
  // _tOne.setEqualHeights($('.product-card .inner'));

  _tOne.toggleProductList = function() {
    $('.product-list-tabs .btn').click(function() {
      if ($(this).hasClass('historical')) {
        $('.product-list').hide();
        $('.product-list.historical').fadeIn();
      }

      if ($(this).hasClass('ledgestone')) {
        $('.product-list').hide();
        $('.product-list.ledgestone').fadeIn();
      }

      if ($(this).hasClass('timberline')) {
        $('.product-list').hide();
        $('.product-list.timberline').fadeIn();
      }

      if ($(this).hasClass('slimline')) {
        $('.product-list').hide();
        $('.product-list.slimline').fadeIn();
      }

      $('.product-list-tabs .btn').removeClass('active');
      $(this).addClass('active');
    });
  }
  // _tOne.toggleProductList();

})(jQuery)
