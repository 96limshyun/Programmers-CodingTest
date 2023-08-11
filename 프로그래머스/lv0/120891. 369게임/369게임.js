function solution(order) {
    return [...String(order)].filter((cur) => ["3", "6", "9"].includes(cur)).length;
}