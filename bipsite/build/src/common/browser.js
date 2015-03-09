var browser = angular.module('browser', []);

browser.service('browser', ['$window', function($window) {
        var browser = {};
        browser.agent = function() {
            var ua = $window.navigator.userAgent;
            var tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/);
                if (tem !== null) {
                    return 'Opera ' + tem[1];
                }
            }
            M = M[2] ? [M[1], M[2]] : [$window.navigator.appName, $window.navigator.appVersion, '-?'];
            tem = ua.match(/version\/(\d+)/i);
            if (tem !== null) {
                M.splice(1, 1, tem[1]);
            }
            return M[0];
        };

        browser.version = function() {
            var ua = $window.navigator.userAgent;
            var tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE ' + (tem[1] || '');
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/);
                if (tem !== null) {
                    return 'Opera ' + tem[1];
                }
            }
            M = M[2] ? [M[1], M[2]] : [$window.navigator.appName, $window.navigator.appVersion, '-?'];
            tem = ua.match(/version\/(\d+)/i);
            if (tem !== null) {
                M.splice(1, 1, tem[1]);
            }
            return M[1];
        };
        
        return browser;

    }]);

