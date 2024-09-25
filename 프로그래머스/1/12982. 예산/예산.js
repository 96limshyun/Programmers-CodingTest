function solution(d, budget) {
    d.sort((a,b) => a-b)
    let count = 0;
    const total = d.reduce((acc, cur) => acc+cur,0)
    if(total <= budget) return d.length
    for(let i = 0; i < d.length - 1; i++) {
        if(d[i] > budget) {
            return count
        }
        budget -= d[i]
        count++
    }
    return count;
}