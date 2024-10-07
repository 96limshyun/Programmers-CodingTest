function solution(s) {
    const sliceStr = (str, x) => {
        return str.slice(x) + str.slice(0, x)
    }
    
    const isValid = (str) => {
        const stack = [];
        const open = "({["
        const close = "]})"
        const bracketPairs = {")" : "(", "}" : "{", "]" : "["}
        
        for (const char of str) {
            if(open.includes(char)){
                stack.push(char);
            } else if(close.includes(char)) {
                if(stack.pop() !== bracketPairs[char]) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if(isValid(sliceStr(s, i))) {
            count++
        }
    }
    return count
}