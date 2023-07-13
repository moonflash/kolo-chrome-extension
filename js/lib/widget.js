var addLinks, b, buttons, clean, composeLink, createLink, css, i, j, k, l, lat_lng, len, len1, len2, len3, listenToImage, locationMap, locations, m, maps, n, requestLink, requestLinks, simpleButton, svg, xhttp;
initKolo = function(){

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

  buttons = document.getElementsByName("kolo-button");

  locations = document.getElementsByName("kolo-location");

  lat_lng = document.getElementsByName("kolo-lat-lng");

  maps = document.getElementsByName("kolo-map");


  for (i = 0, len = buttons.length; i < len; i++) {
    b = buttons[i];
    if (b.dataset.href) {
      requestLinks(b, encodeURIComponent(b.dataset.href));
    } else {
      requestLinks(b, encodeURIComponent(document.location.href));
    }
  }

  for (j = 0, len1 = locations.length; j < len1; j++) {
    l = locations[j];
    requestLink(l, l.dataset);
  }

  for (k = 0, len2 = maps.length; k < len2; k++) {
    m = maps[k];
    m.innerHTML = "map";
  }

  for (n = 0, len3 = lat_lng.length; n < len3; n++) {
    l = lat_lng[n];
    locationMap(l, composeLink(l, l.dataset), [], []);
  }

}
simpleButton = function(e, _link, _links, _domain, _dontShowButton) {
  var changeColor, changeColorBack, clicked, f, out;
  if (_links) {
    e.className = e.className + " kolo-button";
    e.innerHTML = "<div class='cleanslate'><a href='#'><img class='orange' src='https://kolo.it/assets/widget_05.png'><span class='values'>" + _links.length + "/" + _domain.count + "</span></a><div class='kolo-small-map hidden'></div></div>";
    f = e.getElementsByClassName('kolo-small-map')[0];
    clicked = function(event) {
      event.preventDefault();
      if (f.style.visibility === "hidden") {
        f.setAttribute('style', "visibility: visible !important; z-index: 99999999!important; height: auto!important; position: fixed!important; left:" + event.clientX + "px!important; top:" + event.clientY + "px!important; width: auto!important; border-radius: 5px!important; color: rgb(255, 255, 255)!important; box-shadow: rgba(0, 0, 0, 0.498039) 1px 1px 5px 0px!important; background-color: rgba(0, 0, 0, 0.7)!important;");
        return f.innerHTML = addLinks(_link, _links, _domain, _dontShowButton);
      } else {
        return f.setAttribute('style', "visibility: hidden !important; z-index: 99999999!important; height: 0px!important; position: fixed!important; left:" + event.clientX + "px!important; top:" + event.clientY + "px!important; width: auto!important; border-radius: 5px!important; color: rgb(255, 255, 255)!important; box-shadow: rgba(0, 0, 0, 0.498039) 1px 1px 5px 0px!important; background-color: rgba(0, 0, 0, 0.7)!important;");
      }
    };
    changeColorBack = function(event) {
      return event.target.setAttribute("style", "border-radius:5px !important;background-color:#ff6633 !important; margin-bottom:-7px!important;");
    };
    changeColor = function(event) {
      return event.target.setAttribute("style", "border-radius:5px !important;background-color:#E2440F !important; margin-bottom:-7px!important;");
    };
    e.getElementsByTagName("a")[0].addEventListener('mouseover', clicked);
    e.getElementsByTagName("a")[0].addEventListener('click', clicked);
    e.getElementsByTagName("img")[0].addEventListener("mouseover", changeColor);
    e.getElementsByTagName("img")[0].addEventListener("mouseout", changeColorBack);
    out = function(event) {
      if (!e.contains(event.relatedTarget)) {
        return f.setAttribute('style', "visibility: hidden !important; z-index: 99999999!important; height: 0px!important; position: fixed!important; left:" + event.clientX + "px!important; top:" + event.clientY + "px!important; width: auto!important; border-radius: 5px!important; color: rgb(255, 255, 255)!important; box-shadow: rgba(0, 0, 0, 0.498039) 1px 1px 5px 0px!important; background-color: rgba(0, 0, 0, 0.34902)!important;");
      }
    };
    return e.addEventListener('mouseout', out);
  }
};

addLinks = function(_link, _links, _domain, _dontShowButton) {
  var _currentLink, _href, c, i, kolos, l, len, users;
  if (_link) {
    _currentLink = _link;
  } else {
    _currentLink = _links[0];
  }
  _href = encodeURIComponent(window.location.href);
  c = "<ul>";
  kolos = [];
  users = [];
  for (i = 0, len = _links.length; i < len; i++) {
    l = _links[i];
    if (!(kolos.indexOf(_currentLink.kolo) > -1)) {
      kolos.push(l.kolo);
    }
  }
  if (!_dontShowButton) {
    c = c + ("<li class='map' onmouseover='this.style.opacity=1' onmouseout='this.style.opacity=.8'><a href='https://kolo.it/kolos/links/new/" + _href + "' target='_blank'><img src='https://kolo.it/assets/widget_add_01.png'></a></li>");
  }
  if (_links.length === 1) {
    c = c + ("<li class='related'><a href='https://kolo.it/link/" + _currentLink.id + "' target='_blank'><img align='left' src='" + _currentLink.image + "'><div><span class='top'>Has " + _links.length + " Link inside " + kolos.length + " Kolo(s) </span></div></a></li>");
  } else if (_links.length > 1) {
    c = c + ("<li class='related more'><a href='https://kolo.it/link/" + _currentLink.id + "/related' target='_blank'><img align='left' src='" + _currentLink.image + "'><div><span class='top'>Has " + _links.length + " Links inside " + kolos.length + " Kolo(s) </span></div></a></li>");
  }
  if (!_dontShowButton) {
    if (_domain.count === 1) {
      c = c + ("<li class='domain related'><a href='https://kolo.it/kolos/links/domain/" + _domain.domain + "' target='_blank'><div><u>" + _domain.domain + "</u><span class='top'>Has " + domain.count + " Link in " + _domain.kolos.length + " Kolo(s) </span></div></a></li>");
    } else if (_domain.count !== 0) {
      c = c + ("<li class='domain related'><a href='https://kolo.it/kolos/links/domain/" + _domain.domain + "' target='_blank'><img src='" + _domain.image + "'><div><u>" + _domain.domain + "</u><span class='top'>Has " + _domain.count + " Links in " + _domain.kolos.length + " Kolo(s) </span></div></a></li>");
    }
  }
  c = c + "</ul>";
  return c;
};

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

locationMap = function(container, _link, _links, _domain) {
  var _href, address, c, e, h, map_url, w, z;
  address = "";
  if (!(_link.address === null || _link.address === void 0 || _link.address === "null")) {
    address = _link.address;
  }
  if (container.tagName === "IMG") {
    w = container.offsetWidth;
    if (w > 1280) {
      w = 1280;
    }
    z = container.dataset.koloZoom || 11;
    h = container.offsetHeight - 35;
    _link.dimensions = z + "/" + w + "x" + h;
    _link.text_width = w - 60;
    _link.map_type = container.dataset.koloType;
    _href = encodeURIComponent(window.location.href);
    if (!_link.id) {
      _link.id = "kolos/links/new/" + _href;
    }
    c = document.createElement("div");
    c.className = "kolo-location relative";
    if (_link.map_type === "satellite") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/satellite-v9/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else if (_link.map_type === "dark") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/dark-v10/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    }  else if (_link.map_type === "hybrid") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else if (_link.map_type === "light") {
      map_url = "//api.mapbox.com/styles/v1/mapbox/light-v10/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    } else {
      map_url = "https://api.mapbox.com/styles/v1/koloit/ckjbb77x1j5yn19qmia4th1zq/static/url-https%3A%2F%2Fbeta.kolo.it%2Fassets%2Ficon-small-20.png(" + _link.lng + "," + _link.lat + ")/" + _link.lng + "," + _link.lat + "," + _link.dimensions + "?logo=false&attribution=false&access_token=" + "pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNraXlnbGszNTI3dGgyem40bzJua2NwMHQifQ.Ks5ytrwtgU7uH-6tmL9GEg";
    }
    if (container.nextElementSibling && (container.nextElementSibling.className = "kolo-location relative")) {
      container.nextElementSibling.remove();
    }
    container.parentNode.replaceChild(c, container);
    c.innerHTML = ("<div class='cleanslate'><div class='container'><svg class='orange'  viewBox='0 0 26 26'><use xlink:href='#kolo_svg'></use></svg><div class='link-details hidden'><div class='title' style='max-width:" + _link.text_width + "px !important;'>" + address + "</div><div class='button'>click to view the map</div></div><a class='map hidden' href='https://kolo.it/links/") + _link.id + ("' target='_blank'><img src='" + map_url + "'></a></div></div></div>");
    c.parentNode.insertBefore(container, c);
    c.style.position = "absolute";
    c.style.visibility = "hidden";
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
    c.innerHTML = ("<div class='container'><div class='top'><div class='kolo-button'></div><div class='title' style='max-width:" + _link.text_width + "px !important;'>" + address + "</div></div><a class='map' href='https://kolo.it/links/") + _link.id + ("' target='_blank'><img src='" + map_url + "'></a></div>");
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
  console.log("dataset",dataset)
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
  console.log("url", url);

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
  createLink(l, data);
  return link;
};