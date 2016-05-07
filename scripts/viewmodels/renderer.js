function Renderer(params) {
    var self = this;
    
    self.cityIconSize = params.CityIconSize;
    self.iconRadius = params.CityIconSize/2;
    self.iconWallOffset = params.CityIconSize/3;
    
    self.Render = function (cities) {
        var canvas = $('#landscape')[0];
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        self.DrawCities(context, cities);
    }
    
    self.DrawCities = function(context, cities){
        for (var i = 0; i < cities.length; i++){
            self.DrawHouse(context, cities[i]);
        }
    }
    
    self.DrawHouse = function(context, city){
        context.moveTo(city.x - self.iconRadius, city.y);
        context.lineTo(city.x, city.y - self.iconRadius);
        context.lineTo(city.x + self.iconRadius, city.y);
        context.lineTo(city.x + self.iconWallOffset, city.y);
        context.lineTo(city.x + self.iconWallOffset, city.y + self.iconRadius);
        context.lineTo(city.x - self.iconWallOffset, city.y + self.iconRadius);
        context.lineTo(city.x - self.iconWallOffset, city.y);
        context.closePath();
        context.fillStyle = 'red';
        context.fill();
        context.lineWidth = 1;
        context.strokeStyle = '#000000';
        context.stroke();
    }
}