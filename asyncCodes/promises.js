//Promises are aggrements for handling a task
//There are three states: 1)pending 2)fullfilled 3)error

// Creating a basic Promise
const myPromise = new Promise((resolve, reject) => {
    // Do some work that takes time
    setTimeout(() => {
        const success = Math.random() > 0.5; // Random success/failure
        
        if (success) {
            resolve("Operation successful!"); // Promise fulfilled
        } else {
            reject("Something went wrong!"); // Promise rejected
        }
    }, 2000);// Wait 2 seconds

});

//then is used after the fullfillement of the task
myPromise.then((result)=>{
    console.log(result);
})

myPromise.catch((result)=>{
    console.log(result);
})

//Promise Chain
function getPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("successfully logged into the system!");
            res("success");
        },3500)
    })
}

//runs at a single time
// getPromise().then((res)=>{console.log(res)});
// getPromise().then((res)=>{console.log(res)});

//run after an interval of time
getPromise()
    .then(res => getPromise())
    .then(res => console.log(res));
