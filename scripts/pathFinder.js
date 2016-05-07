function PathFinder(options) {
    var self = this;
    
    self.NumberOfCities = options.numberOfCities;
    self.GenerateCircle = options.generateCircle;
    
    self.renderer = new Renderer({ 
        CityIconSize: options.CityIconSize
    });
    self.cityManager = new CityManager();
    
    self.Init = function () {
        
        self.Reset();
        
    };
    
    self.Reset = function () {
        self.cityManager.GenerateCities(self.NumberOfCities, self.GenerateCircle);
        self.renderer.Render(self.cityManager.cities);
    }
}