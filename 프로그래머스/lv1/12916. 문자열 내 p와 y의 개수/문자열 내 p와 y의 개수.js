function solution(n) {
    let arr = n.toLowerCase();
    let p = 0;
    let y = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'p') {
            p++;
        } else if (arr[i] === 'y'){
            y++
        }
    }
    return p === y ? true : false;
}
