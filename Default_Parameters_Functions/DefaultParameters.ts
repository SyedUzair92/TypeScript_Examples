//In this Example We will Study that how to use Default Parameters in Typescript....

//Introduction:
/*Default Parameters are the Option in Tyepscript 
Which Normally uses to assign the value or given the 
value in parameter in any function that you will create
and according to the rule the first paramter can't be default but
the rest of the paramters could*/

//Example 1:
var def_fuc=function(first_name:string,last_name="lovato"):string
{
    if(last_name)
    {
        return first_name+"-"+last_name;
    }
    else
    {
        return first_name;
    }
} 

console.log("demi");
console.log("elie","goulding");

//Example 2
//anonymous function type with defult parameters 
//(Note that the parameter type will be optional when used with defult value)
var def_fuc2:(first_name:string,last_name?:string)=>string=function
(first_name:string,last_name="woodley"):string
{
    if(last_name)
    {
        return first_name+"-"+last_name;
    }
    else
    {
        return last_name;
    }
}
console.log("Shailene");
console.log("Hugh","Jackman");