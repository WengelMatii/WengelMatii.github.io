function testPrime(num) {
    if (num <= 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

 const userInput = 2; // Replace 17 with any number you want to test

if (testPrime(userInput)) {
    console.log(userInput + ' is a prime number.');
} else {
    console.log(userInput + ' is not a prime number.');
}
