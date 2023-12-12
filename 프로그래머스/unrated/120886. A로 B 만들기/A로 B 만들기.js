function solution(before, after) {
    const be = [...before].sort();
    const af = [...after].sort();
    
    
    return be.filter((cur, idx) => cur === af[idx]).length === af.length ? 1 : 0;
}