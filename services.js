app.service('cityService', function () {
    
    this.city = "Vancouver, Canada";
    
});

app.service('weatherService', ['$resource', function($resource) {
    
    this.getWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=d4c6ec0990cf92e95d45ee8b91b317fb",
                                   { callback: "JSON_CALLBACK" },
                                   { get: { method: "JSONP" }});
  
        return weatherAPI.get({ q: city, cnt: days });
    };
    
}]);