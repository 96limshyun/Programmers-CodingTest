function solution(absolutes, signs) {
    let answer = [];
    let sum = 0;
    for (let i = 0; i < signs.length; i++) {
        if (signs[i] === true) {
            answer.push(absolutes[i]);
        } else if (signs[i] === false){
            answer.push(absolutes[i]*-1);
        }
        sum += answer[i]
    }
    return sum;
}