/*string practice*/

function slice(id){
	let htmlText = html.get(id);
	let rtnStr = htmlText.slice(7,13);
	html.put(id, rtnStr);
}

function basicString(){
        let str1 = "hello";
        let str2 = "escape character \\\\ \\\" \\\' ";
        alert(str1 + " " + str2);
}

function replace(id, fStr, altStr){
        let htmlText = html.get(id);
        let rtnStr = htmlText.replace(fStr, altStr);
        html.put(id, rtnStr);
}

function updown(id, type){
	let rtnStr;
	if(type == 'up')
		rtnStr=html.get(id).toUpperCase();
	else if(type == 'down')
		rtnStr=html.get(id).toLowerCase();
	else{
		alert("Err");
		return 0;
	}
	html.put(id, rtnStr);
}
