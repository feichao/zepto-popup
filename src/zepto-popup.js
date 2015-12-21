(function($) {
  'use strict';

  var ZeptoPopup = function(ele, options) {
    return {
      options: {
        direction: 'under',
        height: '80%'
      },
      init: function() {
        this.options = $.extend(true, this.options, options);
        ele.addClass('z-popup').css('max-height', this.options.height);
      },
      wrap: function() {
        var eleParent = ele.parent();
        if (eleParent.hasClass('zepto-popup')) {
          this.options.wrapElement = eleParent;
        } else {
          var random = Math.random() * 1000000;
          this.options.id = 'zepto-popup-' + random;
          ele.wrap('<div id="' + this.options.id + '" class="zepto-popup"></div>');
          this.options.wrapElement = $(document.getElementById(this.options.id));
        }
      },
      show: function() {
        this.options.wrapElement.addClass('show');
        ele.show();
      },
      close: function(){
        this.options.wrapElement.removeClass('show');
      },
      showToast: function(msg, timeout) {
        ele.addClass('show');
        ele.text(msg);

        this.options.toastTimeout && clearTimeout(this.options.toastTimeout);

        this.options.toastTimeout = setTimeout(function() {
          ele.removeClass('show');
        }, timeout || 4500);
      }
    };
  };

  $.fn.ZPopup = function(options) {
    if (options === 'toast') {
      var $this = $(this);
      $this.hasClass('zepto-popup-toast') || $this.addClass('zepto-popup-toast');
      return new ZeptoPopup($(this));
    } else {
      var zeptoPopup = new ZeptoPopup($(this), options);
      zeptoPopup.init();
      zeptoPopup.wrap();
      return zeptoPopup;
    }
  };


})(Zepto);
