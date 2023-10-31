array = [1,2,3,4,5,6,7,8]
target = 10;
const resultBinarySearch = binarySearch(array, target);
const resultlinearSearch = linearSearch(array, target);

if(resultlinearSearch === -1){
    console.log("Лінійний пошук: елемента", target, "не існує в масиві");
} else{
    console.log("Лінійний пошук: елемент", target, "знаходиться під індексом",  resultlinearSearch);
}
if (resultBinarySearch === -1){
    console.log("Бінарний пошук: елемента", target, "не існує в масиві");
} else{
    console.log("Бінарний пошук: елемент", target, "знаходиться під індексом", resultBinarySearch);
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}


