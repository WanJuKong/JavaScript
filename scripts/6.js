function basicMath(id){
	let x = 0.2 + 0.1;
	html.insert(id, x,-1);
}

function basicMathFix(id){
	let x = (0.2 * 10 + 0.1 * 10) / 10;
	html.insert(id, ' = ' + x, -1)
}

const mathStr = {
	add : function(id, str1, str2){
		rst = str1 + str2;
		html.append(id, ' = ' + rst, -1);
		return 0;
	},
	sub : function(id, str1, str2){
                rst = str1 - str2;
                html.append(id, ' = ' + rst, -1);
                return 0;
	},
	mult : function(id, str1, str2){
                rst = str1 * str2;
                html.append(id, ' = ' + rst, -1);
                return 0;
        },
	dev : function(id, str1, str2){
                rst = str1 / str2;
                html.append(id, ' = ' + rst, -1);
                return 0;
        }
}


