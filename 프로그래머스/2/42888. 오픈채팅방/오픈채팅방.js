function solution(record) {
    const userMap = new Map()
    const actionMap = [];
    const message = {
        "Enter": "님이 들어왔습니다.",
        "Leave": "님이 나갔습니다.",
    }
    
    record.forEach(curUser => {
        const [action, id, nick] = curUser.split(" ")
        
        if(action !== "Change") {
            actionMap.push([action, id])        
        }
        if(nick){
            userMap.set(id, nick)
        }
    })
    
    return actionMap.map(([action, id]) => {
        return `${userMap.get(id)}${message[action]}`
    })
}