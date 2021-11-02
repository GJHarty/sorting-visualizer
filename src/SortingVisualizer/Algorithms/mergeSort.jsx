function mergeArrays(left, right) {
    const mergedArray = [];

    while (left.length && right.length) {
        mergedArray.push(left[0] > b[0] ? right.shift() : left.shift());
    }

    while (left.length) {
        mergedArray.push(left.shift());
    }
    while (right.length) {
        mergedArray.push(right.shift());
    }

    return mergedArray;
}


function mergeSort(arrayToSort) {
    console.log('Initializing merge sort');

    if (arrayToSort.length < 2) {
        return arrayToSort
    }

    const middle = Math.floor(arrayToSort.length / 2);
    const arrayLeft = arrayToSort.slice(0, middle);
    const arrayRight = arrayToSort.slice(middle, arrayToSort.length);
    const sortedLeft = mergeSort(arrayLeft);
    const sortedRight = mergeSort(arrayRight);

    return mergeArrays(sortedLeft, sortedRight);
}


module.exports = mergeSort;

