
/* 
You are given a list of n-1 integers and these integers are in the range of 1 to n. 
There are no duplicates in the list. 
One of the integers is missing in the list. 
Write an efficient code to find the missing integer.
*/

function missingNumber(arr){

	let N = arr.length + 1;
	let sum  = 0;

	for(let i=0;i<arr.length;i++){
		sum = sum + arr[i];
	}

	let missingNumber = (N * (N+1)/2) - sum;

	return missingNumber;
}

console.log(missingNumber([1, 2, 4, 6, 3, 7, 8]));


// to prevent integer overflow ,use the below code 

function missingNumber(arr){
	let total = 1;

    for (let i = 2; i <= (arr.length + 1); i++)
    {
        total = total + i;
        total = total - arr[i - 2];
    }
    return total;
}