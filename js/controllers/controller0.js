angular.module('unicornio').controller('Template0Controller', Template0Controller)

function Template0Controller($scope,$firebaseArray,$state) {
    $scope.comecar = function() {
        $state.go('introducao')
    }
}
