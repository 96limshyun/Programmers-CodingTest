function solution(hp) {
    let answer = 0;
    const topAnt = 5;
    const middleAnt = 3;
    const bottumAnt = 1;
    if (hp % topAnt === 0){
        answer = hp / topAnt;
        return answer;
    } else {
        answer = Math.floor(hp / topAnt);
        hp = hp - Math.floor((hp / topAnt)) * topAnt;
    }
    if (hp % middleAnt === 0){
        answer = answer + hp / middleAnt;
        return answer;
    } else {
        answer = answer + Math.floor(hp / middleAnt);
        hp = hp - Math.floor((hp / middleAnt)) * middleAnt;
    }
    if (hp % bottumAnt === 0){
        answer = answer + hp / bottumAnt;
        return answer;
    }
    
}