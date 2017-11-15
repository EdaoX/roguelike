var ROT = require('rot-js');
var Game = require('./lib/game');
var Config = require('./config.js');
var Message = require('./lib/message');
var Menu = require('./lib/menu');
var Character = require('./lib/character');

var game = new Game({ width : Config.DISPLAY_WIDTH, height : Config.DISPLAY_HEIGHT });

document.body.appendChild(game.getContainer());

game.bindTo(document.body);
game.start();
