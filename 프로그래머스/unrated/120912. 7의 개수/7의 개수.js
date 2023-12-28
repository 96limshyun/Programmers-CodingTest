function solution(array) {
    let answer = 0;
    let joinArr = array.join("");
    for (let i = 0; i < joinArr.length; i++) {
        if (joinArr[i] === "7") {
            answer++
        }
    }
    
    return answer;
}