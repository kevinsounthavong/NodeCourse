var square = (x) => {
    var result = x*x;
    return result;
};

//var square = x +> x * x;
console.log(square(9))

var user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments); //args doesn't yield what you passed in either        
        console.log(`Hi. I'm ${this.name}`); //this keyword isn't bound in arrow function
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`); //alternative to fix
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);