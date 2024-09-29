function solution(s) {
    const halfLen = Math.floor(s.length / 2)
    let result = s.length;
    
    for(let i = 1; i <= halfLen; i ++){
        const newString = Array.from({length: Math.ceil(s.length / i)}, (_, index) => {
            return s.slice(index * i, (index + 1) * i)
        })
        let string = ""
        const map = new Map()
        for(let j = 0; j < newString.length; j++){
            const hasString = map.has(newString[j])
            if(!hasString && map.size > 0) {
                map.forEach((value, key) => string += `${value === 1 ? "" : value}${key}`);
                map.clear()   
            }
            map.set(newString[j], (map.get(newString[j]) || 0) + 1)
        }
        map.forEach((value, key) => string += `${value === 1 ? "" : value}${key}`);
        result = Math.min(result, string.length)
        
    }
    return result
}