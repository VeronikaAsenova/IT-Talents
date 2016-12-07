var first, second, third; 

for (var fromTo = 100; fromTo <= 999; fromTo++ ) {
    first =fromTo% 10; 
    second=(fromTo/10) % 10; 
    third = fromTo/100; 
    if (first != second && second != third && first != third) {
        process.stdout.write(fromTo); 
    }
}