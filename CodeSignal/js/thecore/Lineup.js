function solution(commands) {
    let sum = 0;
    let same = true;
    for (let i = 0; i < commands.length; i++) {
        same = (!same && commands[i] !== 'A') || (same && commands[i] === 'A');
        if (same) sum++;
    }
    return sum;
}