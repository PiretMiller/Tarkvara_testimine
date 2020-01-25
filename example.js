const {Lammas } = require('./lammas');

const a = 8; // seda muutujat ei saa üle kirjutada, konstant
let b = 1; // saab üle kirjutada. Sama, mis var, aga on igasugu häkid ära eemaldatud
var c = 2; // saab üle kirjutada, loodi 20 aastat tagasi.

//console.log(a, b, c); // semikoolon ei ole kohustuslik, aga on soovitav
//console.log(a, b, c); // semikoolon ei ole kohustuslik, aga on soovitav

function sum (param1, param2 = 5) {
    return param1 + param2;
}

console.log("sum (1,10) =", sum(1,5));
console.log("sum (1) =", sum(1)); // default väärtuse kasutus


const sum2 = (param1, param2 = 5) => {
    return param1 + param2;
}

console.log("sum2 (1,10) =", sum2(1,5));
console.log("sum2 (1) =", sum2(1)); // default väärtuse kasutus

b = 3363;



console.log({a, b})

if(a > b) {
    console.log("a on suurem kui b");
} else {
    console.log("b on suurem või võrdne c-ga");
}

for (let i = 0; i < 10; i++) {
    console.log("aaa", i)
}

const object = {
    'param1' : 124,
    'param3' : 'cat',
    'x' : {
        "a" : 243,
        "basg" : 43464,
        "c" : new Date(),
    },

    'func_sum' : (param1, param2 = 5) => {
        return param1 + param2;
    }
   // 'func2' : sum;
};
console.log('object', object);

class Lammas {
    name = '';
    
    getName () {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}

//const 1 = new Lammas('Shawn');
//1.setName('dolly');
//console.log('lammas name", 1)
//console.log("lammas", 1) 

const arr = [1, 3, [1,2], 'test', new Date(), sum]
arr.push('ADDED');
console.log(arr);
for(k in arr) {
    console.log('k', k, arr[k]);
}

arr.forEach(function(value, index) {
    console.log('---', value, index);

});

//string + number
console.log('sum("aaa", 5) = ', sum('aaa', 5));

