function solution(my_string) {
    
    const arr = my_string.split(" ")
    const result = arr.reduce((acc, cur, i) => {
        if(cur === "+") return acc += Number(arr[i + 1])
        if(cur === "-") return acc -= Number(arr[i + 1])
        return acc
    }, Number(arr[0]))    
    return result
}