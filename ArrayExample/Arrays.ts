//In this Example we will learn how to implement Arrays in Typescript....

//Introduction About Arrays:
/*In programming, a series of objects all of which are the same size and type. 
Each object in an array is called an array element. For 
example, you could have an array of integers or an array 
of characters or an array of anything that has a defined data type.*/

//Example for integer...

//******************Approach 1***********************:

let _array1:number[]=[6,7,8];
console.log(_array1[1]);  //getting values index number wise...

//Example with String
let _array2:string[]=["demi","lovato","love"];
console.log(_array2[1]);

//***********************Approach 2************************

let _array3:Array<number>=[6,7,8];
console.log(_array3[2]);

//************************Approach 3**************************
//for dynamic
let _array4:number[]=[];

//**********************Approach 4*************************
let _array5:number[]=new number[];// error this is the wrong approach in typescript

//*********************Approach 5****************************

let _array6:number[]=[];
_array6.push(12345);

