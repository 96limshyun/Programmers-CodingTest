function solution(n){
let piece = 6;
    while (piece % n !== 0) {
        piece += 6;
    }
    return piece / 6;
}


// piece % n !== 0이 참이 될 때까지 piece 에 6을 더해 최소 피자조각의 수를 구함.
// 최소 피자조각 수에 6을 나누어 판 수를 구함.