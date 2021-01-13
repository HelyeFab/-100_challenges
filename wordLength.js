const wordByNumber = function (x, y) {
    let wordLength = y.length;
    let result = x * wordLength;

    if (result >= 100) {
        console.log(`Congrats you win. Your result was ${result}`);

    } else {
        console.log(`Sorry you lost. Your result was ${result}`);
    }
}

wordByNumber(30, 'you')