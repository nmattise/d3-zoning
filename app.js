angular.module('app', [
  'app.controllers',
  'app.directives'
]);

angular.module('d3', []);
angular.module('app.controllers', []);
angular.module('app.directives', ['d3']);
