angular.module('templates-app', ['home/home.tpl.html', 'saldo/saldo.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row formulario\">\n" +
    "    <div class=\"col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-6 col-md-offset-4 col-md-4\">\n" +
    "        <div class=\"row background\">\n" +
    "\n" +
    "            <form ng-submit=\"getSaldo(bip)\">\n" +
    "                <div class=\"form-group form-group-lg\">\n" +
    "                    <label for=\"bipInput\">Número de tarjeta Bip:</label>\n" +
    "                    <div class=\"input-group\">\n" +
    "                        <span class=\"input-group-addon\"><i class=\"fa fa-credit-card\"></i></span>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"bipInput\" placeholder=\"Tarjeta Bip!\" ng-model=\"bip\" required>\n" +
    "                    </div>\n" +
    "                    \n" +
    "                </div>\n" +
    "                <button ng-disabled=\"wait\" type=\"submit\" class=\"btn btn-primary pull-right\">Consultar saldo <i class=\"fa fa-search\"></i></button>\n" +
    "            </form>\n" +
    "            <div class=\"wait\" ng-show=\"wait\">\n" +
    "                <div class=\"inner-wait\">\n" +
    "                    <i class=\"fa fa-spinner fa-pulse fa-5x\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("saldo/saldo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("saldo/saldo.tpl.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <div class=\"wait\" ng-show=\"wait\">\n" +
    "            <i class=\"fa fa-spinner fa-pulse fa-5x\"></i>\n" +
    "        </div>\n" +
    "        <div class=\"saldo animate-text\" ng-hide=\"wait\">\n" +
    "            <h2 ng-if=\"!error\">Tu saldo es de <strong ng-class=\"textColor\">${{saldo}}</strong> pesos</h2>\n" +
    "            <h3 ng-if=\"error\" class=\"text-danger\">{{mensaje}}</strong></h3>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"col-xs-12 text-center animate-btn\" ng-hide=\"wait\">\n" +
    "    <button type=\"button\" ui-sref=\"home\" class=\"btn btn-primary volver\"><i class=\"fa fa-chevron-circle-left\"></i> Realizar otra busqueda </button>\n" +
    "</div>\n" +
    "");
}]);
