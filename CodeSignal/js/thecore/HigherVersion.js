function solution(ver1, ver2) {
    let ver1sp = ver1.split('.').map(Number);
    let ver2sp = ver2.split('.').map(Number);
    for(let i in ver1sp) {
        if (ver2sp[i]<ver1sp[i]) return true;
        if (ver2sp[i]>ver1sp[i]) return false;
    }
    return false;
}
