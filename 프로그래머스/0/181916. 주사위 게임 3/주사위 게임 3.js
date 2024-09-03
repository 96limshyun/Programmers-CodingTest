function solution(a, b, c, d) {
    let result = 0;
    const numberArr = [a,b,c,d]
    const sameNums = {}
    
    numberArr.forEach((cur, idx) => {
        sameNums[cur] = (sameNums[cur] || 0) + 1
    })
    
    const count = Object.keys(sameNums)
    const entries = Object.entries(sameNums).sort((a,b) => b[1] - a[1])
    
    switch (count.length) {
        case 1 :
            result = Number(entries[0][0]) * 1111
            break;
        case 4 :
            result = Math.min(...count.map(Number))
            break;
        case 3 :
            result = Number(entries[1][0]) * Number(entries[2][0])
            break;
        case 2 :
            if (entries[0][1] === 3) {
                result = (10 * Number(entries[0][0]) + Number(entries[1][0])) ** 2
                break;
            } else {
                result = (Number(entries[0][0]) + Number(entries[1][0])) * Math.abs(Number(entries[0][0]) - Number(entries[1][0]))
                break;
            }
            
    }
    return result
}