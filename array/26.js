const removeDuplicates = (nums) => {
	// COUNTER
	let k = 0;

	for (let i = 0; i < nums.length; i += 1) {
		if (nums[i] === nums[i + 1]) {
			// 1. IF CURRENT & NEXT NUMBER IS SAME
			// 1.2 THEN, REMOVE THE NEXT SIMILAR ELEMENT
			nums.splice(nums.indexOf(nums[i + 1]), 1);
			// DECREASE THE LOOP COUNTER
			i -= 1;
		} else {
			// IF CURRENT & NEXT IS DIFFERENT, INCREASE OUR COUNTER
			k += 1;
		}
	}
	return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/ 😁
