//any type
var data;
data = "something";
console.log(data);
//enum type
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var color = Color.red;
console.log(color);
//tuple type
var employee;
employee = [1, "alvi"];
console.log(employee);
