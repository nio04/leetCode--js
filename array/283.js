// https://leetcode.com/problems/move-zeroes/
var moveZeroes = function (nums) {
	let countZero = 0;
	for (let i = 0; i < nums.length; i += 1) {
		if (nums[i] === 0) {
			countZero += 1;
		}
	}

	for (let i = 0; i <= nums.length; i += 1) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			i -= 1;
		}
	}

	for (let i = 0; i < countZero; i += 1) {
		nums.push(0);
	}
};

console.log(moveZeroes([0, 0, 1]));
