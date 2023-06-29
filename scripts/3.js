/*objects practice*/

function func_3_1() {
	let x = 100;
	let v1 = x & 5;
	let v2 = x | 5;
	let v3 = x ^ 5;
	let v4 = false || 5;
	document.getElementById("3_1_1").innerHTML = v1;
	document.getElementById("3_1_2").innerHTML = v2;
	document.getElementById("3_1_3").innerHTML = v3;
	document.getElementById("3_1_4").innerHTML = v4;
}


function func_3_2(){
	const person = {
                firstName : "juwan",
                lastName : "kim",
                phoneNumber : "010-3048-3057",
                getFullName : function(){
                        return this.firstName + " " + this.lastName;
                }
	};
        document.getElementById("3_2_1").innerHTML = person.getFullName();
        document.getElementById("3_2_2").innerHTML = person.phoneNumber;
}
  
