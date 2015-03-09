var bipApiService = angular.module('bipApiService', ['ngResource']);

var baseUrl = "http://localhost:8888/bip/index.php/";

bipApiService.service("saldoApi", ['$resource', function($resource) {
        var saldoApi = {};

        saldoApi.saldo = function() {
            var url = "saldo/:bip";
            return $resource(baseUrl+url);
        };
        return saldoApi;
    }]);
