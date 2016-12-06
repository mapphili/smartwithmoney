
function Calculate() {
	var savinggoal = document.getElementById("SavingGoal").value;
	var currentmoney = document.getElementById("CurrentMoney").value;
	var savemonth = document.getElementById("SaveMonth").value;
	var savingmoney = (savinggoal) - (currentmoney);
	var moneyleft = savingmoney / (savemonth);
	console.log(moneyleft);
	//return Math.abs(moneyleft);
	
	var output = document.getElementById("money_output");
	if (savinggoal == "" || currentmoney == "" || savemonth == "") {
			alert("Please fill in all fields.");
	} else if (isNaN(savinggoal) || isNaN(currentmoney) || isNaN(savemonth)) {
			alert("Please fill in numbers.")
	} else if (currentmoney > savinggoal) {
			output.innerHTML = "Congrats! You have already reached your saving goal!";
	} else {
	output.innerHTML = "You still have " + Math.ceil(moneyleft) + " months left to save.";
	}
}

