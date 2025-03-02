//functions in javascript are objects and can be saved in variables

function greetings(){
    console.log("hello everyone , how are you all doing !");
}

greetings();
//note using only function name can lead to output of undefined

//we can also provide parameters for our function
function sum(a , b){
    console.log(a+b);
}

sum(5,6);

//defult arguments in javascript
// if second argument is not specified then defult argument pay the role   
function messege(from , to = "unknown user!"){
    console.log("messege sent "+from + " to " + to);
}

// messege("aqib","alok");

//if no to is provided then

messege("aqib",undefined);    //output : messege sent aqib to undefined

//in old javascript , conditions were used at the start of fucntion to check if the given input is undefined

//here ... operator is called rest operator , that means we can pass any number of input we want
function showNumbers(...num){
    return num;
}

console.log(showNumbers(2,3,4,5));

function getdetails(obj){
    return `The name of the user is ${obj.name} and id is ${obj.id}`;
}

console.log(getdetails({
    name : "aqib",
    id : 51217
}))


//how can var impact the scope of the function :

// if(true){
//     let u = 3;
//     var x = 2;
// }

//i can even acess it outside the if
// console.log(x);     //output: 2
// console.log(u);     // error: u is not defined

// scope is same as c++
// we can define function inside another function in javascript

function one(){

    const username = "This is function one";

    function two(){
        console.log(username);
        const insideTwo = "fariq Kaam hai jee";
    }

    //we cannot access insideTwo outside the two function
    two();      //*if this statement is not written then , the fucntion two wouldn't run
}

one();


//note these type of function declaration
const addOne = function(num){
    console.log(this)   //this refers to the current object
    return num+1;
}

//i can't write this expression above the funciton defination
console.log(addOne(2))

//but in normal declaring i can

console.log(addTwo(2));

function addTwo(num){
    // console.log(this);  //this : refers to the current object,therfore the statement prints whole object data
    return num+2;
}

// console.log(this)    output is empty brackets
//this is also dependent on the enviroment being used , for example same code in chorme gives diffrenet output

const arrowFunction = (name) => {
    console.log(
        `hello my name is : ${name}`
    );
    // console.log(this)   //this here gives empty curly brackets
}

arrowFunction("alok");

//we can also return implicitly 

//(a , b) => a+b;     //this is arrow function but how would u call it

const summation = (a , b) => a+b;    //this returns implicitly

console.log(summation(4,5))

//An Immediately Invoked Function Expression (IIFE) in JavaScript is a function that is executed immediately 
// after it is defined

// (function() {
//     console.log("Hello, World!");
// })();

// (function(name) {
//     console.log("My name is " + name);
// })("Aqib");
