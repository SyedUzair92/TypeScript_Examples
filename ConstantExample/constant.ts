//Now This Example will tell you that how to use constant in Typecript

//first approach
const _const=4;

//second approach
const _const2:number=6;

//third approach
const _const3="hello";

//Difference Between let and var: 

/*The difference is scoping. var is scoped to the nearest function block and let is scoped to the 
nearest enclosing block (both are global if outside any block), which can be smaller than a function block.*/

//I suggest use let instead of var everywhere, becuase let has blocked scope

if(true)
{
    let z=5;
}

else
{
    let z="string";
}

console.log("value is"+z); //error becuase its global scoped is not defined

