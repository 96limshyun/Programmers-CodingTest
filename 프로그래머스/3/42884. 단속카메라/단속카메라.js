function solution(routes) {
    let count = 0;
    let prevCar = -30001
    routes.sort((a,b) => a[1] - b[1])

    routes.forEach(cur => {
        if(cur[0] > prevCar) {
            count++
            prevCar = cur[1]
        }
    })
    return count
}