(str)=>str.split("").map(n=>"\\u"+(n.charCodeAt(0).toString(16)).padStart(4,"0")).join("");
