
// an element that appears more than n/2 times in an array of size n
// return index of that element

function findCandidate(arr){
	let result = 0;
	let count  = 1;

	for(let i=0;i<arr.length;i++){
		if(arr[i] == arr[result]){
			count++;
		}
		else{
			count --;
		}
		if(count == 0){
			result = i;
			count  = 1;
		}
	}
	return result;
}

function checkWhetherMajority(candidate,arr){
	let count = 0;

	for(let i=0;i<arr.length;i++){
		if(arr[i] == arr[candidate]){
			count = count + 1;
		}
	}

	if(count > arr.length/2){
		return true;
	}
	return false;
}

function majorityElement(arr){

	let candidate  = findCandidate(arr);
	let isMajority = checkWhetherMajority(candidate,arr);

	if(isMajority == true){
		return candidate;
	}
	return -1;
}

console.log(majorityElement([8,3,4,8,8]));