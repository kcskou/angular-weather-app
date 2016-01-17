app.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
    
    $scope.submit = function () {
        $location.path("/forecast");
    };
    
}]);

app.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {
    
    $scope.city = cityService.city;
    
    $scope.days = $routeParams.days || '2';
  
    $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
    
    console.log($scope.weatherResult);
    
    $scope.degreeKToF = function (degK) {
        return 1.8 * (degK - 273.15) + 32;
    };
    
    $scope.degreeKToC = function (degK) {
        return degK - 273.15;
    };
    
    $scope.toDate = function (datetime) {
        return new Date(datetime * 1000);
    };
    
    $scope.isDefined = function (variable) {
        return typeof variable !== 'undefined';
    };
        
}]);