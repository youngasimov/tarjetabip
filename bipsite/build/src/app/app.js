angular.module('saldoBip', [
    'templates-app',
    'templates-common',
    'saldoBip.home',
    'saldoBip.saldo',
    'ui.router',
    'ngAnimate',
    'ngVidBg'
])

        .config(['$urlRouterProvider', function($urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        }])

        .run(function run() {
        })

        .controller('AppCtrl', ['$scope', function ($scope) {


                $scope.video = {
                    resources: ["assets/santiago.mp4"],
                    poster: "assets/santiago.jpg",
                    fullscreen: true,
                    muted: true,
                    z: 99,
                    pause: false,
                    loop: true,
                    autoplay: true,
                    control: false
                };
                $scope.mediaAction = "Pausar";
                $scope.mediaIcon = "glyphicon-pause";
                $scope.toggleMedia = function () {
                    $scope.video.pause = !$scope.video.pause;
                    if (!$scope.video.pause) {
                        $scope.mediaAction = "Pausar";
                        $scope.mediaIcon = "glyphicon-pause";
                    } else {
                        $scope.mediaAction = "Reproducir";
                        $scope.mediaIcon = "glyphicon-play";
                    }
                };

            }])

        ;

