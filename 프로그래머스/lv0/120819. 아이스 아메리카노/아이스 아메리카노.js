function solution(money) {
    let answer = [];
    let piece = 0;
    let CutMoney = 0;
    if(money >= 0) {
        piece = Math.floor(money / 5500);
        answer.push(piece);
        CutMoney = money - (piece * 5500)
        answer.push(CutMoney);
    }
    return answer;
}