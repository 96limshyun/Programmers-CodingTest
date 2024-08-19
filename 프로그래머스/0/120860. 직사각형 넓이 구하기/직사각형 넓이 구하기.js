function solution(dots) {
    let x;
    let y;
    for(let i = 1; i < dots.length; i++) {
        if(dots[0][0] !== dots[i][0]) {
            x = Math.abs(dots[0][0] - dots[i][0])
            break
        }
    }
    for(let i = 1; i < dots.length; i++) {
        if(dots[0][1] !== dots[i][1]) {
            y = Math.abs(dots[0][1] - dots[i][1])
            break
        }
    }
    return x * y;
}