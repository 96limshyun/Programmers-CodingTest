function solution(array, n) {
    let Cnt = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            Cnt += 1
        }
    }
    return Cnt;
}