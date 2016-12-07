//1.Read two numbers
var a=1;
var b=107;

for(var numbers=a;numbers<=b;numbers++){
    numbers^=2;
    process.stdout.write(numbers+" ,");
}