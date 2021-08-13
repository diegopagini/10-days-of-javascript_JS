/**
 * https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem
 *
 * @format
 */
/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
	let area;
	// Write your code here
	area = length * width;
	return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
	let perimeter;
	// Write your code here
	perimeter = 2 * (length + width);
	return perimeter;
}

/*
 * Create the function factorial here
 */
function factorial(n) {
	if (n === 0) {
		return n;
	}

	let total = 1;
	for (let i = 1; i <= n; i++) {
		total = total * i;
	}
	return total;
}

function main() {
	let r = parseFloat(readLine());
	const PI = Math.PI;

	// Print the area of the circle:
	console.log(PI * r * r);

	// Print the perimeter of the circle:
	console.log(PI * 2 * r);

	try {
		// Attempt to redefine the value of constant variable PI
		PI = 0;
		// Attempt to print the value of PI
		console.log(PI);
	} catch (error) {
		console.error("You correctly declared 'PI' as a constant.");
	}
}
