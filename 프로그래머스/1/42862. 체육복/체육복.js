(5) [1, 1, 1, 1, 2]
function solution(n, lost, reserve) {
    const result = Array(n).fill(1)

    reserve.forEach(r => result[r - 1]++)
    lost.forEach(l => result[l - 1]--)

    for (let i = 0; i < n; i++) {
        if(result[i] === 0) {
            if (i > 0 && result[i - 1] > 1) {
                result[i]++
                result[i - 1]--
            } else if (i < n - 1 && result[i + 1] > 1) {
                result[i]++
                result[i + 1]--
            }
        }
    }
    return result.filter(cur => cur > 0).length
}