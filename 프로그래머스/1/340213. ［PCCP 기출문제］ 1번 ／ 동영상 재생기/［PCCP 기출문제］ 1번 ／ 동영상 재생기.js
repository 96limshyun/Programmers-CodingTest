const setTime = (time) => {
    const [mm, ss] = time.split(":")
    return parseInt(mm) * 60 + parseInt(ss)
}

const setCurrentPos = (curPos, startOp, endOp, videoLen) => {
    if (curPos < 0) curPos = 0
    if (curPos > videoLen) curPos = videoLen
    if (curPos >= startOp && curPos <= endOp) return endOp
    return curPos
}

const transPos = (pos) => {
    const mm = Math.floor(pos / 60);
    const ss = pos % 60
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`
}

function solution(video_len, pos, op_start, op_end, commands) {
    let curPos = setTime(pos)
    const startOp = setTime(op_start)
    const endOp = setTime(op_end)
    const videoLength = setTime(video_len)
    
    curPos = setCurrentPos(curPos, startOp, endOp, videoLength)
    
    const resultPos = commands.reduce((acc, cur) => {
        if (cur === "next") {
            let newPos = acc + 10
            if (newPos > startOp && acc <= startOp) newPos = endOp
            return setCurrentPos(newPos, startOp, endOp, videoLength)
        }
        return setCurrentPos(acc - 10, startOp, endOp, videoLength)
    }, curPos)
    
    const result = transPos(resultPos)
    
    return result
}