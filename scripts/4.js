function get(id){
	return document.getElementById(id).innerHTML;
}
function put(id, putVal){
	document.getElementById(id).innerHTML = putVal;
	return 0;
}

function slice(id){
	let htmlText = get(id);
	let rtnStr = htmlText.slice(7,13);
	put(id, rtnStr);
}

function basicString(){
        let str1 = "hello";
        let str2 = "escape character \\\\ \\\" \\\' ";
        alert(str1 + " " + str2);
}

function replace(id, fStr, altStr){
        let htmlText = get(id);
        let rtnStr = htmlText.replace(fStr, altStr);
        put(id, rtnStr);
}

function updown(id, type){
	let rtnStr;
	if(type == 'up')
		rtnStr=get(id).toUpperCase();
	else if(type == 'down')
		rtnStr=get(id).toLowerCase();
	else{
		alert("Err");
		return 0;
	}
	put(id, rtnStr);
}
