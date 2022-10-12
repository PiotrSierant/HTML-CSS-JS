function solution(n) {
    return ~(n|(n+1)) & ((n|(n+1))+1) ;
}