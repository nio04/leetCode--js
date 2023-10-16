var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i += 1) {
		for (let j = i + 1; j < nums.length; j += 1) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}
		}
	}
};

console.log(twoSum([3, 2, 3], 6));

/*
https://leetcode.com/problems/two-sum/  😁
*/
