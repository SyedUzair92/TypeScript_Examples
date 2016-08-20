//In this Example we will Study about Rest Parameters in functions
//Introduction:
/*Rest Parameters are those parameters
which accepts multiple and unlimited values as
parameters in any function*/
//Example 1:
var rest_func = function (first_name) {
    var last_name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        last_name[_i - 1] = arguments[_i];
    }
    return first_name + "-" + "rest parameter values(" + last_name + ")";
};
console.log(rest_func("test1", "test2", "test3", "test4", "test5", "test6", "test7"));
//Example 2
// var rest_func2=function(...first_name:string[],...last_name:string[])
// {
//     return first_name+"-"+last_name;
// } .....*************************Note: According to the rule first parameter of any function 
//will not accept rest parameter
//Example3
var rest_func3 = function (first_name) {
    var last_name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        last_name[_i - 1] = arguments[_i];
    }
    return first_name + "-" + "rest parameter values(" + last_name + ")";
};
console.log(rest_func3("bike1", "bike2", "bike3", "bike4", "bike5", "bike6", "bike7"));
//# sourceMappingURL=Rest_Parameters.js.map