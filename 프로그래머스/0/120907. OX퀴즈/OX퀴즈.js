function solution(quiz) {
    const result = []
    quiz.forEach((cur) => {
        const arr = cur.split(" ")
        const x = Number(arr[0])
        const y = Number(arr[2])
        if(arr[1] === "-") {
            x - y === Number(arr[4]) ? result.push("O") : result.push("X")
        } else {
            x + y === Number(arr[4]) ? result.push("O") : result.push("X")
        }
    })
    return result;
}