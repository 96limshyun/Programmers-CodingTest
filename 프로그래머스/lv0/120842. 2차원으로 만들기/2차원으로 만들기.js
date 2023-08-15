function solution(num_list, n) {
    const arr = []
    for (let i = 0; i < num_list.length;) {
        arr2 = [];
        for (j = 0; j < n; j++) {
            arr2.push(num_list[i]);
            i++
        }
        arr.push(arr2);
    }
    return arr;
}