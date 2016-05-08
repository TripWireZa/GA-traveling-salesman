ko.bindingHandlers.renderChromosome = {
    
    update: function(element, valueAccessor, allBindingsAccessor) {
        var canvas = element;
        canvas.width = canvas.width; //clear canvas
        
        var chromosome = ko.utils.unwrapObservable(valueAccessor());
        var cities = ko.utils.unwrapObservable(allBindingsAccessor().cities);
        
        if(chromosome && chromosome.genes.length > 0 && cities.length == chromosome.genes.length){
            if (canvas.getContext) {
                var context = canvas.getContext("2d");
                
                var city = cities[chromosome.genes[0]];
                context.moveTo(city.x, city.y);
                
                for (var i = 1; i < chromosome.genes.length; i++){
                    city = cities[chromosome.genes[i]];
                    context.lineTo(city.x, city.y);
                };
                
                context.closePath();
                context.lineWidth = 1;
                context.strokeStyle = '#000000';
                context.stroke();
            };
        };
    }
};