function solution(participant, completion) {
    const map = new Map()
    
    participant.forEach(cur => {
        map.set(cur, (map.get(cur) || 0 ) + 1)
    })

    for (let name of completion) {
        map.set(name, (map.get(name) || 0 ) - 1)
    }

    for (let [key, value] of map) {
        if(value > 0){
            return key
        }
    }
}