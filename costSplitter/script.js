function totalCost() {
	let a = includingTip / numberofPeople; 
	document.getElementById("eachPersonPays").innerHTML = "Each Person Pays This Amount: " + a; 

	let totalBillAmount = parseInt(document.getElementById("totalBillAmount").value); 
	let numberOfPeople = parseInt(document.getElementById("numberOfPeople").value);
	let tip = parseInt(document.getElementById("tip").value);
	let a = tip * totalBillAmount; 
	let b = totalBillAmount + a; 
	let c = numberOfPeople / c; 

	document.getElementById("eachPersonPays").innerHTML = "Each Person Pays This Amount: " + c; 
};  





