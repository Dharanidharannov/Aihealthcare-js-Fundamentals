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

/* Type Conversion */

// Implicit \\

//  string 

console.log(typeof("5"+5)) // 55 because in string + operator act as concatination  string+number-> string



console.log(typeof("10"+"sachin")) // 10sachin  string+string-> string

console.log(typeof("string"+true)); //stringtrue  string+boolean -> string

let str
console.log(typeof("5"+str)); //5undefined string+undefined -> string

let str1 = null
console.log(typeof("10"+str1)); //10null string+null -> string

 let arr1 = [24,25,26,27]
console.log(typeof("hello"+arr1)); //helloarr1 string+array -> string

let obj2 = {
    name:"surya",
    age:26
}
console.log(typeof("hiii"+obj2)); 
//hiiiobj2 string+object -> string

// based on arthimetic operator 
console.log(typeof("10"-2)); 
// 8 in this (- => minus operator) have only one method it will not do concatenation so string automatically convert into number so number -number -> number  

console.log(typeof("10"*2)); 
//20 in this (* => multiplication operator) have only one method it will not do concatenation so string automatically convert into number so number*number -> number

console.log(typeof("hii"-2));
// NaN in this scenerio hiii is try to convert into number but its not number string that a NaN so NaN is number

// number

console.log(typeof(10+"5")); //105 because in this + doing concantation  so number+string -> string 

console.log(typeof(10+10)); //20 number+number-> number

console.log(typeof(10+true)); //11 in typeconversion boolean value for true is 1 false is 0 


// Boolean
console.log(typeof(true+false)) // 1 in typeconversion true value is 1 false value is 0 so its type is number

console.log(typeof(false+undefined));


// Explicit \\
console.log(typeof(String(10))); // manual conversion  String constructor  convert value into string

console.log(typeof(Number("10"))); // number constructor convert value into number

console.log(Boolean(1)); //Boolean Constructor comvert into boolean true or false
console.log(Boolean(undefined));

/* --------------------------------------------------------------------------------------------------------- */

/* Operators */

// Arthimetic operators

// addition
console.log(5+5)

// subtraction
console.log(10-5);

// multiplication
console.log(10*5);

// divison
console.log(10/5);

// modulus
console.log(10%5);

// Exponencial 
console.log(2**2
);

// increment
    
    //  post increment basic
        let post = 10
           post++
           console.log(post)

        let post1 = 10
            post1 = post1++ 
          console.log(post1);

        let inc = 10
        let inc1 = inc++
        console.log(inc); //11 
        console.log(inc1); //10  

// same for also decrement 

let i=0
while(i<10){
    console.log(i);
     i++
}

let j = 20

do{
 console.log(j);
 j--
 
}while(j>10)

let string = "surya"

for(let s of string){
    console.log(s);
    
}

let object3 = {
    name:"virat",
    country:"india"
}

for(let obj in object3){
    console.log(obj,object3[obj]);    
}


const person ={
    name:"dharani",
     greet(){
      console.log("hii "+this.name); 
      
    }
}
person.greet()