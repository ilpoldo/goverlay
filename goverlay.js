/*!
 * Goverlay v 0.1.0 Easy Grid Overlay for jQuery and Raphaeljs
 *
 * Copyright (c) 2010 Leandro Pedroni (http://github.com/ilpoldo)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */

jQuery.goverlay = function (column, gutter, row, container) {
  
    var overlay = null;
    var paper = null;
    if (!container) {var container = $('#container')};
    var Grid = {
      columns: function(){
        var x_coorinates = [];
        var x = 0;
        x_coorinates.push(x);
        while (x<=container.width()) {
          x+=(column+gutter);
          x_coorinates.push(x);
        }
        return x_coorinates;
      },
      rows: function(){
        var y_coorinates = [];
        var y = 0;
        y_coorinates.push(y);
        while (y<=container.height()) {
          y+=row;
          y_coorinates.push(y);
        }
        return y_coorinates;
      },
      render: function () {
        var columns = this.columns();
        var rows = this.rows();
        for (i in columns) {
          paper.rect(columns[i], 0, column, container.height())
            .attr("opacity", 0.2)
            .attr("fill", "#66b")
            .attr("stroke-opacity", 0);
        };
        for (i in rows) {
          paper.path("M0 "+rows[i]+"L"+container.width()+" "+rows[i])
            .attr("opacity", 0.2)
            .attr("stroke", "#66b");
        };
      },
      toggle: function() {
        if (overlay.is(':hidden')) {
          overlay.show();
        }else{
          overlay.hide();}
      }
    };
  
    $(window).keypress(function(event) {
      if (event.which == 7 && event.shiftKey == true) {
        // The grid overlay is created only when it's called the first time
        if (!overlay) {
          overlay = $("<div id=goverlay />").css("height", 0).css("float", "left");
          container.prepend(overlay);
          paper = Raphael(overlay[0] , container.width(), container.height());
          Grid.render();
        } else { Grid.toggle(); }
      }
    });
};