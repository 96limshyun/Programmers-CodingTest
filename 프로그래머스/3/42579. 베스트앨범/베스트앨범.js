function solution(genres, plays) {
    const countMap = {}
    const genresMap = new Map()
    const result = [];
    for(let i = 0; i < genres.length; i++){
        countMap[genres[i]] = (countMap[genres[i]] || 0) + plays[i]
        if(!genresMap.has(genres[i])) {
            genresMap.set(genres[i], [{index: i, count: plays[i]}])
        } else {
            genresMap.get(genres[i]).push({index: i, count: plays[i]})
        }
    }
    const countArr = Object.entries(countMap).sort((a,b) => b[1] - a[1])
    for (let value of genresMap.values()) {
        value.sort((a,b) => b.count - a.count)
    }
    for (let [category, count] of countArr) {
        const curCategory = genresMap.get(category).slice(0, 2).map(cur => cur.index)
        result.push(...curCategory)
    }
    
    return result
}