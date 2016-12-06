var a1 = 1;
var a2 = 2;
var a3 = 3;

console.log("a1:" + a1 + "      a2:" + a2 + "      a3: " + a3);

var temp = a1;
a1 = a2;
a2 = a3;
a3 = temp;
console.log("swapped : " + "a1:" + a1 + "      a2:" + a2 + "      a3: " + a3);