function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
}
  
let age = prompt('How old are you?', 18);
  
if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}