angular.module('unicornio').controller('Template3Controller', Template3Controller)

function Template3Controller($scope,$firebaseArray,$state,$http,emotionApiService) {
    var resultado = emotionApiService.GetResultadoApi();

    $scope.sentimentos = [
        {
            sentimento: 'raiva',
            valor: resultado.scores.anger
        },
        {
            sentimento: 'desprezo',
            valor: resultado.scores.contempt
        },
        {
            sentimento: 'nojo',
            valor: resultado.scores.disgust
        },
        {
            sentimento: 'medo',
            valor: resultado.scores.fear
        },
        {
            sentimento: 'felicidade',
            valor: resultado.scores.happiness
        },
        {
            sentimento: 'neutro',
            valor: resultado.scores.neutral
        },
        {
            sentimento: 'tristeza',
            valor: resultado.scores.sadness
        },
        {
            sentimento: 'surpresa',
            valor: resultado.scores.surprise
        }
    ];

    $scope.maiorEmocao = 1;
    $scope.quote = null;
    var a = 0;

    function encontrarSentimento() {
        if ($scope.maiorEmocao >= $scope.sentimentos[a].valor) {
            $scope.maiorEmocao = $scope.sentimentos[a].sentimento;
            console.log($scope.maiorEmocao);
            a+=1;
            if (a==8) {
                return
            }
        }
    }

    encontrarSentimento();

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

    $scope.reiniciar = function() {
        $state.go('apresentacao');
    }
}
