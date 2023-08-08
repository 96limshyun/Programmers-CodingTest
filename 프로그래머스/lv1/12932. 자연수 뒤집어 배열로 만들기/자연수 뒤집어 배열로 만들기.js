function solution(n) {
    let answer = [];
    let arr = String(n).split('').map(Number);
    for (let i = arr.length - 1; i >= 0; i--) {
        answer.push(arr[i]);
    }
    return answer;
}