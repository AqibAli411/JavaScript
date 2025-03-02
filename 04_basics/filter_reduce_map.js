const arr = [1,2,3,4,5]

//map can be used to basically perfrom certian task to each element of the array
const newArr = arr.map((item)=>item*2);
console.log(newArr);

//Used to accumulate values from an array into a single result (e.g., sum, product, concatenation, etc.).
const totalSum = arr.reduce((acc,curr)=>{
    // console.log(`accumliator is : ${acc} and curr is : ${curr}`)
    return acc+curr;
},0)

//here is working
// accumliator is : 0 and curr is : 1
// accumliator is : 1 and curr is : 2
// accumliator is : 3 and curr is : 3
// accumliator is : 6 and curr is : 4
// accumliator is : 10 and curr is : 5
// 15 is returned at the end of this

console.log(totalSum)
