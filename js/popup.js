const zoom = document.getElementById('zoom');
const map = document.getElementById('map');
const enabled = document.getElementById('enabled');
const image_enabled = document.getElementById('image_enabled');
const linkel = document.getElementById('links');
var links;
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {method:'getLinks'}, function (data){
    var li = document.createElement("li");
    var a = document.createElement('a');
    links = data.links
    if(data.links.length == 1){
      a.href = "https://kolo.it/link/" + data.links[0].id;
      a.textContent = "Single link in Kolo: " + data.links[0].kolo_id ;
      a.target = "_blank";
      li.appendChild(a);
      linkel.appendChild(li);
    }else if(data.links.length > 1 ){
      a.href = "https://kolo.it/link/" + data.links[0].id + "/related";
      a.textContent = data.links.length.toString() + " links on kolo.it ";
      a.target = "_blank";
      li.appendChild(a);
      linkel.appendChild(li);
    }
  });
});
zoom.addEventListener('change', function() {
  chrome.storage.local.set({zoom: zoom.value});
  updateImage()
});

map.addEventListener('change', function() {
  chrome.storage.local.set({map: map.value});
  updateImage()
});

enabled.addEventListener('change', function() {
  chrome.storage.local.set({enabled: enabled.checked});
});

image_enabled.addEventListener('change', function() {
  chrome.storage.local.set({image_enabled: image_enabled.checked});
});


chrome.storage.local.get("zoom", function (retrieved_data){
  zoom.value = retrieved_data.zoom
});
chrome.storage.local.get("map", function (retrieved_data){
  map.value = retrieved_data.map
});
chrome.storage.local.get("enabled", function (retrieved_data){
  enabled.checked = retrieved_data.enabled;
});
chrome.storage.local.get("image_enabled", function (retrieved_data){
  image_enabled.checked = retrieved_data.image_enabled;
});
function updateImage() {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { method: 'getMaxImage', links: links}, function(response) {})
  });
}
