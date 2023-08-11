function solution(num, k) {
    let answer = 0;
    if (![...String(num)].includes(String(k))) {
        answer = -1;
    } else {
        answer += [...String(num)].indexOf(String(k))+1;
    }
    return answer;
}