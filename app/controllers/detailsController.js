app.controller('DetailsController', function ($scope, $routeParams, $location, serverService) {
    "use strict";

    var goBack = function() {
        $location.path('list');
    };

    init();

    function init() {
        var cityId = $routeParams['itemId'];

        var cityPromise = serverService.get('cities/' + cityId);
        cityPromise.then(function(cityResult) {
            $scope.item = cityResult;
        });

        $scope.goBack = goBack;
    }

});