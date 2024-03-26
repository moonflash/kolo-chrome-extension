let latitude = null;
let longitude = null;
let markers = [];
var koloMap;


function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia29sb2l0IiwiYSI6ImNsa2F5YXBmdDBkaWYzcG12dHFieXZoZGMifQ.ujyZcbIIPcS1O-IGPJMjRg';
  koloMap = new mapboxgl.Map({
    container: 'kolo-map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-0.1569094112388143,50.822505909082906],
    zoom: 10,
  });
  addMarker();
  koloMap.on('load', () => {
    koloMap.resize();
  });
};
function addMarker(){
  var marker = new mapboxgl.Marker({
    draggable: true,
  }).setLngLat([-0.1569094112388143,50.822505909082906]).addTo(koloMap);
  markers.push(marker);

  marker.on('dragend', () => {
    const position = marker.getLngLat();
    latitude = position.lat;
    longitude = position.lng;
    updateLatLng();
  });
    // const option = document.createElement('option');
  const locationDiv = document.getElementById('kolo_locations');
  const locationInnerDiv = document.createElement('div')
  locationDiv.appendChild(locationInnerDiv)
  const locationSearchInput = document.createElement('input');
  locationSearchInput.type = 'text'
  locationSearchInput.placeholder="Enter a location"

  locationInnerDiv.appendChild(locationSearchInput);
  
  const locationDropdown = document.createElement('select');
  locationInnerDiv.appendChild(locationDropdown);

  const code_img_sample = document.getElementById('code_img_sample')

  locationDropdown.addEventListener('change', () => {
    const selectedLocation = JSON.parse(locationDropdown.value);
    moveMapToLocation(code_img_sample, marker, selectedLocation);
  });
  locationSearchInput.addEventListener('input', () => {
    const searchQuery = locationSearchInput.value;
    if (searchQuery) {
      searchLocation(searchQuery).then((results) => {
        populateDropdown(locationDropdown,results);
        if (results.length == 1){
          moveMapToLocation(code_img_sample, marker, results[0].geometry.location);
        }
      });
    } else {
      locationDropdown.innerHTML = '';
    }
  });
}
function searchLocation(query) {
  return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(query)}&key=AIzaSyAUzv3iGw-HDtQU1XbJZD1j_kR5eUOMRcM`)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.error('Error fetching geolocation data:', error);
      return [];
    });
}

function populateDropdown(locationDropdown,results) {
  locationDropdown.innerHTML = '';
  results.forEach((result) => {
    const option = document.createElement('option');
    option.value = JSON.stringify(result.geometry.location);
    option.textContent = result.formatted_address;
    locationDropdown.appendChild(option);
  });
}

function moveMapToLocation(code_img_sample, marker, location) {
  
  const { lat, lng } = location;
  latitude = lat;
  longitude = lng;
  updateLatLng();
  marker.setLngLat([lng, lat]);

  if (markers.length == 1){
    koloMap.flyTo({ center: [lng, lat], zoom: 16 });
  }else{
    fitMapToMarkers()
  }
  
}
function fitMapToMarkers() {
  const bounds = new mapboxgl.LngLatBounds(markers[0].getLngLat(),markers[1].getLngLat());
  markers.forEach((marker) => {
    bounds.extend(marker.getLngLat());
  });
  koloMap.fitBounds(bounds.toArray(), { padding: 50 });
}

function newLocation(){
  addMarker();
}

function updateLatLng() {
  var imgValue = ""
  var images = document.getElementById('code_img_sample')
  images.innerHTML = ''
  var geo = ""
  markers.forEach((marker) => {
    imgValue = "<pre><code>&lt;img name='kolo-location' data-kolo-lat-lng='"+marker.getLngLat().lat+","+marker.getLngLat().lng+"'&gt;</code></pre>"
    var code_sample = document.createElement('div')
    code_sample.innerHTML = imgValue
    geo
    document.getElementById('code_img_sample').appendChild(code_sample)
  });
  // var imgValue = "<pre><code>&lt;img name='kolo-location' data-kolo-lat-lng='"+latitude+","+longitude+"'&gt;</code></pre>"
  // document.getElementById('code_img_sample').innerHTML = imgValue;
  var geo = markers.map(function(i) { return i.getLngLat() })
  var metaValue = "<pre><code>&lt;meta name='kolo-location' data-kolo-lat-lng='"+latitude+","+longitude+"'&gt;</code></pre>"
  document.getElementById('code_meta_sample').innerHTML = metaValue;
}



document.addEventListener('DOMContentLoaded', () => {
  initMap()
  new_location = document.getElementById('kolo-new-location')
  new_location.addEventListener('click', () => {
    newLocation();
  });
  const layerList = document.getElementById('map-kolo-menu');
  const inputs = layerList.getElementsByTagName('input');
   
  for (const input of inputs) {
    input.onclick = (layer) => {
    const layerId = layer.target.id;
    koloMap.setStyle('mapbox://styles/mapbox/' + layerId);
    };
  }
});

