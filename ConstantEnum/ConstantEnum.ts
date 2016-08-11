//In this Example We are going to Study About Enumerations or Enum...

//Introduction
/*enum is a keyword that allows you to declare 
an enumeration. an enumeration is a set of names for values.*/

const enum Laptops {Laptop1,Laptop2,Laptop3,Laptop4};
var Laptops_name:Laptops=Laptops.Laptop1;
console.log(Laptops_name);

const enum Bottles {Bottle1,Bottle2,Bottle3};
// var _index:number=Bottles[2];
// console.log(_index); //************Not allowed with const enums**********

const enum Mobiles{mobile1=1,mobile2,mobile};
var _namevalue:number=Mobiles["mobile1"];
console.log(_namevalue);


