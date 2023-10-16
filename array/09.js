const reverseCopyFunc = function (copyInput) {
	let storeReverse = [];

	for (let i = copyInput.length - 1; i >= 0; i -= 1) {
		storeReverse.push(copyInput[i]);
	}
	return storeReverse;
};

const reversedIntFunc = function (reversed) {
	return reversed.map((el) => {
		return Number(el);
	});
};

const reversedFlatFunc = function (reversedInt) {
	let res = '';

	for (let i = 0; i < reversedInt.length; i += 1) {
		res += reversedInt[i];
	}
	return res;
};

const checkPalindrome = function (prev, newly) {
	return prev == newly;
};

var isPalindrome = function (x) {
	const toString = String(x);
	const copyInput = toString.slice();

	const reversedString = reverseCopyFunc(copyInput);

	const reversedInt = reversedIntFunc(reversedString);

	const reversedFlat = reversedFlatFunc(reversedInt);

	return checkPalindrome(x, reversedFlat);
};

console.log(isPalindrome(121));
// https://leetcode.com/problems/palindrome-number/  😁
