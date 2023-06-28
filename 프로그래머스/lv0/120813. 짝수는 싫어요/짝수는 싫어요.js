function solution(n) {
    let array = [];
    for (let i = n ; i >= 1; i--) {
        if(i % 2 !== 0) {
            array.push(i);
            array.sort((a,b)=> a-b);
        }
    }    
    return array;
}