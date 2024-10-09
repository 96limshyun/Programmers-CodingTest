function solution(k, tangerine) {
    const hashMap = {}
    let result = 0;
    tangerine.forEach(cur => hashMap[cur] = (hashMap[cur] || 0) + 1)
    
    const newTangerine = Object.entries(hashMap).sort((a,b) => b[1] - a[1])
    
    for(const [a, b] of newTangerine){
        result++
        k -= b
        if(k <= 0) {
            return result
        }
    }
}