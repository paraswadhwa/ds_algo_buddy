
// Given - an unsorted array of non negative integers, find subarray
// with given sum

function subarrayWithGivenSum(arr,sum){

	let current_sum = arr[0];
	let start = 0;

	for(let end=1;end<=arr.length;end++){

		while(current_sum > sum && start < end-1){  // clear previous window
			current_sum = current_sum - arr[start];
			start++;
		}

		if(current_sum == sum){
			return true;
		}

		if(end < arr.length){
			current_sum = current_sum + arr[end];
		}
	}

	if(current_sum == sum){
		return true;
	}
	return false;
}


console.log(subarrayWithGivenSum([2,4],2));