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

function include(txtId, rstId, word){
	let txt = html.get(txtId);
	let rstStr = txt.includes(word);
	html.put(rstId, rstStr);
}

function startEndW(type, txtId, rstId, word){
	let txt = html.get(txtId);
	let rstStr;
	if(type === 'start')
		rstStr = txt.startsWith(word);
	else if(type === 'end')
		rstStr = txt.endsWith(word);
	else{
		alert("Err: no such type '" + type + "'");
		return -1;
	}
	html.put(resId, rstStr);
}


function templateLiterals(id){
	let x = 'hello';
	let y = 'bye';
	let a = 12;
	let b = 6;
	html.put(id, `${x}\n 12 *5 = ${a*b}\n ${y}`);
}
