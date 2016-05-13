function Engine(params) {
    var self = this;
    
    self.generation = [];
    self.generationCount = ko.observable(0);
    
    self.generationSize = null;
    self.crossoverRate = null;
    self.mutationRate - null;
    
    self.Init = function (numberOfCities, generationSize, crossoverRate, mutationRate) {
        self.generation = [];
        self.generationCount(0);
        
        self.generationSize = generationSize;
        self.crossoverRate = crossoverRate;
        self.mutationRate = mutationRate;
        
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
    
    //one evolution cycle
    self.Epoch = function (fn_EvaluateFitness, fn_Crossover, fn_Mutate) {
        var newGeneration = [];
        newGeneration.push(self.GetFittest(fn_EvaluateFitness));
        
        while(newGeneration.length < self.generationSize){
            var parent1 = self.Select();
            var parent2 = self.Select();
            
            if(Math.random() < self.crossoverRate/100){
                var crossoverPair = fn_Crossover(parent1, parent2);
                
                if(newGeneration.length < self.generationSize)
                    newGeneration.push(crossoverPair.chromosome1);
                if(newGeneration.length < self.generationSize)
                    newGeneration.push(crossoverPair.chromosome2);
            } else {
                if(newGeneration.length < self.generationSize)
                    newGeneration.push(parent1);
                if(newGeneration.length < self.generationSize)
                    newGeneration.push(parent2);
            };
        };
        
        for (var i = 1; i < self.generationSize; i++)
        {
            if (Math.random() < self.mutationRate/100)
            {
                var chromosome = newGeneration[i];

                var mutatedChromosome = fn_Mutate(chromosome);

                newGeneration[i] = mutatedChromosome;
            }
        }
        
        self.generation = newGeneration;
        self.generationCount(self.generationCount() + 1);
    }
    
    //Uses fn_EvaluateFitness function to find the fittest gene
    self.GetFittest = function(fn_EvaluateFitness) {
        var currentFittest = self.generation[0];
        var highestFitness = fn_EvaluateFitness(currentFittest);
        
        for (var i = 0; i < self.generation.length; i++) {
            var chromosome = self.generation[i];
            if(chromosome.fitness === null)
                chromosome.fitness = fn_EvaluateFitness(chromosome);
                
            if (chromosome.fitness > highestFitness)
            {
                currentFittest = chromosome;
                highestFitness = chromosome.fitness;
            }
        }
        
        return currentFittest;
    }
    
    //selects a chromosome
    self.Select = function() {
        var totalFitness = 0;
        for (var i = 0; i < self.generation.length; i++) 
            totalFitness += self.generation[i].fitness;

        var selectionPoint = Math.random() * totalFitness;

        var currentIndex = 0;
        var runningTotal = 0;
        while (runningTotal < selectionPoint)
        {
            var fitness = self.generation[currentIndex].fitness;
            runningTotal += fitness;
            currentIndex++;
        }

        return self.generation[currentIndex - 1];
    }
};