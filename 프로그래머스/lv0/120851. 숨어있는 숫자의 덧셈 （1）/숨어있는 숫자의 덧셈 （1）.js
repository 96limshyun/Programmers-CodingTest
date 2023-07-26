function solution(my_string) {
    let regex = /[^0-9]/g
    let number = my_string.replace(regex, "");
    let answer = 0;
    for (let i = 0; i <number.length; i++) {
        answer = answer + Number(number[i]);
    }
    return answer; 
}
