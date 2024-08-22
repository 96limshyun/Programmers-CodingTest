function solution(progresses, speeds) {
    const result = [];
    const complatedDate = progresses.map((cp, idx) => {
        let date = 0;
        let progress = Number(cp);
        while(progress < 100) {
            progress += speeds[idx]
            date++
        }
        return date
    })
    
    let firstComplate = complatedDate[0]
    let count = 1;
    
    for (let i = 1; i <= complatedDate.length; i++) {
        if(complatedDate[i] <= firstComplate) {
            count++
        } else {
            result.push(count);
            count = 1;
            firstComplate = complatedDate[i]
        }
    }
    return result;
}