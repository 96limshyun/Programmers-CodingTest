function solution(id_list, report, k) {
    const reportMap = new Map()
    const result = Object.fromEntries(id_list.map(id => [id, 0]));
    report.forEach(cr => {
        const [user, target] = cr.split(" ")
        if(!reportMap.has(target)) {
            reportMap.set(target, new Set())
        } 
        reportMap.get(target).add(user)
        
    })
    for(const [key, value] of reportMap) {
        if(value.size >= k) {
            value.forEach(cv => result[cv]++)
        }
    }
    return Object.values(result)
}