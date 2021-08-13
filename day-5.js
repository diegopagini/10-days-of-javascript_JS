/**
 * https://www.hackerrank.com/challenges/js10-inheritance/problem
 *
 * @format
 */
class Rectangle {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
}

Rectangle.prototype.area = function () {
	return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
	constructor(s) {
		super(s, s);
	}
}

function modifyArray(nums) {
	return nums.map((el) => {
		if (el % 2 === 0) {
			return el * 2;
		} else {
			return el * 3;
		}
	});
}

function sides(literals, ...expressions) {
	const [a, p] = expressions;
	const value = Math.sqrt(p ** 2 - 16 * a);

	return [(p - value) / 4, (p + value) / 4];
}
