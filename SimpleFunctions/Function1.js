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
function add(x, y) {
    return x + y;
}
console.log(add(5, 4));
// //Example 2...
var add2 = function (x, y) {
    return x + y;
};
console.log(add2(4, 5));
// //Example 3...
// //Anonymous Functions...
// //Introduction:
// /*An anonymous function is a function that is not stored 
// in a program file, but is associated with a variable 
// whose data type is function_handle . Anonymous functions 
// can accept inputs and return outputs, just as standard functions 
// do. However, they can contain only a single executable statement.*/ 
var add3 = function (x, y) {
    return x + y;
};
console.log(add3(6, 5));
// //Example 4...
var add4 = function (x, y) {
    return x + y;
};
console.log(add4(6, 4));
// //Example 5.. with lamda Expressions...
var add5 = function (x, y) { return x + y; }; //In lamda Expressions no need to use a 
console.log(add5(6, 2)); //function keyword just generate result thorugh Expression..
//# sourceMappingURL=Function1.js.map