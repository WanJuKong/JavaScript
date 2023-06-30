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
			this.put(rtnData);
			return 0;
		}
	},

	insert : function(id, addData, index = -1){
		return this.add(id, addData, index = -1);
	},

	append :function(id, addData, index = -1){
		return this.add(id, addData, index = -1);
	}
};
