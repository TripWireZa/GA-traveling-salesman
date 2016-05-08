function Renderer(params) {
    var self = this;
    
    self.routeCanvas = $('#routeLandscape')[0];
    self.routeContext = self.routeCanvas.getContext('2d');
    
    self.DrawFittestChromosome = function(chromosome, cities){
        
        //clear canvas
        self.routeCanvas.width = self.routeCanvas.width;
        
        var city = cities[chromosome.genes[0]];
        self.routeContext.moveTo(city.x, city.y);
        
        for (var i = 1; i < chromosome.genes.length; i++){
            city = cities[chromosome.genes[i]];
            self.routeContext.lineTo(city.x, city.y);
        };
        
        self.routeContext.closePath();
        self.routeContext.lineWidth = 1;
        self.routeContext.strokeStyle = '#000000';
        self.routeContext.stroke();
    };
}