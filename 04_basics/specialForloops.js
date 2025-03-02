let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

//for in loop is used to iterate over an object through it's keys
for(v in user){
    console.log(v);
    console.log(user[v])
}

let arr = [4,5,6]

//for in loop in array gives index of the elements and not the values
for(i in arr){
    console.log(`index : ${i} value : ${arr[i]}`);
}

//for of loop is used to iterate and get straight values
// for(ele of arr){
//     console.log(ele);
// }

//it Iterates directly over values (not indexes) of an iterable (like an array, string, or Map).
// it is not iterable over objects.

//further it can be used to iterate over the map
//it cannot be iterated by a for in loop

const map = new Map();
map.set("PK","Pakistan")
map.set("IN","India")
map.set("US","Unitied States")

// for(const [key,value] of map){
//     console.log(key , ":-" , value)
// }

// to get just one as a whole 

// for(const k of map){
//     //gives each value-pair of the map
//     console.log(k);
// }

//for each loop also exist in javascript and can be used by passing a fucntion

// arr.forEach(function(item){
//     console.log(item);
// })

//------------- OR --------------

// arr.forEach((item)=>{
//     console.log(item);
// })

//------------- OR --------------

arr.forEach((item) => console.log(item))

//note that after item comes index and arr

const myCodding = [
    {
        "Language Name" : "java" ,
        "File extention": ".java"
    },
    {
        "Language Name" : "c++" ,
        "File extention": ".cpp"
    },
    {
        "Language Name" : "python" ,
        "File extention": ".py"
    }
]

myCodding.forEach((item) => {
    console.log(item["Language Name"]);
})

//note that for each fucntion doesn't returns anything'

//we can use filter when we want to filter the values


const myArr = [1,2,3,4,5,6,7,8,9];

// const values = myArr.filter((item)=> item>4);
// console.log(values);

//lets get the same effect through for each loop

// const myNewArr = [];

// myArr.forEach( (item)=>{
//     if(item>4){
//         myNewArr.push(item);
//     }
// } )

// console.log(myNewArr);


//the key