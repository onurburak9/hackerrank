// Instead of storing the values for all indexes, just store the changes
function arrayManipulation(n, queries) {
    var min = 0
    var max = n
    let maxValue = 0
    const list = new Array(n).fill(0)
    queries.forEach(query => {
        const start = query[0]
        const end = query[1]
        const value = query[2]
        list[start - 1] += value
        if (end < list.length)
            list[end] -=value
    })
    // Iterate starting from the head to find max value
    list.reduce((prev, next) => {
        const acc = prev + next;
        maxValue = Math.max(maxValue, acc);
        return acc;
    }, 0);
    return maxValue
}