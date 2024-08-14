function solution(nums) {
    const setNums = [...new Set([...nums])]
    const totalNum = nums.length/2
    return setNums.length > totalNum ? totalNum : setNums.length;
}