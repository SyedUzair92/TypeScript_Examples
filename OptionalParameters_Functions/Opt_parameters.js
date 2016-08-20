//In this Example We are going To Study about Optional Parameters In Typescript...
//Introduction
/*Optional Parameters is the advance Option In Typescript
It is normally used when we have a default Function it
accepts two parameters but one parameter has value and second
has not then on behalf we check and perform action on it..*/
//Example 1....
var opt_func = function (first_name, last_name) {
    if (last_name) {
        return first_name + "-" + last_name;
    }
    else {
        return first_name;
    }
}; //Always Remember that first parameter is the default one and never accept value as optional....
console.log(opt_func("demi"));
console.log(opt_func("demi", "lovato"));
//Example 2.... with anonymous functions
var opt_func2 = function (first_name, last_name) {
    if (last_name) {
        return first_name + "-" + last_name;
    }
    else {
        return first_name;
    }
};
console.log(opt_func2("demi"));
console.log(opt_func2("demi", "lovato"));
//# sourceMappingURL=Opt_parameters.js.map