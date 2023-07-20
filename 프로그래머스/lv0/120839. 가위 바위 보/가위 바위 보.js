function solution(rsp) {
    let rspwin = {2:0, 0:5, 5:2};
    return [...rsp].map(x => rspwin[x]).join('')
}