
// find frequencies of all the elements in a sorted array

function findFrequency(arr){

	let element = arr[0];
	let count   = 1;

	for(let i=1;i<arr.length;i++){
		if(arr[i] == element){
			count++;
		}
		else{
			console.log("count of "+ element + " is: "+count);
			element = arr[i];
			count   = 1;
		}
	}
	console.log("count of "+ element + " is: "+count);
}

findFrequency([10,10,10,25,30,30]);