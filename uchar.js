/**
 * Typecasts a number or string with length 1 to an unsigned char
 * @param {int, String} num - the number being typecast
 */
function unsignedchar(num) {
	if (typeof num === "string") num = num.charCodeAt(0);
	return Math.sign(num) === -1 ? 256 - (Math.abs(num) % 256) : Math.abs(num) % 256;
}
