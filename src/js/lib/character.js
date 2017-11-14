const names = require('../../data/names.js');

const created = 0;
const nameGenerator = new ROT.StringGenerator();
for(const i = 0; i < names.length; i++)
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
