const Lammas = require('./lammas');

const l = new Lammas ('Dolly');

console.log('lammas name is "%s"!', l.getName());
console.log('name = Dolly', l.getName() === 'Dolly');



l.setName('Shawn');



