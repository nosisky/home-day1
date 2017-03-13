//My test cases for getPrimes
'use strict'
var app = require("../app/library.js");
describe("Cases for invalid input", function() {
	describe("Cases for empty input", function() {
		it("should return `Invalid input! only positive numbers are allowed` for ()", function() {
			expect(app.getPrimes()).toBe('Invalid input! only positive numbers are allowed');
		});
	});

	describe("Cases for Strings as input", function() {
		it("should return `Invalid input! only positive numbers are allowed` for 'hello'", function() {
			expect(app.getPrimes('hello')).toBe('Invalid input! only positive numbers are allowed');
		});

		it("should return `Invalid input! only positive numbers are allowed` for 'world'", function() {
			expect(app.getPrimes('world')).toBe('Invalid input! only positive numbers are allowed');
		});

		it("should return `Invalid input! only positive numbers are allowed` for 'mytest'", function() {
			expect(app.getPrimes('mytest')).toBe('Invalid input! only positive numbers are allowed');
		});
	});

	describe("Cases for Arrays as Input", function() {
		it("should return `Invalid input! only positive numbers are allowed` for []", function() {
			expect(app.getPrimes([])).toBe('Invalid input! only positive numbers are allowed');
		});

		it("should return `Invalid input! only positive numbers are allowed` for [1, 2, 3, 4]", function() {
			expect(app.getPrimes([1, 2, 3, 4])).toBe('Invalid input! only positive numbers are allowed');
		});

		it("should return `Invalid input! only positive numbers are allowed` for -10", function() {
			expect(app.getPrimes(-10)).toBe('Invalid input! only positive numbers are allowed');
		});
	});
	describe("Cases For Numbers as input", function(){
		it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
			expect(app.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function() {
			expect(app.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23] for 23", function() {
			expect(app.getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
		});

		it("should return [2, 3, 5, 7] for 7", function() {
			expect(app.getPrimes(7)).toEqual([2, 3, 5, 7]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 50", function() {
			expect(app.getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 40", function() {
			expect(app.getPrimes(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67] for 70", function() {
			expect(app.getPrimes(70)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
		});

		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {
			expect(app.getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
		});

	});

});