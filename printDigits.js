const printDigits = num => {
    while (num) {
        digitsBackwards = num % 10
        console.log(digitsBackwards)
        num = (num - digitsBackwards) / 10
    }
}

printDigits(123)