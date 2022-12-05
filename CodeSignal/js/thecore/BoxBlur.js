function solution(image) {
    const blurred = [];

    for (let row = 1; row < image.length - 1; row++) {
        blurred.push([]);
        for (let col = 1; col < image[row].length - 1; col++) {
            let sum = 0;
            for (let r = -1; r <= 1; r++) {
                for (let c = -1; c <= 1; c++) {
                    sum += image[row + r][col + c];
                }
            }
            blurred[row - 1].push(Math.floor(sum / 9));
        }
    }

    return blurred;
}
