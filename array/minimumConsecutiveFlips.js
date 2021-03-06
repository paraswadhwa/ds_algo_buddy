
// Given a binary array, we need to find the minimum of number of group flips to make 
// all array elements same.  In a group flip, we can flip any set of consecutive 1s or 0s
// Implement using one traversal only

/*

 Strategy :

 Group count differ by one : (beginning & end are same)

 1 1 0 0 0 1 1 1 0 0 1   (2 groups of 0 and 3 groups of 1) -> diff = 1

 group count are same : (beginning & end are not same)

 0 0 1 1 1 0 0 0 0 1 1   (2 groups of 0 and 2 groups of 1) -> diff = 0

 RULE : Always flip Second group element for minimum flips (will either have equal count or less count)

*/

function minimunConsecutiveFlips(arr){

	for(let i=1;i<arr.length;i++){

		if(arr[i] != arr[i-1]){
			if(arr[i] != arr[0]){
				console.log("flip from "+ i+ " to ");
			}
			else{
				console.log(i-1);
			}
		}
	}

	if(arr[arr.length-1] != arr[0]){   // if last element needs to be flipped
		console.log(arr.length-1);
	}
}

minimunConsecutiveFlips([1,1,0,0,0,1]);