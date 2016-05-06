function PathFinder(options) {
    var self = this;
    
    self.renderer = new Renderer({ 
        CityIconSize: options.CityIconSize
    });
    self.cityManager = new CityManager(options.NumberOfCities);
    
    self.Init = function () {
        
        self.cityManager.GenerateCities(options.GenerateCircle);
        self.renderer.Render(self.cityManager.cities);
    };
}