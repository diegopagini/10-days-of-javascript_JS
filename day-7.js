/**
 * https://www.hackerrank.com/challenges/js10-regexp-1/problem
 *
 * @format
 */
function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
	 */

	let re = /^([aeiou]).+\1$/;
	/*
	 * Do not remove the return statement
	 */
	return re;
}

function main() {
	const re = regexVar();
	const s = readLine();

	console.log(re.test(s));
}

function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
	 * followed by one or more letters.
	 */

	let re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)(\\.)([a-zA-Z])+$');
	/*
	 * Do not remove the return statement
	 */
	return re;
}

function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match ALL occurrences of numbers in a string.
	 */

	let re = /\d+/g;
	/*
	 * Do not remove the return statement
	 */
	return re;
}
function regexVar() {
	/*
	 * Declare a RegExp object variable named 're'
	 * It must match ALL occurrences of numbers in a string.
	 */

	let re = /\d+/g;
	/*
	 * Do not remove the return statement
	 */
	return re;
}
