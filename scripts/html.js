/*html document read, put function*/

/* about this function
 *
 * get, pull, read : gets innerHTML data of given elementID
 * 	return : success(element data:string)
 * 	HowToUse: html.get(id) || html('get', id) || html.pull(id) || html('pull', id) || html.read(id) ...etc
 *
 * put, set : put data to innerHTML of given elementID
 * 	return : success(0:num), fail(-1:num)
 * 	HowToUse: html.put(id, putData) || html('put', id, putData) ...etc
 *
 * add, insert, append : add data to innerHTML of given elementID at given index(default set to -1)
 * 	return : success(0:num), fail(-1:num)
 * 	HowToUse: html.add(id, addData, index) || html('add', id, addData, index) ...etc
 *
 * Copyright 2023.juwan all rights reserved.
 */

function html(type, id, data = undefined, index = -1){
	if(type == 'get' || type == 'pull' || type == 'read')
		return html.get(id);
	else if(type == 'put' || type == 'set')
		return html.put(id, data);
	else if(type == 'add' || type == 'insert' ||type == 'append')
		return html.add(id, data, index);
	else{
		alert("Err: no such type['" + type + "']");
		return -1;
	}
}

const html = {
	get : function(id){
		return document.getElementById(id).innerHTML;
	},

	pull : function(id){	/* same as function 'get' */
		return this.get(id);
	},

	read : function(id){	/* same as function 'get' */
		return this.get(id);
	},

	put : function(id, putData){
		if(putData==undefined){
			alert('Err: putData undefined');
			return -1;
		}
		document.getElementById(id).innerHTML = putData;
		return 0;
	},

	set : function(id, putData){	/* same as function 'put' */
		return this.put(id, putData);
	},

	add : function(id, addData, index = -1){
		if(addData==undefined){
			alert('Err: addData undefined');
			return -1;
		}
		if(index==-1){
			document.getElementById(id).innerHTML += addData;
			return 0;
		}
		else{
			let txt = this.get(id);
			let rtnData = txt.slice(0,index) + addData + txt.slice(index);
			thos.put(rtnData);
		}
	},

	insert : function(id, addData, index = -1){
		return this.add(id, addData, index = -1);
	},

	append :function(id, addData, index = -1){
		return this.add(id, addData, index = -1);
	}
};
