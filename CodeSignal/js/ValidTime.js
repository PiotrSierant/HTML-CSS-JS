function solution(time) {
    const arr = time.split(":");
    if(arr[0] === '24' && arr[1] === '00') {
        return false
    }
    return !(arr[0] >= '24' || arr[1] >= '60');
}

const time = "13:58";
console.log(solution(time)) // = true;
const time2 = "25:51";
console.log(solution(time2)) // = false;
const time3 = "02:76";
console.log(solution(time3)) // = false.