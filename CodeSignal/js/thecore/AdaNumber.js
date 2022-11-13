function solution(line) {
    let w = '0123456789abcdef'
    let a = line.replace(/_/g, '').split('#')
    let l = a.length

    if (l === 1) return /^\d+$/.test(a[0])

    if (a[0] < 2 || a[0] > 16) return false

    if (l === 3) return RegExp('^[' + w.slice(0, a[0]) + ']+$', 'gi').test(a[1])

    return false
}
