function solution(numer1, denom1, numer2, denom2) {
    
    let topnum = numer1*denom2 + denom1*numer2;
    let botnum = denom1*denom2;
    let maxnum = 1;
    
    for (let i=1; i <= topnum; i++) {
        if (topnum%i === 0 && botnum%i === 0) {
            maxnum = i;
        }
    }
    return [topnum/maxnum, botnum/maxnum];
}