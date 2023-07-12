const readline = require('readline'); // 모듈 불러오기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);

    let line = 1;
    while(line <= n) {

        let Star = "";
        let Cnt = 0;
        while(Cnt < line) {
            Star = Star + "*"
            Cnt = Cnt + 1
        }
        console.log(Star);
        line = line + 1;
    }
});