//In this Example We are going to Study About Enumerations or Enum...
//Introduction
/*enum is a keyword that allows you to declare
an enumeration. an enumeration is a set of names for values.*/
var Bikes;
(function (Bikes) {
    Bikes[Bikes["Bike1"] = 0] = "Bike1";
    Bikes[Bikes["Bike2"] = 1] = "Bike2";
    Bikes[Bikes["Bike3"] = 2] = "Bike3";
    Bikes[Bikes["Bike4"] = 3] = "Bike4";
    Bikes[Bikes["Bike5"] = 4] = "Bike5";
})(Bikes || (Bikes = {}));
;
var _bike_name = Bikes.Bike5;
console.log(_bike_name);
var Cars;
(function (Cars) {
    Cars[Cars["Car1"] = 1] = "Car1";
    Cars[Cars["Car2"] = 2] = "Car2";
    Cars[Cars["Car3"] = 3] = "Car3";
    Cars[Cars["Car4"] = 4] = "Car4";
})(Cars || (Cars = {}));
;
var _carname = Cars[3]; //Getting Name By Index Value...
console.log(_carname);
var bus;
(function (bus) {
    bus[bus["Bus1"] = 2] = "Bus1";
    bus[bus["Bus2"] = 1] = "Bus2";
    bus[bus["Bus3"] = 4] = "Bus3";
    bus[bus["Bus4"] = 4] = "Bus4";
    bus[bus["Bus5"] = 4] = "Bus5";
})(bus || (bus = {}));
;
var _value = bus["Bus1"]; //Getting Values of Buses by Name;
console.log(_value);
//# sourceMappingURL=Enum.js.map