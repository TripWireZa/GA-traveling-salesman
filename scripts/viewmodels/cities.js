function CityManager(numberOfCities) {
    var self = this;
    
    self.numberOfCities = numberOfCities;
    self.cities = [];
    
    self.GenerateCities = function (generateCircle) {
        if(generateCircle)
            self.GenerateCitiesCircle();
        console.log(self.cities);
    };
    
    self.GenerateCitiesCircle = function () {
        var circleRadius = 280;
        var circleCenterX = 400;
        var circleCenterY = 300;
        
        var radiansPerCity = (Math.PI * 2) / self.numberOfCities;
        
        for (var i = 0; i < self.numberOfCities; i++)
        {
            var pointX = parseInt((Math.cos(radiansPerCity * i) * circleRadius) + circleCenterX);
            var pointY = parseInt((Math.sin(radiansPerCity * i) * circleRadius) + circleCenterY);
            
            self.cities.push(new City(pointX, pointY));
        }
    }
}