function solution(sizes) {
    let result = 0;
    let x = 0;
    let y = 0;
    
    for(const [xSize, ySize] of sizes) {
        if(ySize > xSize) {
            if(ySize > x) x = ySize
            if(xSize > y) y = xSize
            continue;
        }
        if(xSize > x) x = xSize
        if(ySize > y) y = ySize
        
    }
    return x * y
}