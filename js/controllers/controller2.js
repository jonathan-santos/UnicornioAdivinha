angular.module('unicornio').controller('Template2Controller', Template2Controller)

function Template2Controller($scope,$firebaseArray,$state, emotionApiService) {

    $scope.url = "";

    $scope.enviar = function(){
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize",
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","cefd8a4df9284c0eb966f96999b1d67a");
            },
            type: "POST",
            data: "{ url: '" + $scope.url + "' }",
        })
        .done(function(data) {
            emotionApiService.SetResultadoApi(data);
        })
        .fail(function() {
            alert("Houve um problema durante a leitura de sua foto, tente novamente ou envie outra foto para mim.")
        });
    };

}