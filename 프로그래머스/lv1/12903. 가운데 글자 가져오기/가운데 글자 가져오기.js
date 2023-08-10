function solution(s) {
    let answer= "";
    if (s.length % 2 !== 0) {
       answer += s[parseInt(s.length / 2)]; 
    } else {
        answer += s[parseInt(s.length / 2) - 1];
        answer += s[parseInt(s.length / 2) ];
    }
    return answer;
}