
/*
Given an unsorted array of size N. 
Find the first element in array such that all of its left elements are smaller 
and all right elements to it are greater than it.


Explanation - >
Check for max on left
Check for min on right

Element should be greater than max on left and smaller than min on right.
*/



function findElement(arr){

	let n = arr.length;

	let leftArr  = [];
	let rightArr = [];

	leftArr[0]  = 0;

	for(let i=1;i<arr.length;i++){
		leftArr[i] = Math.max(leftArr[i-1],arr[i-1]);
	}

	rightArr[n-1] = arr[n-1];

	for(let i=n-2;i>=0;i--){
		rightArr[i] = Math.min(rightArr[i+1],arr[i+1]);
	}

	for(let i=0;i<arr.length;i++){
		if(arr[i] > leftArr[i] && arr[i] < rightArr[i]){
			return arr[i];
		}
	}
	return -1;
}

console.log(findElement([5, 1, 4, 3, 6, 8, 10, 7, 9]));