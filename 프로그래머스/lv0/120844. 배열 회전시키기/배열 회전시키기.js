function solution(numbers, direction) {
    if (direction === "right") {
        let a = numbers.pop();
        numbers.unshift(a);
    } else {
        let b = numbers.shift();
        numbers.push(b);
    }
    return numbers;
}