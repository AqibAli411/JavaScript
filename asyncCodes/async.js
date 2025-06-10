// async code is that which doesn't block the code below it
//setTimeOut(function,time(ms))

setTimeout(()=>{
    console.log("1st")
},2000);

//line runs before the above code,therefore the below code is idp of above code -> asyncronisation
console.log("2nd")

//ouput: 2nd then 1st



