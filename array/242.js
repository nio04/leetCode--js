const isAnagram = (s, t) => {
	// WE MAKE A DUPLICATE ARRAY OF OUR INPUT
	const copyInput = s.slice().split('');

	if (s.length !== t.length) return false;

	for (let check of t) {
		// IF [COPY-ARRAY] DOES NOT HAVE A VALUE,
		// WHICH CONTAINS IN OUR SECOND INPUT
		// THROW <FALSE>
		if (!copyInput.includes(check)) {
			return false;
		} else {
			// IF [COPY-ARRAY] DOES CONTAINS [CHECK] VALUE,
			// WE SPLICE THAT VALUE FROM [COPY-INPUT]
			copyInput.splice(copyInput.indexOf(check), 1);
		}
	}

	if (copyInput.length > 0) return false;
	else return true;
};

console.log(isAnagram('aacc', 'ccac'));

// https://leetcode.com/problems/valid-anagram/description/  😁
