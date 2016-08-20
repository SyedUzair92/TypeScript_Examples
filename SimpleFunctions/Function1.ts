//In this Example I am going to show you that how to use and how to declare Functions in TypeScript...

//Introduction:
//What is Functions??
/* a function is a type of procedure or routine. 
Some programming languages make a distinction between 
a function, which returns a value, and a procedure, 
which performs some operation but does not return a value. 
Most programming languages come with a prewritten set of 
functions that are kept in a library.*/

//Example 1:
function add(x: number, y: number): number {//Named function
    return x+y;
}

console.log(add(5,4));

// //Example 2...
var add2=function(x:number,y:number):number {
    return x+y;
}
console.log(add2(4,5));

// //Example 3...
// //Anonymous Functions...
// //Introduction:
// /*An anonymous function is a function that is not stored 
// in a program file, but is associated with a variable 
// whose data type is function_handle . Anonymous functions 
// can accept inputs and return outputs, just as standard functions 
// do. However, they can contain only a single executable statement.*/ 

var add3:(x:number,y:number)=>number=function(x:number,y:number):number
{
    return x+y;
}
console.log(add3(6,5));

// //Example 4...
var add4:(_value1:number,_value2:number)=>number=function(x:number,y:number):number //type names dont matter in Anonymous Functions
{
    return x+y; 
}
console.log(add4(6,4));

// //Example 5.. with lamda Expressions...
var add5=(x:number,y:number)=>x+y;  //In lamda Expressions no need to use a 
 console.log(add5(6,2));                                     //function keyword just generate result thorugh Expression..

