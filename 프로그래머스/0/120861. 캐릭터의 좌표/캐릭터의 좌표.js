function solution(keyinput, board) {
    let x = 0
    let y = 0;
    const maxX = (board[0] - 1) / 2
    const maxY = (board[1] - 1) / 2
    
    keyinput.forEach(cur => {
        if(cur === "left") {
            if(x === maxX * -1) return
            x--
        } else if (cur === "right") {
            if(x === maxX) return
            x++
        } else if (cur === "up") {
            if(y === maxY) return
            y++
        } else if (cur === "down") {
            if(y === maxY * -1) return
            y--
        }
    })
    return [x, y];
}