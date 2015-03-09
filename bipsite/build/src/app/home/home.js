angular.module('saldoBip.home', [
    'ui.router'
])

        /**
         * Each section or module of the site can also have its own routes. AngularJS
         * will handle ensuring they are all available at run-time, but splitting it
         * this way makes each module more "self-contained".
         */
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state('home', {
                    url: '/home',
                    templateUrl: 'home/home.tpl.html',
                    controller: 'HomeCtrl'
                });
            }])

        /**
         * And of course we define a controller for our route.
         */
        .controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {
                $scope.getSaldo = function (bip) {
                    var data = {'bip': bip};
                    $state.go('saldo',data);
                };
            }])
        ;

