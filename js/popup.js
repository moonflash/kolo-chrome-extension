const zoom = document.getElementById('zoom');
const map = document.getElementById('map');
const enabled = document.getElementById('enabled');
const image_enabled = document.getElementById('image_enabled');
zoom.addEventListener('change', function() {
  chrome.storage.local.set({zoom: zoom.value});
});

map.addEventListener('change', function() {
  chrome.storage.local.set({map: map.value});
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