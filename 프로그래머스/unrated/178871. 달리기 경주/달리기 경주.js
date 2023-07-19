function solution(players, callings) {
    const playerMap = {};

    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;
    }
    for (let i = 0; i < callings.length; i++) {
        const index = playerMap[callings[i]];
        const temp = players[index-1];

        players[index] = temp;
        players[index-1] = callings[i];

        playerMap[callings[i]] = index - 1;
        playerMap[temp] = index;

        console.log(players);
        
    }

    return players;
}