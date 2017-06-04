angular.module('unicornio').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    $stateProvider.state('apresentacao', {
        templateUrl: 'templates/template0.html',
        controller: 'Template0Controller',
        url: '/apresentacao'
    });

    $stateProvider.state('introducao', {
        templateUrl: 'templates/template1.html',
        controller: 'Template1Controller',
        url: '/introducao'
    });

    $stateProvider.state('le-emocao', {
        templateUrl: 'templates/template2.html',
        controller: 'Template2Controller',
        url: '/le-emocao'
    });

    $stateProvider.state('resultado', {
        templateUrl: 'templates/template3.html',
        controller: 'Template3Controller',
        url: '/resultado'
    });

    $urlRouterProvider.otherwise('/apresentacao');
}
