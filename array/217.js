// const containsDuplicate = (nums) => {
//   const sort = nums.sort((a, b) => {
//     return a - b;
//   });

//   return sort[0] === sort[1];
// };

var containsDuplicate = function (nums) {
	const sort = nums.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < sort.length; i += 1) {
		if (sort[i] === sort[i + 1]) return true;
	}
	return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));
// https://leetcode.com/problems/contains-duplicate/ 😊
