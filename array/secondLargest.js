// returns index of second largest element

// Approach - only take largest element and consider that second largest does not exist as of now
// use case [5,5,5]

function secondLargest(arr){

	let largest       = 0;        // stores index of largest element
	let secondLargest = -1;       // does not exist

	for(let i=1;i<arr.length;i++){

		if(arr[i] > arr[largest]){
			secondLargest = largest;
			largest       = i;
		}
		else if(arr[i] < arr[largest]){  // current elem is less than largest, so cannot be largest but still can be second largest
			if(arr[i] > arr[secondLargest] || secondLargest == -1){
				// current element is greater than second largest or second largest does not exist,
				// so we consider current element as second largest
				secondLargest = i;
			}
		}
	}
	return secondLargest;
}

console.log(secondLargest([1,2,5,4,3]))