function solution(n, stations, w) {
    let answer = 0;
    const ranges = [];
    
    for (let i = 0; i <= stations.length; i++) {
        const start = i === 0 ? 1 : stations[i-1] + w + 1;
        const end = i === stations.length ? n : stations[i] - w - 1;
        if (start <= end) {
            ranges.push(end - start + 1);
        }
    }
    
    const coverage = 2 * w + 1;
    for (const range of ranges) {
        answer += Math.ceil(range / coverage);
    }
    
    return answer;
}