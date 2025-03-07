const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)){
    result.innerHTML = "Incorrect height";
  }
  else if (weight < 0 || weight === '' || isNaN(weight)){
    result.innerHTML = "Incorrect weight";
  }
  else{
    const resultValue = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span> ${resultValue} </span>`;
  }
  
})