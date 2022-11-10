// In place means we are not creating new memory allocation
// We are going to reorganize the original piece of data

const swap = (arr, x, y, z) => {
    [arr[x], arr[y], arr[z]] = [arr[z], arr[y], arr[x]];
    return arr
}

const my_list = [30, 4, 10];
console.log('Before swap: ', my_list);
console.log('After swap: ', swap(my_list, 0, 1, 2));
let my_list_copy = [...my_list, 5]
console.log(my_list_copy)

// out of place
let quick = ['a', 'a', 'a', 'a']
let arr_length = my_list_copy.length - 1

const out_of_place = (arr, temp) => {
    for (let i = 0; i <= arr_length; i++) {
        temp[i] = arr[arr_length - i]
    }

    arr = temp;
    return arr;
}

console.log(out_of_place(my_list_copy, quick))

//! Two pointer swap

const twoPointers = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left += 1
        right -= 1;
    }
    return arr
}

console.log(twoPointers([1,2,3,12,9,8,4,11,22]))

//! Sorting algos!

//* Bubble Sort
const bubbleSwap = (i , j, arr) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const bubbleSort = (my_arr) => {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let num = 0; num < my_arr.length - 1; num++) {
            if (my_arr[num] > my_arr[num + 1]) {
                bubbleSwap(num, num + 1, my_arr);
                isSorted = false;
            }
        }
    }
    return my_arr
}

console.log(bubbleSort([22,55,88,44,1,100,34,66]))

//* Insertion Sort
const insertionSort = (an_arr) => {
    for (let i = 1; i < an_arr.length; i++) {
        // First element of our sorted subarray 
        let current = an_arr[i];
        // last element of sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < an_arr[j])) {
            an_arr[j + 1] = an_arr[j];
            j--;
        }
        an_arr[j + 1] = current;
    }
    return an_arr;
}

console.log(insertionSort([22,55,88,44,1,100,34,66]))

//* MergeSort (last one)
// Step 1: Split everything into its own group
// Step 2: From left to right merge two groups together 
// Step 3: While merging, place each item in the correct position within the merged group
// Step 4: Continue steps 3-4 until one group is left

const merge = (l, r) => {
    let temp = [];
    // Break the loop if part of the array is empty
    while (l.length && r.length) {
        // pick smaller element between l and r subarrays
        if (l[0] < r[0]) {
            temp.push(l.shift());
        } else {
            temp.push(r.shift());
        }
    }

    // Combine leftover elements
    // add copies so that it includes entire arrays
    return [...temp, ...l, ...r];
};

const mergeSort = (arr) => {
    const half = arr.length / 2;

    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, half);
    return merge(mergeSort(left), mergeSort(arr));
}

console.log(mergeSort([22, 55, 88, 44, 1, 100, 34, 66]));

//! Binary Search
const binarySearch = (arr, target) => {
    let l = 0, r = (arr.length - 1)
    while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        let potentialMatch = arr[middle];
        if (target == potentialMatch) {
            console.log(`------ MATCHED VALUE: ${ middle } -------`);
            return true; 
        } else if ( potentialMatch < target ) {
            l = middle + 1;
        } else {
            r = middle - 1;
        }
    }
    return false;
}

let testingArr = [22, 44, 55, 66, 88, 100];
let testingTargetOne = 44;
let testingTargetTwo = 5;

const operatorFunc = (ta, tt) => {
    if (binarySearch(ta, tt)) {
        console.log('Target found!')
    } else {
        console.log('Target not found')
    }
}

operatorFunc(testingArr, testingTargetOne)