// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] > arr[j + 1]) {
                const greater = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = greater;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[indexMin]) {
                indexMin = j;
            }
        }
        if(i != indexMin) {
            let min = arr[indexMin];
            arr[indexMin] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2)
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    if(left.length) {
        results.push(...left);
    } else {
        results.push(...right);
    }
    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
