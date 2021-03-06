

function leftRotateByOne(arr){
	let x = arr[0];

	for(let i=1;i<arr.length;i++){
		arr[i-1] = arr[i];
	}
	arr[arr.length-1] = x;
	return arr;
}

console.log(leftRotateByOne([1,2,3,4,5]));