function solution(food) {
    const arr = [];
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(Number(food[i]) / 2) 
        if (count !== 0) {
            arr.push(...String(i).repeat(count).split(""))    
        }
        
    }
    const reverse = [...arr].reverse(0)
    const result = [...arr, "0", ...reverse]
    return result.join("");
}