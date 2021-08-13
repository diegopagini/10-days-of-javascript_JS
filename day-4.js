/**
 * https://www.hackerrank.com/challenges/js10-if-else/problem
 *
 * @format
 */
function Rectangle(a, b) {
	return {
		length: a,
		width: b,
		perimeter: a + a + b + b,
		area: a * b,
	};
}

function getCount(objects) {
	const count = objects.filter((el) => el.y === el.x);
	return count.length;
}

class Polygon {
	constructor(array) {}

	perimeter(array) {
		let total = 0;
		array.forEach((element) => {
			total += element;
		});
		return total;
	}
}
