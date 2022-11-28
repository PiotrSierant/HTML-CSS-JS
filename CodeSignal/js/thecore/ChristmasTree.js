function solution(levelNum, levelHeight) {
    f = s => tree.push(" ".repeat(max - s.length >> 1) + s);

    max = levelNum + levelHeight << 1 | 1;
    tree = [];
    f("*");
    f("*");
    f("***");
    w = 3;
    for (i = 0; i < levelNum; i++) {
        curr = w += 2;
        for (j = 0; j < levelHeight; j++) {
            f("*".repeat(curr))
            curr += 2;
        }
    }
    for (i = 0; i < levelNum; i++) {
        f("*".repeat(levelHeight | 1))

    }
    return tree;
}
