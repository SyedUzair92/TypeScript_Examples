//In this Example We will Study How to Use Casting in Typescript....
//Introduction:
/*Casting is a method by which a value is converted
from one data type to another Cast is an explicit
conversion by which the compiler is informed about
the conversion and the resulting possibility of data loss.*/
//Example 1:
var _cast1 = { name: "test", id: 5 };
_cast1 = { name: "demi", id: 6 };
_cast1 = { name2: "demi", id2: 6 }; // can also assign a type which has not the at least the same properties
_cast1 = { name: "lovato", id: 4, gender: true }; //can add a property
_cast1 = { name: "lovato", gender: true }; //can even reduce the properties because of initial any explict casting
//Example 2
var _cast2 = { name: "new2", id: 6, gender: true };
_cast2 = { name: "Nokia", id: 4 };
_cast2 = { name: "Nokia", newid: 4 }; // can also assign a type which has not the at least the same properties
_cast2 = { name: "Samsung", id: 4, gender: true }; //can add a property
_cast1 = { name: "Qmobile", gender: true }; //can even reduce the properties because of initial any explict casting
_cast2 = _cast1; //and also accepts the property without comparing the logic that minimum requirements fulfi or not...
//Example 3
var _cast3 = "true";
var _cast4 = _cast3; //Error
var __cast5 = "false";
var _cast6;
_cast6 = __cast5; //Error Neither String or any Stype Assignable to the Other
//# sourceMappingURL=Explicit_Casting.js.map