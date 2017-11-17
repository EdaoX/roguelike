var defaultOptions = {
    width        : false, // If value is set, camera width is min(display.width, width)
    height       : false, // If value is set, camera height is min(display.height, height)
    minXBoundary : false, // If value is set, camera won't show left past this point
    maxXBoundary : false, // If value is set, camera won't show right past this point
    minYBoundary : false, // If value is set, camera won't show up past this point
    maxYBoundary : false, // If value is set, camera won't show down past this point
}

function Camera( display, options )
{
    this.display = display;
    this.options = Object.assign({}, defaultOptions, options);

    this.setCenter(0, 0);

    if(!this.options.width)
        this.options.width = display._options.width;

    if(!this.options.height)
        this.options.height = display._options.height;
}

Camera.prototype.render = function( world )
{
    var map = world.map.map;
    var display = this.display;

    display.clear();

    minCol = this.left;
    maxCol = this.left + this.options.width;

    minRow = this.top;
    maxRow = this.top + this.options.height;

    for(var x = 0, col = minCol; x < this.options.width && col < maxCol; x = x + 1, col = col + 1)
    {
        for(var y = 0, row = minRow; y < this.options.width && row < maxRow; y = y + 1, row = row + 1)
        {
            var symbol  = ' ';

            if(map[col])
            {
                switch(map[col][row])
                {
                    case 0 : symbol = '.'; break;
                    case 1 : symbol = '#'; break;
                }
            }

            display.draw(x, y, symbol);
        }
    }

}

Camera.prototype.setBoundaries = function( minXBoundary, maxXBoundary, minYBoundary, maxYBoundary )
{
    this.options.minXBoundary = minXBoundary || false;
    this.options.maxXBoundary = maxXBoundary || false;
    this.options.minYBoundary = minYBoundary || false;
    this.options.maxYBoundary = maxYBoundary || false;
}

Camera.prototype.setCenter = function( x, y, minXBoundary, maxXBoundary, minYBoundary, maxYBoundary )
{
    this.centerX = x;
    this.centerY = y;

    this.top  = y - Math.round(this.options.height / 2);
    this.left = x - Math.round(this.options.width / 2);

    minXBoundary = minXBoundary || this.options.minXBoundary;
    maxXBoundary = maxXBoundary || this.options.maxXBoundary;
    minYBoundary = minYBoundary || this.options.minYBoundary;
    maxYBoundary = maxYBoundary || this.options.maxYBoundary;

    if(minYBoundary || minYBoundary === 0)
        this.top = Math.max(minYBoundary, this.top);

    if(maxYBoundary || maxYBoundary === 0)
        this.top = Math.min(maxYBoundary - this.options.height, this.top);

    if(minXBoundary || minXBoundary === 0)
        this.left = Math.max(minXBoundary, this.left);

    if(maxXBoundary || maxXBoundary === 0)
        this.left = Math.min(maxXBoundary - this.options.width, this.left);
}

Camera.prototype.cameraPointToWorld = function( x, y ){
    return {
        x : x - this.left,
        y : y - this.top
    };
}

module.exports = Camera;
