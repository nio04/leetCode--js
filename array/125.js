const s = 'a.';

const makeItSimpleString = (input) => {
	return input
		.toLowerCase()
		.split('')
		.filter((el) => (el >= 'a' && el <= 'z') || el == Number(el))
		.join('')
		.replaceAll(' ', '');
};

const reverseInput = (input) => {
	const output = [];
	for (let i = input.length - 1; i >= 0; i -= 1) {
		output.push(input[i]);
	}
	return output.join('');
};

const checkBothWard = (input1, input2) => {
	for (let i = 0; i < input1.length; i += 1) {
		if (input1[i] !== input2[i]) return false;
	}
	return true;
};

const isPalindrome = (input) => {
	const palindrome = makeItSimpleString(input);
	console.log(palindrome);
	const reverseString = reverseInput(palindrome);

	return checkBothWard(palindrome, reverseString);
};
console.log(isPalindrome(s));

// https://leetcode.com/problems/valid-palindrome/ 😊
