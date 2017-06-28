/*
	You had 2 mistakes.
	First: your wait() function is not working.
	Second: You set var time EQUAL to the string, instead of adding it.
*/

var a = prompt("how many beers did u buy?")
displayTime();
function displayTime() {
	var time = ""
	for(var i = a; i >- 1; i--){
		if(i != 0){
			time += i + " bottles of beer on the wall, " + i + " bottles of beer. " +
			"Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."
		}
		else {
			time += "No more bottles of beer on the wall, no more bottles of beer. " +
			"Go to the store and buy some more, " + a + " bottles of beer on the wall.";
		}
		
		time += "\n";
		
		document.getElementById("time").innerHTML = time;
		wait(1000);
	}
}
function wait(ms){
	var start = new Date().getTime();
	var end = start;

	while(end < start + ms) {
		end = new Date().getTime();
	}
}