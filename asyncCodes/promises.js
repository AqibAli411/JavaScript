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
myPromise.then(result => console.log(result))

//catch is used to detect the error state
myPromise.catch(result => console.log(result))

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
// getPromise()
//     .then((res) => getPromise())
//     .then(res => console.log(res));



//lets call a function that returns something

function getPromise1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("success");
        },2000)
    })
}

const printMessage = (res)=>{
    return `the messege is : ${res}`;
}

getPromise1()
    .then(res => getPromise1())
    .then(res => console.log(res));
