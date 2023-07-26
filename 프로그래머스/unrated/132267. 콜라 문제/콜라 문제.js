function solution(a, b, n) {
    let empty = 0;
    while (n >= a) {
        empty += Math.floor(n/a) * b;
        n = Math.floor(n/a) * b + n%a
    }
    return empty;
}