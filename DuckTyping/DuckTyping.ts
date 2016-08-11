//In this example We will study about DuckTyping
//TypeScript uses what the specification calls “structural subtyping” to determine compatibility. 

//Introduction:

/*In computer programming, duck typing is an application of the duck test 
in type safety. It requires that type checking is deferred to runtime, 
and is implemented by means of dynamic typing or 
reflection. Duck typing is concerned with 
establishing the suitability of an object for some purpose.*/

//Case when "FRESH"" object literal are assigned to a variable 
//Rule: When a fresh object literal is assigned to a variable or passed for a parameter of a non-empty target type, 
//it is an error for the object literal to specify properties that don't exist in the target type.
//The rationale for the below two errors is that since the fresh types of the object literals are 
//never captured in variables, static knowledge of the excess or misspelled properties should not be silently lost.


//Case 1

//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type

let _ducktype1={name:"test",id:1};
_ducktype1={id:4,name:"test1"};
console.log(_ducktype1);

//Case 2

_ducktype1={id:5,new_name="value"};//error ?? why because parameters are same 
//error occur becuase in ducktyping the name of the property should be same...
//Case 2: Error, renamed or missing property

//case 3
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:
 var x:{id:number,[x:string]:any}; // no error becuase now 'x' can have any name, just that the property should be of type string
 x={id:5,name:"demi"}; // Ok, `fullname` matched by index signature 
 
  //case 3a
 _ducktype1={id:4,name:"test1",age:15}; ////Case 3a: Error, excess property
  
  //case 3b
 x={id:5,name:"demi",age:17}; //according to 3a error should be occur but there is no error why??
//becuase  an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

//case 4
//Case when STALE object literal are assigned to a variable 
// what is Stale Object??
//ans)Stale state is information in an object that does not reflect reality.

//case 4a
let _ducktype2={name:"test",id:5};
_ducktype1=_ducktype2; //no error
//Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object

//case 4b
let _ducktype3={id:7,name_new:"demi"};
_ducktype3=_ducktype1;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 

//case 5
var _1x:{[x:number]:any,[x:string]:any};
var _1y={name:"lovato",id:6};
_1x=_1y;//Ok, `name` matched by index signature

//case 6

//case 6a
let _ducktype4={name:"demi",id:6,age:12};
_ducktype1=_ducktype4; //Ok, excess property allowed in case of stale object which is different from fresh object

//case 6b
_ducktype4=_ducktype1;// error but why minium requirements fullfil the conditions??

//becuase there is different concept for stale and fresh objects 

//Description:


/*Error becuase minium requirements of _ducktype4 not comaptible with _ducktype1
but in case 6a logic is true becuase minium requirements of passing parameters 
are acceptable in ducktyping... thats the beauty of ducktyping*/
 












 
 
 
 

 

 
 


