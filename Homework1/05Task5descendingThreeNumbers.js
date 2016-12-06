var a = 10;
var b = 1;
var c = 14;

if (a > b && a > c) {

    if (c > b) {
        console.log(a);
        console.log(c);
        console.log(b);
    } else {
        console.log(a);
        console.log(b);
        console.log(c);
    }
}


if (b > a && b > c) {

    if (a > c) {
        console.log(b);
        console.log(a);
        console.log(c);
    } else {
        console.log(b);
        console.log(c);
        console.log(a);
    }
}

if (c > a && c > b) {

    if (a > b) {
        console.log(c);
        console.log(a);
        console.log(b);
    } else {
        console.log(c);
        console.log(b);
        console.log(a);
    }
}