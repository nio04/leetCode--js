var majorityElement = function (nums) {
	let currVal = 0;
	let count = 1;
	if (nums.length === 1) {
		return nums;
	}
	for (let i = 1; i <= nums.length; i += 1) {
		if (nums[i] === nums[currVal]) {
			count += 1;
		}
		if (i === nums.length - 1) {
			if (count > nums.length / 2) {
				return nums[currVal];
			} else {
				currVal += 1;
				i = 1;
				count = 1;
			}
		}
	}
};

console.log(majorityElement([2, 2, 3, 3, 3, 3, 2]));

// https://leetcode.com/problems/majority-element/description/  😁
