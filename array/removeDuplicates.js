// given a sorted array , remove duplicates and keep only once copy
// of duplicate element

// HINT - relate this to insertion into a separate array

function removeDuplicates(arr){

	let count = 1;                      // include first element

	for(let i=1;i<arr.length;i++){
		if(arr[i] != arr[count-1]){     // compare current element with the last included element
			arr[count] = arr[i];
			count++;
		}
	}
	return arr;
}

console.log(removeDuplicates([10,20,20,30,30,30,30]));