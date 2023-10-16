const checkStraightLine = (coordinate) => {
	const result = [];
	const firstCo = [];
	const secondCo = [];
	for (let i = 0; i < coordinate.length; i += 1) {
		firstCo.push(coordinate[i][0]);
		secondCo.push(coordinate[i][1]);
	}
	///first coordiante line stright check
	for (let i = 0; i < firstCo.length; i += 1) {
		if (i + 1 < firstCo.length) {
			if (firstCo[i + 1] === firstCo[i] + 1) result.push(true);
			else {
				result.push(false);
			}
		}
	}
	///second coordinate line stright check
	for (let i = 0; i < secondCo.length; i += 1) {
		if (i + 1 < secondCo.length) {
			if (secondCo[i + 1] === secondCo[i] + 1) result.push(true);
			else result.push(false);
		}
	}
	///final result
	for (let i = 0; i < result.length; i += 1) {
		if (result[i] === false) {
			return false;
			break;
		}
	}
	return true;
};

console.log(
	checkStraightLine([
		[1, 1],
		[2, 2],
		[3, 4],
		[4, 5],
		[5, 6],
		[7, 7],
	])
);
// https://leetcode.com/problems/check-if-it-is-a-straight-line/ 🥺
