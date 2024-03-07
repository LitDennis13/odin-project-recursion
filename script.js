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

function mergeSort(arr) {
    if (arr.length > 1) {
        let middleArrNum = Math.floor(arr.length/2);
        let left = mergeSort(arr.slice(0,middleArrNum));
        let right = mergeSort(arr.slice(middleArrNum,arr.length));

        let sorted = false;
        let leftIndex = 0;
        let rightIndex = 0;
        let  mergedArray = [];
        let mergedArrayIndex = 0;

        while (!sorted) {
            if (leftIndex >= left.length && rightIndex >= right.length) {
                sorted = true;
                break;
            }
            else if (rightIndex !== right.length && leftIndex === left.length) {
                mergedArray[mergedArrayIndex] = right[rightIndex];
                mergedArrayIndex++;
                rightIndex++;
                continue;
            }
            else if (leftIndex !== left.length && rightIndex === right.length) {
                mergedArray[mergedArrayIndex] = left[leftIndex];
                mergedArrayIndex++;
                leftIndex++;
                continue;
            }
            else if (left[leftIndex] < right[rightIndex]) {
                mergedArray[mergedArrayIndex] = left[leftIndex];
                mergedArrayIndex++;
                leftIndex++;
                continue;
            }
            else if (right[rightIndex] < left[leftIndex]) {
                mergedArray[mergedArrayIndex] = right[rightIndex];
                mergedArrayIndex++;
                rightIndex++;
                continue;
            }
            else if (right[rightIndex] === left[leftIndex]) {
                mergedArray[mergedArrayIndex] = right[rightIndex];
                rightIndex++;
                mergedArrayIndex++;

                mergedArray[mergedArrayIndex] = left[leftIndex];
                leftIndex++;
                mergedArrayIndex++;

                continue;
            }
        }
        return mergedArray;

    }
    else if (arr.length === 1) {
        return arr;
    }
}

