var angular = require("angular");
require('../src/css/common.css');
require('../src/components/layer/layer.scss');
var img1 = document.createElement("img");
img1.src = require("url-loader?limit=10000!../src/images/logo.png");
document.body.appendChild(img1);
var myApp=angular.module('exampleApp',[]);
module.exports = myApp;
myApp.controller('dayCtrl',function($scope){
  $scope.day=new Date().getDay();
});
