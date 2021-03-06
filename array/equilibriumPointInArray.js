
// given an array of integers, find if the array has an equilibrium point or not.

// equilibrium point - a point such that sum of elements before it is equal to sum of 
// 					   elements after it. 


function equilibriumPoint(arr){

	let sum = 0;

	for(let i=0;i<arr.length;i++){
		sum = sum + arr[i];
	}

	let leftSum = 0;

	for(let i=0;i<arr.length;i++){

		let rightSum = sum - arr[i] - leftSum;

		if(leftSum == rightSum){
			return true;
		}

		leftSum = leftSum + arr[i];
	}
	return false;
}

console.log(equilibriumPoint([3,4,8,-9,20,6]));