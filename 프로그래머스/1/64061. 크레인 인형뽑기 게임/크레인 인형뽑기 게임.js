function solution(board, moves) {
    let answer = 0;
    const pushBasket = Basket();

    const popDoll = (location) => {
        const dollYIdx = board.findIndex(cur => cur[location - 1] !== 0)
        if(dollYIdx === -1) return;
        const doll = board[dollYIdx][location-1]
        board[dollYIdx][location-1] = 0;
        if(pushBasket(doll)) answer += 2
    };

    moves.forEach((element) => {
        popDoll(element);
    });
    return answer;
}

const Basket = () => {
    const basket = [];

    return (doll) => {
        basket.push(doll);
        const length = basket.length - 1;
        const [latestDoll, prevDoll] = [basket[length], basket[length - 1]];

        if (latestDoll !== prevDoll) return false;
        basket.splice(length - 1, 2);
        return true;
    };
};