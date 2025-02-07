//Datatypes:

/*

primitve data types:
number : up to 2^53 (represents both float and integer)
String : "" , remeber there exit no char in javascript
bigint : for larger values
undefined : The meaning of undefined is “value is not assigned
null : stand alone value, it is an object
symbol : unique
The symbol type is used to create unique identifiers for objects

object:
The object type is special.


*/

console.log(typeof undefined) // "undefined"

console.log(typeof 0) // "number"

console.log(typeof 10n) // "bigint"

console.log(typeof true) // "boolean"

console.log(typeof "foo") // "string"

console.log(typeof Symbol("id")) // "symbol"

console.log(typeof Math) // "object"  (1)
//math is built in object that provides mathamaticall operations

console.log(typeof null) // "object"  (2)
//The behavior of typeof is wrong here

console.log(typeof alert) // "function"  (3)
//this is treated as function , which is not a datatype but essentially an object in javascript