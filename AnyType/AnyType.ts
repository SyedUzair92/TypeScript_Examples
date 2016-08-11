//In this Example We are going to study about AnyType....

//Introduction:

/*Any type is the type which accepts all type 
required according to the condition means if 
variable required int then value will be int 
or if value required string then value will be string  */

//First Example

let _anytype1:any={name:"demi",id:4};
console.log(_anytype1);
_anytype1={name:"test",id:6,gender:true} //becuase of any it assign a different type
_anytype1={name:"test2",gender:false}; //can even reduce the properties because of any type

_anytype1="String Value can also be used or assign because of anytype..";

_anytype1=function()
{
    console.log("Function can also be used for that variable because of anytype");
}

//Second Example
let _anytype2:any="6";
_anytype2=7;
_anytype2=true;

