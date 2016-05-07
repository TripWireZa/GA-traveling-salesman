function CityManager() {
    var self = this;
    
    self.cities = ko.observableArray([]);
    
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
        var canvas = $('#landscape')[0];
        var newCityList = [];
        
        for (var i = 0; i < numberOfCities; i++)
        {
            newCityList.push(
                new City(
                    Math.floor((Math.random() * canvas.width) + 0), 
                    Math.floor((Math.random() * canvas.height ) + 0)
                ));
            ;
        }
        self.cities(newCityList);
    }
}