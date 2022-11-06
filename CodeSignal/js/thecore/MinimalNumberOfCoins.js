function solution(coins, price) {
    let coinCount = 0;

    for (let i = coins.length - 1; i >=0; i--) {
        while (price >= coins[i]) {
            price -= coins[i];
            coinCount++;
        }
    }
    return coinCount;
}