function solution(str1, str2) {
    const string1 = sliceString(str1)
    const string2 = sliceString(str2)
    
    let intersection = 0
    let union = 0;
    for (let [key, value] of string1) {
        const count1 = string1.get(key) || 0
        const count2 = string2.get(key) || 0
        
        intersection += Math.min(count1, count2)
        union += Math.max(count1, count2)
    }

    for (let [key, value] of string2) {
        if(!string1.has(key)) {
            union += value
        }
    }
    
    if (union === 0) return 65536;
    return Math.floor((intersection / union) * 65536)
}

const sliceString = (str) => {
    const newStringMap = new Map;
    
    for(let i = 0; i < str.length - 1; i++){
        const string = str.slice(i, i + 2).replace(/[^a-z]/gi,"").toLowerCase()
        if(string.length < 2) continue
        newStringMap.set(string, (newStringMap.get(string) || 0) + 1)
    }
    
    return newStringMap
}