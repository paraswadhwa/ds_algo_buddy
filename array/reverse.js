

function reverse(arr){

	let n = arr.length;
	let low = 0, high = n-1;

	while(low<high){
		let temp = arr[low];         //swap(arr[low],arr[high]);
		arr[low] = arr[high];
		arr[high] = temp;

		low++;
		high--;
	}
	return arr;
}

console.log(reverse([1,2,3,4,5]));