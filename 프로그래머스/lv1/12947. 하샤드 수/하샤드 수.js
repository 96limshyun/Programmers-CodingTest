function solution(x) {
    let arr = [...String(x)];
    let num = 0;
    for (let i = 0; i < arr.length; i++){
        num += parseInt(arr[i]);
    }
    return x % num === 0 ? true : false;
}