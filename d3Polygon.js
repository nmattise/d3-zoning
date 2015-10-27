(function() {
  'use strict';

  angular.module('app.directives')
    .directive('d3Bars', ['d3', function(d3) {
      return {
        scope: {
          data: "=",
          offset: "=",
          onClick: "&" // parent execution binding
        },
        link: function(scope, iElement, iAttrs) {
          var svg = d3.select(iElement[0]);
          // console.log(svg)
          // console.log(iElement[0].parentElement.clientWidth);
          // console.log(iElement[0].parentElement.clientHeight);
          var scaler = {
            x: (iElement[0].parentElement.clientWidth - 5) / scope.offset.w,
            y: (iElement[0].parentElement.clientHeight - 5) / scope.offset.h
          };
          // console.log(scaler);
          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);
          var lineFunction = d3.svg.line()
            .x(function(d) {
              // console.log(d);
              return (d.x) * scaler.x;
            })
            .y(function(d) {
              return (-d.y + (scope.offset.h + scope.offset.y)) * scaler.y;
            })
            .interpolate('linear');
          // define render function
          var fill;
          // console.log(scope.offset);
          scope.render = function(data) {
            svg.selectAll("*").remove();
            var fill;
            if (data.type == 'Perimeter') {
              fill = 'green';
            } else {
              fill = 'blue';
            }

            svg.append('path')
              .attr('d', lineFunction(data.polygon.points))
              .on("click", function(d, i) {
                console.log('clicked');
                return scope.onClick({
                  item: 'data'
                });
              })
              .attr("stroke-width", 1)
              .attr("stroke", "black")
              .attr("fill", fill);

          };
        }
      };
    }]);

}());
