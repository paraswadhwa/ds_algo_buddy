

function maximumSumSubarray(arr){

	let max_so_far = 0;
	let max_ending_here = 0;

	for(let i=0;i<arr.length;i++){
		
		max_ending_here = max_ending_here + arr[i];

		if(max_ending_here > max_so_far){
			max_so_far = max_ending_here;
		}

		if(max_ending_here < 0){			// sum cannot be negative
			max_ending_here = 0;
		}
	}

	return max_so_far;

}

console.log(maximumSumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));


function maximumSumSubarrayAllNegative(arr){
	// this code handles the case in case all negative values are present

	let max_so_far = arr[0];
	let max_ending_here = arr[0];

	for(let i=1;i<arr.length;i++){
		
		max_ending_here = Math.max(arr[i],max_ending_here + arr[i]);

		if(max_ending_here > max_so_far){
			max_so_far = max_ending_here;
		}
	}

	return max_so_far;

}

console.log(maximumSumSubarrayAllNegative([-8, -3, -6, -2, -5, -4]));