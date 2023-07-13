function init() {
	chrome.storage.local.get("zoom", function (retrieved_data){
		if (retrieved_data == undefined){
			chrome.storage.local.set({zoom:'16'});
		}
	});
	chrome.storage.local.get("map", function (retrieved_data){
		if (retrieved_data == undefined){
			chrome.storage.local.set({map:'default'});
		}
	});
	chrome.storage.local.get("image_enabled", function (retrieved_data){
		if (retrieved_data == undefined){
			chrome.storage.local.set({image_enabled:true});
		}
	});
	chrome.storage.local.get("button_enabled", function (retrieved_data){
		if (retrieved_data == undefined){
			chrome.storage.local.set({button_enabled:false});
		}
	});
	chrome.storage.local.get("enabled", function (retrieved_data){
		if (retrieved_data == undefined){
			chrome.storage.local.set({enabled:true});
		}
	});
};

chrome.webNavigation.onCompleted.addListener(function(e) {
	if (e.frameType == 'outermost_frame' && e.transitionType != 'auto_subframe' && e.transitionType!='generated' && (e.url.match('http:') || e.url.match('https:'))){
		var url = e.url ;
		var tabId = e.tabId;
		chrome.storage.local.get("enabled", function (retrieved_data){
		  if (retrieved_data.enabled == true){
		  	requestLinks(url, tabId)
		  }
		});
		
	}
});

async function requestLinks(url, tabId){
	const response = await fetch('http://api.kolo.it/kolos/*/links.json?url=' + encodeURIComponent(url));
	const links = await response.json();
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  	chrome.tabs.sendMessage(tabs[0].id, {method:'setLinks', links:links}, function (links){});
  });
  chrome.action.setBadgeBackgroundColor({ color: "#b5120b" });
  chrome.action.setBadgeText({text: links.length.toString(),tabId: tabId});
  chrome.action.setPopup({popup: 'popup.html', tabId: tabId},function(argument) {});
  chrome.storage.local.get("enabled", function (retrieved_data){
		if (retrieved_data.enabled == true){
			chrome.storage.local.get("image_enabled", function (image_data){
				if (image_data.image_enabled){
					chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
						chrome.tabs.sendMessage(tabs[0].id, { method: 'getMaxImage', links: links, localStorage: localStorage}, function(response) {})
					});
				}
			});
		}
	});
};

init();