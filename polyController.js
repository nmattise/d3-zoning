(function() {
  'use strict';

  angular.module('app.controllers')
    .controller('polyController', ['$scope', function($scope) {
      $scope.title = "polyController";
      $scope.polygon = {
        "points": [{
          "y": 0,
          "x": 0
        }, {
          "y": 142.22683276,
          "x": 65.40891342
        }, {
          "y": -31.18250842,
          "x": 227.41158655
        }, {
          "y": -152.87549424,
          "x": 79.10005503
        }]
      };
      $scope.dataset = [{
        x: 0,
        y: 5
      }, {
        x: 1,
        y: 8
      }, {
        x: 2,
        y: 13
      }, {
        x: 3,
        y: 12
      }, {
        x: 4,
        y: 16
      }, {
        x: 5,
        y: 21
      }, {
        x: 6,
        y: 18
      }, {
        x: 7,
        y: 23
      }, {
        x: 8,
        y: 24
      }, {
        x: 9,
        y: 28
      }, {
        x: 10,
        y: 35
      }, {
        x: 11,
        y: 30
      }, {
        x: 12,
        y: 32
      }, {
        x: 13,
        y: 36
      }, {
        x: 14,
        y: 40
      }, {
        x: 15,
        y: 38
      }, ];
      $scope.polygon = new Polygon($scope.polygon.points);
      $scope.boundingBox = $scope.polygon.aabb();
      $scope.center = $scope.polygon.center();

      $scope.d3OnClick = function(item) {
        console.log(item);
      };
      $scope.zones = [{
        "polygon": {
          "points": [{
            "x": 79.10005503,
            "y": -152.87549424
          }, {
            "x": 227.41158655,
            "y": -31.18250842
          }, {
            "x": 213.05384465,
            "y": -30.23162393
          }, {
            "x": 82.25501248,
            "y": -137.55504162
          }]
        },
        "spaceType": "OpenOffice",
        "area": 1776.7800556328593,
        "percent": 0.0532905339455059,
        "type":'Perimeter'
      }, {
        "polygon": {
          "points": [{
            "x": 227.41158655,
            "y": -31.18250842
          }, {
            "x": 65.40891342,
            "y": 142.22683276
          }, {
            "x": 68.22533019,
            "y": 124.79431967
          }, {
            "x": 213.05384465,
            "y": -30.23162393
          }]
        },
        "spaceType": "OpenOffice",
        "area": 2211.914020641357,
        "percent": 0.06634140158644672,
        "type":'Perimeter'
      }, {
        "polygon": {
          "points": [{
            "x": 65.40891342,
            "y": 142.22683276
          }, {
            "x": 0,
            "y": 0
          }, {
            "x": 10.95042125,
            "y": 0.25427653
          }, {
            "x": 68.22533019,
            "y": 124.79431967
          }]
        },
        "spaceType": "OpenOffice",
        "area": 1445.0070230504607,
        "percent": 0.04333974572105214,
        "type":'Perimeter'
      }, {
        "polygon": {
          "points": [{
            "x": 0,
            "y": 0
          }, {
            "x": 79.10005503,
            "y": -152.87549424
          }, {
            "x": 82.25501248,
            "y": -137.55504162
          }, {
            "x": 10.95042125,
            "y": 0.25427653
          }]
        },
        "spaceType": "OpenOffice",
        "area": 1610.6827473751157,
        "percent": 0.0483088176008716,
        "type":'Perimeter'
      }, {
        "polygon": {
          "points": [{
            "x": 82.25501248,
            "y": -137.55504162
          }, {
            "x": 213.05384465,
            "y": -30.23162393
          }, {
            "x": 68.22533019,
            "y": 124.79431967
          }, {
            "x": 10.95042125,
            "y": 0.25427653
          }]
        },
        "spaceType": "OpenOffice",
        "area": 26296.998272867037,
        "percent": 0.7887195011461237,
        "type":'Core'
      }];



    }]);

}());
