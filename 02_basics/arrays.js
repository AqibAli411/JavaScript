//arrays are objects in javascript

// two ways to declare
let myArray1 = [1,2,3,4]
let myArray2 = new Array(1,3,5,9);

// console.log(myArray1[2]);
// console.log(myArray2[1]);

//Note: an array can have any type of object inside it

let array = [1, "alok",{age:18, gpa:4.0},function(){ console.log("hello world");
}]

// console.log(array[2].age);
// array[3]();


//methods

// myArray1.length() => length of the array
// myArray1.push(element)
// myArray1.pop() removes last element
// myArray1.shift() : adds element at the front
// myArray1.unshift() : removes element from the front
// .includes(elemetn) => checks if the element exist in the array or not
// index of fucntion : this gets the index of the element in the array
// .join() function basically joins one array to another

let arr = [1,2,3,4];

let copyarr = arr.join();

// console.log(typeof copyarr);    //this prints string it means that join funciton returns string

//.slice fucntion basically works like substring , note that last index is not included

// console.log(arr.slice(1,3));  => output: 2, 3

//when we push an array to another it becomes it part

const arr4 = [1,2,3];
const arr5 = [4,5,6];


// arr4.push(arr5);
// arr4.concat(arr5);       //combine two arrays

// console.log(arr4);  

//creates an object where each element of arr4 is a key and arr5 is an element
let arr6 = {...arr4,...arr5}

// console.log(arr6);


// to create an array of objects we can use the syntax

let userDetails = [
    {
        cmsId : 512517,
        name : "Aqib",
        gpa : 3.5
    },
    {
        cmsId : 513372,
        name : "Alok",
        gpa : 3.6
    }
]

console.log(userDetails[0]);
console.log(userDetails[1]);

