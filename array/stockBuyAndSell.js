// we know prices of stock for upcoming N days
// we can buy stock on any day and sell stock on any upcoming day
// need to maximise the profit


function stockBuyAndSell(arr){

	let profit = 0;

	for(let i=1;i<arr.length;i++){
		if(arr[i] - arr[i-1] > 0){
			profit = profit + (arr[i] - arr[i-1]);
		}
	}
	return profit;
}

console.log(stockBuyAndSell([1,5,3,8,12]));

/*

Working -> 

buy at 1 and sell at 5  -> profit = 5 - 1 = 4
buy at 3 and sell at 12 -> profit = 12- 3 = 9
profit = 4 + 9 = 13

*/