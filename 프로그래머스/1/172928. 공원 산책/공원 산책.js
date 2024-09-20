function solution(park, routes) {
    const newPark = park.map(cur => cur.split(""));
    let location = [0, 0];
    
    newPark.forEach((cur, idx) => {
        const start = cur.findIndex(cc => cc === "S");
        if (start !== -1) {
            location = [idx, start];
        }
    });
    
    const H = newPark.length;
    const W = newPark[0].length;
    
    routes.forEach(cur => {
        const [direction, count] = cur.split(" ");
        const numCount = parseInt(count);
        let [y, x] = location;
        let ny = y, nx = x;
        let canMove = true;
        
        for (let i = 1; i <= numCount; i++) {
            if (direction === "E") nx = x + i;
            if (direction === "W") nx = x - i;
            if (direction === "N") ny = y - i;
            if (direction === "S") ny = y + i;
            
            if (nx >= W || nx < 0 || ny < 0 || ny >= H || newPark[ny][nx] === 'X') {
                canMove = false;
                break;
            }
        }
        
        if (canMove) {
            location = [ny, nx];
        }
    });
    
    return location;
}