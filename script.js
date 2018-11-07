let numberOfPeople = document.getElementById("numberofPeople").value;
let totalBillAmount = document.getElementById("totalBillAmount").value; 
let tipLevel = document.getElementById("tip").value;
let includingTip = []; 

function totalCost() {
	let a = includingTip / numberofPeople; 
	document.getElementById("eachPersonPays").innerHTML = "Each Person Pays This Amount: " + a; 
}

function suggestedGratuityLevels() {
	let b = totalBillAmount * tipLevel; 
	includingTip.push(b);  
}

 