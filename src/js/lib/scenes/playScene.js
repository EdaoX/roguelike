var ROT = require('rot-js');
var World = require('../world');
var config = require('../../config');
var Camera = require('../camera');

function makeMap( game )
{

    var width  = Math.floor(Math.random() * (config.map.maxWidth - config.map.minWidth + 1) + config.map.minWidth );
    var height = Math.floor(Math.random() * (config.map.maxHeight - config.map.minHeight + 1) + config.map.minHeight );

    var map = new ROT.Map.Rogue(width, height);
    map.create( function(x, y, value){
    });
    return map;
}

function setupWorld( game )
{
    var world = new World()

    world.map = makeMap( game );

    return world;
}

function PlayScene( game )
{
    this.game = game;
    if(!game.world)
        game.world = setupWorld(game);

    this.camera = new Camera( game.display, {
        minXBoundary : 0,
        maxXBoundary : this.game.world.map.width,
        minYBoundary : 0,
        maxYBoundary : this.game.world.map.height,
    });
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
    this.camera.render( this.game.world );

    var p = this.camera.cameraPointToWorld(this.camera.centerX, this.camera.centerY)

    this.game.display.draw(p.x, p.y, "@");
}

PlayScene.prototype.handleEvent = function( event )
{
    switch(event.keyCode)
    {
        case ROT.VK_DOWN :
            this.camera.setCenter(this.camera.centerX, this.camera.centerY + 1);
            break;
        case ROT.VK_UP :
            this.camera.setCenter(this.camera.centerX, this.camera.centerY - 1);
            break;
        case ROT.VK_RIGHT :
            this.camera.setCenter(this.camera.centerX + 1, this.camera.centerY);
            break;
        case ROT.VK_LEFT :
            this.camera.setCenter(this.camera.centerX - 1, this.camera.centerY);
            break;
    }
    this.drawScene();
}

module.exports = PlayScene;
