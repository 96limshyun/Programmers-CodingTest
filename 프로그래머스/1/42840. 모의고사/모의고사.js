const solution = (answers) => {
    const answer = [];
    const test = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    const score = test.map(cur => answers.filter((a, i) => a === cur[i % cur.length]).length)
    const maxScore = Math.max(...score)

    score.forEach((cur, idx) =>  {
        if(cur === maxScore) answer.push(idx + 1)
    })
    return answer;
};
