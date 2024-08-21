function solution(polynomial) {
    const arr = polynomial.split("+").map(cur => cur.trim());
    
    // 'x'가 있는 항만 필터링한 뒤, 'x'를 제거한 값들을 숫자로 변환해서 더합니다.
    const xNum = arr
        .filter(cur => cur.includes("x"))
        .map(curNum => curNum.replace("x", "") || "1")  // x 앞에 숫자가 없으면 계수는 1
        .reduce((acc, curR) => acc + Number(curR), 0);  // 초기값 0 추가
    
    // 상수항만 필터링해서 숫자로 변환한 뒤 더합니다.
    const num = arr
        .filter(cur => !cur.includes("x"))
        .reduce((acc, curR) => acc + Number(curR), 0);  // 초기값 0 추가
    
    const result = [];
    
    // xNum이 1일 경우에는 '1x'가 아닌 'x'로 처리
    if (xNum) result.push(`${xNum === 1 ? "" : xNum}x`);
    
    // 상수항이 0일 경우에는 추가하지 않음
    if (num) result.push(num);
    
    return result.join(" + ");
}
