function solution(my_string) {
    return [...my_string].filter((cur) => isNaN(cur) === false).sort((a, b) => a - b).map(Number);
}