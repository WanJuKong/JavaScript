/*string serch*/
var type='first';

function setLocateType(setType, id){
	type = setType;
	html.put(id, setType);
}

function locate(txtId, rstId, word){
	let txt = html.get(txtId);
	let rtnStr;
	if(type == 'first'){
		rtnStr = txt.indexOf(word);
	}
	else if(type == 'last'){
		rtnStr = txt.lastIndexOf(word);
	}
	else if(type == 'all'){
		rtnStr = locateAll(txt, word);
	}
	else{
		alert('Err: type set wrong or undefined');
		return 0;
	}
	html.put(rstId, "word: '" + word + "' starts at " + rtnStr + "'th index");
}

function locateAll(txt, word, start = 0, sum = []){
	rst = txt.indexOf(word, start);
	if(rst==-1)
		return sum;
	else{
		sum.push(rst);
		return locateAll(txt, word, rst+1, sum);
	}
}
