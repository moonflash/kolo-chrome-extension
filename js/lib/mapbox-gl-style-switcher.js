"use strict";
var MapboxStyleSwitcherControl = /** @class */ (function () {
    function MapboxStyleSwitcherControl(styles, options) {
        this.styles = styles || MapboxStyleSwitcherControl.DEFAULT_STYLES;
        var defaultStyle = typeof (options) === "string" ? options : options ? options.defaultStyle : undefined;
        this.defaultStyle = defaultStyle || MapboxStyleSwitcherControl.DEFAULT_STYLE;
        this.onDocumentClick = this.onDocumentClick.bind(this);
        this.events = typeof (options) !== "string" && options ? options.eventListeners : undefined;
    }
    MapboxStyleSwitcherControl.prototype.getDefaultPosition = function () {
        var defaultPosition = "top-right";
        return defaultPosition;
    };
    MapboxStyleSwitcherControl.prototype.onAdd = function (map) {
        var _this = this;
        this.map = map;
        this.controlContainer = document.createElement("div");
        this.controlContainer.classList.add("mapboxgl-ctrl");
        this.controlContainer.classList.add("mapboxgl-ctrl-group");
        this.mapStyleContainer = document.createElement("div");
        this.styleButton = document.createElement("button");
        this.styleButton.type = "button";
        this.mapStyleContainer.classList.add("mapboxgl-style-list");
        for (var _i = 0, _a = this.styles; _i < _a.length; _i++) {
            var style = _a[_i];
            var styleElement = document.createElement("button");
            styleElement.type = "button";
            styleElement.innerText = style.title;
            styleElement.classList.add(style.title.replace(/[^a-z0-9-]/gi, '_'));
            styleElement.dataset.uri = JSON.stringify(style.uri);
            styleElement.addEventListener("click", function (event) {
                var srcElement = event.srcElement;
                _this.closeModal();
                if (srcElement.classList.contains("active")) {
                    return;
                }
                if (_this.events && _this.events.onOpen && _this.events.onOpen(event)) {
                    return;
                }
                var style = JSON.parse(srcElement.dataset.uri);
                _this.map.setStyle(style);
                var elms = _this.mapStyleContainer.getElementsByClassName("active");
                while (elms[0]) {
                    elms[0].classList.remove("active");
                }
                srcElement.classList.add("active");
                if (_this.events && _this.events.onChange && _this.events.onChange(event, style)) {
                    return;
                }
            });
            if (style.title === this.defaultStyle) {
                styleElement.classList.add("active");
            }
            this.mapStyleContainer.appendChild(styleElement);
        }
        this.styleButton.classList.add("mapboxgl-ctrl-icon");
        this.styleButton.classList.add("mapboxgl-style-switcher");
        this.styleButton.addEventListener("click", function (event) {
            if (_this.events && _this.events.onSelect && _this.events.onSelect(event)) {
                return;
            }
            _this.openModal();
        });
        document.addEventListener("click", this.onDocumentClick);
        this.controlContainer.appendChild(this.styleButton);
        this.controlContainer.appendChild(this.mapStyleContainer);
        return this.controlContainer;
    };
    MapboxStyleSwitcherControl.prototype.onRemove = function () {
        if (!this.controlContainer || !this.controlContainer.parentNode || !this.map || !this.styleButton) {
            return;
        }
        this.styleButton.removeEventListener("click", this.onDocumentClick);
        this.controlContainer.parentNode.removeChild(this.controlContainer);
        document.removeEventListener("click", this.onDocumentClick);
        this.map = undefined;
    };
    MapboxStyleSwitcherControl.prototype.closeModal = function () {
        if (this.mapStyleContainer && this.styleButton) {
            this.mapStyleContainer.style.display = "none";
            this.styleButton.style.display = "block";
        }
    };
    MapboxStyleSwitcherControl.prototype.openModal = function () {
        if (this.mapStyleContainer && this.styleButton) {
            this.mapStyleContainer.style.display = "block";
            this.styleButton.style.display = "none";
        }
    };
    MapboxStyleSwitcherControl.prototype.onDocumentClick = function (event) {
        if (this.controlContainer && !this.controlContainer.contains(event.target)) {
            this.closeModal();
        }
    };
    return MapboxStyleSwitcherControl;
}());
MapboxStyleSwitcherControl.DEFAULT_STYLE = "Streets";
MapboxStyleSwitcherControl.DEFAULT_STYLES = [
    { title: "Dark", uri: "mapbox://styles/mapbox/dark-v10" },
    { title: "Light", uri: "mapbox://styles/mapbox/light-v10" },
    { title: "Outdoors", uri: "mapbox://styles/mapbox/outdoors-v11" },
    { title: "Satellite", uri: "mapbox://styles/mapbox/satellite-streets-v11" },
    { title: "Streets", uri: "mapbox://styles/mapbox/streets-v11" }
];
// exports.MapboxStyleSwitcherControl = MapboxStyleSwitcherControl;
