function solution(n, words) {
    const wordMap = new Map();
    const result = [];
    let prevWord = words[0]
    
    wordMap.set(words[0], 1)
    
    for(let i = 1; i < words.length; i++) {
        if(wordMap.has(words[i]) || prevWord[prevWord.length - 1] !== words[i][0]) {
            const playerNumber = (i % n) + 1;
            const turnNumber = Math.floor(i / n) + 1;
            return [playerNumber, turnNumber];
        }
        wordMap.set(words[i], 1)
        prevWord = words[i]
    }
    return [0, 0]
}