function PathFinder(options) {
    const cityIconSize = 15;
    var self = this;
    
    self.numberOfCities = ko.observable(options.numberOfCities);
    self.generateCircle = ko.observable(options.generateCircle);
    self.crossoverRate = ko.observable(options.crossoverRate);
    self.generationSize = ko.observable(options.generationSize);
    self.cityCanvasWidth = options.cityCanvasWidth;
    self.cityCanvasHeight = options.cityCanvasHeight;
    self.fittestChromosome = ko.observable(null);
    
    self.renderer = new Renderer({CityIconSize: cityIconSize});
    self.cityManager = new CityManager({cityCanvasWidth: self.cityCanvasWidth, cityCanvasHeight: self.cityCanvasHeight});
    self.engine = new Engine();
    
    self.Init = function () {
        
        self.Reset();
        
    };
    
    self.Reset = function () {
        self.cityManager.GenerateCities(self.numberOfCities(), self.generateCircle());
        
        self.renderer.DrawCities(self.cityManager.cities());
        
        self.engine.Init(self.numberOfCities(), self.generationSize());
        
        self.fittestChromosome(self.engine.GetFittest(self.EvaluateFitness));
        
        self.renderer.DrawFittestChromosome(self.fittestChromosome(), self.cityManager.cities());
    };
    
    
    
    // evolution methods
    //==================
    
    self.EvaluateFitness = function(chromosome) {
        var totalDistance = 0;
        for (var i = 0; i < chromosome.genes.length; i++)
        {
            var index1 = i;
            var index2 = i + 1;
            if (index2 == chromosome.genes.length)
                index2 = 0;

            var city1 = self.cityManager.cities()[chromosome.genes[index1]];
            var city2 = self.cityManager.cities()[chromosome.genes[index2]];

            var xDistance = Math.abs(city1.x - city2.x);
            var yDistance = Math.abs(city1.y - city2.y);

            var distance = Math.sqrt((xDistance * xDistance) + (yDistance * yDistance));

            totalDistance += distance;
        }

        return 1 / totalDistance;
    }
    
}