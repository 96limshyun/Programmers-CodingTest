function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        let num = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(num + numbers[j]);
        }
    }
    return [...new Set(answer)].sort((a,b) => a - b);
}