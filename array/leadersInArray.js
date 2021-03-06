// An element is called the leader of an array if there is no element greater 
// than it on the right side.


function leadersInArray(arr){

	let n = arr.length;
	let leader = arr[n-1]
	console.log(leader);

	for(let i=n-1;i>=0;i--){
		if(arr[i] > leader){
			leader = arr[i];
			console.log(leader);
		}
	}
}


leadersInArray([7,10,4,3,6,5,2]);

// store elements in an array and reverse it , if you want to maintain the order