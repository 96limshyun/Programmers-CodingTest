function solution(n) {
    let extra = n;
    const answer = [];
    for (let i = 2 ; i < extra; i++) {
        if (extra % i === 0) {
            answer.push(i);
            extra = extra / i;
            i--;
        }
    }
    answer.push(extra)
    return [...new Set(answer)];
}
