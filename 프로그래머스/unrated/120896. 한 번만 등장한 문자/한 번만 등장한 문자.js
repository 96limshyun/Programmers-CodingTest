function solution(s) {
    const arr = [];
    const sortedArr = s.split("").sort();
    sortedArr.forEach(cur => {
        if (s.indexOf(cur) === s.lastIndexOf(cur)) {
            arr.push(cur);
        }
    })
    return arr.join("");
}