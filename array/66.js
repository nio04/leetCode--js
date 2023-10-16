const plusOne = function (digits) {
	if (digits.length === 1 && digits[0] === 9) {
		return [1, 0];
	} else if (digits.length > 1 && digits[digits.length - 1] === 9) {
		// CHECK IF EVERY DIGITS IS 9
		const everyDigitNine = digits.every((el) => el === 9);
		if (everyDigitNine) {
			digits.fill(0, 0, 999);
			digits.unshift(1);
			return digits;
		} else {
			// WHILE LAST DIGIT = 9 BUT NOT OTHER DIGGIT ARE 9
			const output = [];
			let carry = false;
			for (let i = digits.length - 1; i >= 0; i -= 1) {
				const sum = digits[i] + 1;

				if (sum === 10 && carry === false && i === digits.length - 1) {
					output.push(0);
					carry = true;
				} else if (sum === 10 && carry) {
					output.unshift(0);
					carry = true;
				} else if (i === 9 && carry === false) {
					output.unshift(digits[i]);
				} else if (sum !== 10 && carry) {
					output.unshift(sum);
					carry = false;
				} else if (carry === false) {
					output.unshift(digits[i]);
				}
			}
			return output;
		}
	} else {
		// IF LAST DIGITS IS NOT 9
		digits[digits.length - 1] = digits[digits.length - 1] + 1;
		return digits;
	}
};

console.log(plusOne([1, 2, 3]));

// https://leetcode.com/problems/plus-one/ 😁
