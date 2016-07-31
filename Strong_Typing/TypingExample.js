//Example to show how to use StrongTyping in typescript
//Introduction:
/*A strongly-typed programming language is one in which each type of data
(such as integer, character, hexadecimal,
packed decimal, and so forth) is predefined as part of the programming language
and all constants or variables defined for a given program must be described with one of the data types.*/
//First I have tell you that how initalize the variable in tyescript
//var identifer:data_type=value
//fist example
var _variable = 6;
_variable = 8; //no error 
_variable = "test"; //error becuase type is defined as number 
//Strongly Typed Syntax
var _string_var = "Value";
_string_var = "demi";
var _bool_var = true;
//Typed Interface
//Introduction:
/*Type inference refers to the automatic deduction of the data type of
an expression in a programming language.*/
var _new_string = "Hello";
_new_string = 9; //because it detected that its type is string
var _number = 6;
_number = 3;
var _bool = true;
//# sourceMappingURL=TypingExample.js.map