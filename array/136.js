// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
	if (nums.length === 1) {
		return nums;
	} else {
		const sort = nums.sort((a, b) => a - b);
		for (let i = 0; i < sort.length; i += 1) {
			if (sort[i] === sort[i + 1]) {
				i += 1;
				// and [i] will be incremented once again by  for loop
			} else {
				return sort[i];
			}
		}
	}
};

console.log(singleNumber([4, 1, 2, 1, 2]));
