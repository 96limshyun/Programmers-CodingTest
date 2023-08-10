function solution(left, right) {
    let num = [];
    let numlength = [];
    let answer = 0;
    for (let i = left; i <= right; i++) {
        num.push(i);
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                cnt++;
            } 
        }
        numlength.push(cnt);
    }
    for (let k = 0; k <numlength.length; k++) {
        if (numlength[k] % 2 === 0) {
            answer += num[k];
        } else {
            answer -= num[k];
        }
    }
    return answer;
}