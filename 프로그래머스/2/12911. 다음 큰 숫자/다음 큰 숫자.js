function solution(n) {
    let nextNum = n
    let nextNumLength = 0
    const parameter = [...n.toString(2)].filter(cur => cur === "1")
    while (parameter.length !== nextNumLength) {
        ++nextNum
        nextNumLength = [...nextNum.toString(2)].filter(cur => cur === "1").length
    }
    return nextNum;
}
