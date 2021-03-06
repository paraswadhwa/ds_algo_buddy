
/*
Given an array of n integers where each value represents the number of chocolates in a packet. 
Each packet can have a variable number of chocolates. 
There are m students, the task is to distribute chocolate packets such that: 

1. Each student gets one packet.
2. The difference between the number of chocolates in the packet with maximum chocolates 
   and packet with minimum chocolates given to the students is minimum.

Find the minimum difference.


Simple explanation -> Distribute chocolate packets to m students in such a way that they all 
get at least 1 packet and difference between max no of chocolates given and min no of 
chocolates given should be minimum.
*/


function chocolateDistribution(arr,m){

	arr.sort(function(a,b){
		return a-b;
	});

	let diff = arr[m-1] - arr[0];

	for(let i=1;i<arr.length - m + 1;i++){

		diff = Math.min(diff, arr[i + m -1] - arr[i]);
	}

	return diff;

}


let chocolatePacketsArr = [7, 3, 2, 4, 9, 12, 56];
let noOfStudents = 3;

console.log(chocolateDistribution(chocolatePacketsArr,noOfStudents));