var myimage = null;
var mylink = null;
var localStorage = {};
function init() {
	
};
chrome.webNavigation.onCommitted.addListener(function(e) {
	if (e.frameType == 'outermost_frame' && e.transitionType != 'auto_subframe' && e.transitionType!='generated' && (e.url.match('http:') || e.url.match('https:'))){
		var url = e.url ;
		var tabId = e.tabId;
		var link;
		requestLinks(url, tabId)
	}
  
});
chrome.webNavigation.onCompleted.addListener(function(e) {
	if ( e.frameType == 'outermost_frame' && e.transitionType != 'auto_subframe' && e.transitionType!='generated' && (e.url.match('http:') || e.url.match('https:'))){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, 
 			{ method: 'getMaxImage', link: localStorage.link, localStorage: localStorage}, function(response) {})
		})
	}
});

async function requestLinks(url, tabId){
	const response = await fetch('http://api.kolo.it/kolos/*/links.json?url=' + encodeURIComponent(url));
	const link = await response.json();
  localStorage.link=link;
  chrome.action.setBadgeBackgroundColor({ color: "#b5120b" });
  chrome.action.setBadgeText({text: link.length.toString(),tabId: tabId});
  };
init();