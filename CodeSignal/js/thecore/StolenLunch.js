function solution(note) {
    return note.replace(/[0-9a-j]/g, (c)=>'0123456789abcdefghij'['abcdefghij0123456789'.indexOf(c)])
}
