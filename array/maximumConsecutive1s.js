

function maximumConsecutiveOnes(arr){

	let count = 0; 
	let currentCount = 0;

	for(let i=0;i<arr.length;i++){

		if(arr[i] == 0){
			currentCount = 0;
		}
		else{
			currentCount = currentCount + 1;
			count = Math.max(count,currentCount);
		}
	}
	return count;
}

console.log(maximumConsecutiveOnes([0,1,0,1,1,1]));