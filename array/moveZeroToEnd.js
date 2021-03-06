// move all zeroes to the end and persist the order

/* Working -> 

1. Keep a count of non-zero elements
2. when a new element is inserted
    if it is non-zero {
    	find its correct position using count stored and insert it at the correct position
    }
    else ignore
*/

function moveZeroesToEnd(arr){

	let count = 0; // stores count of non-zero elements

	for(let i=0;i<arr.length;i++){
		if(arr[i] != 0){

			/***************************/
			let temp   = arr[i];
			arr[i]     = arr[count];        //swap(arr[i],arr[count]); 
			arr[count] = temp;
			/***************************/

			count++;
		}
	}
	return arr;
}


console.log(moveZeroesToEnd([8,5,0,10,0,20]));