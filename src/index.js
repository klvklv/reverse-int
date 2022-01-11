module.exports = function reverse (n) {
   let num = Math.abs(n);
	let str = num.toString();
	let strLength = str.length;
	let result = "";
	for(let i = strLength - 1; i >= 0; i--){
		result = result + str[i];
	}
	let n1 = parseInt(result);
	return n1;
}
