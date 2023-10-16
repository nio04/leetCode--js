const searchInsert = function (nums, target) {
	const isAvailableTarget = nums.includes(target);

	if (isAvailableTarget) {
		return nums.indexOf(target);
	} else {
		for (let i = 0; i < nums.length; i += 1) {
			let nextVal = i + 1;

			if (target >= nums[i] && target <= nums[nextVal]) {
				return i + 1;
			} else if (target <= nums[0]) {
				return 0;
			} else if (target >= nums[nums.length - 1]) {
				return nums.length;
			}
		}
	}
};

console.log(searchInsert([1, 3, 5], 4));

//  https://leetcode.com/problems/search-insert-position/description/
