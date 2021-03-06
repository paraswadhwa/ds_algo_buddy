
//find the length of the longest subarray that has alternating even odd elements

// minimum length will be 1 

function maximumLengthEvenOddSubarray(arr){

	let result  = 1;
	let current = 1;

	for(let i=1;i<arr.length;i++){

		if(arr[i] % 2 == 0 && arr[i-1] % 2 != 0){
			current = current + 1;

			if(current > result){
				result = current;
			}
		}
		else if(arr[i] % 2 != 0 && arr[i-1] % 2 == 0){
			current = current + 1;

			if(current > result){
				result = current;
			}
		}
		else{
			current = 1;
		}
	}
	return result;
}

console.log(maximumLengthEvenOddSubarray([10,12,14]));
console.log(maximumLengthEvenOddSubarray([7,9,5]));
console.log(maximumLengthEvenOddSubarray([10,12,14,7,8]));  // 14,7,8
console.log(maximumLengthEvenOddSubarray([11,12,14])); // 11,12