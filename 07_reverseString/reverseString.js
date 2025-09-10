const reverseString = function(args) {
    if(typeof args !== "string" ){
        return
    }
    let reverseStringString = "";
    for(let i = args.length-1 ; i = 0 ; i--) {
        reverseStringString += args[i];
    }
    return reverseStringString;
};

// Do not edit below this line
module.exports = reverseString;
