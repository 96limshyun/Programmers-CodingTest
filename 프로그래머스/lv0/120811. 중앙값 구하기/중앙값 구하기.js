function solution(array) {
    array = array.sort((a, b) => a - b);
    midnum = Math.floor(array.length/2);
    return array[midnum];
}


// 1. array에 들어온 값을 array.sort((a, b) => a - b)로 정렬 
// a,b의 값을 비교하여 a - b가 양수일 경우 교체, 음수일 경우 교체하지 않는다.
// 2. array 배열 길이/2 를 하여 중앙 원소 구하기
// 3. 배열이 홀수인 경우를 고려하여 Math.floor로 정수만 출력