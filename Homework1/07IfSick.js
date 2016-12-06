var hour = 7;
var amount = 25;
var amIHealthy = false;

if (amIHealthy === false) {
    console.log("Няма да излизам и");
    if (amount > 0) {
        console.log("Ще си купя лекарства");
    }
    if (amount <= 0) {
        console.log("Ще стоя вкъщи и ще пия чай");
    }

}

if (amIHealthy === true) {
    if (amount> 10) {
        console.log("Ще отида на кафе");
    }
}

