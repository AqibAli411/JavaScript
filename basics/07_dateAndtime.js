//the time here is being recorded from 1 jan 1970
//creating an object of date
let mydate = new Date();

//diffrent types of printings
console.log(mydate.toString());
console.log(mydate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date(2023, 0, 23 , 6 , 30);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("1-2-2024");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2024-01-25");
console.log(myCreatedDate.toLocaleString());

//time in milli seconds till now
let timeStamp = Date.now();
console.log(timeStamp);

console.log(myCreatedDate.getTime()/1000);

//NOTE: month in js starts from 0
