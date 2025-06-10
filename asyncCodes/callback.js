//callback -> fucntion inside other function as an argument
function sum(a,b){
    return a+b;
}

//cal is function in itself and passed to the calculator function
function calculator(a,b,cal){
    let t = cal(a,b);
    console.log(t);
}

// calculator(2,3,sum);    //output: 5

//callback hell is when we have nested call backs

function getData(id){
    setTimeout(()=>{
        console.log("Data:",id);
    },2000);
}

// getData(1);
// getData(2);
// getData(3);
//these all will run after 2 sec , but i want 1st to run after 2sec then 2nd after another 2sec (total of 4sec)

//callback hell
function getDataModified(id,getNext){
    setTimeout(()=>{
        console.log("Data:",id);
        if(getNext){
            getNext();
        }
    },2000);
}

getDataModified(1,()=>{
    getDataModified(2,()=>{
        getDataModified(3,null)
    })
});

