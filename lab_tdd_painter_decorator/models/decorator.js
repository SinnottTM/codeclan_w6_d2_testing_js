const Decorator = function (paintStock) {
    this.paintStock = [];
};

Decorator.prototype.addCanPaint = function(paint) {
    this.paintStock.push(paint)
};

Decorator.prototype.calculateTotalLitres = function() {
    let totalLitres = 0;
    for (paint of this.paintStock) {
        totalLitres += paint.litres
    }
    return totalLitres
};

Decorator.prototype.hasEnoughPaint = function(room) {
    let paintAmount = this.calculateTotalLitres();
    if (paintAmount >= room.area) {
        return true
    } else {
        return false
    }
};
  
Decorator.prototype.canPaintRoom = function(room) {
    if (this.hasEnoughPaint(room) === true) {
        // extension
        this.paintStock.pop()
        // mvp continues
        room.isPainted()
    }
    
};

// In js, always export a class if another class needs to import it
module.exports = Decorator