
// Print first m , n-bonacci numbers

// Fibonacci (Twobonacci) -> n = 2 (every element is sum of prev 2 elements)
// Tribonacci 			  -> n = 3 (every element is sum of prev 3 elements)

// For n = 3 , there will be n-1 i.e. 2 zeros and single one.
// For n = 2 , there will be n-1 i.e. 1 zeros and single one.

function nBonacciNumbers(n,m){

	let arr = new Array(m);

	arr.fill(0);

	arr[n-1] = 1;
	arr[n] 	 = 1;

	for (let i = n+1; i < m; i++){
    	arr[i] = arr[i-1] + arr[i-1] - arr[i-n-1];  
	}

	return arr;
}

console.log(nBonacciNumbers(2,8)); // 0 1 1 2 3 5 8 13
console.log(nBonacciNumbers(3,8)); // 0 0 1 1 2 4 7 13

// Two-bonacci

// arr[3] = arr[2] + arr[2] - arr[3-2-1] = arr[2] + arr[2] - arr[0]
// arr[4] = arr[3] + arr[3] - arr[4-2-1] = arr[3] + arr[3] - arr[1]
// arr[5] = arr[4] + arr[4] - arr[5-2-1] = arr[4] + arr[4] - arr[2]

// Tribonacci

// arr[3] = arr[2] + arr[2] - arr[3-3-1] = arr[2] + arr[2] - arr[-1]
// arr[4] = arr[3] + arr[3] - arr[4-3-1] = arr[3] + arr[3] - arr[0]
// arr[5] = arr[4] + arr[4] - arr[5-3-1] = arr[4] + arr[4] - arr[1]