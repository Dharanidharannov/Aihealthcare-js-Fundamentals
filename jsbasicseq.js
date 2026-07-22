// varibles practice

/* var */
var a
console.log(a);  //undefined because it is declared but not initialized
var a = 10
console.log(a) //10 its declared and initialized
 a = 20
console.log(a+5) //25 its is reuse 
var a = 30
console.log(a) //30 its is redeclaration and reinitialization

     /* ---------------------------------------------------------------------------------------------------- */

/* let */

// let b
// console.log(b); // undefined it is declared but not initialized
let b = 35
console.log(b)  // 35 declared and initialized
b = 40
console.log(b); // 40 reinitialized
console.log(b+5); // 45 reuse

// let b = 45
// console.log(b); // syntax error  b is already declared in let redeclaration is not accept

           /* ------------------------------------------------------------------------------------------ */

/* Const */
// const c
// console.log(c); // in const variable we need to do both declaration and initialization on same time otherwise we can error like Uncaught SyntaxError: Missing initializer in const declaration

const c = 10
console.log(c); // declared and initialized output 10

// const c=20
// console.log(c); // syntax error already declared and initialized

              /* -----------------------------------------------------------------------------------------  */

/* Datatypes */
                     /* Primitive Datatypes */
// string
let name = "dharani"
console.log(typeof(name))

// number
let age = 24
console.log(typeof(age));

// Boolean
console.log(typeof(true));

//  another example

let num1 = 10
console.log(num1=="10"); // output true  because double equalto check only value it not consider type

let num2 = 20
console.log(num2==="10"); // output false because triple equalto check both value and type

// undefined

let value 
console.log(typeof(value)); // undefined because declaration done but value not assigned

// null
let value1 = null
console.log(value1); //  null because declaration done but assigned value is empty
console.log(typeof(value1)); // object still null is primitive datatype because historical bug in javascript so it type is object

                        /* Non Primitive Datatypes */

let array = ["dharani",24 ,8.09 ,"stackly"]
console.log(array); // store multiple values in single variable in square bracket

let object = {
    name:"Dharanidharan",
    age:24,
    company:"Stackly",
    role:"Frontend Developer",
    lpa:4.05
}
console.log(object); // store multiple values in single variables in key and value format

         /* -------------------------------------------------------------------------------------------------- */

// 