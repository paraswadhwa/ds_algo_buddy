/* Working ->

1. reverse first d elements
2. reverse other elements(except first d elements)
3. reverse the whole array

*/

function reverse(arr,low,high){

	while(low<high){
		let temp = arr[low];
		arr[low] = arr[high];
		arr[high] = temp;

		low++;
		high--;
	}
	return arr;
}

function leftRotateByDplaces(arr,d){
	reverse(arr,0,d-1);
	reverse(arr,d,arr.length-1);
	reverse(arr,0,arr.length-1);
	return arr;
}

console.log(leftRotateByDplaces([1,2,3,4,5],2)); //[3,4,5,1,2]