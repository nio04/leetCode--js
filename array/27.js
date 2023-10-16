function removeElement(nums, val) {
	let j = 0;
	for (let n of nums) {
		if (n !== val) {
			j++;
			// nums[j++] = n;
			// console.log(j);
			// console.log(nums, n);
		}
	}
	return j;
}
console.log(removeElement([3, 2, 2, 3], 3));

// https://leetcode.com/problems/remove-element/description/  🥺
