const climbStairs = function (n) {
	let res = 0;
	const firstCase = n - 1;
	const secondCase = n - 2;
	if (n === 1) return (res = 1);
	if (n === 2) return (res = 2);
	if (n > 2) return (res = firstCase + secondCase);
};

console.log(climbStairs(5));

//  https://leetcode.com/problems/climbing-stairs/ 🥺
