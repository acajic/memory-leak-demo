app.controller('ListController', function ($scope, $location, serverService) {
    "use strict";

    var selectItem = function(item) {
        $location.path('details/' + item.id);
    };

    init();

    function init() {
        var citiesPromise = serverService.get('cities');
        citiesPromise.then(function(citiesResult) {
            $scope.list = citiesResult;
        });

        $scope.selectItem = selectItem;
    }

});