angular.module('unicornio').controller('Template2Controller', Template2Controller)

function Template2Controller($scope,$firebaseArray,$state,$http, emotionApiService) {

    $scope.url = "";

    $scope.enviar = function(){

        $http({
            method: 'POST',
            url: 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': 'cefd8a4df9284c0eb966f96999b1d67a'
            },
            data: "{ url: '" + $scope.url + "' }"
        }).then(function(respostaSucesso){
            emotionApiService.SetResultadoApi(respostaSucesso.data[0]);
            $scope.enviado = true;
        }, function(respostaErro){
            console.log("Resposta erro: " + respostaErro);
        });
    };

    $scope.enviado = false;

    $scope.continuar = function(){
        $state.go("resultado");
    };
}