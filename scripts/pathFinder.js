function PathFinder(options) {
    const cityIconSize = 15;
    var self = this;
    
    self.numberOfCities = ko.observable(options.numberOfCities);
    self.generateCircle = ko.observable(options.generateCircle);
    self.crossoverRate = ko.observable(options.crossoverRate);
    
    self.renderer = new Renderer({CityIconSize: cityIconSize});
    self.cityManager = new CityManager();
    
    self.Init = function () {
        
        self.Reset();
        
    };
    
    self.Reset = function () {
        self.cityManager.GenerateCities(self.numberOfCities(), self.generateCircle());
        self.renderer.Render(self.cityManager.cities());
    }
}