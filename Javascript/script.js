console.log("Running JS")

window.onload = function(){
// start out by displaying current time

var d, h, m, s, color;

function displayTime(){
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	// add zero to the numbers, if they are single digits

	if(h <= 9)h = '0'+h;
	if(m <= 9)m = '0'+m;
	if(s <= 9)s = '0'+s;

	color = "#"+h+m+s;

	// this will set the background color
	document.body.style.backgroundColor = color;

	//set time
	//
	document.getElementById("hex").innerHTML = color;

	// call for the function every second
	

	setTimeout(displayTime, 1000)
}

displayTime();

$("span").animate({ 
      width:"600px" 
    }, 60000, function(){

    });

    

}