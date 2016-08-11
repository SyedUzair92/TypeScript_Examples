//In this Example We are going to Study About Enumerations or Enum...

//Introduction
/*enum is a keyword that allows you to declare 
an enumeration. an enumeration is a set of names for values.*/

enum Bikes{Bike1,Bike2,Bike3,Bike4,Bike5};
var _bike_name:Bikes=Bikes.Bike5;
console.log(_bike_name);

enum Cars{Car1=1,Car2,Car3,Car4};
var _carname:string=Cars[3]; //Getting Name By Index Value...
console.log(_carname);

enum bus{Bus1=2,Bus2=1,Bus3=4,Bus4=4,Bus5=4};
var _value:number=bus["Bus1"];  //Getting Values of Buses by Name;
console.log(_value);

