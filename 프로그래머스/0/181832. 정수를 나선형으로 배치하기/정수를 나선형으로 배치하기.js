function solution(n) {
    const result = Array.from({length: n}, () => Array(n).fill(0))
    let x = 0;
    let y = 0;
    let dx = 1;
    let dy = 0
    
    for (let i = 1; i <= n * n; i++){
        result[y][x] = i;
        
        const nx = x + dx;
        const ny = y + dy;
        
        if(nx < 0 || nx >= n || ny < 0 || ny >= n || result[ny][nx] !== 0) {
            if (dx === 1 && dy === 0) {
                dx = 0;
                dy = 1;
            } else if (dx === 0 && dy === 1) {
                dx = -1;
                dy = 0;
            } else if (dx === -1 && dy === 0) {
                dx = 0;
                dy = -1;
            } else if (dx === 0 && dy === -1) {
                dx = 1;
                dy = 0;
            } 
        }
        x += dx;
        y += dy
    }
    
    return result;
}