angular.module('unicornio').controller('Template2Controller', Template2Controller)

function Template2Controller($scope,$firebaseArray,$state,$http, emotionApiService) {

    $scope.url = "";

    $scope.enviar = function(){
        $scope.arquivo = document.querySelector("#arquivo-imagem").files[0];

        if($scope.url == "" && $scope.arquivo == undefined)
        {
            alert("Por favor preencha o campo de link da imagem ou envie uma imagem");
            return;
        }
        else
        {
            var seArquivo = $scope.arquivo != undefined
            if(seArquivo) {
                var arquivo = new FileReader();
                var arquivoURL = new FileReader();
                arquivo.onloadend = function (e) {
                    var binarioArquivo = new Uint8Array(arquivo.result);
                    var request = new XMLHttpRequest();
                    request.open('POST', 'https://UnicornioAdivinha.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01')
                    request.setRequestHeader('Content-Type', 'application/octet-stream')
                    request.setRequestHeader('Ocp-Apim-Subscription-Key', '25ced731f0c34226aa8fcf40b92f2873')
                    request.onreadystatechange = function(e) {
                        if(request.status == 200) {
                            var resposta = JSON.parse(request.response);
                            terminadoChamada(resposta[0])
                        }
                    }
                    request.send(binarioArquivo);
                }
                arquivoURL.onloadend = function(e) {
                    $scope.url = arquivoURL.result;
                }
                arquivoURL.readAsDataURL($scope.arquivo)
                arquivo.readAsArrayBuffer($scope.arquivo)
            }
            else {
                $http({
                    method: 'POST',
                    url: 'https://UnicornioAdivinha.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion&recognitionModel=recognition_01&returnRecognitionModel=false&detectionModel=detection_01',
                    headers: {
                        'Content-Type': 'application/json',
                        'Ocp-Apim-Subscription-Key': '25ced731f0c34226aa8fcf40b92f2873'
                    },
                    data:"{ url: '" + $scope.url + "' }",
                    }).then(function(respostaSucesso){
                        terminadoChamada(respostaSucesso.data[0]);
                    }, function(respostaErro){
                        alert("Houve um erro na leitura de sua foto, por favor tente novamente ou envie outra foto.");
                    });
            }

            function terminadoChamada(resultado) {
                emotionApiService.SetResultadoApi(resultado);
                $scope.enviado = true;
            }
        }
    };

    $scope.enviado = false;

    $scope.continuar = function(){
        $state.go("resultado");
    };
}
