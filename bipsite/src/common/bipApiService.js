var bipApiService = angular.module('bipApiService', ['ngResource']);

var baseUrl = "/bip/api/index.php/";

bipApiService.service("saldoApi", ['$resource', function($resource) {
        var saldoApi = {};

        saldoApi.saldo = function() {
            var url = "saldo/:bip";
            return $resource(baseUrl+url);
        };
        return saldoApi;
    }]);
