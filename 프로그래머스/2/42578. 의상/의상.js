function solution(clothes) {
    const map = new Map()
    
    for(const [clothe, category] of clothes) {
        if(!map.has(category)) {
            map.set(category, [clothe])
        } else {
            map.get(category).push(clothe)
        }
    }

    if(map.size === 1) {
        return [...map.values(map)][0].length
    } else {
        let count = 1;
        for (let [key, value] of map) {
            count *= (value.length + 1)
        }
        return count - 1
    }
    
}