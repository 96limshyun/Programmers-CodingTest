function solution(arr) {
    if(arr.length === 1) return [-1]
    const minNum = Math.min(...arr)
    const minIndex = arr.indexOf(minNum)
    arr.splice(minIndex, 1)
    return arr
}