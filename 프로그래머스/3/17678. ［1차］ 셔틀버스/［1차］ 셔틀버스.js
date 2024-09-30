function solution(n, t, m, timetable) {
    const crewMap = timetable.map(crew => timeParse(crew)).sort((a,b) => a - b)
    let busTime = 9 * 60
    const lastBusTime = busTime + (n - 1) * t
    let crewIndex = 0;
    for(let i = 0; i < n; i++) {
        let count = 0;
        while (count < m && crewIndex < crewMap.length && crewMap[crewIndex] <= busTime) {
            crewIndex++
            count++
        }

        if(i === n - 1) {
            if(count < m) {
                return parseTime(busTime)
            } else {
                return parseTime(crewMap[crewIndex - 1] - 1)
            }
        }
        busTime += t
    }
    return lastBusTime
}

const parseTime = (time) => {
    const h = String(Math.floor(time / 60)).padStart(2, "0")
    const m = String(time % 60).padStart(2, "0")
    return `${h}:${m}`
}

const timeParse = (crew) => {
    const [h, m] = crew.split(":").map(Number)
    return h * 60 + m
}