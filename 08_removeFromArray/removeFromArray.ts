const removeFromArray = function(array: Array<number> , ...args: Array<number>) {
    return array.filter(val => !args.includes(val))
}

// Do not edit below this line
module.exports = removeFromArray;
