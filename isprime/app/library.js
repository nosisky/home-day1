//My function to pass all my test case
//My formular to check for prime numbers 
const myFormula = {
	//check if a number is prime
	checkPrime: function(n) {
		return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/)); //Using Regexp
	}
};
const check = {
	getPrimes: function(n) {
		if(isNaN(n) || parseInt(n) < 0) {
			const msg = "Invalid input! only positive numbers are allowed";
			return msg;
		}
		//check if n is an array
		if(Array.isArray(n)) {
			const msg = "Invalid input! only positive numbers are allowed";
			return msg;
		} 
		var result = [];
		//Generating an array of numbers from 1 to n
		const list = Array.from(new Array(n), (val,index)=>index + 1);

		//filter every element that is a prime number
		const primeNumbers = list.filter(function (lists) {
		  if(lists === 2) {
		    result.push(2);
		  }
		  if(lists === 3) {
		    result.push(3);
		  }
			if(lists > 3) {
				return myFormula.checkPrime(lists) === true;
			}
		});
		
		
		const finalResult = result.concat(primeNumbers);
		return finalResult;
	}
};
module.exports = check;