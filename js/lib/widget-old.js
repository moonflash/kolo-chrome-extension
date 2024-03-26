var addingNewLink, addLinks, b, buttons, clean, composeLink, createLink, css, i, j, k, l, lat_lng, len, len1, len2, len3, listenToImage, locationMap, locations, m, maps, n, requestLink, requestLinks, simpleButton, svg, initKolo, xhttp;
initKolo = function(links){

  clean = document.createElement('link');

  clean.setAttribute('rel', 'stylesheet');

  clean.setAttribute('type', 'text/css');

  clean.setAttribute('href', 'https://kolo.it/stylesheets/cleanslate.css');

  document.getElementsByTagName('head')[0].appendChild(clean);

  css = document.createElement('link');

  css.setAttribute('rel', 'stylesheet');

  css.setAttribute('type', 'text/css');

  css.setAttribute('href', 'https://kolo.it/assets/widget.css');

  document.getElementsByTagName('head')[0].appendChild(css);

  svg = document.createElement('div');

  svg.setAttribute("style", "display:none;");

  xhttp = new XMLHttpRequest;

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      svg.innerHTML = xhttp.responseText;
      return document.getElementsByTagName('body')[0].appendChild(svg);
    }
  };

  xhttp.open("GET", "https://kolo.it/assets/kolo-logo-image.svg", true);

  xhttp.send();

  image_element = document.getElementsByName("kolo-location");


  for (j = 0, len1 = image_element.length; j < len1; j++) {
    l = image_element[j];
    locationMap(l, null, links, null);
  }

}

listenToImage = function(_el) {
  var clickImage, outOfImage, overImage;
  clickImage = function(event) {
    if (_el.getElementsByClassName('map')[0].className.indexOf("hidden") > -1) {
      event.preventDefault();
      return _el.getElementsByClassName('map')[0].className = "map";
    } else {
      return _el.getElementsByClassName('map')[0].className = 'map hidden';
    }
  };
  outOfImage = function(event) {
    if (!_el.contains(event.relatedTarget)) {
      _el.getElementsByClassName('link-details')[0].className = 'link-details hidden';
      _el.getElementsByClassName('orange')[0].style.fill = "#ff6633";
      return _el.getElementsByClassName('map')[0].className = 'map hidden';
    }
  };
  overImage = function(event) {
    _el.getElementsByClassName('link-details')[0].className = 'link-details';
    return _el.getElementsByClassName('orange')[0].style.fill = "#fff";
  };
  _el.addEventListener('mouseover', overImage);
  _el.addEventListener('mouseout', outOfImage);
  _el.getElementsByClassName('link-details')[0].addEventListener('mouseout', clickImage);
  return _el.addEventListener('click', clickImage);
};
getMapImageUrl = function(_link, _links, _type){
  var geojson = {
      "type":"FeatureCollection","features":[]
  }
  for (i = 0, len = _links.length; i < len; i++) {
    var feature = {
      "type":"Feature",
      "properties":
      {
        "marker-url":"https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png"
      },
      "geometry":{
        "type":"Point",
        "coordinates":[_links[i].lng, _links[i].lat]
      }
    }
    geojson.features.push(feature)
  
  }
  if (_links.length > 1){
    url = "https://api.mapbox.com/styles/v1/"+_type+"/static/geojson("+JSON.stringify(geojson)+")/auto/"+_link.dimensions+"?padding=80&access_token=pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg"
  }else{
    url = "https://api.mapbox.com/styles/v1/"+_type+"/static/geojson("+JSON.stringify(geojson)+")/"+_links[0].lng+","+_links[0].lat+","+_link.zoom+"/"+_link.dimensions+"?access_token=pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg"
  }
  return url
};

getAddress = function(_links){
  if (_links.length > 1){
    return "Multiple addresses on the map"
  }else{
    return _links[0].address
  }
}
getLinkPath = function(_links){
  if (_links.length > 1){
    var path = _links[0].id +"/related"
    return path
  }else{
    return _links[0].id
  }
}
locationMap = function(container, _link, _links, _domain) {
  var _href, address, c, e, h, map_url, w, z;
  address = getAddress(_links);
  _link = {}
  if (container.tagName === "IMG") {
    w = container.offsetWidth;
    if (w > 1280) {
      w = 1280;
    }
    _link.zoom = container.dataset.koloZoom || 11;
    h = container.offsetHeight - 35;
    _link.dimensions = w + "x" + h;
    _link.text_width = w - 60;
    _link.path = getLinkPath(_links);
    _link.map_type = container.dataset.koloType;
    _href = encodeURIComponent(window.location.href);
    c = document.createElement("div");
    c.className = "kolo-location relative";
    if (_link.map_type === "hybrid") {
      map_url = getMapImageUrl(_link, _links, "mapbox/satellite-streets-v11")
    } else if (_link.map_type === "satellite"){
      map_url = getMapImageUrl(_link, _links, "mapbox/satellite-v9")
    } else if (_link.map_type === "light" || _link.map_type === "dark") {
      var mtype = "mapbox/"+_link.map_type+"-v10"
      map_url = getMapImageUrl(_link, _links, mtype )
    } else if (_link.map_type === "mojmir") {
      var mtype = "mapbox/"+_link.map_type+"-v10"
      map_url = getMapImageUrl(_link, _links, mtype )
    } else {
      map_url = getMapImageUrl(_link, _links, "koloit/ckjbb77x1j5yn19qmia4th1zq")
    }
    if (container.nextElementSibling && (container.nextElementSibling.className = "kolo-location relative")) {
      container.nextElementSibling.remove();
    }
    container.parentNode.replaceChild(c, container);
    c.innerHTML = ("<div class='cleanslate'><div class='container'><svg class='orange'  viewBox='0 0 26 26'><use xlink:href='#kolo_svg'></use></svg><div class='link-details hidden'><div class='title' style='max-width:" + _link.text_width + "px !important;'>" + "</div><div class='button'>click to view the map</div></div><a class='map hidden' href='https://kolo.it/link/") + _link.path + ("' target='_blank'><img src='" + map_url + "'></a></div></div></div>");
    c.parentNode.insertBefore(container, c);
    c.style.position = "absolute";
    c.style.visibility = "hidden";
    console.log("address", _link, _links, address);
    return setTimeout((function() {
      var e, index;
      c.style.width = container.offsetWidth + "px";
      c.style.top = container.offsetTop + "px";
      c.style.left = container.offsetLeft + "px";
      c.style.height = container.offsetHeight + "px";
      c.style.visibility = "visible";
      c.style.transform = container.style.transform;
      c.style.z - (index = "99999");
      e = c.getElementsByClassName("link-details")[0];
      return listenToImage(c);
    }), 2000);
  } else {
    if (_link.map_type === "satellite") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/satellite-v9/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else if (_link.map_type === "dark") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/dark-v10/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else if (_link.map_type === "light") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/light-v10/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else {
      map_url = "https://api.mapbox.com/styles/v1/koloit/ckjbb77x1j5yn19qmia4th1zq/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    }
    container.className = container.className + " kolo-location";
    c = container;
    console.log("address",address);
    c.innerHTML = ("<div class='container'><div class='top'><div class='kolo-button'></div><div class='title' style='max-width:" + _link.text_width + "px !important;'>" + "</div></div><a class='map' href='https://kolo.it/links/" + _link.path + "' target='_blank'><img src='" + map_url + "'></a></div>");
    c.firstChild.className = "cleanslate";
    e = c.getElementsByClassName("kolo-button")[0];
    return simpleButton(e, _link, _links, _domain, true);
  }
};

requestLinks = function(b, linkUrl) {
  var xmlhttp;
  xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = function() {
    var data;
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      data = JSON.parse(xmlhttp.responseText);
      return simpleButton(b, null, data.links, data.domain, false);
    }
  };
  xmlhttp.open('GET', 'https://kolo.it/widget.json?url=' + linkUrl, true);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  xmlhttp.send();
};

requestLink = function(l, dataset) {
  var u, url, xmlhttp;
  xmlhttp = new XMLHttpRequest;
  xmlhttp.onreadystatechange = function() {
    var res;
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      res = JSON.parse(xmlhttp.responseText);
      return locationMap(l, res.link, res.links, res.domain);
    }
  };
  u = "https://kolo.it/widget/" + dataset.koloLink + ".json?";
  if (dataset.koloWidth) {
    u = u + "width=" + dataset.koloWidth + "&";
  }
  if (dataset.koloHeight) {
    u = u + "height=" + dataset.koloHeight + "&";
  }
  if (dataset.koloZoom) {
    u = u + "zoom=" + dataset.koloZoom + "&";
  }
  if (dataset.koloType) {
    u = u + "type=" + dataset.koloType;
  }
  url = u;

  xmlhttp.open('GET', url, true);
  xmlhttp.setRequestHeader('Content-type', 'application/json');
  return xmlhttp.send();
};

createLink = (function(_this) {
  return function(l, dataset) {
    var u, url, xmlhttp;
    xmlhttp = new XMLHttpRequest;
    xmlhttp.onreadystatechange = function() {
      var res;
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        res = JSON.parse(xmlhttp.responseText);
        if (res.id) {
          return locationMap(l, res, [], []);
        }
      }
    };
    u = "https://kolo.it/widget/new.json?";
    if (dataset.koloLatLng) {
      u = u + "lat_lng=" + dataset.koloLatLng + "&";
    }
    if (dataset.koloKoloid) {
      u = u + "kolo_id=" + dataset.koloKoloid + "&";
    }
    if (dataset.koloTitle) {
      u = u + "title=" + dataset.koloTitle;
    }
    url = u;
    xmlhttp.open('GET', url, true);
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    return xmlhttp.send();
  };
})(this);

composeLink = function(l, data) {
  var link;
  link = {};
  link.width = 450;
  link.height = 80;
  link.map_type = data.koloType;
  link.zoom = data.koloZoom || 16;
  link.dimensions = link.zoom + "/" + link.width + "x" + link.height;
  if (data.koloLatLng) {
    link.lng = data.koloLatLng.split(",")[1];
  }
  if (data.koloLatLng) {
    link.lat = data.koloLatLng.split(",")[0];
  }
  // createLink(l, data);
  return link;
};
addingNewLink = function (event) {
  console.log("tusam", event);
}
// console.log(document.getElementById("add_link"));
// // document.getElementById("add_link").addEventListener("click", addingNewLink());
// // document.getElementsById('add_link');