function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function sortArray() {
    const input = document.getElementById('arrayInput').value;
    const numberArray = input.split(' ').map(num => parseInt(num, 10)).filter(num => !isNaN(num));
    const sortedArray = mergeSort(numberArray);
    document.getElementById('sortedArray').innerText = `Sorted Array: [${sortedArray.join(', ')}]`;
}
