function solution(n) {
    return n % 7 == 0 ? n / 7 : parseInt((n / 7) + 1);
}

// n % 7 == 0 이 참 이라면 n / 7을 반환, 거짓이라면 parseInt((n / 7) + 1)을 반환