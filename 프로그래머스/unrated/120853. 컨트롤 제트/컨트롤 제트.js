function solution(s) {
    let answer = 0;
    const arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Z") {
            arr.splice(i-1, 1)
            i--
        }
    }
    let sortedArr = arr.filter(Number)
    for (let i = 0; i < sortedArr.length; i++) {
        answer += parseInt(sortedArr[i])
    }
    return answer;
}