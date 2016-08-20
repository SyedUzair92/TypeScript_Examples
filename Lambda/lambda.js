// In This Example we will Study that how Implement Lambda Expressions
var _this = this;
//Introduction:
/*A lambda expression is an anonymous function and
it is mostly used to create delegates in LINQ.
Simply put, it's a method without a declaration,
i.e., access modifier, return value declaration,
and name. Convenience. It's a shorthand that
allows you to write a method in the same place
 you are going to use it.*/
//Example 1:
var lam_func1 = function (x, y) {
    return x + y;
};
console.log(lam_func1(5, 6));
//example 2:
var lam_func2 = function (x, y) { return x + y; };
console.log(lam_func2(8, 7));
//example 3
var lam_func3 = function (f) { _this.x = "x"; };
console.log(lam_func3(6));
//# sourceMappingURL=lambda.js.map