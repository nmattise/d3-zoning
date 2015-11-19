(function() {
  'use strict';

  angular.module('app.directives')
    .directive('d3View', ['d3', function(d3) {
      return {
        scope: {
          polygon: "=",
          zones: "=",
          bounding: "=",
          size: "=",
          color: "="
        },
        link: function(scope, iElement, iAttrs) {

          var margin = {
            top: 30,
            right: 30,
            bottom: 30,
            left: 30
          };
          var rangeMax = Math.max(scope.bounding.w, scope.bounding.h);
          rangeMax = Math.ceil(rangeMax / 10) * 150;
          console.log(scope.size);
          console.log(rangeMax);
          scope.size.height = scope.size.width = rangeMax;
          var xScale = d3.scale.linear()
            .domain([scope.bounding.x, scope.bounding.x + scope.bounding.w])
            .range([0, scope.size.width]);
          var yScale = d3.scale.linear()
            .domain([scope.bounding.y, scope.bounding.y + scope.bounding.h])
            .range([scope.size.height, 0]);


          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .innerTickSize(-scope.size.height)
            .outerTickSize(0)
            .tickPadding(10);

          var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .innerTickSize(-scope.size.width)
            .outerTickSize(0)
            .tickPadding(10);
          var line = d3.svg.line()
            .x(function(d) {
              return xScale(d.x);
            })
            .y(function(d) {
              return yScale(d.y);
            });
          var svg = d3.select(iElement[0]).append("svg")
            .attr("width", scope.size.width + margin.left + margin.right)
            .attr("height", scope.size.height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + scope.size.height + ")")
            .call(xAxis);

          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
          //Draw Zones
          scope.render = function(zones, color) {
            svg.selectAll("path").remove();
            var fill;
            console.log(color);
            for (var i = 0; i < zones.length; i++) {
              if (color == 'zones') {
                if (zones[i].zone == 'Perimeter') {
                  fill = '#2ECC40';
                } else {
                  fill = '#001f3f';
                }
              } else if (color == 'spaceType') {
                fill = '#FF4136';
              }

              // console.log(zones[i].polygon.points);
              svg.append('path')
                .attr('d', line(zones[i].polygon.points))
                .attr("stroke-width", 1)
                .attr("stroke", "black")
                .attr("fill", fill);
            }
          };
          console.log(scope.color);
          scope.$watch('zones', function(newVals, oldVals) {
            return scope.render(newVals, scope.color);
          }, true);
          scope.$watch('color', function(newVals, oldVals) {
            console.log(newVals);
            console.log(oldVals);
            return scope.render(scope.zones, newVals);
          }, true);

        }
      };
    }]);

}());
