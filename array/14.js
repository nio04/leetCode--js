const longestCommonPrefix = (str) => {
	const input = str;
	let res = '';
	let matched = 0;
	let counter = 0;

	if (input[0] === '') return res;
	if (input.length === 1) return input[0];

	for (let i = 0; i < input.length; i += 1) {
		const currentWord = input[0][counter];

		if (input[i][counter] === currentWord) {
			matched += 1;
		}
		if (i === input.length - 1) {
			if (matched === input.length) {
				res += currentWord;
				counter += 1;
				matched = 0;
				// IF I = 0, THEN FIRST ITERATION SKIPPED
				// FOR WHAT REASON?! I DONT KNOW
				i = -1;
			}
			if (counter === input[0].length) {
				break;
			}
		}
	}
	return res;
};
console.log(longestCommonPrefix(['', '']));
// https://leetcode.com/problems/longest-common-prefix/  😊
