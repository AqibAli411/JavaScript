const URL = "https://meowfacts.herokuapp.com/";

let getFacts = async ()=>{
    let response = await fetch(URL);
    let jsonFormatedData = await response.json();
    console.log(jsonFormatedData.data[0]);
}

getFacts();

