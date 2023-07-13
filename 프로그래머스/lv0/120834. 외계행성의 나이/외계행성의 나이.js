function solution(age) {
    const arr = String(age).split("");
    const arpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let answer = "";
    for (let i = 0; i < arr.length; i++) {
        let index = Number(arr[i]);
        answer = answer + arpha[index];
    }
    return answer;
}