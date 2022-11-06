function solution(votes, k) {
    const votesMax = Math.max(...votes);
    const indexes = [];

    for (let index = 0; index < votes.length; index++) {
        if (votes[index] === votesMax) {
            indexes.push(index);
        }
    }

    if(k === 0 && indexes.length === 1) {
        return 1
    }

    const raisedVotes = votes.map(element => {
        return element + k;
    })
    const allTheVotesTheyCanWin = raisedVotes.filter(element => {
        return element > votesMax;
    })

    return allTheVotesTheyCanWin.length;
}