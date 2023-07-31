function solution(array) {
    let max = Math.max(...array);
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) {
            answer.push(max, i);
        }
    }
    return answer;
}