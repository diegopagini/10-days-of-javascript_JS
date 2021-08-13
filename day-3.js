/**
 * https://www.hackerrank.com/challenges/js10-if-else/problem
 *
 * @format
 */
function getSecondLargest(nums) {
	const notRepeatedNumbers = [...new Set(nums)];
	const orederedNubers = notRepeatedNumbers.sort((a, b) => b - a);
	return orederedNubers[1];
}

function reverseString(s) {
	typeof s !== 'string'
		? console.log('s.split is not a function')
		: (s = s.split('').reverse().join(''));

	console.log(s);
}

function isPositive(a) {
	if (a > 0) {
		return 'YES';
	} else if (a === 0) {
		throw new Error('Zero Error');
	} else if (a < 0) {
		throw new Error('Negative Error');
	}
}
