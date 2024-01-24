function solution(my_str, n) {
    const answer = [];
    const arr = [...my_str];
    while(arr.length !== 0) {
        answer.push(arr.splice(0, n).join(''))
    }
    
    return answer;
}