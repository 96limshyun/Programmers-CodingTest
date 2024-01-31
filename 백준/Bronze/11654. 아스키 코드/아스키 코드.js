const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line) => {
    input = String(line)
    rl. close();
});
    
rl.on('close', () => {
    return console.log(input.charCodeAt())
})