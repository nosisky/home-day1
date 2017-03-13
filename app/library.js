'use strict'
const num = {
	func: function(num) {
		//check if num is less than 100
		num = Number(num); //performing type coercion
		if (num < 100) {
				var output = "less than 100";
				return output;
			}
			//check if num is equal to 100
			else if (num === 100) {
				var output = "equal to 100";
				return output;
			}
			// if either of the above is false definitely its more than 100
			else {
				var output = "more than 100";
				return output;
			}
	}
}
const data = {
	dataTypes: function(data) {
		//Check if input data is a string!
		if(typeof(data) === "string") {
			var result = String(data); //performing some type coercion
			const output = result.length;
			return output;
		} 
		//Check if input data is a boolean
		else if(typeof(data) === "boolean") {
			return data;
		}
		//Check if input data is a function
		else if(typeof(data) === "function") {
			return data(true);
		}
		//Check if input data is an Array
		else if(Array.isArray(data)) {
			const output = data[2];
			return output;
		}
		//Check if input data is a number
		else if(typeof(data) === "number") {
			const output = num.func(data);
			return output;
		}
		else {
			const output = "no value";
			return output;
		}
	} 
}

module.exports = data;