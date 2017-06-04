angular.module('unicornio').controller('Template3Controller', Template3Controller)

function Template3Controller($scope,$firebaseArray,$state,$http) {
    $scope.quote = null;

    var parametros = {
        Method: 'GET',
        url: 'http://www.quotzzy.co/api/quote'
    }

    $http(parametros).then(function(resposta) {
        $scope.quote = resposta.data.text;
        $scope.author = resposta.data.author.name;
    }, function() {
        $scope.erro = true;
        $scope.quote = '';
    });
}
