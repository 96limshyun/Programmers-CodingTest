function solution(numbers, target) {
    function dfs(index, sum) {
        if(index === numbers.length) {
            return sum === target ? 1 : 0
        }
        
        const right = dfs(index + 1, sum + numbers[index])
        const left = dfs(index + 1, sum - numbers[index])
        return right + left   
    }
    
    
    return dfs(0,0);
}