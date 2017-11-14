var ROT = require('rot-js');

var names = require('../../data/names.js');

var created = 0;
var nameGenerator = new ROT.StringGenerator();
for(var i = 0; i < names.length; i++)
    nameGenerator.observe(names[i]);

function Character(name)
{
    created += 1;
    this.id       = created;
    this.name     = name || nameGenerator.generate();
    this.strength = 1;  // Moltiplicatore di impatto
    this.speed    = 1;  // Moltiplicatore velocità di azione
}

module.exports = Character;
