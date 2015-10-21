(function() {
  'use strict';

  angular.module('app.directives')
    .directive('d3Bars', ['d3', function(d3) {
      return {
        scope: {
          data: "=",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {
          var svg = d3.select(iElement[0]);
          console.log(svg)

          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);
          var lineFunction = d3.svg.line()
            .x(function(d) {
              console.log(d);
              return d.x + 5;
            })
            .y(function(d) {
              return -d.y + 5;
            })
            .interpolate('linear');
          // define render function
          scope.render = function(data) {
            svg.selectAll("*").remove();
            svg.append('path')
              .attr('d', lineFunction(data.polygon.points))
              .attr("stroke-width", 2)
              .attr("stroke", "black")
              .attr("fill", "green");

          };
        }
      };
    }]);

}());
