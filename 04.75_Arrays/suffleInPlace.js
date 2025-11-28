let arr = [1, 2, 3];

function shuffle(arr){
    for(let e of arr){
        let randomNum  = Math.floor(Math.random() * 3);
        arr[randomNum] = e
    }
}


shuffle(arr)


/* shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...Ā */

