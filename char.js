  
/**
 * Typecasts a number or string with length 1 to a char
 * @param {int, String} num - the number being typecast
 */
function char(num) {
	if (typeof num === "string") num = num.charCodeAt(0);
	return (num%128) + ((Math.trunc((num/128))%2 === 0)?0:Math.sign(num%128)===1?-128:128);
}
