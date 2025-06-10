//to reduce the complexity of promises chain even more, the concept of await and async was introduced in ES6
//the keyword await is used to freeze or postpone the process for ex: an api fetch call
//await pauses the execaution of its sync function until the promise is settled

function getPromise(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("successfully logged into the system!");
            res("success");
        },3500)
    })
}

async function getData(){
await getPromise();         
    //wait till the call is resolved.....
    await getPromise();
    await getPromise();
    await getPromise();
}
