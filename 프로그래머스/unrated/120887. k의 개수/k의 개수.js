function solution(i, j, k) {
    let answer = 0;
    const sortedArr = [];
    for (let a = i; a <= j; a++) {
        sortedArr.push(a)
    }
    const arr = sortedArr.join("").split("")
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] === String(k)) {
            answer++
        }
    }
    return answer;
}