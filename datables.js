/**
 * D-A-Tables (Data Attribute Tables)
 *
 * Credit to Stanimir Genov
 * http://css-tricks.com/responsive-data-tables/#comment-785289
 */
(function($){
  $.fn.dATables = function(options) {

    var
      defaults = {
        attrName: 'heading'
      },
      settings = $.extend({}, defaults, options);

      this.each(function() {
        var table = $(this);

        table.find('tbody td').each(function() {
          var td = $(this);
          var attrName = 'data-' + settings.attrName;
          // For each td find its corresponding title in the thead
          // then set the title in the data-heading attribute
          td.attr(attrName,table.find('thead th:nth-child('+(td.index()+1)+')').text());
        });

      });
      return this;
  }
})(jQuery);
