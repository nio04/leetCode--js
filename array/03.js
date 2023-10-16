const lengthOfLongestSubstring = (s) => {
	const subString = [];

	for (let i = 0; i < s.length; i += 1) {
		for (let j = s.length - 1; j > i; j -= 1) {
			if (s[i] === s[j]) {
				for (let k = i + 1; k < j; k += 1) {
					if (s[k] === s[k + 1]) {
						subString.push(1);
					}
				}
				if (s[i] === s[i + 1]) {
					subString.push(i + 1, j);
				}
				subString.push(i, j);
			}
		}
	}
	if (s.substring(subString[0], subString[1]).length === 0) {
		return 1;
	} else {
		return s.substring(subString[0], subString[1]).length;
	}
};

console.log(lengthOfLongestSubstring('bbbbb'));

// https://leetcode.com/problems/longest-substring-without-repeating-characters/ 🥺
