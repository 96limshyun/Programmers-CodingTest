function solution(name, yearning, photo) {
    let memoryScore = {};
    let answer = [];

    name.forEach((crr, idx) => {
        memoryScore[crr] = yearning[idx]; 
    });

    photo.forEach((arr) => {
        let sum = 0;
        arr.forEach((crr, idx) => {
            sum += memoryScore[crr] || 0;
        });
        answer.push(sum);
    });
    return answer;
}