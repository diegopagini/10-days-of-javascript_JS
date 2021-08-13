/**
 * https://www.hackerrank.com/challenges/js10-inheritance/problem
 *
 * @format
 */
function getMaxLessThanK(n, k) {
	let max = 0;

	for (let a = 1; a <= n; a++) {
		for (let b = a + 1; b <= n; b++) {
			let bw = a & b;

			bw < k && bw > max && (max = bw);
		}
	}

	return max;
}

function getDayName(dateString) {
	let dayName = new Date(dateString).getDay();
	const weekDays = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return weekDays[dayName];
}
