const isValid = (s) => {
	const stack = [];

	for (let i = 0; i < s.length; i += 1) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			// STORE ALL THE OPEN-ING BRACKETS
			stack.push(s[i]);
		} else {
			// IF IT IS NOT OPEN-ING BRACKET
			if (s[i] === ')') {
				// IF ANY PREVIOUS VALUE IS ANY OTHER OPEING BRACKETS, RETURN <FALSE>
				if (stack.indexOf('{') === i - 1 || stack.indexOf('[') === i - 1)
					return false;
				else {
					// IF NO OPEN-ING BRACKETS WERE FOUND
					if (stack.indexOf('(') === -1) stack.push(s[i]);

					// IF OPEN-ING BRACKETS WERE FOUND
					stack.lastIndexOf('(') === stack.length - 1
						? stack.splice(stack.lastIndexOf('('), 1)
						: stack.push(s[i]);
				}
			} else if (s[i] === '}') {
				// IF ANY PREVIOUS VALUE IS ANY OTHER OPEING BRACKETS, RETURN <FALSE>
				if (stack.indexOf('(') === i - 1 || stack.indexOf('[') === i - 1)
					return false;
				else {
					// IF NO OPEN-ING BRACKETS WERE FOUND
					if (stack.indexOf('{') === -1) stack.push(s[i]);
					// IF OPEN-ING BRACKETS WERE FOUND
					stack.lastIndexOf('{') === stack.length - 1
						? stack.splice(stack.lastIndexOf('{'), 1)
						: stack.push(s[i]);
				}
			} else if (s[i] === ']') {
				// IF ANY PREVIOUS VALUE IS ANY OTHER OPEING BRACKETS, RETURN <FALSE>
				if (stack.indexOf('(') === i - 1 || stack.indexOf('{') === i - 1)
					return false;
				else {
					// IF NO OPEN-ING BRACKETS WERE FOUND
					if (stack.indexOf('[') === -1) stack.push(s[i]);
					// IF OPEN-ING BRACKETS WERE FOUND
					stack.lastIndexOf('[') === stack.length - 1
						? stack.splice(stack.lastIndexOf('['), 1)
						: stack.push(s[i]);
				}
			}
		}
	}

	// CHECKING STORAGE LENGTH
	if (stack.length >= 1) return false;
	else return true;
};

console.log(isValid('(([]){})'));

// https://leetcode.com/problems/valid-parentheses/ 😊
