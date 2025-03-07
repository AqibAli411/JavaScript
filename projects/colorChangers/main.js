const buttons = document.querySelectorAll('.canvas');

buttons.forEach(function (button){
  button.addEventListener('click',function(e){
    document.body.style.backgroundColor = e.target.id;
  })
})
