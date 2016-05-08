function CityManager(params) {
    var self = this;
    
    self.cities = ko.observableArray([]);
    self.cityCanvasWidth = params.cityCanvasWidth;
    self.cityCanvasHeight = params.cityCanvasHeight;
    
    self.GenerateCities = function (numberOfCities, generateCircle) {
        
        self.cities([]);
        
        if(generateCircle) {
            self.GenerateCitiesCircle(numberOfCities);
        } else {
            self.GenerateCitiesRandom(numberOfCities);
        }
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
            newCityList.push(
                new City(
                    parseInt((Math.cos(radiansPerCity * i) * circleRadius) + circleCenterX), 
                    parseInt((Math.sin(radiansPerCity * i) * circleRadius) + circleCenterY)
                    )
                );
        }
        
        self.cities(newCityList);
    }
    
    self.GenerateCitiesRandom = function (numberOfCities) {
        
        var newCityList = [];
        
        for (var i = 0; i < numberOfCities; i++)
        {
            newCityList.push(
                new City(
                    Math.floor((Math.random() * self.cityCanvasWidth) + 0), 
                    Math.floor((Math.random() * self.cityCanvasHeight) + 0)
                ));
            ;
        }
        self.cities(newCityList);
    }
}