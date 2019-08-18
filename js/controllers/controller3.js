angular.module('unicornio').controller('Template3Controller', Template3Controller)

function Template3Controller($scope,$firebaseArray,$state,$http,emotionApiService) {
    var resultadoApi = emotionApiService.GetResultadoApi();
    var resultado = resultadoApi.faceAttributes.emotion

    $scope.sentimentos = [
        {
            sentimento: 'raiva',
            valor: resultado.anger
        },
        {
            sentimento: 'desprezo',
            valor: resultado.contempt
        },
        {
            sentimento: 'nojo',
            valor: resultado.disgust
        },
        {
            sentimento: 'medo',
            valor: resultado.fear
        },
        {
            sentimento: 'felicidade',
            valor: resultado.happiness
        },
        {
            sentimento: 'neutro',
            valor: resultado.neutral
        },
        {
            sentimento: 'tristeza',
            valor: resultado.sadness
        },
        {
            sentimento: 'surpresa',
            valor: resultado.surprise
        }
    ];

    $scope.maiorEmocao = 0;
    $scope.quote = null;

    function encontrarSentimento() {
        for (var i = 0; i < 8; i++) {
            if ($scope.maiorEmocao <= $scope.sentimentos[i].valor) {
                $scope.maiorEmocao = $scope.sentimentos[i].valor;
                $scope.sentimento = $scope.sentimentos[i].sentimento;
            }
        }
    }

    encontrarSentimento();

    document.body.classList.add($scope.sentimento);
    document.querySelector('.caixa-resultado').classList.add($scope.sentimento);

    var parametros = {
        Method: 'GET',
        url: 'https://api.quotable.io/random'
    }

    $http(parametros).then(function(resposta) {
        $scope.quote = resposta.data.content;
        $scope.author = resposta.data.author;
    }, function() {
        $scope.erro = true;
        $scope.quote = '';
    });

    $scope.reiniciar = function() {
        document.body.classList.remove($scope.sentimento);
        document.querySelector('.caixa-resultado').classList.remove($scope.sentimento);
        $state.go('le-emocao');
    }

}
