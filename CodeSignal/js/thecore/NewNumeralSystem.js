function solution(number) {
    const x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = x.indexOf(number);
    let i = 0;
    const out = [];
    while (i <= id) {
        out.push(`${x[i]} + ${x[id]}`);
        i++;
        id--;
    }
    return out;
}
