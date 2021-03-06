
// Given n ranges, find the maximum occuring element in their ranges

function maximumOccuringElement(L,R,N){

	let arr = new Array(1000);			   // L[i],R[i] < 1000
	arr.fill(0);

	for(let i=0;i<N;i++){
		arr[L[i]]     = arr[L[i]] + 1;     // increment index of L[i] position
		arr[R[i] + 1] = arr[R[i] + 1] - 1; // increment index of R[i]+1 position
	}

	let result  = 0;
	let maximum = arr[0];

	for(let i=1;i<arr.length;i++){
		arr[i] = arr[i] + arr[i-1];       // calculate prefix sum
		if(arr[i] > maximum){		      // find max value in the array
			maximum = arr[i];
			result  = i;
		}
	}
	return result;
}


let L = [1,2,5,15];
let R = [5,8,7,18];
let N = 4

// ranges are 1-5 -> [1,2,3,4,5]
//            2-8 -> [2,3,4,5,6,7,8]
//			  5-7 -> [5,6,7]
//			15-18 -> [15,16,17,18]

// find element that appears in max no of ranges -> 5

console.log(maximumOccuringElement(L,R,N));
