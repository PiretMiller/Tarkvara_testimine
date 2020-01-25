// helper (module), mis ekpordib endast mingi funktsiooni.
//class Lammas {
//    name = ''
//}

class Lammas {
    //name = ''; Peab välja kommenteerima, see ei meeldi JS-le miskipärast
    
    constructor(name) {
        this.name = name;
    }

    getName() { //tagastan lamba nime
        return this.name;
    }
    setName(name) { // sean lamba nime
        this.name = name;
    }
}

// exports.foo = 'boo';
// exports.Lammas = Lammas;

module.exports = Lammas;