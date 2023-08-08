function solution(n) {
    let answer = String(n).split('').map(Number).sort((a,b) => b-a).join('')
    return Number(answer);
}