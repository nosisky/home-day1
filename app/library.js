const data = {
	dataTypes: function(data) {
		//Check if input data is a string!
		if(typeof(data) === "string") {
			var result = String(data); //performing some type coercion
			const output = result.length;
			return output;
		} 
		else if(typeof(data) === "function") {
			return data(true);
		}
		//Check if input data is a boolean
		else if(typeof(data) === "boolean") {
			return data;
		}
		//Check if input data is a function
		
	} 
}

module.exports = data;