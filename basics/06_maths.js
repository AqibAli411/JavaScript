// important math functions are present in Math object
//Math.random() gives values between 0 and 1
//generates any number between 1 and 10
let numInFloat = (Math.random()*10) + 1
//converts the number into integer
//we can also use methods like trunc, round...
let numInInteger = Math.floor(numInFloat)

//to get a random number between any specific values like min and max
const min = 10;
const max = 30;

//formula : Math.floor(Math.random() * (max - min + 1)) + min
let num = Math.floor(Math.random() * (max - min + 1)) + min
console.log(num);
