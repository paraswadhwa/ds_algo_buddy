// Maximum Difference problem is to find the maximum value of arr[j] - arr[i] where j>i.


function maxDifferenceNaive(arr){

	let n = arr.length;

	let maxDiff = arr[1] - arr[0];

	for(let i=0;i<n-1;i++){
		for(let j=i+1;j<arr.length;j++){
			if(arr[j] - arr[i] > maxDiff){
				maxDiff = arr[j] - arr[i];
			}
		}
	}
	return maxDiff;
}

/*
There are 2 pointers i and j such and we need to update them to find max difference

When a new element is encountered , we need to consider it as j
and to find i we need to find shortest element of all elements before j as that will 
return the max difference .
Also we need to maintain that in a variable "shortest" which is our i basically.
*/

function maxDifference(arr){

	let n = arr.length;
	let maxDiff  = arr[1] - arr[0];
	let smallest = arr[0];

	for(let j=1;j<n;j++){

		if(arr[j] - smallest > maxDiff){
			maxDiff = arr[j] - smallest;
		}

		if(arr[j] < smallest){
			smallest = arr[j];
		}
	}
	return maxDiff;
}

console.log(maxDifference([2,3,10,6,4,8,1]));
