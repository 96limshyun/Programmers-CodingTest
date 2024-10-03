function solution(tickets) {
    const ticketMap = {};
    for (const [from, to] of tickets) {
        if (!ticketMap[from]) ticketMap[from] = [];
        ticketMap[from].push(to);
    }
    
    for (const from in ticketMap) {
        ticketMap[from].sort();
    }
    
    const path = ["ICN"];
    const result = [];

    function dfs(current) {
        if (path.length === tickets.length + 1) {
            result.push([...path]);
            return true;
        }

        if (!ticketMap[current] || ticketMap[current].length === 0) {
            return false;
        }

        for (let i = 0; i < ticketMap[current].length; i++) {
            const next = ticketMap[current][i];
            ticketMap[current].splice(i, 1);
            path.push(next);

            if (dfs(next)) return true;

            ticketMap[current].splice(i, 0, next);
            path.pop();
        }

        return false;
    }

    dfs("ICN");
    return result[0];
}