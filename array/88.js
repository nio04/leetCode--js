let num1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const num2 = [2, 5, 6];
const n = 3;

if (m > 0 && n > 0) {
	num1 = [...num1.slice(0, m), ...num2.slice(0, n)].sort((a, b) => a - b);
} else if (m === 0 && n > 0) {
	num1 = [...num1.splice(), ...num2.slice(0, n)];
} else if (m > 0 && n === 0) {
	num1 = [...num1.slice(0, m), ...num2.splice()];
}
// console.log(num1);
// https://leetcode.com/problems/merge-sorted-array/  😁

// var merge = function (nums1, m, nums2, n) {
// 	if (m > 0 && n > 0) {
// 		nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
// 	} else if (m === 0 && n > 0) {
// 		nums1 = [...nums1.splice(), ...nums2.slice(0, n)];
// 	} else if (m > 0 && n === 0) {
// 		nums1 = [...nums1.slice(0, m), ...nums2.splice()];
// 	} else if (m === 0 && n === 0) {
// 		nums1 = [];
// 	}
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

var merge = function (nums1, m, nums2, n) {
	for (let i = m, j = 0; j < n; i += 1, j += 1) {
		nums1[i] = nums2[j];
	}

	nums1.sort((a, b) => a - b);
};
