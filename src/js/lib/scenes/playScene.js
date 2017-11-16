var ROT = require('rot-js');
var World = require('../world');

function makeMap( game )
{
    var map = new ROT.Map.Rogue(game.display._options.width, game.display._options.height);
    map.create( function(x, y, value){
    });
    return map;
}

function setupWorld( game )
{
    var world = new World()

    // TODO
    world.map = makeMap( game );

    return world;
}

function PlayScene( game )
{
    this.game = game;
    if(!game.world)
        game.world = setupWorld(game);
}

PlayScene.prototype.onEnter = function()
{
    this.drawScene();
}

PlayScene.prototype.onExit = function()
{

}

PlayScene.prototype.drawScene = function()
{
    var map = this.game.world.map.map;
    var display = this.game.display;

    display.clear();

    for(var col = 0; col < map.length; col = col + 1)
    {
        for(var row = 0; row < map[col].length; row = row + 1)
        {
            display.draw(col, row, map[col][row] ? '#' : ' ')
        }
    }
}

PlayScene.prototype.handleEvent = function( event )
{
    this.drawScene();
}

module.exports = PlayScene;
