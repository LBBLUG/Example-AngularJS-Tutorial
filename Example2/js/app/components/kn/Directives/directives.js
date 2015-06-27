'use strict';

angular.module('my.Directives')

.directive('bodyBlock', [function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'js/app/components/kn/Directives/bodyBlock.html'

  };
}])

.directive('nameListBlock', [function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'js/app/components/kn/Directives/nameBlock.html',
    scope: {
    	data: '='
    }
  };
}])

;