function CityManager() {
    var self = this;
    
    self.cities = ko.observableArray([]);
    
    self.GenerateCities = function (numberOfCities, generateCircle) {
        
        self.cities([]);
        
        if(generateCircle)
            self.GenerateCitiesCircle(numberOfCities);
        //console.log(self.cities);
    };
    
    self.GenerateCitiesCircle = function (numberOfCities) {
        var circleRadius = 280;
        var circleCenterX = 400;
        var circleCenterY = 300;
        
        var newCityList = [];
        
        var radiansPerCity = (Math.PI * 2) / numberOfCities;
        
        for (var i = 0; i < numberOfCities; i++)
        {
            var pointX = parseInt((Math.cos(radiansPerCity * i) * circleRadius) + circleCenterX);
            var pointY = parseInt((Math.sin(radiansPerCity * i) * circleRadius) + circleCenterY);
            
            newCityList.push(new City(pointX, pointY));
        }
        
        self.cities(newCityList);
    }
}