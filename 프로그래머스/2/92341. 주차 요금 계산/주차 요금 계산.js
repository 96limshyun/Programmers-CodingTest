function solution(fees, records) {
    const carMap = new Map()
    const [defaultTime, defaultPay, Minite, pay] = fees
    
    records.forEach(curCar => {
        const [time, carNum, action] = curCar.split(" ")
        const hasCar = carMap.has(carNum)
        
        if(!hasCar) {
            carMap.set(carNum, {time, action, totalTime: 0})
        }

        const car = carMap.get(carNum)
        if(action === "IN") {
            car.action = "IN"
            car.time = time;
        } else {
            const inTime = timeCaculate(car.time)
            const outTime = timeCaculate(time)
            const diff = outTime - inTime
            car.totalTime += diff
            car.action = "OUT"
            car.time = time;
        }
        
    })

    for (const [carNum, value] of carMap){
        if(value.action === "IN"){
            const inTime = timeCaculate(value.time)
            const outTime = timeCaculate("23:59")
            const diff = outTime - inTime
            value.totalTime += diff
            value.action = "OUT"
            value.time = "23:59";
        }

        const total = caculatePay(value.totalTime, defaultTime, defaultPay, Minite, pay)
        value.pay = total
    }

    const result = Array.from(carMap.entries()).sort((a,b) => a[0] - b[0]).map(cur => cur[1].pay)
    
    return result
}

const timeCaculate = (time) => {
    return time.split(":").reduce((acc, cur, idx) => acc + (idx === 0 ? parseInt(cur) * 60 : parseInt(cur) * 1),0)
}

const caculatePay = (totalTime, defaultTime, defaultPay, Minite, pay) => {
    if(totalTime <= defaultTime) return defaultPay
    const a = Math.ceil((totalTime - defaultTime) / Minite) * pay
    return a + defaultPay
}