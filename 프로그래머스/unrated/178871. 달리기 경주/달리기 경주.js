function solution(players, callings) {
    const playerMap = {};

    players.forEach((name, idx) => {playerMap[name] = idx});

    callings.forEach((called_player, idx) => {
        let called_idx = playerMap[called_player];
        let temp = players[called_idx - 1];

        players[called_idx - 1] = players[called_idx];
        players[called_idx] = temp;

        playerMap[called_player]--;
        playerMap[temp]++;
        
    });

    return players;
}