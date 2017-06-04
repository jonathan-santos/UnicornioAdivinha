angular.module('unicornio').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    $stateProvider.state('template0', {
        templateUrl: 'templates/template0.html',
        controller: 'Template0Controller',
        url: '/apresentacao'
    });

    $stateProvider.state('template1', {
        templateUrl: 'templates/template1.html',
        controller: 'Template1Controller',
        url: '/introducao'
    });

    $stateProvider.state('template2', {
        templateUrl: 'templates/template2.html',
        controller: 'Template2Controller',
        url: '/le-emocao'
    });

    $stateProvider.state('template3', {
        templateUrl: 'templates/template3.html',
        controller: 'Template3Controller',
        url: '/resultado'
    });

    $urlRouterProvider.otherwise('/index');
}
