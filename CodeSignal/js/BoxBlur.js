function solution(image) {
    let blurImage = Array.from(Array(image.length-2), () => new Array(image[0].length-2));
    for(let i = 1; i < image.length-1; i++) {
        for(let j = 1; j < image[i].length-1; j++){
            blurImage[i-1][j-1] = Math.floor((
                image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
                image[i][j-1]   + image[i][j]   + image[i][j+1]   +
                image[i+1][j-1] + image[i+1][j] + image[i+1][j+1]
            )/9);
        }
    }
    return blurImage;
}