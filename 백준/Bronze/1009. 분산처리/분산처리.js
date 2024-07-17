const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const count = Number(input.splice(0, 1)[0]);

const patternsMap = {
    10: [10],
    1: [1],
    2: [6, 2, 4, 8],
    3: [1, 3, 9, 7],
    4: [6, 4],
    5: [5],
    6: [6],
    7: [1, 7, 9, 3],
    8: [6, 8, 4, 2],
    9: [1, 9]
};

const main = () => {
    if (count === input.length) {
        for (let i = 0; i < input.length; i++) {
            const [a, b] = input[i].split(" ").map(Number);
            const A = a % 10 === 0 ? 10 : a % 10;
            const curPatterns = patternsMap[A];
            const B = b % curPatterns.length;
            const result = curPatterns[B];
            console.log(result);
        }
    } else {
        console.log("Input length mismatch");
    }
};

main();
