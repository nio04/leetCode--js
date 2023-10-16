var maxProfit = function (prices) {
	console.log(prices);

	let buyVal = prices[0];
	let buyValIndex = 0;
	let sellVal = prices[0];
	for (let i = 1; i < prices.length; i += 1) {
		if (prices[i] > buyVal) {
			sellVal = prices[i];
		} else {
			if (i !== prices.length - 1) {
				buyVal = prices[i];
				buyValIndex = i;
				const copyArr = prices.slice();
				const cutArr = copyArr.splice(buyValIndex + 1).sort((a, b) => b - a);
				console.log(cutArr, 'cut');
				if (cutArr[0] > buyVal) {
					sellVal = cutArr[0];
					console.log('iam in', sellVal, cutArr[0]);
				}
				i = prices.length;
			}
		}
	}
	console.log(buyVal, sellVal);
	return sellVal - buyVal;
};

console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([1, 2]));

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ 🥺
