
// find max sum of k consecutive elements

function maximumSum(arr,k){

	let currentWindowSum = 0;
	let maximumWindowSum = 0;

	for(let i=0;i<k;i++){
		currentWindowSum = currentWindowSum + arr[i];
	}

	maximumWindowSum = currentWindowSum;

	for(let i=k;i<arr.length;i++){

		currentWindowSum = currentWindowSum + arr[i] - arr[i-k];

		if(currentWindowSum > maximumWindowSum){
			maximumWindowSum = currentWindowSum;
		}
	}

	return maximumWindowSum;
}

console.log(maximumSum([1,8,30,-5,20,7],3));