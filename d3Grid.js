(function() {
  'use strict';

  angular.module('app.directives')
    .directive('d3Grid', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: '='
        },
        link: function(scope, iElement, iAttrs) {
          // console.log(scope.data);
          var margin = {
              top: 20,
              right: 100,
              bottom: 30,
              left: 100
            },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

          var xScale = d3.scale.linear()
            .domain([0, d3.max(scope.data, function(d) {
              return d.x;
            })])
            .range([0, width]);

          var yScale = d3.scale.linear()
            .domain([0, d3.max(scope.data, function(d) {
              return d.y;
            })])
            .range([height, 0]);
          console.log(xScale(1))
          console.log(yScale(1))
          var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .innerTickSize(-height)
            .outerTickSize(0)
            .tickPadding(10);

          var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .innerTickSize(-width)
            .outerTickSize(0)
            .tickPadding(10);

          var line = d3.svg.line()
            .x(function(d) {
              return xScale(d.x);
            })
            .y(function(d) {
              return yScale(d.y);
            });

          var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)

          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

          svg.append("path")
            .data([scope.data])
            .attr("class", "line")
            .attr("d", line);
        }
      };
    }]);

}());
