setInterval(displayTime, 1000)

function displayTime() {
	var date = new Date();
	
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	
	var time = "";
	var times = [hour, minute, second];
	for(var i = 0; i < 3; i++) {
		time += String( times[i] );
		
		if(i !== 2) {
			time += " : ";
		}
	}
	
	document.getElementById("time").innerHTML = time;
}