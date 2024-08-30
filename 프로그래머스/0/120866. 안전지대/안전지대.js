const DANGEROUS_AREA = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]

function solution(board) {
    const dangerousBoard = Array.from(Array(board.length), () => Array(board.length).fill(0))
    const pushDangerousPonit = (y, x) => {
        DANGEROUS_AREA.forEach((cur) => {
            const indexY = y + cur[0]
            const indexX = x + cur[1]
            
            if(indexY >= 0 && indexY < board.length && indexX >= 0 && indexX < board[0].length){
                dangerousBoard[indexY][indexX] = 1
            }
        })
    }
    
    board.forEach((Line, lIdx) => {
        Line.forEach((area, aIdx) => {
            if (area === 1) {
                dangerousBoard[lIdx][aIdx] = 1
                pushDangerousPonit(lIdx, aIdx)
            } 
        })
    })
    
  
    return dangerousBoard.flat().filter(cur => cur !== 1).length;
}