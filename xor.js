function xor(a, b) {
	[a, b] = [a, b].map(x=>x.toString(2)).sort((a,b)=>a.length-b.length).map(x=>x.split(""));
	a = a.join("").padStart(b.length, "0").split("");
	return parseInt(b.map((x,i)=>x!==a[i]?"1":"0").join(""), 2);
}