
function getMaxImage(data) {
  var maxDimension = 0;
  var maxImage = null;

  if (window.location !== window.parent.location)
    return null;

  var imgElements = document.images;
  for (var index in imgElements) {
    var img = imgElements[index];
    var currDimension = img.width * img.height;
    if (currDimension  > maxDimension){
       maxDimension = currDimension
       maxImage = img;
    }
  }
  if (maxImage)
    addMapToImage(maxImage, data)
}

function addMapToImage(image, data){
  image.setAttribute('data-kolo-link', data.localStorage.link[0].id);
  chrome.storage.local.get("zoom").then((result) => {image.setAttribute('data-kolo-zoom', result.zoom)});
  chrome.storage.local.get("map").then((result) => {image.setAttribute('data-kolo-type', result.map)});
  image.setAttribute('name', 'kolo-location');
  initKolo();
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method === 'getMaxImage') {
    var maxImage = getMaxImage(request);
    sendResponse({ data: maxImage });
  }else{
    sendResponse({});
  }
});
