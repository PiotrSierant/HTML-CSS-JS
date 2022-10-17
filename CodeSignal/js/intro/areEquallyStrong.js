function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft === friendsRight && yourRight === friendsLeft) {
        return true;
    }
    return yourLeft === friendsLeft && yourRight === friendsRight;
}