function solution(n) {
    let answer = 0;
    let srt = String(n);
    
    for (let i = 0; i <srt.length; i++) {
        answer += Number(srt[i]);
    }
    return answer;
}