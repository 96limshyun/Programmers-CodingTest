function solution(n, arr1, arr2) {
    const map = [];
    for(let i = 0; i< arr1.length; i++){
        let firstMap = arr1[i].toString(2)
        let secondMap = arr2[i].toString(2)
        let curLine = ""
        
        if(firstMap.length !== n) firstMap = firstMap.padStart(n, "0")
        if(secondMap.length !== n) secondMap = secondMap.padStart(n, "0")
        
        
        for (let idx = 0; idx < firstMap.length; idx++) {
             if(firstMap[idx] !== "1" & secondMap[idx] !== "1"){
                curLine += " "
            } else {
                curLine += "#"
            }   
        }
        
        map.push(curLine)
    }
    return map
}