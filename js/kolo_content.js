$(function() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
		if (request.url == location.href)
			this.addKolo();
		  	sendResponse({farewell: "goodbye"});
		});

});
function addKolo(){
	var body = $('body');
	if (body.parents('iframe').length==0){
		body.append('<canvas id="koloCanvas" width="100" height="100" style="z-index:1000;position:fixed; top:10px; right:10px;"></canvas>')
	}
	var canvas = document.getElementById('koloCanvas');
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	var radius = 10;

	context.beginPath();
	context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'white';
	
	context.fill();
	context.shadowColor = '#999';
	context.lineWidth = 6;
	context.strokeStyle = 'red';
	context.shadowColor = "transparent";
	context.stroke();
	context.beginPath();
	context.arc(centerX, centerY, radius+12, 0, 2 * Math.PI, false);
	context.fillStyle = 'transparent';
	context.fill();
	context.lineWidth = 8;
	context.strokeStyle = 'black';
	context.shadowColor = '#999';
	context.shadowBlur = 6;
	context.shadowOffsetX = -3;
	context.shadowOffsetY = 3;
	context.stroke();
	
}





