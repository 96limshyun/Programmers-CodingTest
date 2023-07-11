function solution(num_list) {
    let OddNum = 0;
    let EvenNum = 0;
    let Odd = [];
    let Even = [];
    let answer = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            OddNum = num_list[i];
            Odd.push(OddNum);
        } else {
            EvenNum = num_list[i];
            Even.push(EvenNum);
        }
    }
    answer.push(Odd.length, Even.length);
    return answer;
}
