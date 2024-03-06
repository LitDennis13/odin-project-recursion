function iterativeFib(arrLen) {
    let returnArr = [0,1];
    for (let i = 0; i < arrLen-2; i++) {
        returnArr[i+2] = returnArr[i+1] + returnArr[i];
    }
    return returnArr;
}

function recursiveFib(arrLen) {
    if (arrLen === 2) {
        return [0,1];
    }
    else if (arrLen === 1) {
        return [0];
    }
    else if (arrLen <= 0) {
        return "No Number(s)";
    }
    else {
        let newArr = recursiveFib(arrLen-1);
        newArr[newArr.length] = newArr[newArr.length-1] + newArr[newArr.length-2];
        return newArr;
    }
}

// \\ [0,1,1,2,3,5,8,13,21,34] 10
// // [0,1,1,2,3,5,8,13,21] 9
// \\ [0,1,1,2,3,5,8,13] 8
// // [0,1,1,2,3,5,8] 7
// \\ [0,1,1,2,3,5] 6
// // [0,1,1,2,3] 5
// \\ [0,1,1,2] 4
// // [0,1,1] 3
// \\ [0,1] 2
// // [0] 1



