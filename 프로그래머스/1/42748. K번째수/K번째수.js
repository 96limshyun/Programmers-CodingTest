const solution = (array, commands) => {    
    return commands.reduce((acc, command) => {
        const arr = array.slice(command[0] - 1, command[1]).sort((a,b) => a - b);
        acc.push(arr[command[2] - 1]);
        return acc
    }, []);
}