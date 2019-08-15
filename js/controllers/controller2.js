angular.module('unicornio').controller('Template2Controller', Template2Controller)

function Template2Controller($scope,$firebaseArray,$state,$http, emotionApiService) {

    $scope.url = "";

    $scope.enviar = function(){

        if($scope.url == "")
        {
            alert("Por favor preencha o campo de link da imagem");
            return;
        }
 
        else
        {
            $http({
            method: 'POST',
            url: 'https://UnicornioAdivinha.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': '25ced731f0c34226aa8fcf40b92f2873'
            },
            data: "{ url: '" + $scope.url + "' }"
            }).then(function(respostaSucesso){
                emotionApiService.SetResultadoApi(respostaSucesso.data[0]);
                $scope.enviado = true;
            }, function(respostaErro){
                alert("Houve um erro na leitura de sua foto, por favor tente novamente ou envie outra foto.");
            });
        }
    };

    $scope.enviado = false;

    $scope.continuar = function(){
        $state.go("resultado");
    };
}
