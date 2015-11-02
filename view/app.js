//Definate App
angular.module('app', [
  'app.controllers',
  'app.directives'
]);
//Add modules to app
angular.module('d3', []);
angular.module('app.controllers', []);
angular.module('app.directives', ['d3']);
