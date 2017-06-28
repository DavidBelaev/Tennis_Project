
setInterval(displayTime, 1000)
var a = 0;
function displayTime() {
	a++;
	document.getElementById("time").innerHTML = a;
}