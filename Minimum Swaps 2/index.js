function minimumSwaps(arr) { 
    const occurence = {}
    let swap = 0
    // Get numbers that are not in the right index
    // Create an object that holds number value and index of the number in the unsorted list
    arr.forEach((x, i) => {
        if(i+1 !== x)
            occurence[x]=i
    })

    // Iterate over pairs to count swaps and delete pair/pairs if swap is made
    // Iterate until all the pairs are finished
    do {    
        Object.keys(occurence).forEach((key) => {
            const index = occurence[key] + 1
            if (occurence[index] == (key - 1)) {
                delete occurence[index]
                delete occurence[key]
                swap++
            } else if (occurence[index]) {
                const temp = occurence[index]
                occurence[key] = temp
                delete occurence[index]
                swap++
            }
        })
    }while(Object.keys(occurence).length>0)
    return swap
}

console.log(minimumSwaps([4,3,1,2])) // 3
console.log(minimumSwaps([2,3,4,1,5])) // 3
console.log(minimumSwaps([3,7,6,9,1,8,10,4,2,5])) // 9
