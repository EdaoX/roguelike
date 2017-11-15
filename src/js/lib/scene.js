var ROT = require('rot-js');
var Menu = require('./menu');

function makeMenu(game)
{
    var menu = new Menu();
    menu.add('Start', function(){
        console.log('Start!');
    });

    menu.add('Load', function(){
        console.log('Load!');
    });

    menu.add('Options', function(){
        console.log('Options!');
    });

    return menu;
}

function MainMenuScene(game)
{
    this.game = game;
    this.menu = makeMenu(game);
    this.pointerLoc = { x : 2, y : 2 };
}

MainMenuScene.prototype.onEnter = function()
{
    this.drawScreen();
}

MainMenuScene.prototype.onExit = function()
{

}

MainMenuScene.prototype.drawScreen = function()
{
    this.game.display.clear();
    for(var i = 0; i < this.menu.choices.length; i = i + 1)
    {
        var labels = this.menu.getLabels();

        if(this.menu.current === i)
            this.game.display.draw(this.pointerLoc.x, this.pointerLoc.y + i, '>');

        this.game.display.drawText(this.pointerLoc.x + 2, this.pointerLoc.y + i, labels[i]);
    }
}

MainMenuScene.prototype.handleEvent = function( event )
{
    switch(event.keyCode)
    {
        case ROT.VK_DOWN :
            this.menu.next();
            break;
        case ROT.VK_UP :
            this.menu.previous();
            break;
        case ROT.VK_RETURN :
            this.menu.trigger();
            break;
    }

    this.drawScreen();
}

module.exports = MainMenuScene;
