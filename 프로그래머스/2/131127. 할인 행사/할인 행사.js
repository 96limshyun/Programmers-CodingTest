function solution(want, number, discount) {
    let count = 0;
    for (let i = 0; i < discount.length - 9; i++) {
        const slice = discount.slice(i, i + 10)

        let flag = true
        for(let j = 0; j < want.length; j++) {
            const filter = slice.filter((curMap, idx) => want[j] === curMap)
            if(filter.length < number[j]) {
                flag = false;
                break;
            }
        }
        if(flag) count++
    }
    return count
}