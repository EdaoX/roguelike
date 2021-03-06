var ROT   = require('rot-js');
var World = require('./world');
var MainMenuScene = require('./scenes/mainMenuScene');

var defaultOptions = {
    width  : 40,
    height : 40,
    fontSize : 15
}

function Game(options)
{
    this.options = Object.assign({}, defaultOptions, options);
    this.display = new ROT.Display(this.options);
    this.world = null;
    this.sceneStack = [];
}

Game.prototype.getContainer = function()
{
    return this.display.getContainer();
}

Game.prototype.start = function()
{
    this.pushScene(new MainMenuScene(this));
}

Game.prototype.pushScene = function( scene )
{
    if(this.sceneStack.length)
        this.sceneStack[this.sceneStack.length - 1].onExit();
    this.sceneStack.push(scene);
    scene.onEnter();
}

Game.prototype.bindTo = function( inputListener )
{
    inputListener.addEventListener('keydown', this.handleInput.bind(this));
}

Game.prototype.unbindFrom = function( inputListener )
{
    inputListener.removeEventListener('keydown', this.handleInput.bind(this));
}

Game.prototype.handleInput = function( event )
{
    var scene = this.getCurrentScene();

    if(scene && scene.handleEvent)
        scene.handleEvent(event);
}

Game.prototype.getCurrentScene = function()
{
    if(!this.sceneStack.length)
        return false;

    return this.sceneStack[this.sceneStack.length - 1];
}

module.exports = Game;
