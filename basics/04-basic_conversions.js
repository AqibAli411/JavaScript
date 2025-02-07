let num = "33abc"

console.log(typeof num);

let numInIntForm = Number(num);

console.log(typeof numInIntForm);
console.log(numInIntForm);

/*

Note that:
**numeric converstions**
undefined, Irregular String is converted into NAN
null to 0
ture/false to 1/0

example:
"33abc" => Nan

**Boolean conversions**
undefined , null , empty strings and Nan => false
other wise => true

Note : nan stands for not a number

*/

console.log(null == 0); //false
console.log(null > 0);  //false
console.log(null <= 0); //true


/*

strict equality involves checking the datatypes also hence providing more strictness

Strings are compared letter-by-letter in the “dictionary” order.

*/


console.log('' === false);  //false but with "==" it is true


