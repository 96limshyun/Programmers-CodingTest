function solution(cacheSize, cities) {
    let result = 0;
    
    if(cacheSize === 0){
        return cities.length * 5
    }
    const map = []
    
    cities.forEach(city => {
        city = city.toLowerCase()
        const index = map.indexOf(city)
        
        if(index === -1){
            result += 5
            if(map.length >= cacheSize){
                map.shift()
            }
        } else {
            result += 1
            map.splice(index, 1)
        }
        map.push(city)
        
    })
    return result
}