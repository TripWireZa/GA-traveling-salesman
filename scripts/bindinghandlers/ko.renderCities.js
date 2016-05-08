ko.bindingHandlers.renderCities = {
    
    update: function(element, valueAccessor) {
        var canvas = element;
        canvas.width = canvas.width; //clear canvas
        
        var cities = ko.utils.unwrapObservable(valueAccessor());
        if(cities.length > 0){
            const cityIconSize = 15;
            var iconRadius = cityIconSize/2;
            var iconWallOffset = cityIconSize/3;
        
            if (canvas.getContext) {
                var context = canvas.getContext("2d");
            
                ko.utils.arrayForEach(cities, function (city) {
                    // draw house icon
                    context.moveTo(city.x - iconRadius, city.y);
                    context.lineTo(city.x, city.y - iconRadius);
                    context.lineTo(city.x + iconRadius, city.y);
                    context.lineTo(city.x + iconWallOffset, city.y);
                    context.lineTo(city.x + iconWallOffset, city.y + iconRadius);
                    context.lineTo(city.x - iconWallOffset, city.y + iconRadius);
                    context.lineTo(city.x - iconWallOffset, city.y);
                    context.closePath();
                    context.fillStyle = 'red';
                    context.fill();
                    context.lineWidth = 1;
                    context.strokeStyle = '#000000';
                    context.stroke();
                });
            }
        };
    }
};



// init: function(element, valueAccessor) {
    //     cities = ko.utils.unwrapObservable(valueAccessor());
    //     canvas = element;
       
    //     const cityIconSize = 15;
    //     var iconRadius = cityIconSize/2;
    //     var iconWallOffset = cityIconSize/3;
       
    //     canvas.width = canvas.width; //clear canvas
       
    //     if (canvas.getContext) {
    //         var context = canvas.getContext("2d");
           
    //         for (var i = 0; i < cities.length; i++){
    //             // draw house icon
    //             var city = cities[i];
    //             context.moveTo(city.x - iconRadius, city.y);
    //             context.lineTo(city.x, city.y - iconRadius);
    //             context.lineTo(city.x + iconRadius, city.y);
    //             context.lineTo(city.x + iconWallOffset, city.y);
    //             context.lineTo(city.x + iconWallOffset, city.y + iconRadius);
    //             context.lineTo(city.x - iconWallOffset, city.y + iconRadius);
    //             context.lineTo(city.x - iconWallOffset, city.y);
    //             context.closePath();
    //             context.fillStyle = 'red';
    //             context.fill();
    //             context.lineWidth = 1;
    //             context.strokeStyle = '#000000';
    //             context.stroke();
    //         }
    //    }
    // },