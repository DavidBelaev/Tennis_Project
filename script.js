var a = prompt("how many beers did u buy?")
displayTime();
function displayTime() {
	var time = ""
	var b = a;
	for(var i = a; a>-1; a--){
		if( a != 0){
		time = a + "bottles of beer on the wall, "+ a +" bottles of beer. "+
		"Take one down and pass it around, " + (a-1) +" bottles of beer on the wall."
		}else{
		time = "No more bottles of beer on the wall, no more bottles of beer. " +
		"Go to the store and buy some more, "+b+ " bottles of beer on the wall.";
		}
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