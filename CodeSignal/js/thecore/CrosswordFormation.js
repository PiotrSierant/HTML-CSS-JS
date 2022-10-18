function getCombos(w1, w2, w3, w4) {
    let count = 0;
    for (let i = 0; i < w1.length - 1; i ++) {
        for (let j = 0; j < w2.length - 1; j ++) {
            if (w1[i] !== w2[j]) continue;
            for (let k = i + 2; k < w1.length; k++) {
                for (let l = 0; l < w3.length - 1; l++) {
                    if (w1[k] !== w3[l]) continue;
                    const height = k - i;
                    for (let x = j + 2; x< w2.length; x++) {
                        for (let y = 0; y < w4.length - 1; y++) {
                            if (w2[x] !== w4[y]) continue;
                            const width = l + x - j;
                            if (y + height < w4.length && w4[y + height] === w3[l + x - j] && width > 1 && height > 1) {
                                count++;
                            }
                        }
                    }
                }
            }
        }
    }
    return count;
}

function solution(words) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (j === i) continue;
            for (let k = 0; k < 4; k++) {
                if (k === i || k === j) continue;
                for (let l = 0; l < 4; l++) {
                    if (l === i || l === j || l === k) continue;
                    count += getCombos(words[i], words[j], words[k], words[l]);
                }
            }

        }
    }
    return count;
}