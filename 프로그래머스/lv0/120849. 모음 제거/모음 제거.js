function solution(my_string) {
    let vowel = "aeiou";
    let answer = my_string.split('').filter((cur) => (!vowel.includes(cur))).join('');
    console.log(answer);
    return answer;
}