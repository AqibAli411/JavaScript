//two ways to form an object

// 1) Object.create()
// 2) or

const mysymbol = Symbol("key1");

//symbol is datatype used for providing unique identifiers for attributes in js 

const myobj = {
    name : "aqib ali",
    age : 19,
    [mysymbol] : "secret",
    gpa : 4.00,
    "full name": "Aqib Ali Halepoto",
    isHappy : false,
    luckydays : ["monday" , "sunday"]
}


//there are two ways to access the memebers of an object..

console.log(myobj.age); //one way
console.log(myobj["age"]) //other way(better)

//"full name" memeber can only be accessed through second method

console.log(myobj["full name"]);    //other donot work here


// if i want to add a new member to the class you can do it outside of the class as follows

myobj.getInfo = function(){
    console.log(`name : ${this.name}`);
    console.log(`age : ${this.age}`);
    console.log(`gpa : ${this.gpa}`);
    console.log(`mood status : ${this.isHappy ? "happy" : "sad"}`);
}

myobj.getInfo();


//this is singleton object in javascript
// const tinder1 = new Object();
// const tinder2 = tinder2; // assings the same instance

// console.log(tinder1 === tinder2); // true (Same object)

//this is not a singelton object
const target = {
    name : "aqib",
    age : 18
};

const source = {
    1 : 'c',
    2 : 'd'
}
//used to copy one object to another
let result = Object.assign(source,target);
//eveything is copied in the object at the first place
//we can proivde the {} at the first place to get everything in it 

console.log(result);

//more simple way to copy is to :

const result_faster = {...source , ...target};
// ... is spread operator used to seprate out the object into keys and values , used also for expanding arrays

console.log(result_faster);

//to get the keys of all the object we can use Object.keys() function
console.log(Object.keys(result));

//similarly for values we use Objects.values()

//Object.entries() function can also be used , this returns each key , value pair in an array   

//to check if a property exist in a specific object we use .hasOwnproperty() function

// let isIt = Object.hasOwn(myobj,"name");
// console.log(isIt);

//We are discussing Destructuring objects
const car = {
    gears : 5,
    speed : 140
}
//we can short hand the identifier name for gears
const {gears : g} = car;

console.log(g);
