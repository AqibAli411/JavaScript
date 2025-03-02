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

/*
The last three lines may need additional explanation:

Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers.
Here, it serves just as an example of an object.

The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early
days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a
separate type of its own. The behavior of typeof is wrong here.

The result of typeof alert is "function", because alert is a function. We’ll study functions in the next
chapters where we’ll also see that there’s no special “function” type in JavaScript. Functions belong to the
object type. But typeof treats them differently, returning "function". That also comes from the early days 
of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.

*/