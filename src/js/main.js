const ROT = require('rot-js');
const Message = require('./lib/message');

var DISPLAY_WIDTH  = 80;
var DISPLAY_HEIGHT = 40;

var display = new ROT.Display({ width : DISPLAY_WIDTH, height : DISPLAY_HEIGHT });

document.body.appendChild(display.getContainer());

var m = new Message("Ciao ASD!");

display.drawText(2, 2, m.toString());

m.foreground = '#B4FF93';

display.drawText(2, 3, m.toString());
