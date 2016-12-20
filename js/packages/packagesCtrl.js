angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv) {

$scope.allVacs = mainSrv.travelInfo;

})
