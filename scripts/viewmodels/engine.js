function Engine() {
    var self = this;
    
    self.generation = [];
    
    
    self.Init = function (numberOfCities, generationSize) {
        for (var i = 0; i < generationSize; i++) {
            self.generation.push(self.GetChromosone(numberOfCities));
        };
    };
    
    self.GetChromosone = function (numberOfCities) {
        var remainingCities = [];
        for (var i = 0; i < numberOfCities; i++) {
            remainingCities.push(i);
        };
        
        var genes = [];
        for (var i = 0; i < numberOfCities; i++) {
            var randomIndex = Math.floor((Math.random() * remainingCities.length) + 0)
            genes.push(remainingCities[randomIndex]);
            remainingCities.splice(randomIndex, 1);
        };
        
        var chromosone = new Chromosone();
        chromosone.genes = genes;
        return chromosone;
    };
};