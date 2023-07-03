function solution(slice, n) {
    return Math.ceil(n/slice);
}
// Math.ceil로 풀이
// Math.ceil = 소수점 이하의 수를 올림 한다.

function solution(slice, n) {
    if ( n % slice == 0){
        return n / slice;
    } else {
        return parseInt((n/slice) + 1);    
    }
}
// if문과 parseInt로 풀이