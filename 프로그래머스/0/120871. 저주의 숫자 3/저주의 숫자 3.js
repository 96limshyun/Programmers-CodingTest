function solution(n) {
    const numbers = Array.from(Array(n), (_, idx) => idx + 1)
    let count = 0
    const arr = numbers.map(cur => {
        while ((cur + count) % 3 === 0 || String(cur + count).includes("3")) {
            count++
        }
        return cur + count
    })
    return arr[n-1]
}
