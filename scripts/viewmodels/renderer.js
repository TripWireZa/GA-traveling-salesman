function Renderer(params) {
    //replaced by binding handlers
    
    // var self = this;
    
    // self.cityIconSize = params.CityIconSize;
    // self.iconRadius = params.CityIconSize/2;
    // self.iconWallOffset = params.CityIconSize/3;
    // self.cityCanvas = $('#cityLandscape')[0];
    // self.cityContext = self.cityCanvas.getContext('2d');
    // self.routeCanvas = $('#routeLandscape')[0];
    // self.routeContext = self.routeCanvas.getContext('2d');
    
    // self.DrawCities = function(cities){
    //     //clear canvas
    //     self.cityCanvas.width = self.cityCanvas.width;
        
    //     for (var i = 0; i < cities.length; i++){
    //         self.DrawHouse(cities[i]);
    //     }
    // };
    
    // self.DrawHouse = function(city){
    //     self.cityContext.moveTo(city.x - self.iconRadius, city.y);
    //     self.cityContext.lineTo(city.x, city.y - self.iconRadius);
    //     self.cityContext.lineTo(city.x + self.iconRadius, city.y);
    //     self.cityContext.lineTo(city.x + self.iconWallOffset, city.y);
    //     self.cityContext.lineTo(city.x + self.iconWallOffset, city.y + self.iconRadius);
    //     self.cityContext.lineTo(city.x - self.iconWallOffset, city.y + self.iconRadius);
    //     self.cityContext.lineTo(city.x - self.iconWallOffset, city.y);
    //     self.cityContext.closePath();
    //     self.cityContext.fillStyle = 'red';
    //     self.cityContext.fill();
    //     self.cityContext.lineWidth = 1;
    //     self.cityContext.strokeStyle = '#000000';
    //     self.cityContext.stroke();
    // }
    
    // self.DrawFittestChromosome = function(chromosome, cities){
        
    //     //clear canvas
    //     self.routeCanvas.width = self.routeCanvas.width;
        
    //     var city = cities[chromosome.genes[0]];
    //     self.routeContext.moveTo(city.x, city.y);
        
    //     for (var i = 1; i < chromosome.genes.length; i++){
    //         city = cities[chromosome.genes[i]];
    //         self.routeContext.lineTo(city.x, city.y);
    //     };
        
    //     self.routeContext.closePath();
    //     self.routeContext.lineWidth = 1;
    //     self.routeContext.strokeStyle = '#000000';
    //     self.routeContext.stroke();
    // };
}