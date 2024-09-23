function solution(dartResult) {
    const scores = dartResult.match(/\d+[SDT][*#]?/g);
    let result = [];
    
    scores.forEach((curScore, idx) => {
        const num = parseInt(curScore)
        const bonus = curScore.match(/[SDT]/g)[0]
        const option = curScore.includes("*") ? "*" : curScore.includes("#") ? "#" : ""
        
        let point = num;
        if(bonus === "D") point = Math.pow(num, 2)
        if(bonus === "T") point = Math.pow(num, 3)

        if(option === "#") point *= -1
        if(option === "*" && idx === 0) point *= 2
        if(option === "*" && idx !== 0) {
            result[idx - 1] =  result[idx - 1] * 2
            point *= 2   
        }
        result.push(point)
    })
    
    return result.reduce((acc, cur) => acc + cur ,0);
}