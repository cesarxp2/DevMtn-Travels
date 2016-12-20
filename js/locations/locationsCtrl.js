angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv) {

 $scope.allVacs = mainSrv.travelInfo;

})
