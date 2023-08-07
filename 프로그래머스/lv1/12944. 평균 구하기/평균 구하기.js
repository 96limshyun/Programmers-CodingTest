function solution(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += arr[i]
    }
    return num / arr.length;
}