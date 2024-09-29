function solution(s) {
    let result = s.length;

    for(let len = 1; len <= s.length / 2; len++){
        let newString = ""
        let count = 1;
        let prevStr = s.slice(0, len)

        for(let j = len; j < s.length; j += len){
            const curStr = s.slice(j, j+len)

            if(prevStr === curStr) {
                count++
            } else {
                newString += (count > 1 ? count : "") + prevStr 
                prevStr = curStr
                count = 1
            }            
        }
        newString += (count > 1 ? count : "") + prevStr 
        result = Math.min(result, newString.length)
    }
    return result
}