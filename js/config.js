angular.module('unicornio').config(rotas);

function rotas($stateProvider, $urlRouterProvider) {
    $stateProvider.state('template0', {
        templateUrl: 'templates/template0.html',
        controller: 'Template0Controller',
        url: '/template0'
    });

    $stateProvider.state('template1', {
        templateUrl: 'templates/template1.html',
        controller: 'Template1Controller',
        url: '/template1'
    });

    $stateProvider.state('template2', {
        templateUrl: 'templates/template2.html',
        controller: 'Template2Controller',
        url: '/template2'
    });

    $stateProvider.state('template3', {
        templateUrl: 'templates/template3.html',
        controller: 'Template3Controller',
        url: '/template3'
    });

    $urlRouterProvider.otherwise('/template0');
}
