function solution(arr){
    return arr.filter((cur, idx) => cur !== arr[idx + 1]);
}