function solution(phone_number) {
    let number = phone_number.split('');
    for (let i = 0; i < number.length - 4; i++) {
        number.splice(i, 1, '*');
    }
    return number.join('');
}