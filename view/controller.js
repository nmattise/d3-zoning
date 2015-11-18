(function() {
  'use strict';

  angular.module('app.controllers')
    .controller('mainController', ['$scope', function($scope) {
      $scope.color = 'zones';
      $scope.polygon = {
        "points": [{
          "y": 0,
          "x": 0
        }, {
          "y": 0.00031229,
          "x": -47.99894507
        }, {
          "y": 61.75390239,
          "x": -47.9986007
        }, {
          "y": 61.75425928,
          "x": -143.99672044
        }, {
          "y": 0.00066918,
          "x": -143.99683525
        }, {
          "y": 0.00071377,
          "x": -191.99578032
        }, {
          "y": 123.50789398,
          "x": -191.99578033
        }, {
          "y": 123.50718021,
          "x": 0.00091832
        }]
      };

      $scope.polygon = new Polygon($scope.polygon.points);
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
          "points": [{
            "x": -144.38059906,
            "y": 0.00066968
          }, {
            "x": -191.99578032,
            "y": 0.00071377
          }, {
            "x": -191.99578033,
            "y": 123.50789398
          }, {
            "x": -144.38059906,
            "y": 123.50771731
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.33066750653971316
      }, {
        "polygon": {
          "points": [{
            "x": -49.66632366,
            "y": 61.75390871
          }, {
            "x": -143.99672044,
            "y": 61.75425928
          }, {
            "x": -143.99683525,
            "y": 0.00066918
          }, {
            "x": -49.66632366,
            "y": 0.00054614
          }, {
            "x": -144.38059906,
            "y": 0.00066968
          }, {
            "x": -144.38059906,
            "y": 123.50771731
          }, {
            "x": -49.66632366,
            "y": 123.50736497
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.3302077061788909
      }, {
        "polygon": {
          "points": [{
            "x": 0,
            "y": 0
          }, {
            "x": -47.99894507,
            "y": 0.00031229
          }, {
            "x": -47.9986007,
            "y": 61.75390239
          }, {
            "x": -49.66632366,
            "y": 61.75390871
          }, {
            "x": -49.66632366,
            "y": 0.00054614
          }, {
            "x": -49.66632366,
            "y": 123.50736497
          }, {
            "x": 0.00091832,
            "y": 123.50718021
          }]
        },
        "spaceType": "OpenOffice",
        "area": 0.33912478861782197
      }];
    }]);

}());
