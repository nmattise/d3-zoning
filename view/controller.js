(function() {
  'use strict';

  angular.module('app.controllers')
    .controller('mainController', ['$scope', function($scope) {
      $scope.color = 'zones';
      $scope.polygon = {
        points: [{
          x: 0,
          y: 5
        }, {
          x: 0,
          y: 15
        }, {
          x: 15,
          y: 15
        }, {
          x: 15,
          y: 5
        }, {
          x: 10,
          y: 5
        }, {
          x: 10,
          y: 0
        }, {
          x: 5,
          y: 0
        }, {
          x: 5,
          y: 5
        }]
      };

      $scope.polygon = new Polygon($scope.polygon.points);
      console.log($scope.polygon.area());
      var aabb = $scope.polygon.aabb();
      //Close Polygon
      $scope.polygon.insert($scope.polygon.point(0), $scope.polygon.length);
      //Bounding Box
      $scope.bounding = $scope.polygon.aabb();
      $scope.size = {
        width: 400,
        height: 400
      };

      $scope.zones = [{
        "polygon": {
          points: [{
            x: 0,
            y: 5
          }, {
            x: 0,
            y: 15
          }, {
            x: 5.52,
            y: 15
          }, {
            x: 5.52,
            y: 0
          }, {
            x: 5,
            y: 0
          }, {
            x: 5,
            y: 5
          }, {
            x: 5.52,
            y: 5
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.33066750653971316
      }, {
        "polygon": {
          points: [{
            x: 5.52,
            y: 15
          }, {
            x: 9.37836,
            y: 15
          }, {
            x: 9.37836,
            y: 0
          }, {
            x: 5.52,
            y: 0
          }, {
            x: 5.52,
            y: 5
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.3302077061788909
      }, {
        "polygon": {
          points: [{
            x: 9.37836,
            y: 15
          }, {
            x: 15,
            y: 15
          }, {
            x: 15,
            y: 5
          }, {
            x: 10,
            y: 5
          }, {
            x: 10,
            y: 0
          }, {
            x: 9.37836,
            y: 0
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.33912478861782197
      }];

    }]);

}());
