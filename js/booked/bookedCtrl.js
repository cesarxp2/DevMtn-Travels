angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams){

for (var i = 0; i < mainSrv.travelInfo.length; i++){
  if ($stateParams.id === '112233') {
    $scope.pic2Show = mainSrv.travelInfo[0];
  }
  else if ($stateParams.id === '1122343') {
    $scope.pic2Show = mainSrv.travelInfo[1];
  }
  else if ($stateParams.id === '11223489') {
    $scope.pic2Show = mainSrv.travelInfo[2];
  }
}


})
