	function init() {
	var lat;
	var lng;
	localStorage['kolo_is_paused'] = false;
}
chrome.webNavigation.onCommitted.addListener(function(e) {
	if (localStorage['kolo_is_paused'] == 'false' && e.transitionType != 'auto_subframe' && e.transitionType!='generated' && (e.url.match('http:') || e.url.match('https:'))){
		var url = e.url ;
		var tab = e.tabId;
		console.log(e.tabId);
		navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
		function foundLocation(position){
			lat = position.coords.latitude
			lng = position.coords.longitude
			callGumno(tab, url);
		}

		function noLocation(){
			console.log('nolocation');
			console.log(url);
			console.log(tab);
			callGumno(tab, url);
		}
	}
  
});


function callGumno(tab, url){
	console.log('calling gumno');
	var xmlhttp = new XMLHttpRequest();
	var call = 'http://localhost:4567/kolooo?url=' + url + '&lng=' + lng + '&lat=' + lat
	xmlhttp.open("GET",call,true);
	xmlhttp.send();
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	console.log('responded');
        	console.log(tab)
			  	chrome.tabs.sendMessage(tab, {url: url}, function(response) {
			    	console.log(response.farewell);
				});
        }
    }
}
function updateIcon() {
	if (localStorage['kolo_is_paused'] == 'true'){
		chrome.browserAction.setIcon({path:"icons/icon_50.png"});
	}else{
		chrome.browserAction.setIcon({path:"icons/icon_color_50.png"});
	}
}

// chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
init();