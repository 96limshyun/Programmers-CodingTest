function solution(want, number, discount) {
    let count = 0;
    for(let i = 0; i < discount.length - 9; i++) {
        let flag = true;
        const arr = discount.slice(i, i + 10)
        
        for(let j = 0; j < want.length; j++) {
            const a = arr.filter(cur => cur === want[j])
            if(a.length !== number[j]){
                flag = false
                break;
            }
        }
        if(flag) {
            count++
        }
    }
    return count
}