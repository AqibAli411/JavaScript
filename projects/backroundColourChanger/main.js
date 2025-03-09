//generating a random function to get a random number
function random(){
    //0123456789ABCDEF -> HEX DECIMAL VALUE
    const hexValues = '0123456789ABCDEF';
    let color = '#';
    for(i = 0;i<6;i++){
      //getting number between 0 and 16
      color += hexValues[Math.floor(Math.random()*16)];
    }
    return color;
}

  //buttons for starting and ending
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
let interval = null;
  
const startButtonInterval = function(){
    if(interval!=null) return;   //if already started don't enter
    
    startButton.disabled = true;  //disable so user doesn't re-enter
  
    const changeBackround =function(){
      document.body.style.backgroundColor = random();
      console.log('lastTime') 
    }
    interval = setInterval(changeBackround,1000);       
}
  
const stopButtonInterval = function(){
  console.log("clicked")
  clearInterval(interval);
  interval = null;
  startButton.disabled = false; 
}
  
startButton.addEventListener('click',startButtonInterval);
stopButton.addEventListener('click',stopButtonInterval);