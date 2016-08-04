//Now This Example will tell you that how to use constant in Typecript
//first approach
var _const = 4;
//second approach
var _const2 = 6;
//third approach
var _const3 = "hello";
//Difference Between let and var: 
/*The difference is scoping. var is scoped to the nearest function block and let is scoped to the
nearest enclosing block (both are global if outside any block), which can be smaller than a function block.*/
//I suggest use let instead of var everywhere, becuase let has blocked scope
if (true) {
    var z = 5;
}
else {
    var z = "string";
}
console.log("value is" + z); //error becuase its global scoped is not defined
//# sourceMappingURL=constant.js.map