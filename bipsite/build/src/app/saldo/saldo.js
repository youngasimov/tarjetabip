angular.module('saldoBip.saldo', [
    'ui.router',
    'bipApiService'
])

        /**
         * Each section or module of the site can also have its own routes. AngularJS
         * will handle ensuring they are all available at run-time, but splitting it
         * this way makes each module more "self-contained".
         */
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider.state('saldo', {
                    url: '/saldo/:bip',
                    templateUrl: 'saldo/saldo.tpl.html',
                    controller: 'SaldoCtrl'
                });
            }])

        /**
         * And of course we define a controller for our route.
         */
        .controller('SaldoCtrl', ['$scope', '$stateParams', 'saldoApi', function ($scope, $stateParams, saldoApi) {
                $scope.wait = true;
                var data = {'bip': $stateParams.bip};
                saldoApi.saldo().get(data, function (saldo) {
                    $scope.wait = false;
                    $scope.error = false;
                    $scope.saldo = saldo.saldo;
                    if(parseInt($scope.saldo.replace(".",""))>700){
                        $scope.textColor = "text-success";
                    }else{
                        $scope.textColor = "text-danger";
                    }
                    
                }, function (error) {
                    $scope.wait = false;
                    $scope.error = true;
                    $scope.mensaje = error.data.error;
                });
            }])
        ;
