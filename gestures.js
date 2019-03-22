 var xcord=0;
 var ycord=0;


$("#gestureArea").mousedown(function(event) {
	xcord=event.clientX;
	ycord=event.clientY;
	updateA("mouseDown");
});
$("#gestureArea").mouseup(function(event){
	xcord=xcord-event.clientX;
	ycord=ycord-event.clientY;
	updateB(xcord,ycord);
});

function mouseDown(event) {
	var xcord1 = event.clientX;
	var ycord1 = event.clientY;
}


 function updateA(str) {
 	document.getElementById("gestureResult").innerHTML = str;
 }
 function updateB(x,y) {
 	if((x*x)>(y*y))
 	{
 		if (x>0)
 		{
 			document.getElementById("gestureResult").innerHTML = "Moved Left";
 		}
 		else
 		{
 			document.getElementById("gestureResult").innerHTML = "Moved Right";
 		}
 	}
 	else
 	{
 		if (y<0)
 		{
 			document.getElementById("gestureResult").innerHTML = "Moved Down";
 		}
 		else
 		{
 			document.getElementById("gestureResult").innerHTML = "Moved Up";
 		}
 	}
 }
