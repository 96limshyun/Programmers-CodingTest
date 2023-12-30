function solution(my_string) {
    const nums = my_string.match(/[0-9]+/g);
    
    return nums? nums.reduce((acc, cur) => acc += Number(cur), 0) : 0;
}