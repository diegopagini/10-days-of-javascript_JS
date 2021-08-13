/**
 * https://www.hackerrank.com/challenges/js10-if-else/problem
 *
 * @format
 */
function getGrade(score) {
	let grade;
	// Write your code here
	if (score > 25 && score <= 30) {
		grade = 'A';
	} else if (score > 20 && score <= 25) {
		grade = 'B';
	} else if (score > 15 && score <= 20) {
		grade = 'C';
	} else if (score > 10 && score <= 15) {
		grade = 'D';
	} else if (score > 5 && score <= 10) {
		grade = 'E';
	} else if (score > 0 && score <= 5) {
		grade = 'F';
	}
	return grade;
}

function getLetter(s) {
	let letter;
	// Write your code here
	const first = s.split('');
	switch (first[0]) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			return (letter = 'A');
		case 'b':
		case 'c':
		case 'd':
		case 'f':
		case 'g':
			return (letter = 'B');
		case 'h':
		case 'j':
		case 'k':
		case 'l':
		case 'm':
			return (letter = 'C');
		default:
			return (letter = 'D');
	}
	return letter;
}

function vowelsAndConsonants(string) {
	const _vowels = ['a', 'e', 'i', 'o', 'u'];
	const vowels = [];
	const consonants = [];

	for (let character of string) {
		// The indexOf () method returns the first index at which a given element can be found
		// in the array, or returns -1 if the element is not present.
		if (_vowels.indexOf(character) !== -1) {
			vowels.push(character);
		} else {
			consonants.push(character);
		}
	}
	vowels.push(...consonants);
	for (let character of vowels) {
		console.log(character);
	}
}
