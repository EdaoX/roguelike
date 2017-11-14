var ROT = require('rot-js');
var Config = require('./config.js');
var Message = require('./lib/message');
var Menu = require('./lib/menu');
var Character = require('./lib/character');

var display = new ROT.Display({ width : Config.DISPLAY_WIDTH, height : Config.DISPLAY_HEIGHT });

document.body.appendChild(display.getContainer());

var enemy = new Character();

var m = new Message("Ciao, " + enemy.name);

display.drawText(2, 2, m.toString());

m.foreground = '#B4FF93';

display.drawText(2, 3, m.toString());
