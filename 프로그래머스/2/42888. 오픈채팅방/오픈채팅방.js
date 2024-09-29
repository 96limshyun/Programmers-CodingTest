function solution(record) {
    const userMap = new Map()
    const actionMap = [];
    const result = [];
    
    record.forEach(curUser => {
        const user = curUser.split(" ")
        
        actionMap.push({id: user[1], action: user[0]})
        
        if(user.length === 2) return
        const nickname = user[2]
        
        userMap.set(user[1], user[2])
    })
    
    actionMap.forEach((curUser, idx) => {
        const nickname = userMap.get(curUser.id)
        const action = curUser.action
        switch(action) {
            case "Enter":
                result.push(`${nickname}님이 들어왔습니다.`)
                break;
            case "Leave":
                result.push(`${nickname}님이 나갔습니다.`)
                break;
        }
    })
    return result
}
