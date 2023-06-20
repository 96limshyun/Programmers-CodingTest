function solution(numbers) {
    let double = [];
    
    for (let i = 0; i < numbers.length; i++) {
        double.push(numbers[i]*2);
    }
    return double;
}