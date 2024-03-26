var links;
var embed_url;
var overlay = document.createElement('div');

var popup = document.createElement('div');

var frame = document.createElement('iframe');

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
  console.log("ssss",data);
  image.setAttribute('data-kolo-link', data.links[0].id);
  chrome.storage.local.get("zoom").then((result) => {image.setAttribute('data-kolo-zoom', result.zoom)});
  image.setAttribute('name', 'kolo-map');
  chrome.storage.local.get("map").then((result) => {
    image.setAttribute('data-kolo-type', result.map)
    initKolo(data.links);
  });
  // debugger
  
  // var url = new URL(document.URL);
  // var domain = url.hostname;
  // console.log("domenic",domain);
  // getEmbeddings(domain);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method === 'getMaxImage') {
    links = request.links
    var maxImage = getMaxImage(request);
    sendResponse({ data: maxImage });
  }if (request.method === 'getLinks') {
    sendResponse({links:links});
  }if (request.method === 'setLinks') {
    links = request.links
    sendResponse({});
  }if (request.method === 'setEmbedd') {
    setIframe(request.embed_id)
    sendResponse({});
  }if (request.method === 'enableEmbedd') {
    addIframe()
    sendResponse({});
  }else{
    sendResponse({});
  }
});

function setIframe(embed_id){
  // embed_url = "http://mbeta.kolo.it:3330/embeds?embeddings=" + embed_id
  embed_url = chrome.runtime.getURL('iframe.html');

}

function removeIframe(event){
  console.log("removeIframe", event);
  document.body.removeChild(overlay);
  document.body.removeChild(popup);
}
function addIframe(){
  console.log("adding frameee");
  overlay.id = "kolo-overlay"
  document.body.appendChild(overlay);
  popup.id = "kolo-popup"
  frame.id = "kolo-popup-iframe"
  frame.src = embed_url;
  popup.appendChild(frame);
  document.body.appendChild(popup);
  overlay.addEventListener("click", removeIframe);
}

// function setIframe(embed_id){
  // var overlay = document.createElement('div');
  //   overlay.id = "overlay"
  // document.body.appendChild(overlay);
  // var popup = document.createElement('div');
  // var frame = document.createElement('iframe');
  // popup.id = "popup"
  // frame.id = "popup-iframe"
  // // var url = new URL(document.URL);
  // var create_url = "http://mbeta.kolo.it:3330/kolos/links/new/" + encodeURIComponent(document.URL)
  // console.log(create_url)
  // frame.src = create_url;
  // popup.appendChild(frame);
  // document.body.appendChild(popup);
// }


