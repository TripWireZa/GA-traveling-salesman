function PathFinder(options) {
    var self = this;
    
    self.numberOfCities = ko.observable(options.numberOfCities);
    self.generateCircle = ko.observable(options.generateCircle);
    self.crossoverRate = ko.observable(options.crossoverRate);
    self.generationSize = ko.observable(options.generationSize);
    self.cityCanvasWidth = options.cityCanvasWidth;
    self.cityCanvasHeight = options.cityCanvasHeight;
    self.fittestChromosome = ko.observable(null);
    self.isRunning = ko.observable(false);

    self.cityManager = new CityManager({cityCanvasWidth: self.cityCanvasWidth, cityCanvasHeight: self.cityCanvasHeight});
    self.engine = new Engine();
    
    
    
    self.Init = function () {
        
        self.Reset();
        
    };
    
    self.Reset = function () {
        self.cityManager.GenerateCities(self.numberOfCities(), self.generateCircle());
        
        self.engine.Init(self.numberOfCities(), self.generationSize(), self.crossoverRate());
        
        self.fittestChromosome(self.engine.GetFittest(self.EvaluateFitness));
    };
    
    self.StartEvolution = function(){
        self.isRunning(true);
        self.RunEpoch();
    }
    
    self.RunEpochOnce = function(){
        self.RunEpoch();
    };
    
    self.RunEpoch = function(){
        self.engine.Epoch(self.EvaluateFitness);
        
        if(self.isRunning()){
            if (self.engine.generationCount() % 100 == 0)
                self.fittestChromosome(self.engine.GetFittest(self.EvaluateFitness));
            setTimeout(self.RunEpoch, 0);
        } else {
            self.fittestChromosome(self.engine.GetFittest(self.EvaluateFitness));
        };
    };
    
    self.EndEvolution =function(){
        self.isRunning(false);
    }
    
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