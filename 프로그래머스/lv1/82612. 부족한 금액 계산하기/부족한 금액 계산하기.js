function solution(price, money, count) {
    let priceSum = 0;
    for (let i = 1; i <= count; i++) {
        priceSum += price * i;
    }

    return money > priceSum ? 0 : priceSum - money;
}