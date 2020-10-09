/**
 * Converts a hex string to ascii text.
 * @param {string} hex - The hex string being converted to ascii text
 * @param {boolean} le - If the string has a little endian(reversed) byte order
 */
function hexToText(hex, le) {
    return (le ? Array.prototype.reverse : Array.prototype.slice).call(hex.replace(/[^0-9a-fA-F]/g, "").match(/.{1,2}/g).map(x=>String.fromCharCode(parseInt(x, 16)))).join("");
}
