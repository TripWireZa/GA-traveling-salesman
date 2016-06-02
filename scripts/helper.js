function Helper(){
    var self = this;
    
    self.randomIntFromInterval = function(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    };
}