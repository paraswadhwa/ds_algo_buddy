
// normal subarray + subarray formed by connecting last element back to the first element

function maximumSumOfNormalSubarray(arr){

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

function maximumSumCircularSubarray(arr){

	let max_normal = maximumSumOfNormalSubarray(arr);

	if(max_normal < 0){
		return max_normal; // all negative numbers
	}

	let sum = 0;
	
	for(let i=0;i<arr.length;i++){
		sum = sum + arr[i];
		arr[i] = -arr[i];
	}

	let max_circular = sum + maximumSumOfNormalSubarray(arr);

	return Math.max(max_normal,max_circular);
}

console.log(maximumSumCircularSubarray([5,-2,3,4]));  // 12
console.log(maximumSumCircularSubarray([2,3,-4]));  // 5