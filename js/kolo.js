!function() {
	function t() {
			if (!r && (r = !0,
			h)) {
					for (var t = 0; t < h.length; t++)
							h[t].call(window, []);
					h = []
			}
	}
	function e(t) {
			var e = window.onload;
			window.onload = "function" != typeof window.onload ? t : function() {
					e && e(),
					t()
			}
	}
	function i() {
			if (!a) {
					if (a = !0,
					document.addEventListener && !s.opera && document.addEventListener("DOMContentLoaded", t, !1),
					s.msie && window == top && function() {
							if (!r) {
									try {
											document.documentElement.doScroll("left")
									} catch (e) {
											return void setTimeout(arguments.callee, 0)
									}
									t()
							}
					}(),
					s.opera && document.addEventListener("DOMContentLoaded", function() {
							if (!r) {
									for (var e = 0; e < document.styleSheets.length; e++)
											if (document.styleSheets[e].disabled)
													return void setTimeout(arguments.callee, 0);
									t()
							}
					}, !1),
					s.safari) {
							var i;
							!function() {
									if (!r) {
											if ("loaded" != document.readyState && "complete" != document.readyState)
													return void setTimeout(arguments.callee, 0);
											if (void 0 === i) {
													for (var e = document.getElementsByTagName("link"), n = 0; n < e.length; n++)
															"stylesheet" == e[n].getAttribute("rel") && i++;
													var o = document.getElementsByTagName("style");
													i += o.length
											}
											return document.styleSheets.length != i ? void setTimeout(arguments.callee, 0) : void t()
									}
							}()
					}
					e(t)
			}
	}
	var n = window.DomReady = {}
		, o = navigator.userAgent.toLowerCase()
		, s = {
			version: (o.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
			safari: /webkit/.test(o),
			opera: /opera/.test(o),
			msie: /msie/.test(o) && !/opera/.test(o),
			mozilla: /mozilla/.test(o) && !/(compatible|webkit)/.test(o)
	}
		, a = !1
		, r = !1
		, h = [];
	n.ready = function(t) {
			i(),
			r ? t.call(window, []) : h.push(function() {
					return t.call(window, [])
			})
	}
	,
	i()
}(),
!function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).leaflet = {})
}(this, function(t) {
	"use strict";
	function e(t) {
			for (var e, i, n = 1, o = arguments.length; o > n; n++)
					for (e in i = arguments[n])
							t[e] = i[e];
			return t
	}
	function i() {}
	function n(t, e) {
			var i, n = Array.prototype.slice;
			return t.bind ? t.bind.apply(t, n.call(arguments, 1)) : (i = n.call(arguments, 2),
			function() {
					return t.apply(e, i.length ? i.concat(n.call(arguments)) : arguments)
			}
			)
	}
	function o(t) {
			return "_leaflet_id"in t || (t._leaflet_id = ++Ye),
			t._leaflet_id
	}
	function s(t, e, i) {
			var n, o, s = function() {
					n = !1,
					o && (a.apply(i, o),
					o = !1)
			}, a = function() {
					n ? o = arguments : (t.apply(i, arguments),
					setTimeout(s, e),
					n = !0)
			};
			return a
	}
	function a(t, e, i) {
			var n = e[1]
				, e = e[0]
				, o = n - e;
			return t === n && i ? t : ((t - e) % o + o) % o + e
	}
	function r() {
			return !1
	}
	function h(t, e) {
			return !1 === e ? t : (e = Math.pow(10, void 0 === e ? 6 : e),
			Math.round(t * e) / e)
	}
	function l(t) {
			return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
	}
	function u(t) {
			return l(t).split(/\s+/)
	}
	function c(t, e) {
			for (var i in Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? Ke(t.options) : {}),
			e)
					t.options[i] = e[i];
			return t.options
	}
	function d(t, e, i) {
			var n, o = [];
			for (n in t)
					o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
			return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
	}
	function _(t, e) {
			return t.replace(Xe, function(t, i) {
					if (i = e[i],
					void 0 === i)
							throw new Error("No value provided for variable " + t);
					return i = "function" == typeof i ? i(e) : i
			})
	}
	function p(t, e) {
			for (var i = 0; i < t.length; i++)
					if (t[i] === e)
							return i;
			return -1
	}
	function m(t) {
			return window["webkit" + t] || window["moz" + t] || window["ms" + t]
	}
	function f(t) {
			var e = +new Date
				, i = Math.max(0, 16 - (e - Qe));
			return Qe = e + i,
			window.setTimeout(t, i)
	}
	function g(t, e, i) {
			return i && ti === f ? void t.call(e) : ti.call(window, n(t, e))
	}
	function v(t) {
			t && ei.call(window, t)
	}
	function y() {}
	function x(t, e, i) {
			this.x = i ? Math.round(t) : t,
			this.y = i ? Math.round(e) : e
	}
	function w(t, e, i) {
			return t instanceof x ? t : Je(t) ? new x(t[0],t[1]) : null == t ? t : "object" == typeof t && "x"in t && "y"in t ? new x(t.x,t.y) : new x(t,e,i)
	}
	function b(t, e) {
			if (t)
					for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
							this.extend(i[n])
	}
	function P(t, e) {
			return !t || t instanceof b ? t : new b(t,e)
	}
	function T(t, e) {
			if (t)
					for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++)
							this.extend(i[n])
	}
	function M(t, e) {
			return t instanceof T ? t : new T(t,e)
	}
	function C(t, e, i) {
			if (isNaN(t) || isNaN(e))
					throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
			this.lat = +t,
			this.lng = +e,
			void 0 !== i && (this.alt = +i)
	}
	function z(t, e, i) {
			return t instanceof C ? t : Je(t) && "object" != typeof t[0] ? 3 === t.length ? new C(t[0],t[1],t[2]) : 2 === t.length ? new C(t[0],t[1]) : null : null == t ? t : "object" == typeof t && "lat"in t ? new C(t.lat,"lng"in t ? t.lng : t.lon,t.alt) : void 0 === e ? null : new C(t,e,i)
	}
	function k(t, e, i, n) {
			Je(t) ? (this._a = t[0],
			this._b = t[1],
			this._c = t[2],
			this._d = t[3]) : (this._a = t,
			this._b = e,
			this._c = i,
			this._d = n)
	}
	function E(t, e, i, n) {
			return new k(t,e,i,n)
	}
	function S(t) {
			return document.createElementNS("http://www.w3.org/2000/svg", t)
	}
	function Z(t, e) {
			for (var i, n, o, s, a = "", r = 0, h = t.length; h > r; r++) {
					for (i = 0,
					n = (o = t[r]).length; n > i; i++)
							a += (i ? "L" : "M") + (s = o[i]).x + " " + s.y;
					a += e ? Yi.svg ? "z" : "x" : ""
			}
			return a || "M0 0"
	}
	function O(t) {
			return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
	}
	function A(t, e, i) {
			return "touchstart" !== e || on || (document.addEventListener(Xi, I, !0),
			document.addEventListener(Ji, B, !0),
			document.addEventListener($i, N, !0),
			document.addEventListener(Qi, N, !0),
			on = !0),
			en[e] ? (i = en[e].bind(this, i),
			t.addEventListener(tn[e], i, !1),
			i) : (console.warn("wrong event specified:", e),
			r)
	}
	function I(t) {
			nn[t.pointerId] = t
	}
	function B(t) {
			nn[t.pointerId] && (nn[t.pointerId] = t)
	}
	function N(t) {
			delete nn[t.pointerId]
	}
	function R(t, e) {
			if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
					for (var i in e.touches = [],
					nn)
							e.touches.push(nn[i]);
					e.changedTouches = [e],
					t(e)
			}
	}
	function D(t, e) {
			function i(t) {
					var i;
					1 !== t.detail ? n = t.detail : "mouse" === t.pointerType || t.sourceCapabilities && !t.sourceCapabilities.firesTouchEvents || (i = ye(t)).some(function(t) {
							return t instanceof HTMLLabelElement && t.attributes.for
					}) && !i.some(function(t) {
							return t instanceof HTMLInputElement || t instanceof HTMLSelectElement
					}) || ((i = Date.now()) - o <= sn ? 2 === ++n && e(function(t) {
							var e, i, n = {};
							for (i in t)
									e = t[i],
									n[i] = e && e.bind ? e.bind(t) : e;
							return (t = n).type = "dblclick",
							n.detail = 2,
							n.isTrusted = !1,
							n._simulated = !0,
							n
					}(t)) : n = 1,
					o = i)
			}
			t.addEventListener("dblclick", e);
			var n, o = 0;
			return t.addEventListener("click", i),
			{
					dblclick: e,
					simDblclick: i
			}
	}
	function j(t) {
			return "string" == typeof t ? document.getElementById(t) : t
	}
	function H(t, e) {
			var i = t.style[e] || t.currentStyle && t.currentStyle[e];
			return "auto" === (i = i && "auto" !== i || !document.defaultView ? i : (t = document.defaultView.getComputedStyle(t, null)) ? t[e] : null) ? null : i
	}
	function F(t, e, i) {
			return t = document.createElement(t),
			t.className = e || "",
			i && i.appendChild(t),
			t
	}
	function W(t) {
			var e = t.parentNode;
			e && e.removeChild(t)
	}
	function U(t) {
			for (; t.firstChild; )
					t.removeChild(t.firstChild)
	}
	function V(t) {
			var e = t.parentNode;
			e && e.lastChild !== t && e.appendChild(t)
	}
	function G(t) {
			var e = t.parentNode;
			e && e.firstChild !== t && e.insertBefore(t, e.firstChild)
	}
	function q(t, e) {
			return void 0 !== t.classList ? t.classList.contains(e) : 0 < (t = J(t)).length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t)
	}
	function K(t, e) {
			var i;
			if (void 0 !== t.classList)
					for (var n = u(e), o = 0, s = n.length; s > o; o++)
							t.classList.add(n[o]);
			else
					q(t, e) || X(t, ((i = J(t)) ? i + " " : "") + e)
	}
	function Y(t, e) {
			void 0 !== t.classList ? t.classList.remove(e) : X(t, l((" " + J(t) + " ").replace(" " + e + " ", " ")))
	}
	function X(t, e) {
			void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
	}
	function J(t) {
			return void 0 === (t = t.correspondingElement ? t.correspondingElement : t).className.baseVal ? t.className : t.className.baseVal
	}
	function $(t, e) {
			if ("opacity"in t.style)
					t.style.opacity = e;
			else if ("filter"in t.style) {
					var i = !1
						, n = "DXImageTransform.Microsoft.Alpha";
					try {
							i = t.filters.item(n)
					} catch (t) {
							if (1 === e)
									return
					}
					e = Math.round(100 * e),
					i ? (i.Enabled = 100 !== e,
					i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
			}
	}
	function Q(t) {
			for (var e = document.documentElement.style, i = 0; i < t.length; i++)
					if (t[i]in e)
							return t[i];
			return !1
	}
	function te(t, e, i) {
			e = e || new x(0,0),
			t.style[an] = (Yi.ie3d ? "translate(" + e.x + "px," + e.y + "px)" : "translate3d(" + e.x + "px," + e.y + "px,0)") + (i ? " scale(" + i + ")" : "")
	}
	function ee(t, e) {
			t._leaflet_pos = e,
			Yi.any3d ? te(t, e) : (t.style.left = e.x + "px",
			t.style.top = e.y + "px")
	}
	function ie(t) {
			return t._leaflet_pos || new x(0,0)
	}
	function ne() {
			le(window, "dragstart", ge)
	}
	function oe() {
			ue(window, "dragstart", ge)
	}
	function se(t) {
			for (; -1 === t.tabIndex; )
					t = t.parentNode;
			t.style && (ae(),
			pi = (_i = t).style.outlineStyle,
			t.style.outlineStyle = "none",
			le(window, "keydown", ae))
	}
	function ae() {
			_i && (_i.style.outlineStyle = pi,
			pi = _i = void 0,
			ue(window, "keydown", ae))
	}
	function re(t) {
			for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body); )
					;
			return t
	}
	function he(t) {
			var e = t.getBoundingClientRect();
			return {
					x: e.width / t.offsetWidth || 1,
					y: e.height / t.offsetHeight || 1,
					boundingClientRect: e
			}
	}
	function le(t, e, i, n) {
			if (e && "object" == typeof e)
					for (var o in e)
							de(t, o, e[o], i);
			else
					for (var s = 0, a = (e = u(e)).length; a > s; s++)
							de(t, e[s], i, n);
			return this
	}
	function ue(t, e, i, n) {
			if (1 === arguments.length)
					ce(t),
					delete t[un];
			else if (e && "object" == typeof e)
					for (var o in e)
							_e(t, o, e[o], i);
			else if (e = u(e),
			2 === arguments.length)
					ce(t, function(t) {
							return -1 !== p(e, t)
					});
			else
					for (var s = 0, a = e.length; a > s; s++)
							_e(t, e[s], i, n);
			return this
	}
	function ce(t, e) {
			for (var i in t[un]) {
					var n = i.split(/\d/)[0];
					e && !e(n) || _e(t, n, null, null, i)
			}
	}
	function de(t, e, i, n) {
			var s, a, r = e + o(i) + (n ? "_" + o(n) : "");
			t[un] && t[un][r] || (a = s = function(e) {
					return i.call(n || t, e || window.event)
			}
			,
			!Yi.touchNative && Yi.pointer && 0 === e.indexOf("touch") ? s = A(t, e, s) : Yi.touch && "dblclick" === e ? s = D(t, s) : "addEventListener"in t ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e ? t.addEventListener(cn[e] || e, s, !!Yi.passiveEvents && {
					passive: !1
			}) : "mouseenter" === e || "mouseleave" === e ? t.addEventListener(cn[e], s = function(e) {
					e = e || window.event,
					be(t, e) && a(e)
			}
			, !1) : t.addEventListener(e, a, !1) : t.attachEvent("on" + e, s),
			t[un] = t[un] || {},
			t[un][r] = s)
	}
	function _e(t, e, i, n, s) {
			s = s || e + o(i) + (n ? "_" + o(n) : "");
			var a, r, i = t[un] && t[un][s];
			i && (!Yi.touchNative && Yi.pointer && 0 === e.indexOf("touch") ? (n = t,
			r = i,
			tn[a = e] ? n.removeEventListener(tn[a], r, !1) : console.warn("wrong event specified:", a)) : Yi.touch && "dblclick" === e ? (n = i,
			(r = t).removeEventListener("dblclick", n.dblclick),
			r.removeEventListener("click", n.simDblclick)) : "removeEventListener"in t ? t.removeEventListener(cn[e] || e, i, !1) : t.detachEvent("on" + e, i),
			t[un][s] = null)
	}
	function pe(t) {
			return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0,
			this
	}
	function me(t) {
			return de(t, "wheel", pe),
			this
	}
	function fe(t) {
			return le(t, "mousedown touchstart dblclick contextmenu", pe),
			t._leaflet_disable_click = !0,
			this
	}
	function ge(t) {
			return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
			this
	}
	function ve(t) {
			return ge(t),
			pe(t),
			this
	}
	function ye(t) {
			if (t.composedPath)
					return t.composedPath();
			for (var e = [], i = t.target; i; )
					e.push(i),
					i = i.parentNode;
			return e
	}
	function xe(t, e) {
			var i, n;
			return e ? (n = (i = he(e)).boundingClientRect,
			new x((t.clientX - n.left) / i.x - e.clientLeft,(t.clientY - n.top) / i.y - e.clientTop)) : new x(t.clientX,t.clientY)
	}
	function we(t) {
			return Yi.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / dn : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
	}
	function be(t, e) {
			var i = e.relatedTarget;
			if (!i)
					return !0;
			try {
					for (; i && i !== t; )
							i = i.parentNode
			} catch (t) {
					return !1
			}
			return i !== t
	}
	function Le(t) {
			return new mn(t)
	}
	function Pe(t, e, i) {
			for (var n, o, s, a, r, h, l, u = [1, 4, 2, 8], c = 0, d = t.length; d > c; c++)
					t[c]._code = Se(t[c], e);
			for (s = 0; 4 > s; s++) {
					for (h = u[s],
					n = [],
					c = 0,
					o = (d = t.length) - 1; d > c; o = c++)
							a = t[c],
							r = t[o],
							a._code & h ? r._code & h || ((l = Ee(r, a, h, e, i))._code = Se(l, e),
							n.push(l)) : (r._code & h && ((l = Ee(r, a, h, e, i))._code = Se(l, e),
							n.push(l)),
							n.push(a));
					t = n
			}
			return t
	}
	function Te(t, e) {
			var i, n, o, s, a, r, h;
			if (!t || 0 === t.length)
					throw new Error("latlngs not passed");
			Oe(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
			t = t[0]);
			for (var l = z([0, 0]), u = M(t), c = (u.getNorthWest().distanceTo(u.getSouthWest()) * u.getNorthEast().distanceTo(u.getNorthWest()) < 1700 && (l = Me(t)),
			t.length), d = [], _ = 0; c > _; _++) {
					var p = z(t[_]);
					d.push(e.project(z([p.lat - l.lat, p.lng - l.lng])))
			}
			for (_ = a = r = h = 0,
			i = c - 1; c > _; i = _++)
					n = d[_],
					o = d[i],
					s = n.y * o.x - o.y * n.x,
					r += (n.x + o.x) * s,
					h += (n.y + o.y) * s,
					a += 3 * s;
			return u = 0 === a ? d[0] : [r / a, h / a],
			u = e.unproject(w(u)),
			z([u.lat + l.lat, u.lng + l.lng])
	}
	function Me(t) {
			for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
					var s = z(t[o]);
					e += s.lat,
					i += s.lng,
					n++
			}
			return z([e / n, i / n])
	}
	function Ce(t, e) {
			if (e && t.length) {
					var i = t = function(t, e) {
							for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++)
									(function(t, e) {
											var i = e.x - t.x
												, e = e.y - t.y;
											return i * i + e * e
									}
									)(t[n], t[o]) > e && (i.push(t[n]),
									o = n);
							return s - 1 > o && i.push(t[s - 1]),
							i
					}(t, e *= e)
						, n = i.length
						, o = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(n);
					o[0] = o[n - 1] = 1,
					function r(t, e, i, n, o) {
							var s, a, h, l = 0;
							for (a = n + 1; o - 1 >= a; a++)
									h = Ze(t[a], t[n], t[o], !0),
									h > l && (s = a,
									l = h);
							l > i && (e[s] = 1,
							r(t, e, i, n, s),
							r(t, e, i, s, o))
					}(i, o, e, 0, n - 1);
					var s, a = [];
					for (s = 0; n > s; s++)
							o[s] && a.push(i[s]);
					return a
			}
			return t.slice()
	}
	function ze(t, e, i) {
			return Math.sqrt(Ze(t, e, i, !0))
	}
	function ke(t, e, i, n, o) {
			var s, a, r, h = n ? ln : Se(t, i), l = Se(e, i);
			for (ln = l; ; ) {
					if (!(h | l))
							return [t, e];
					if (h & l)
							return !1;
					r = Se(a = Ee(t, e, s = h || l, i, o), i),
					s === h ? (t = a,
					h = r) : (e = a,
					l = r)
			}
	}
	function Ee(t, e, i, n, o) {
			var s, a, r = e.x - t.x, e = e.y - t.y, h = n.min, n = n.max;
			return 8 & i ? (s = t.x + r * (n.y - t.y) / e,
			a = n.y) : 4 & i ? (s = t.x + r * (h.y - t.y) / e,
			a = h.y) : 2 & i ? (s = n.x,
			a = t.y + e * (n.x - t.x) / r) : 1 & i && (s = h.x,
			a = t.y + e * (h.x - t.x) / r),
			new x(s,a,o)
	}
	function Se(t, e) {
			var i = 0;
			return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2),
			t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8),
			i
	}
	function Ze(t, e, i, n) {
			var o = e.x
				, e = e.y
				, s = i.x - o
				, a = i.y - e
				, r = s * s + a * a;
			return r > 0 && (1 < (r = ((t.x - o) * s + (t.y - e) * a) / r) ? (o = i.x,
			e = i.y) : r > 0 && (o += s * r,
			e += a * r)),
			s = t.x - o,
			a = t.y - e,
			n ? s * s + a * a : new x(o,e)
	}
	function Oe(t) {
			return !Je(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
	}
	function Ae(t) {
			return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),
			Oe(t)
	}
	function Ie(t, e) {
			var i, n, o, s, a, r;
			if (!t || 0 === t.length)
					throw new Error("latlngs not passed");
			Oe(t) || (console.warn("latlngs are not flat! Only the first ring will be used"),
			t = t[0]);
			for (var h = z([0, 0]), l = M(t), u = (l.getNorthWest().distanceTo(l.getSouthWest()) * l.getNorthEast().distanceTo(l.getNorthWest()) < 1700 && (h = Me(t)),
			t.length), c = [], d = 0; u > d; d++) {
					var _ = z(t[d]);
					c.push(e.project(z([_.lat - h.lat, _.lng - h.lng])))
			}
			for (i = d = 0; u - 1 > d; d++)
					i += c[d].distanceTo(c[d + 1]) / 2;
			if (0 === i)
					r = c[0];
			else
					for (n = d = 0; u - 1 > d; d++)
							if (o = c[d],
							s = c[d + 1],
							i < (n += a = o.distanceTo(s))) {
									r = [s.x - (a = (n - i) / a) * (s.x - o.x), s.y - a * (s.y - o.y)];
									break
							}
			return l = e.unproject(w(r)),
			z([l.lat + h.lat, l.lng + h.lng])
	}
	function Be(t, e) {
			var i, n, o, s, a = "Feature" === t.type ? t.geometry : t, r = a ? a.coordinates : null, h = [], l = e && e.pointToLayer, u = e && e.coordsToLatLng || Re;
			if (!r && !a)
					return null;
			switch (a.type) {
			case "Point":
					return Ne(l, t, i = u(r), e);
			case "MultiPoint":
					for (o = 0,
					s = r.length; s > o; o++)
							i = u(r[o]),
							h.push(Ne(l, t, i, e));
					return new Pn(h);
			case "LineString":
			case "MultiLineString":
					return n = De(r, "LineString" === a.type ? 0 : 1, u),
					new Zn(n,e);
			case "Polygon":
			case "MultiPolygon":
					return n = De(r, "Polygon" === a.type ? 1 : 2, u),
					new On(n,e);
			case "GeometryCollection":
					for (o = 0,
					s = a.geometries.length; s > o; o++) {
							var c = Be({
									geometry: a.geometries[o],
									type: "Feature",
									properties: t.properties
							}, e);
							c && h.push(c)
					}
					return new Pn(h);
			case "FeatureCollection":
					for (o = 0,
					s = a.features.length; s > o; o++) {
							var d = Be(a.features[o], e);
							d && h.push(d)
					}
					return new Pn(h);
			default:
					throw new Error("Invalid GeoJSON object.")
			}
	}
	function Ne(t, e, i, n) {
			return t ? t(e, i) : new zn(i,n && n.markersInheritOptions && n)
	}
	function Re(t) {
			return new C(t[1],t[0],t[2])
	}
	function De(t, e, i) {
			for (var n, o = [], s = 0, a = t.length; a > s; s++)
					n = e ? De(t[s], e - 1, i) : (i || Re)(t[s]),
					o.push(n);
			return o
	}
	function je(t, e) {
			return void 0 !== (t = z(t)).alt ? [h(t.lng, e), h(t.lat, e), h(t.alt, e)] : [h(t.lng, e), h(t.lat, e)]
	}
	function He(t, e, i, n) {
			for (var o = [], s = 0, a = t.length; a > s; s++)
					o.push(e ? He(t[s], Oe(t[s]) ? 0 : e - 1, i, n) : je(t[s], n));
			return !e && i && 0 < o.length && o.push(o[0].slice()),
			o
	}
	function Fe(t, i) {
			return t.feature ? e({}, t.feature, {
					geometry: i
			}) : We(i)
	}
	function We(t) {
			return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
					type: "Feature",
					properties: {},
					geometry: t
			}
	}
	function Ue(t, e) {
			return new An(t,e)
	}
	function Ve(t, e) {
			return new Wn(t,e)
	}
	function Ge(t) {
			return Yi.canvas ? new Gn(t) : null
	}
	function qe(t) {
			return Yi.svg || Yi.vml ? new Yn(t) : null
	}
	var Ke = Object.create || function(t) {
			return i.prototype = t,
			new i
	}
		, Ye = 0
		, Xe = /\{ *([\w_ -]+) *\}/g
		, Je = Array.isArray || function(t) {
			return "[object Array]" === Object.prototype.toString.call(t)
	}
		, $e = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
		, Qe = 0
		, ti = window.requestAnimationFrame || m("RequestAnimationFrame") || f
		, ei = window.cancelAnimationFrame || m("CancelAnimationFrame") || m("CancelRequestAnimationFrame") || function(t) {
			window.clearTimeout(t)
	}
		, ii = {
			__proto__: null,
			extend: e,
			create: Ke,
			bind: n,
			get lastId() {
					return Ye
			},
			stamp: o,
			throttle: s,
			wrapNum: a,
			falseFn: r,
			formatNum: h,
			trim: l,
			splitWords: u,
			setOptions: c,
			getParamString: d,
			template: _,
			isArray: Je,
			indexOf: p,
			emptyImageUrl: $e,
			requestFn: ti,
			cancelFn: ei,
			requestAnimFrame: g,
			cancelAnimFrame: v
	};
	y.extend = function(t) {
			function i() {
					c(this),
					this.initialize && this.initialize.apply(this, arguments),
					this.callInitHooks()
			}
			var n, o = i.__super__ = this.prototype, s = Ke(o);
			for (n in (s.constructor = i).prototype = s,
			this)
					Object.prototype.hasOwnProperty.call(this, n) && "prototype" !== n && "__super__" !== n && (i[n] = this[n]);
			if (t.statics && e(i, t.statics),
			t.includes) {
					var a = t.includes;
					if ("undefined" != typeof L && L && L.Mixin) {
							a = Je(a) ? a : [a];
							for (var r = 0; r < a.length; r++)
									a[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
					}
					e.apply(null, [s].concat(t.includes))
			}
			return e(s, t),
			delete s.statics,
			delete s.includes,
			s.options && (s.options = o.options ? Ke(o.options) : {},
			e(s.options, t.options)),
			s._initHooks = [],
			s.callInitHooks = function() {
					if (!this._initHooksCalled) {
							o.callInitHooks && o.callInitHooks.call(this),
							this._initHooksCalled = !0;
							for (var t = 0, e = s._initHooks.length; e > t; t++)
									s._initHooks[t].call(this)
					}
			}
			,
			i
	}
	,
	y.include = function(t) {
			var i = this.prototype.options;
			return e(this.prototype, t),
			t.options && (this.prototype.options = i,
			this.mergeOptions(t.options)),
			this
	}
	,
	y.mergeOptions = function(t) {
			return e(this.prototype.options, t),
			this
	}
	,
	y.addInitHook = function(t) {
			var e = Array.prototype.slice.call(arguments, 1)
				, i = "function" == typeof t ? t : function() {
					this[t].apply(this, e)
			}
			;
			return this.prototype._initHooks = this.prototype._initHooks || [],
			this.prototype._initHooks.push(i),
			this
	}
	;
	var ni = {
			on: function(t, e, i) {
					if ("object" == typeof t)
							for (var n in t)
									this._on(n, t[n], e);
					else
							for (var o = 0, s = (t = u(t)).length; s > o; o++)
									this._on(t[o], e, i);
					return this
			},
			off: function(t, e, i) {
					if (arguments.length)
							if ("object" == typeof t)
									for (var n in t)
											this._off(n, t[n], e);
							else {
									t = u(t);
									for (var o = 1 === arguments.length, s = 0, a = t.length; a > s; s++)
											o ? this._off(t[s]) : this._off(t[s], e, i)
							}
					else
							delete this._events;
					return this
			},
			_on: function(t, e, i, n) {
					"function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 === this._listens(t, e, i) && (e = {
							fn: e,
							ctx: i = i === this ? void 0 : i
					},
					n && (e.once = !0),
					this._events = this._events || {},
					this._events[t] = this._events[t] || [],
					this._events[t].push(e))
			},
			_off: function(t, e, i) {
					var n, o, s;
					if (this._events && (n = this._events[t]))
							if (1 === arguments.length) {
									if (this._firingCount)
											for (o = 0,
											s = n.length; s > o; o++)
													n[o].fn = r;
									delete this._events[t]
							} else
									"function" != typeof e ? console.warn("wrong listener type: " + typeof e) : !1 !== (e = this._listens(t, e, i)) && (i = n[e],
									this._firingCount && (i.fn = r,
									this._events[t] = n = n.slice()),
									n.splice(e, 1))
			},
			fire: function(t, i, n) {
					if (this.listens(t, n)) {
							var o = e({}, i, {
									type: t,
									target: this,
									sourceTarget: i && i.sourceTarget || this
							});
							if (this._events) {
									var s = this._events[t];
									if (s) {
											this._firingCount = this._firingCount + 1 || 1;
											for (var a = 0, r = s.length; r > a; a++) {
													var h = s[a]
														, l = h.fn;
													h.once && this.off(t, l, h.ctx),
													l.call(h.ctx || this, o)
											}
											this._firingCount--
									}
							}
							n && this._propagateEvent(o)
					}
					return this
			},
			listens: function(t, e, i, n) {
					"string" != typeof t && console.warn('"string" type argument expected');
					var o = e
						, s = ("function" != typeof e && (n = !!e,
					i = o = void 0),
					this._events && this._events[t]);
					if (s && s.length && !1 !== this._listens(t, o, i))
							return !0;
					if (n)
							for (var a in this._eventParents)
									if (this._eventParents[a].listens(t, e, i, n))
											return !0;
					return !1
			},
			_listens: function(t, e, i) {
					if (this._events) {
							var n = this._events[t] || [];
							if (!e)
									return !!n.length;
							i === this && (i = void 0);
							for (var o = 0, s = n.length; s > o; o++)
									if (n[o].fn === e && n[o].ctx === i)
											return o
					}
					return !1
			},
			once: function(t, e, i) {
					if ("object" == typeof t)
							for (var n in t)
									this._on(n, t[n], e, !0);
					else
							for (var o = 0, s = (t = u(t)).length; s > o; o++)
									this._on(t[o], e, i, !0);
					return this
			},
			addEventParent: function(t) {
					return this._eventParents = this._eventParents || {},
					this._eventParents[o(t)] = t,
					this
			},
			removeEventParent: function(t) {
					return this._eventParents && delete this._eventParents[o(t)],
					this
			},
			_propagateEvent: function(t) {
					for (var i in this._eventParents)
							this._eventParents[i].fire(t.type, e({
									layer: t.target,
									propagatedFrom: t.target
							}, t), !0)
			}
	}
		, oi = (ni.addEventListener = ni.on,
	ni.removeEventListener = ni.clearAllEventListeners = ni.off,
	ni.addOneTimeEventListener = ni.once,
	ni.fireEvent = ni.fire,
	ni.hasEventListeners = ni.listens,
	y.extend(ni))
		, si = Math.trunc || function(t) {
			return t > 0 ? Math.floor(t) : Math.ceil(t)
	}
	;
	x.prototype = {
			clone: function() {
					return new x(this.x,this.y)
			},
			add: function(t) {
					return this.clone()._add(w(t))
			},
			_add: function(t) {
					return this.x += t.x,
					this.y += t.y,
					this
			},
			subtract: function(t) {
					return this.clone()._subtract(w(t))
			},
			_subtract: function(t) {
					return this.x -= t.x,
					this.y -= t.y,
					this
			},
			divideBy: function(t) {
					return this.clone()._divideBy(t)
			},
			_divideBy: function(t) {
					return this.x /= t,
					this.y /= t,
					this
			},
			multiplyBy: function(t) {
					return this.clone()._multiplyBy(t)
			},
			_multiplyBy: function(t) {
					return this.x *= t,
					this.y *= t,
					this
			},
			scaleBy: function(t) {
					return new x(this.x * t.x,this.y * t.y)
			},
			unscaleBy: function(t) {
					return new x(this.x / t.x,this.y / t.y)
			},
			round: function() {
					return this.clone()._round()
			},
			_round: function() {
					return this.x = Math.round(this.x),
					this.y = Math.round(this.y),
					this
			},
			floor: function() {
					return this.clone()._floor()
			},
			_floor: function() {
					return this.x = Math.floor(this.x),
					this.y = Math.floor(this.y),
					this
			},
			ceil: function() {
					return this.clone()._ceil()
			},
			_ceil: function() {
					return this.x = Math.ceil(this.x),
					this.y = Math.ceil(this.y),
					this
			},
			trunc: function() {
					return this.clone()._trunc()
			},
			_trunc: function() {
					return this.x = si(this.x),
					this.y = si(this.y),
					this
			},
			distanceTo: function(t) {
					var e = (t = w(t)).x - this.x
						, t = t.y - this.y;
					return Math.sqrt(e * e + t * t)
			},
			equals: function(t) {
					return (t = w(t)).x === this.x && t.y === this.y
			},
			contains: function(t) {
					return t = w(t),
					Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
			},
			toString: function() {
					return "Point(" + h(this.x) + ", " + h(this.y) + ")"
			}
	},
	b.prototype = {
			extend: function(t) {
					var e, i;
					if (t) {
							if (t instanceof x || "number" == typeof t[0] || "x"in t)
									e = i = w(t);
							else if (e = (t = P(t)).min,
							i = t.max,
							!e || !i)
									return this;
							this.min || this.max ? (this.min.x = Math.min(e.x, this.min.x),
							this.max.x = Math.max(i.x, this.max.x),
							this.min.y = Math.min(e.y, this.min.y),
							this.max.y = Math.max(i.y, this.max.y)) : (this.min = e.clone(),
							this.max = i.clone())
					}
					return this
			},
			getCenter: function(t) {
					return w((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
			},
			getBottomLeft: function() {
					return w(this.min.x, this.max.y)
			},
			getTopRight: function() {
					return w(this.max.x, this.min.y)
			},
			getTopLeft: function() {
					return this.min
			},
			getBottomRight: function() {
					return this.max
			},
			getSize: function() {
					return this.max.subtract(this.min)
			},
			contains: function(t) {
					var e, i;
					return (t = ("number" == typeof t[0] || t instanceof x ? w : P)(t))instanceof b ? (e = t.min,
					i = t.max) : e = i = t,
					e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
			},
			intersects: function(t) {
					t = P(t);
					var e = this.min
						, i = this.max
						, n = t.min
						, t = t.max
						, o = t.x >= e.x && n.x <= i.x
						, t = t.y >= e.y && n.y <= i.y;
					return o && t
			},
			overlaps: function(t) {
					t = P(t);
					var e = this.min
						, i = this.max
						, n = t.min
						, t = t.max
						, o = t.x > e.x && n.x < i.x
						, t = t.y > e.y && n.y < i.y;
					return o && t
			},
			isValid: function() {
					return !(!this.min || !this.max)
			},
			pad: function(t) {
					var e = this.min
						, i = this.max
						, n = Math.abs(e.x - i.x) * t
						, t = Math.abs(e.y - i.y) * t;
					return P(w(e.x - n, e.y - t), w(i.x + n, i.y + t))
			},
			equals: function(t) {
					return !!t && (t = P(t),
					this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()))
			}
	},
	T.prototype = {
			extend: function(t) {
					var e, i, n = this._southWest, o = this._northEast;
					if (t instanceof C)
							i = e = t;
					else {
							if (!(t instanceof T))
									return t ? this.extend(z(t) || M(t)) : this;
							if (e = t._southWest,
							i = t._northEast,
							!e || !i)
									return this
					}
					return n || o ? (n.lat = Math.min(e.lat, n.lat),
					n.lng = Math.min(e.lng, n.lng),
					o.lat = Math.max(i.lat, o.lat),
					o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new C(e.lat,e.lng),
					this._northEast = new C(i.lat,i.lng)),
					this
			},
			pad: function(t) {
					var e = this._southWest
						, i = this._northEast
						, n = Math.abs(e.lat - i.lat) * t
						, t = Math.abs(e.lng - i.lng) * t;
					return new T(new C(e.lat - n,e.lng - t),new C(i.lat + n,i.lng + t))
			},
			getCenter: function() {
					return new C((this._southWest.lat + this._northEast.lat) / 2,(this._southWest.lng + this._northEast.lng) / 2)
			},
			getSouthWest: function() {
					return this._southWest
			},
			getNorthEast: function() {
					return this._northEast
			},
			getNorthWest: function() {
					return new C(this.getNorth(),this.getWest())
			},
			getSouthEast: function() {
					return new C(this.getSouth(),this.getEast())
			},
			getWest: function() {
					return this._southWest.lng
			},
			getSouth: function() {
					return this._southWest.lat
			},
			getEast: function() {
					return this._northEast.lng
			},
			getNorth: function() {
					return this._northEast.lat
			},
			contains: function(t) {
					t = ("number" == typeof t[0] || t instanceof C || "lat"in t ? z : M)(t);
					var e, i, n = this._southWest, o = this._northEast;
					return t instanceof T ? (e = t.getSouthWest(),
					i = t.getNorthEast()) : e = i = t,
					e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
			},
			intersects: function(t) {
					t = M(t);
					var e = this._southWest
						, i = this._northEast
						, n = t.getSouthWest()
						, t = t.getNorthEast()
						, o = t.lat >= e.lat && n.lat <= i.lat
						, t = t.lng >= e.lng && n.lng <= i.lng;
					return o && t
			},
			overlaps: function(t) {
					t = M(t);
					var e = this._southWest
						, i = this._northEast
						, n = t.getSouthWest()
						, t = t.getNorthEast()
						, o = t.lat > e.lat && n.lat < i.lat
						, t = t.lng > e.lng && n.lng < i.lng;
					return o && t
			},
			toBBoxString: function() {
					return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
			},
			equals: function(t, e) {
					return !!t && (t = M(t),
					this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
			},
			isValid: function() {
					return !(!this._southWest || !this._northEast)
			}
	};
	var ai = {
			latLngToPoint: function(t, e) {
					return t = this.projection.project(t),
					e = this.scale(e),
					this.transformation._transform(t, e)
			},
			pointToLatLng: function(t, e) {
					return e = this.scale(e),
					t = this.transformation.untransform(t, e),
					this.projection.unproject(t)
			},
			project: function(t) {
					return this.projection.project(t)
			},
			unproject: function(t) {
					return this.projection.unproject(t)
			},
			scale: function(t) {
					return 256 * Math.pow(2, t)
			},
			zoom: function(t) {
					return Math.log(t / 256) / Math.LN2
			},
			getProjectedBounds: function(t) {
					var e;
					return this.infinite ? null : (e = this.projection.bounds,
					t = this.scale(t),
					new b(this.transformation.transform(e.min, t),this.transformation.transform(e.max, t)))
			},
			infinite: !(C.prototype = {
					equals: function(t, e) {
							return !!t && (t = z(t),
							Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
					},
					toString: function(t) {
							return "LatLng(" + h(this.lat, t) + ", " + h(this.lng, t) + ")"
					},
					distanceTo: function(t) {
							return ri.distance(this, z(t))
					},
					wrap: function() {
							return ri.wrapLatLng(this)
					},
					toBounds: function(t) {
							var t = 180 * t / 40075017
								, e = t / Math.cos(Math.PI / 180 * this.lat);
							return M([this.lat - t, this.lng - e], [this.lat + t, this.lng + e])
					},
					clone: function() {
							return new C(this.lat,this.lng,this.alt)
					}
			}),
			wrapLatLng: function(t) {
					var e = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng;
					return new C(this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat,e,t.alt)
			},
			wrapLatLngBounds: function(t) {
					var e = t.getCenter()
						, i = this.wrapLatLng(e)
						, n = e.lat - i.lat
						, e = e.lng - i.lng;
					return 0 == n && 0 == e ? t : (i = t.getSouthWest(),
					t = t.getNorthEast(),
					new T(new C(i.lat - n,i.lng - e),new C(t.lat - n,t.lng - e)))
			}
	}
		, ri = e({}, ai, {
			wrapLng: [-180, 180],
			R: 6371e3,
			distance: function(t, e) {
					var i = Math.PI / 180
						, n = t.lat * i
						, o = e.lat * i
						, s = Math.sin((e.lat - t.lat) * i / 2)
						, e = Math.sin((e.lng - t.lng) * i / 2)
						, t = s * s + Math.cos(n) * Math.cos(o) * e * e
						, i = 2 * Math.atan2(Math.sqrt(t), Math.sqrt(1 - t));
					return this.R * i
			}
	})
		, hi = 6378137
		, hi = {
			R: hi,
			MAX_LATITUDE: 85.0511287798,
			project: function(t) {
					var e = Math.PI / 180
						, i = this.MAX_LATITUDE
						, i = Math.max(Math.min(i, t.lat), -i)
						, i = Math.sin(i * e);
					return new x(this.R * t.lng * e,this.R * Math.log((1 + i) / (1 - i)) / 2)
			},
			unproject: function(t) {
					var e = 180 / Math.PI;
					return new C((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,t.x * e / this.R)
			},
			bounds: new b([-(hi *= Math.PI), -hi],[hi, hi])
	};
	k.prototype = {
			transform: function(t, e) {
					return this._transform(t.clone(), e)
			},
			_transform: function(t, e) {
					return t.x = (e = e || 1) * (this._a * t.x + this._b),
					t.y = e * (this._c * t.y + this._d),
					t
			},
			untransform: function(t, e) {
					return new x((t.x / (e = e || 1) - this._b) / this._a,(t.y / e - this._d) / this._c)
			}
	};
	var li, ui, ci, di, _i, pi, mi = e({}, ri, {
			code: "EPSG:3857",
			projection: hi,
			transformation: E(mi = .5 / (Math.PI * hi.R), .5, -mi, .5)
	}), fi = e({}, mi, {
			code: "EPSG:900913"
	}), gi = document.documentElement.style, vi = "ActiveXObject"in window, yi = vi && !document.addEventListener, xi = "msLaunchUri"in navigator && !("documentMode"in document), wi = O("webkit"), bi = O("android"), Li = O("android 2") || O("android 3"), Pi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Pi = bi && O("Google") && 537 > Pi && !("AudioNode"in window), Ti = !!window.opera, Mi = !xi && O("chrome"), Ci = O("gecko") && !wi && !Ti && !vi, zi = !Mi && O("safari"), ki = O("phantom"), Ei = "OTransition"in gi, Si = 0 === navigator.platform.indexOf("Win"), Zi = vi && "transition"in gi, Oi = "WebKitCSSMatrix"in window && "m11"in new window.WebKitCSSMatrix && !Li, gi = "MozPerspective"in gi, Ai = !window.L_DISABLE_3D && (Zi || Oi || gi) && !Ei && !ki, Ii = "undefined" != typeof orientation || O("mobile"), Bi = Ii && wi, Ni = Ii && Oi, Ri = !window.PointerEvent && window.MSPointerEvent, Di = !(!window.PointerEvent && !Ri), ji = "ontouchstart"in window || !!window.TouchEvent, Hi = !window.L_NO_TOUCH && (ji || Di), Fi = Ii && Ti, Wi = Ii && Ci, Ui = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI), Vi = function() {
			var t = !1;
			try {
					var e = Object.defineProperty({}, "passive", {
							get: function() {
									t = !0
							}
					});
					window.addEventListener("testPassiveEventSupport", r, e),
					window.removeEventListener("testPassiveEventSupport", r, e)
			} catch (t) {}
			return t
	}(), Gi = !!document.createElement("canvas").getContext, qi = !(!document.createElementNS || !S("svg").createSVGRect), Ki = !!qi && ((Ki = document.createElement("div")).innerHTML = "<svg/>",
	"http://www.w3.org/2000/svg" === (Ki.firstChild && Ki.firstChild.namespaceURI)), Yi = {
			ie: vi,
			ielt9: yi,
			edge: xi,
			webkit: wi,
			android: bi,
			android23: Li,
			androidStock: Pi,
			opera: Ti,
			chrome: Mi,
			gecko: Ci,
			safari: zi,
			phantom: ki,
			opera12: Ei,
			win: Si,
			ie3d: Zi,
			webkit3d: Oi,
			gecko3d: gi,
			any3d: Ai,
			mobile: Ii,
			mobileWebkit: Bi,
			mobileWebkit3d: Ni,
			msPointer: Ri,
			pointer: Di,
			touch: Hi,
			touchNative: ji,
			mobileOpera: Fi,
			mobileGecko: Wi,
			retina: Ui,
			passiveEvents: Vi,
			canvas: Gi,
			svg: qi,
			vml: !qi && function() {
					try {
							var t = document.createElement("div")
								, e = (t.innerHTML = '<v:shape adj="1"/>',
							t.firstChild);
							return e.style.behavior = "url(#default#VML)",
							e && "object" == typeof e.adj
					} catch (t) {
							return !1
					}
			}(),
			inlineSvg: Ki,
			mac: 0 === navigator.platform.indexOf("Mac"),
			linux: 0 === navigator.platform.indexOf("Linux")
	}, Xi = Yi.msPointer ? "MSPointerDown" : "pointerdown", Ji = Yi.msPointer ? "MSPointerMove" : "pointermove", $i = Yi.msPointer ? "MSPointerUp" : "pointerup", Qi = Yi.msPointer ? "MSPointerCancel" : "pointercancel", tn = {
			touchstart: Xi,
			touchmove: Ji,
			touchend: $i,
			touchcancel: Qi
	}, en = {
			touchstart: function(t, e) {
					e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && ge(e),
					R(t, e)
			},
			touchmove: R,
			touchend: R,
			touchcancel: R
	}, nn = {}, on = !1, sn = 200, an = Q(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]), rn = Q(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), hn = "webkitTransition" === rn || "OTransition" === rn ? rn + "End" : "transitionend";
	di = "onselectstart"in document ? (ci = function() {
			le(window, "selectstart", ge)
	}
	,
	function() {
			ue(window, "selectstart", ge)
	}
	) : (ui = Q(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
	ci = function() {
			var t;
			ui && (t = document.documentElement.style,
			li = t[ui],
			t[ui] = "none")
	}
	,
	function() {
			ui && (document.documentElement.style[ui] = li,
			li = void 0)
	}
	),
	vi = {
			__proto__: null,
			TRANSFORM: an,
			TRANSITION: rn,
			TRANSITION_END: hn,
			get: j,
			getStyle: H,
			create: F,
			remove: W,
			empty: U,
			toFront: V,
			toBack: G,
			hasClass: q,
			addClass: K,
			removeClass: Y,
			setClass: X,
			getClass: J,
			setOpacity: $,
			testProp: Q,
			setTransform: te,
			setPosition: ee,
			getPosition: ie,
			get disableTextSelection() {
					return ci
			},
			get enableTextSelection() {
					return di
			},
			disableImageDrag: ne,
			enableImageDrag: oe,
			preventOutline: se,
			restoreOutline: ae,
			getSizedParentNode: re,
			getScale: he
	};
	var ln, un = "_leaflet_events", cn = {
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			wheel: !("onwheel"in window) && "mousewheel"
	}, dn = Yi.linux && Yi.chrome ? window.devicePixelRatio : Yi.mac ? 3 * window.devicePixelRatio : 0 < window.devicePixelRatio ? 2 * window.devicePixelRatio : 1, yi = {
			__proto__: null,
			on: le,
			off: ue,
			stopPropagation: pe,
			disableScrollPropagation: me,
			disableClickPropagation: fe,
			preventDefault: ge,
			stop: ve,
			getPropagationPath: ye,
			getMousePosition: xe,
			getWheelDelta: we,
			isExternalTarget: be,
			addListener: le,
			removeListener: ue
	}, _n = oi.extend({
			run: function(t, e, i, n) {
					this.stop(),
					this._el = t,
					this._inProgress = !0,
					this._duration = i || .25,
					this._easeOutPower = 1 / Math.max(n || .5, .2),
					this._startPos = ie(t),
					this._offset = e.subtract(this._startPos),
					this._startTime = +new Date,
					this.fire("start"),
					this._animate()
			},
			stop: function() {
					this._inProgress && (this._step(!0),
					this._complete())
			},
			_animate: function() {
					this._animId = g(this._animate, this),
					this._step()
			},
			_step: function(t) {
					var e = +new Date - this._startTime
						, i = 1e3 * this._duration;
					i > e ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1),
					this._complete())
			},
			_runFrame: function(t, e) {
					t = this._startPos.add(this._offset.multiplyBy(t)),
					e && t._round(),
					ee(this._el, t),
					this.fire("step")
			},
			_complete: function() {
					v(this._animId),
					this._inProgress = !1,
					this.fire("end")
			},
			_easeOut: function(t) {
					return 1 - Math.pow(1 - t, this._easeOutPower)
			}
	}), pn = oi.extend({
			options: {
					crs: mi,
					center: void 0,
					zoom: void 0,
					minZoom: void 0,
					maxZoom: void 0,
					layers: [],
					maxBounds: void 0,
					renderer: void 0,
					zoomAnimation: !0,
					zoomAnimationThreshold: 4,
					fadeAnimation: !0,
					markerZoomAnimation: !0,
					transform3DLimit: 8388608,
					zoomSnap: 1,
					zoomDelta: 1,
					trackResize: !0
			},
			initialize: function(t, e) {
					e = c(this, e),
					this._handlers = [],
					this._layers = {},
					this._zoomBoundLayers = {},
					this._sizeChanged = !0,
					this._initContainer(t),
					this._initLayout(),
					this._onResize = n(this._onResize, this),
					this._initEvents(),
					e.maxBounds && this.setMaxBounds(e.maxBounds),
					void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
					e.center && void 0 !== e.zoom && this.setView(z(e.center), e.zoom, {
							reset: !0
					}),
					this.callInitHooks(),
					this._zoomAnimated = rn && Yi.any3d && !Yi.mobileOpera && this.options.zoomAnimation,
					this._zoomAnimated && (this._createAnimProxy(),
					le(this._proxy, hn, this._catchTransitionEnd, this)),
					this._addLayers(this.options.layers)
			},
			setView: function(t, i, n) {
					return i = void 0 === i ? this._zoom : this._limitZoom(i),
					t = this._limitCenter(z(t), i, this.options.maxBounds),
					n = n || {},
					this._stop(),
					this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({
							animate: n.animate
					}, n.zoom),
					n.pan = e({
							animate: n.animate,
							duration: n.duration
					}, n.pan)),
					this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer),
					this) : (this._resetView(t, i, n.pan && n.pan.noMoveStart),
					this)
			},
			setZoom: function(t, e) {
					return this._loaded ? this.setView(this.getCenter(), t, {
							zoom: e
					}) : (this._zoom = t,
					this)
			},
			zoomIn: function(t, e) {
					return t = t || (Yi.any3d ? this.options.zoomDelta : 1),
					this.setZoom(this._zoom + t, e)
			},
			zoomOut: function(t, e) {
					return t = t || (Yi.any3d ? this.options.zoomDelta : 1),
					this.setZoom(this._zoom - t, e)
			},
			setZoomAround: function(t, e, i) {
					var n = this.getZoomScale(e)
						, o = this.getSize().divideBy(2)
						, t = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n)
						, n = this.containerPointToLatLng(o.add(t));
					return this.setView(n, e, {
							zoom: i
					})
			},
			_getBoundsCenterZoom: function(t, e) {
					e = e || {},
					t = t.getBounds ? t.getBounds() : M(t);
					var i = w(e.paddingTopLeft || e.padding || [0, 0])
						, n = w(e.paddingBottomRight || e.padding || [0, 0])
						, o = this.getBoundsZoom(t, !1, i.add(n));
					return (o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0 ? {
							center: t.getCenter(),
							zoom: o
					} : (e = n.subtract(i).divideBy(2),
					n = this.project(t.getSouthWest(), o),
					i = this.project(t.getNorthEast(), o),
					{
							center: this.unproject(n.add(i).divideBy(2).add(e), o),
							zoom: o
					})
			},
			fitBounds: function(t, e) {
					if ((t = M(t)).isValid())
							return t = this._getBoundsCenterZoom(t, e),
							this.setView(t.center, t.zoom, e);
					throw new Error("Bounds are not valid.")
			},
			fitWorld: function(t) {
					return this.fitBounds([[-90, -180], [90, 180]], t)
			},
			panTo: function(t, e) {
					return this.setView(t, this._zoom, {
							pan: e
					})
			},
			panBy: function(t, e) {
					var i;
					return e = e || {},
					(t = w(t).round()).x || t.y ? (!0 === e.animate || this.getSize().contains(t) ? (this._panAnim || (this._panAnim = new _n,
					this._panAnim.on({
							step: this._onPanTransitionStep,
							end: this._onPanTransitionEnd
					}, this)),
					e.noMoveStart || this.fire("movestart"),
					!1 !== e.animate ? (K(this._mapPane, "leaflet-pan-anim"),
					i = this._getMapPanePos().subtract(t).round(),
					this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)) : (this._rawPanBy(t),
					this.fire("move").fire("moveend"))) : this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()),
					this) : this.fire("moveend")
			},
			flyTo: function(t, e, i) {
					function n(t) {
							return t = (d * d - c * c + (t ? -1 : 1) * m * m * _ * _) / (2 * (t ? d : c) * m * _),
							t = Math.sqrt(t * t + 1) - t,
							1e-9 > t ? -18 : Math.log(t)
					}
					function o(t) {
							return (Math.exp(t) - Math.exp(-t)) / 2
					}
					function s(t) {
							return (Math.exp(t) + Math.exp(-t)) / 2
					}
					function a(t) {
							return c * (s(f) * (o(t = f + p * t) / s(t)) - o(f)) / m
					}
					if (!1 === (i = i || {}).animate || !Yi.any3d)
							return this.setView(t, e, i);
					this._stop();
					var r = this.project(this.getCenter())
						, h = this.project(t)
						, l = this.getSize()
						, u = this._zoom
						, c = (t = z(t),
					e = void 0 === e ? u : e,
					Math.max(l.x, l.y))
						, d = c * this.getZoomScale(u, e)
						, _ = h.distanceTo(r) || 1
						, p = 1.42
						, m = p * p
						, f = n(0)
						, v = Date.now()
						, y = (n(1) - f) / p
						, x = i.duration ? 1e3 * i.duration : 1e3 * y * .8;
					return this._moveStart(!0, i.noMoveStart),
					function w() {
							var i = (Date.now() - v) / x
								, n = (1 - Math.pow(1 - i, 1.5)) * y;
							1 >= i ? (this._flyToFrame = g(w, this),
							this._move(this.unproject(r.add(h.subtract(r).multiplyBy(a(n) / _)), u), this.getScaleZoom(c / (i = n,
							c * (s(f) / s(f + p * i))), u), {
									flyTo: !0
							})) : this._move(t, e)._moveEnd(!0)
					}
					.call(this),
					this
			},
			flyToBounds: function(t, e) {
					return t = this._getBoundsCenterZoom(t, e),
					this.flyTo(t.center, t.zoom, e)
			},
			setMaxBounds: function(t) {
					return t = M(t),
					this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
					t.isValid() ? (this.options.maxBounds = t,
					this._loaded && this._panInsideMaxBounds(),
					this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null,
					this)
			},
			setMinZoom: function(t) {
					var e = this.options.minZoom;
					return this.options.minZoom = t,
					this._loaded && e !== t && (this.fire("zoomlevelschange"),
					this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
			},
			setMaxZoom: function(t) {
					var e = this.options.maxZoom;
					return this.options.maxZoom = t,
					this._loaded && e !== t && (this.fire("zoomlevelschange"),
					this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
			},
			panInsideBounds: function(t, e) {
					this._enforcingBounds = !0;
					var i = this.getCenter()
						, t = this._limitCenter(i, this._zoom, M(t));
					return i.equals(t) || this.panTo(t, e),
					this._enforcingBounds = !1,
					this
			},
			panInside: function(t, e) {
					var i = w((e = e || {}).paddingTopLeft || e.padding || [0, 0])
						, n = w(e.paddingBottomRight || e.padding || [0, 0])
						, o = this.project(this.getCenter())
						, t = this.project(t)
						, s = this.getPixelBounds()
						, i = P([s.min.add(i), s.max.subtract(n)])
						, s = i.getSize();
					return i.contains(t) || (this._enforcingBounds = !0,
					n = t.subtract(i.getCenter()),
					i = i.extend(t).getSize().subtract(s),
					o.x += n.x < 0 ? -i.x : i.x,
					o.y += n.y < 0 ? -i.y : i.y,
					this.panTo(this.unproject(o), e),
					this._enforcingBounds = !1),
					this
			},
			invalidateSize: function(t) {
					if (!this._loaded)
							return this;
					t = e({
							animate: !1,
							pan: !0
					}, !0 === t ? {
							animate: !0
					} : t);
					var i = this.getSize()
						, o = (this._sizeChanged = !0,
					this._lastCenter = null,
					this.getSize())
						, s = i.divideBy(2).round()
						, a = o.divideBy(2).round()
						, s = s.subtract(a);
					return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s),
					this.fire("move"),
					t.debounceMoveend ? (clearTimeout(this._sizeTimer),
					this._sizeTimer = setTimeout(n(this.fire, this, "moveend"), 200)) : this.fire("moveend")),
					this.fire("resize", {
							oldSize: i,
							newSize: o
					})) : this
			},
			stop: function() {
					return this.setZoom(this._limitZoom(this._zoom)),
					this.options.zoomSnap || this.fire("viewreset"),
					this._stop()
			},
			locate: function(t) {
					var i, o;
					return t = this._locateOptions = e({
							timeout: 1e4,
							watch: !1
					}, t),
					"geolocation"in navigator ? (i = n(this._handleGeolocationResponse, this),
					o = n(this._handleGeolocationError, this),
					t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, o, t) : navigator.geolocation.getCurrentPosition(i, o, t)) : this._handleGeolocationError({
							code: 0,
							message: "Geolocation not supported."
					}),
					this
			},
			stopLocate: function() {
					return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId),
					this._locateOptions && (this._locateOptions.setView = !1),
					this
			},
			_handleGeolocationError: function(t) {
					var e;
					this._container._leaflet_id && (e = t.code,
					t = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout"),
					this._locateOptions.setView && !this._loaded && this.fitWorld(),
					this.fire("locationerror", {
							code: e,
							message: "Geolocation error: " + t + "."
					}))
			},
			_handleGeolocationResponse: function(t) {
					if (this._container._leaflet_id) {
							var e, i, n = new C(t.coords.latitude,t.coords.longitude), o = n.toBounds(2 * t.coords.accuracy), s = this._locateOptions, a = (s.setView && (e = this.getBoundsZoom(o),
							this.setView(n, s.maxZoom ? Math.min(e, s.maxZoom) : e)),
							{
									latlng: n,
									bounds: o,
									timestamp: t.timestamp
							});
							for (i in t.coords)
									"number" == typeof t.coords[i] && (a[i] = t.coords[i]);
							this.fire("locationfound", a)
					}
			},
			addHandler: function(t, e) {
					return e && (e = this[t] = new e(this),
					this._handlers.push(e),
					this.options[t] && e.enable()),
					this
			},
			remove: function() {
					if (this._initEvents(!0),
					this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds),
					this._containerId !== this._container._leaflet_id)
							throw new Error("Map container is being reused by another instance");
					try {
							delete this._container._leaflet_id,
							delete this._containerId
					} catch (t) {
							this._container._leaflet_id = void 0,
							this._containerId = void 0
					}
					for (var t in void 0 !== this._locationWatchId && this.stopLocate(),
					this._stop(),
					W(this._mapPane),
					this._clearControlPos && this._clearControlPos(),
					this._resizeRequest && (v(this._resizeRequest),
					this._resizeRequest = null),
					this._clearHandlers(),
					this._loaded && this.fire("unload"),
					this._layers)
							this._layers[t].remove();
					for (t in this._panes)
							W(this._panes[t]);
					return this._layers = [],
					this._panes = [],
					delete this._mapPane,
					delete this._renderer,
					this
			},
			createPane: function(t, e) {
					return e = F("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane),
					t && (this._panes[t] = e),
					e
			},
			getCenter: function() {
					return this._checkIfLoaded(),
					this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint())
			},
			getZoom: function() {
					return this._zoom
			},
			getBounds: function() {
					var t = this.getPixelBounds();
					return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))
			},
			getMinZoom: function() {
					return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
			},
			getMaxZoom: function() {
					return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
			},
			getBoundsZoom: function(t, e, i) {
					t = M(t),
					i = w(i || [0, 0]);
					var n = this.getZoom() || 0
						, o = this.getMinZoom()
						, s = this.getMaxZoom()
						, a = t.getNorthWest()
						, t = t.getSouthEast()
						, i = this.getSize().subtract(i)
						, t = P(this.project(t, n), this.project(a, n)).getSize()
						, a = Yi.any3d ? this.options.zoomSnap : 1
						, r = i.x / t.x
						, i = i.y / t.y
						, t = e ? Math.max(r, i) : Math.min(r, i)
						, n = this.getScaleZoom(t, n);
					return a && (n = Math.round(n / (a / 100)) * (a / 100),
					n = e ? Math.ceil(n / a) * a : Math.floor(n / a) * a),
					Math.max(o, Math.min(s, n))
			},
			getSize: function() {
					return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0,this._container.clientHeight || 0),
					this._sizeChanged = !1),
					this._size.clone()
			},
			getPixelBounds: function(t, e) {
					return t = this._getTopLeftPoint(t, e),
					new b(t,t.add(this.getSize()))
			},
			getPixelOrigin: function() {
					return this._checkIfLoaded(),
					this._pixelOrigin
			},
			getPixelWorldBounds: function(t) {
					return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
			},
			getPane: function(t) {
					return "string" == typeof t ? this._panes[t] : t
			},
			getPanes: function() {
					return this._panes
			},
			getContainer: function() {
					return this._container
			},
			getZoomScale: function(t, e) {
					var i = this.options.crs;
					return e = void 0 === e ? this._zoom : e,
					i.scale(t) / i.scale(e)
			},
			getScaleZoom: function(t, e) {
					var i = this.options.crs
						, t = (e = void 0 === e ? this._zoom : e,
					i.zoom(t * i.scale(e)));
					return isNaN(t) ? 1 / 0 : t
			},
			project: function(t, e) {
					return e = void 0 === e ? this._zoom : e,
					this.options.crs.latLngToPoint(z(t), e)
			},
			unproject: function(t, e) {
					return e = void 0 === e ? this._zoom : e,
					this.options.crs.pointToLatLng(w(t), e)
			},
			layerPointToLatLng: function(t) {
					return t = w(t).add(this.getPixelOrigin()),
					this.unproject(t)
			},
			latLngToLayerPoint: function(t) {
					return this.project(z(t))._round()._subtract(this.getPixelOrigin())
			},
			wrapLatLng: function(t) {
					return this.options.crs.wrapLatLng(z(t))
			},
			wrapLatLngBounds: function(t) {
					return this.options.crs.wrapLatLngBounds(M(t))
			},
			distance: function(t, e) {
					return this.options.crs.distance(z(t), z(e))
			},
			containerPointToLayerPoint: function(t) {
					return w(t).subtract(this._getMapPanePos())
			},
			layerPointToContainerPoint: function(t) {
					return w(t).add(this._getMapPanePos())
			},
			containerPointToLatLng: function(t) {
					return t = this.containerPointToLayerPoint(w(t)),
					this.layerPointToLatLng(t)
			},
			latLngToContainerPoint: function(t) {
					return this.layerPointToContainerPoint(this.latLngToLayerPoint(z(t)))
			},
			mouseEventToContainerPoint: function(t) {
					return xe(t, this._container)
			},
			mouseEventToLayerPoint: function(t) {
					return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
			},
			mouseEventToLatLng: function(t) {
					return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
			},
			_initContainer: function(t) {
					if (t = this._container = j(t),
					!t)
							throw new Error("Map container not found.");
					if (t._leaflet_id)
							throw new Error("Map container is already initialized.");
					le(t, "scroll", this._onScroll, this),
					this._containerId = o(t)
			},
			_initLayout: function() {
					var t = this._container
						, e = (this._fadeAnimated = this.options.fadeAnimation && Yi.any3d,
					K(t, "leaflet-container" + (Yi.touch ? " leaflet-touch" : "") + (Yi.retina ? " leaflet-retina" : "") + (Yi.ielt9 ? " leaflet-oldie" : "") + (Yi.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : "")),
					H(t, "position"));
					"absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"),
					this._initPanes(),
					this._initControlPos && this._initControlPos()
			},
			_initPanes: function() {
					var t = this._panes = {};
					this._paneRenderers = {},
					this._mapPane = this.createPane("mapPane", this._container),
					ee(this._mapPane, new x(0,0)),
					this.createPane("tilePane"),
					this.createPane("overlayPane"),
					this.createPane("shadowPane"),
					this.createPane("markerPane"),
					this.createPane("tooltipPane"),
					this.createPane("popupPane"),
					this.options.markerZoomAnimation || (K(t.markerPane, "leaflet-zoom-hide"),
					K(t.shadowPane, "leaflet-zoom-hide"))
			},
			_resetView: function(t, e, i) {
					ee(this._mapPane, new x(0,0));
					var n = !this._loaded
						, o = (this._loaded = !0,
					e = this._limitZoom(e),
					this.fire("viewprereset"),
					this._zoom !== e);
					this._moveStart(o, i)._move(t, e)._moveEnd(o),
					this.fire("viewreset"),
					n && this.fire("load")
			},
			_moveStart: function(t, e) {
					return t && this.fire("zoomstart"),
					e || this.fire("movestart"),
					this
			},
			_move: function(t, e, i, n) {
					void 0 === e && (e = this._zoom);
					var o = this._zoom !== e;
					return this._zoom = e,
					this._lastCenter = t,
					this._pixelOrigin = this._getNewPixelOrigin(t),
					n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i),
					this.fire("move", i)),
					this
			},
			_moveEnd: function(t) {
					return t && this.fire("zoomend"),
					this.fire("moveend")
			},
			_stop: function() {
					return v(this._flyToFrame),
					this._panAnim && this._panAnim.stop(),
					this
			},
			_rawPanBy: function(t) {
					ee(this._mapPane, this._getMapPanePos().subtract(t))
			},
			_getZoomSpan: function() {
					return this.getMaxZoom() - this.getMinZoom()
			},
			_panInsideMaxBounds: function() {
					this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
			},
			_checkIfLoaded: function() {
					if (!this._loaded)
							throw new Error("Set map center and zoom first.")
			},
			_initEvents: function(t) {
					this._targets = {};
					var e = t ? ue : le;
					e((this._targets[o(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
					this.options.trackResize && e(window, "resize", this._onResize, this),
					Yi.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
			},
			_onResize: function() {
					v(this._resizeRequest),
					this._resizeRequest = g(function() {
							this.invalidateSize({
									debounceMoveend: !0
							})
					}, this)
			},
			_onScroll: function() {
					this._container.scrollTop = 0,
					this._container.scrollLeft = 0
			},
			_onMoveEnd: function() {
					var t = this._getMapPanePos();
					Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
			},
			_findEventTargets: function(t, e) {
					for (var i, n = [], s = "mouseout" === e || "mouseover" === e, a = t.target || t.srcElement, r = !1; a; ) {
							if ((i = this._targets[o(a)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
									r = !0;
									break
							}
							if (i && i.listens(e, !0)) {
									if (s && !be(a, t))
											break;
									if (n.push(i),
									s)
											break
							}
							if (a === this._container)
									break;
							a = a.parentNode
					}
					return n = n.length || r || s || !this.listens(e, !0) ? n : [this]
			},
			_isClickDisabled: function(t) {
					for (; t && t !== this._container; ) {
							if (t._leaflet_disable_click)
									return !0;
							t = t.parentNode
					}
			},
			_handleDOMEvent: function(t) {
					var e, i = t.target || t.srcElement;
					!this._loaded || i._leaflet_disable_events || "click" === t.type && this._isClickDisabled(i) || ("mousedown" === (e = t.type) && se(i),
					this._fireDOMEvent(t, e))
			},
			_mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
			_fireDOMEvent: function(t, i, n) {
					"click" === t.type && ((h = e({}, t)).type = "preclick",
					this._fireDOMEvent(h, h.type, n));
					var o = this._findEventTargets(t, i);
					if (n) {
							for (var s = [], a = 0; a < n.length; a++)
									n[a].listens(i, !0) && s.push(n[a]);
							o = s.concat(o)
					}
					if (o.length) {
							"contextmenu" === i && ge(t);
							var r, h = o[0], l = {
									originalEvent: t
							};
							for ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type && (r = h.getLatLng && (!h._radius || h._radius <= 10),
							l.containerPoint = r ? this.latLngToContainerPoint(h.getLatLng()) : this.mouseEventToContainerPoint(t),
							l.layerPoint = this.containerPointToLayerPoint(l.containerPoint),
							l.latlng = r ? h.getLatLng() : this.layerPointToLatLng(l.layerPoint)),
							a = 0; a < o.length; a++)
									if (o[a].fire(i, l, !0),
									l.originalEvent._stopped || !1 === o[a].options.bubblingMouseEvents && -1 !== p(this._mouseEvents, i))
											return
					}
			},
			_draggableMoved: function(t) {
					return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
			},
			_clearHandlers: function() {
					for (var t = 0, e = this._handlers.length; e > t; t++)
							this._handlers[t].disable()
			},
			whenReady: function(t, e) {
					return this._loaded ? t.call(e || this, {
							target: this
					}) : this.on("load", t, e),
					this
			},
			_getMapPanePos: function() {
					return ie(this._mapPane) || new x(0,0)
			},
			_moved: function() {
					var t = this._getMapPanePos();
					return t && !t.equals([0, 0])
			},
			_getTopLeftPoint: function(t, e) {
					return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
			},
			_getNewPixelOrigin: function(t, e) {
					var i = this.getSize()._divideBy(2);
					return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
			},
			_latLngToNewLayerPoint: function(t, e, i) {
					return i = this._getNewPixelOrigin(i, e),
					this.project(t, e)._subtract(i)
			},
			_latLngBoundsToNewLayerBounds: function(t, e, i) {
					return i = this._getNewPixelOrigin(i, e),
					P([this.project(t.getSouthWest(), e)._subtract(i), this.project(t.getNorthWest(), e)._subtract(i), this.project(t.getSouthEast(), e)._subtract(i), this.project(t.getNorthEast(), e)._subtract(i)])
			},
			_getCenterLayerPoint: function() {
					return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
			},
			_getCenterOffset: function(t) {
					return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
			},
			_limitCenter: function(t, e, i) {
					var n, o;
					return !i || (n = this.project(t, e),
					o = this.getSize().divideBy(2),
					o = new b(n.subtract(o),n.add(o)),
					o = this._getBoundsOffset(o, i, e),
					Math.abs(o.x) <= 1 && Math.abs(o.y) <= 1) ? t : this.unproject(n.add(o), e)
			},
			_limitOffset: function(t, e) {
					var i;
					return e ? (i = new b((i = this.getPixelBounds()).min.add(t),i.max.add(t)),
					t.add(this._getBoundsOffset(i, e))) : t
			},
			_getBoundsOffset: function(t, e, i) {
					return e = P(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
					i = e.min.subtract(t.min),
					e = e.max.subtract(t.max),
					new x(this._rebound(i.x, -e.x),this._rebound(i.y, -e.y))
			},
			_rebound: function(t, e) {
					return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
			},
			_limitZoom: function(t) {
					var e = this.getMinZoom()
						, i = this.getMaxZoom()
						, n = Yi.any3d ? this.options.zoomSnap : 1;
					return n && (t = Math.round(t / n) * n),
					Math.max(e, Math.min(i, t))
			},
			_onPanTransitionStep: function() {
					this.fire("move")
			},
			_onPanTransitionEnd: function() {
					Y(this._mapPane, "leaflet-pan-anim"),
					this.fire("moveend")
			},
			_tryAnimatedPan: function(t, e) {
					return t = this._getCenterOffset(t)._trunc(),
					!(!0 !== (e && e.animate) && !this.getSize().contains(t) || (this.panBy(t, e),
					0))
			},
			_createAnimProxy: function() {
					var t = this._proxy = F("div", "leaflet-proxy leaflet-zoom-animated");
					this._panes.mapPane.appendChild(t),
					this.on("zoomanim", function(t) {
							var e = an
								, i = this._proxy.style[e];
							te(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)),
							i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
					}, this),
					this.on("load moveend", this._animMoveEnd, this),
					this._on("unload", this._destroyAnimProxy, this)
			},
			_destroyAnimProxy: function() {
					W(this._proxy),
					this.off("load moveend", this._animMoveEnd, this),
					delete this._proxy
			},
			_animMoveEnd: function() {
					var t = this.getCenter()
						, e = this.getZoom();
					te(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
			},
			_catchTransitionEnd: function(t) {
					this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
			},
			_nothingToAnimate: function() {
					return !this._container.getElementsByClassName("leaflet-zoom-animated").length
			},
			_tryAnimatedZoom: function(t, e, i) {
					if (!this._animatingZoom) {
							if (i = i || {},
							!this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
									return !1;
							var n = this.getZoomScale(e)
								, n = this._getCenterOffset(t)._divideBy(1 - 1 / n);
							if (!0 !== i.animate && !this.getSize().contains(n))
									return !1;
							g(function() {
									this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0)
							}, this)
					}
					return !0
			},
			_animateZoom: function(t, e, i, o) {
					this._mapPane && (i && (this._animatingZoom = !0,
					this._animateToCenter = t,
					this._animateToZoom = e,
					K(this._mapPane, "leaflet-zoom-anim")),
					this.fire("zoomanim", {
							center: t,
							zoom: e,
							noUpdate: o
					}),
					this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
					this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
					setTimeout(n(this._onZoomTransitionEnd, this), 250))
			},
			_onZoomTransitionEnd: function() {
					this._animatingZoom && (this._mapPane && Y(this._mapPane, "leaflet-zoom-anim"),
					this._animatingZoom = !1,
					this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
					this._tempFireZoomEvent && this.fire("zoom"),
					delete this._tempFireZoomEvent,
					this.fire("move"),
					this._moveEnd(!0))
			}
	}), mn = y.extend({
			options: {
					position: "topright"
			},
			initialize: function(t) {
					c(this, t)
			},
			getPosition: function() {
					return this.options.position
			},
			setPosition: function(t) {
					var e = this._map;
					return e && e.removeControl(this),
					this.options.position = t,
					e && e.addControl(this),
					this
			},
			getContainer: function() {
					return this._container
			},
			addTo: function(t) {
					this.remove(),
					this._map = t;
					var e = this._container = this.onAdd(t)
						, i = this.getPosition()
						, t = t._controlCorners[i];
					return K(e, "leaflet-control"),
					-1 !== i.indexOf("bottom") ? t.insertBefore(e, t.firstChild) : t.appendChild(e),
					this._map.on("unload", this.remove, this),
					this
			},
			remove: function() {
					return this._map && (W(this._container),
					this.onRemove && this.onRemove(this._map),
					this._map.off("unload", this.remove, this),
					this._map = null),
					this
			},
			_refocusOnMap: function(t) {
					this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
			}
	}), fn = (pn.include({
			addControl: function(t) {
					return t.addTo(this),
					this
			},
			removeControl: function(t) {
					return t.remove(),
					this
			},
			_initControlPos: function() {
					function t(t, o) {
							e[t + o] = F("div", i + t + " " + i + o, n)
					}
					var e = this._controlCorners = {}
						, i = "leaflet-"
						, n = this._controlContainer = F("div", i + "control-container", this._container);
					t("top", "left"),
					t("top", "right"),
					t("bottom", "left"),
					t("bottom", "right")
			},
			_clearControlPos: function() {
					for (var t in this._controlCorners)
							W(this._controlCorners[t]);
					W(this._controlContainer),
					delete this._controlCorners,
					delete this._controlContainer
			}
	}),
	mn.extend({
			options: {
					collapsed: !0,
					position: "topright",
					autoZIndex: !0,
					hideSingleBase: !1,
					sortLayers: !1,
					sortFunction: function(t, e, i, n) {
							return n > i ? -1 : i > n ? 1 : 0
					}
			},
			initialize: function(t, e, i) {
					for (var n in c(this, i),
					this._layerControlInputs = [],
					this._layers = [],
					this._lastZIndex = 0,
					this._handlingClick = !1,
					this._preventClick = !1,
					t)
							this._addLayer(t[n], n);
					for (n in e)
							this._addLayer(e[n], n, !0)
			},
			onAdd: function(t) {
					this._initLayout(),
					this._update(),
					(this._map = t).on("zoomend", this._checkDisabledLayers, this);
					for (var e = 0; e < this._layers.length; e++)
							this._layers[e].layer.on("add remove", this._onLayerChange, this);
					return this._container
			},
			addTo: function(t) {
					return mn.prototype.addTo.call(this, t),
					this._expandIfNotCollapsed()
			},
			onRemove: function() {
					this._map.off("zoomend", this._checkDisabledLayers, this);
					for (var t = 0; t < this._layers.length; t++)
							this._layers[t].layer.off("add remove", this._onLayerChange, this)
			},
			addBaseLayer: function(t, e) {
					return this._addLayer(t, e),
					this._map ? this._update() : this
			},
			addOverlay: function(t, e) {
					return this._addLayer(t, e, !0),
					this._map ? this._update() : this
			},
			removeLayer: function(t) {
					return t.off("add remove", this._onLayerChange, this),
					t = this._getLayer(o(t)),
					t && this._layers.splice(this._layers.indexOf(t), 1),
					this._map ? this._update() : this
			},
			expand: function() {
					K(this._container, "leaflet-control-layers-expanded"),
					this._section.style.height = null;
					var t = this._map.getSize().y - (this._container.offsetTop + 50);
					return t < this._section.clientHeight ? (K(this._section, "leaflet-control-layers-scrollbar"),
					this._section.style.height = t + "px") : Y(this._section, "leaflet-control-layers-scrollbar"),
					this._checkDisabledLayers(),
					this
			},
			collapse: function() {
					return Y(this._container, "leaflet-control-layers-expanded"),
					this
			},
			_initLayout: function() {
					var t = "leaflet-control-layers"
						, e = this._container = F("div", t)
						, i = this.options.collapsed
						, n = (e.setAttribute("aria-haspopup", !0),
					fe(e),
					me(e),
					this._section = F("section", t + "-list"))
						, o = (i && (this._map.on("click", this.collapse, this),
					le(e, {
							mouseenter: this._expandSafely,
							mouseleave: this.collapse
					}, this)),
					this._layersLink = F("a", t + "-toggle", e));
					o.href = "#",
					o.title = "Layers",
					o.setAttribute("role", "button"),
					le(o, {
							keydown: function(t) {
									13 === t.keyCode && this._expandSafely()
							},
							click: function(t) {
									ge(t),
									this._expandSafely()
							}
					}, this),
					i || this.expand(),
					this._baseLayersList = F("div", t + "-base", n),
					this._separator = F("div", t + "-separator", n),
					this._overlaysList = F("div", t + "-overlays", n),
					e.appendChild(n)
			},
			_getLayer: function(t) {
					for (var e = 0; e < this._layers.length; e++)
							if (this._layers[e] && o(this._layers[e].layer) === t)
									return this._layers[e]
			},
			_addLayer: function(t, e, i) {
					this._map && t.on("add remove", this._onLayerChange, this),
					this._layers.push({
							layer: t,
							name: e,
							overlay: i
					}),
					this.options.sortLayers && this._layers.sort(n(function(t, e) {
							return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
					}, this)),
					this.options.autoZIndex && t.setZIndex && (this._lastZIndex++,
					t.setZIndex(this._lastZIndex)),
					this._expandIfNotCollapsed()
			},
			_update: function() {
					if (this._container) {
							U(this._baseLayersList),
							U(this._overlaysList),
							this._layerControlInputs = [];
							for (var t, e, i, n = 0, o = 0; o < this._layers.length; o++)
									i = this._layers[o],
									this._addItem(i),
									e = e || i.overlay,
									t = t || !i.overlay,
									n += i.overlay ? 0 : 1;
							this.options.hideSingleBase && (this._baseLayersList.style.display = (t = t && n > 1) ? "" : "none"),
							this._separator.style.display = e && t ? "" : "none"
					}
					return this
			},
			_onLayerChange: function(t) {
					this._handlingClick || this._update();
					var e = this._getLayer(o(t.target))
						, t = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
					t && this._map.fire(t, e)
			},
			_createRadioElement: function(t, e) {
					return t = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
					e = document.createElement("div"),
					e.innerHTML = t,
					e.firstChild
			},
			_addItem: function(t) {
					var e, i = document.createElement("label"), n = this._map.hasLayer(t.layer), n = (t.overlay ? ((e = document.createElement("input")).type = "checkbox",
					e.className = "leaflet-control-layers-selector",
					e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers_" + o(this), n),
					this._layerControlInputs.push(e),
					e.layerId = o(t.layer),
					le(e, "click", this._onInputClick, this),
					document.createElement("span")), s = (n.innerHTML = " " + t.name,
					document.createElement("span"));
					return i.appendChild(s),
					s.appendChild(e),
					s.appendChild(n),
					(t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i),
					this._checkDisabledLayers(),
					i
			},
			_onInputClick: function() {
					if (!this._preventClick) {
							var t, e, i = this._layerControlInputs, n = [], o = [];
							this._handlingClick = !0;
							for (var s = i.length - 1; s >= 0; s--)
									t = i[s],
									e = this._getLayer(t.layerId).layer,
									t.checked ? n.push(e) : t.checked || o.push(e);
							for (s = 0; s < o.length; s++)
									this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
							for (s = 0; s < n.length; s++)
									this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
							this._handlingClick = !1,
							this._refocusOnMap()
					}
			},
			_checkDisabledLayers: function() {
					for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
							t = i[o],
							e = this._getLayer(t.layerId).layer,
							t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
			},
			_expandIfNotCollapsed: function() {
					return this._map && !this.options.collapsed && this.expand(),
					this
			},
			_expandSafely: function() {
					var t = this._section
						, e = (this._preventClick = !0,
					le(t, "click", ge),
					this.expand(),
					this);
					setTimeout(function() {
							ue(t, "click", ge),
							e._preventClick = !1
					})
			}
	})), gn = mn.extend({
			options: {
					position: "topleft",
					zoomInText: '<span aria-hidden="true">+</span>',
					zoomInTitle: "Zoom in",
					zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
					zoomOutTitle: "Zoom out"
			},
			onAdd: function(t) {
					var e = "leaflet-control-zoom"
						, i = F("div", e + " leaflet-bar")
						, n = this.options;
					return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn),
					this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut),
					this._updateDisabled(),
					t.on("zoomend zoomlevelschange", this._updateDisabled, this),
					i
			},
			onRemove: function(t) {
					t.off("zoomend zoomlevelschange", this._updateDisabled, this)
			},
			disable: function() {
					return this._disabled = !0,
					this._updateDisabled(),
					this
			},
			enable: function() {
					return this._disabled = !1,
					this._updateDisabled(),
					this
			},
			_zoomIn: function(t) {
					!this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_zoomOut: function(t) {
					!this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
			},
			_createButton: function(t, e, i, n, o) {
					return i = F("a", i, n),
					i.innerHTML = t,
					i.href = "#",
					i.title = e,
					i.setAttribute("role", "button"),
					i.setAttribute("aria-label", e),
					fe(i),
					le(i, "click", ve),
					le(i, "click", o, this),
					le(i, "click", this._refocusOnMap, this),
					i
			},
			_updateDisabled: function() {
					var t = this._map
						, e = "leaflet-disabled";
					Y(this._zoomInButton, e),
					Y(this._zoomOutButton, e),
					this._zoomInButton.setAttribute("aria-disabled", "false"),
					this._zoomOutButton.setAttribute("aria-disabled", "false"),
					!this._disabled && t._zoom !== t.getMinZoom() || (K(this._zoomOutButton, e),
					this._zoomOutButton.setAttribute("aria-disabled", "true")),
					!this._disabled && t._zoom !== t.getMaxZoom() || (K(this._zoomInButton, e),
					this._zoomInButton.setAttribute("aria-disabled", "true"))
			}
	}), vn = (pn.mergeOptions({
			zoomControl: !0
	}),
	pn.addInitHook(function() {
			this.options.zoomControl && (this.zoomControl = new gn,
			this.addControl(this.zoomControl))
	}),
	mn.extend({
			options: {
					position: "bottomleft",
					maxWidth: 100,
					metric: !0,
					imperial: !0
			},
			onAdd: function(t) {
					var e = "leaflet-control-scale"
						, i = F("div", e)
						, n = this.options;
					return this._addScales(n, e + "-line", i),
					t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
					t.whenReady(this._update, this),
					i
			},
			onRemove: function(t) {
					t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
			},
			_addScales: function(t, e, i) {
					t.metric && (this._mScale = F("div", e, i)),
					t.imperial && (this._iScale = F("div", e, i))
			},
			_update: function() {
					var t = this._map
						, e = t.getSize().y / 2
						, t = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
					this._updateScales(t)
			},
			_updateScales: function(t) {
					this.options.metric && t && this._updateMetric(t),
					this.options.imperial && t && this._updateImperial(t)
			},
			_updateMetric: function(t) {
					var e = this._getRoundNum(t);
					this._updateScale(this._mScale, 1e3 > e ? e + " m" : e / 1e3 + " km", e / t)
			},
			_updateImperial: function(t) {
					var e, i, t = 3.2808399 * t;
					t > 5280 ? (i = this._getRoundNum(e = t / 5280),
					this._updateScale(this._iScale, i + " mi", i / e)) : (i = this._getRoundNum(t),
					this._updateScale(this._iScale, i + " ft", i / t))
			},
			_updateScale: function(t, e, i) {
					t.style.width = Math.round(this.options.maxWidth * i) + "px",
					t.innerHTML = e
			},
			_getRoundNum: function(t) {
					var e = Math.pow(10, (Math.floor(t) + "").length - 1)
						, t = t / e;
					return e * (t = t >= 10 ? 10 : t >= 5 ? 5 : t >= 3 ? 3 : t >= 2 ? 2 : 1)
			}
	})), yn = mn.extend({
			options: {
					position: "bottomright",
					prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Yi.inlineSvg ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> ' : "") + "Leaflet</a>"
			},
			initialize: function(t) {
					c(this, t),
					this._attributions = {}
			},
			onAdd: function(t) {
					for (var e in (t.attributionControl = this)._container = F("div", "leaflet-control-attribution"),
					fe(this._container),
					t._layers)
							t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
					return this._update(),
					t.on("layeradd", this._addAttribution, this),
					this._container
			},
			onRemove: function(t) {
					t.off("layeradd", this._addAttribution, this)
			},
			_addAttribution: function(t) {
					t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()),
					t.layer.once("remove", function() {
							this.removeAttribution(t.layer.getAttribution())
					}, this))
			},
			setPrefix: function(t) {
					return this.options.prefix = t,
					this._update(),
					this
			},
			addAttribution: function(t) {
					return t && (this._attributions[t] || (this._attributions[t] = 0),
					this._attributions[t]++,
					this._update()),
					this
			},
			removeAttribution: function(t) {
					return t && this._attributions[t] && (this._attributions[t]--,
					this._update()),
					this
			},
			_update: function() {
					if (this._map) {
							var t, e = [];
							for (t in this._attributions)
									this._attributions[t] && e.push(t);
							var i = [];
							this.options.prefix && i.push(this.options.prefix),
							e.length && i.push(e.join(", ")),
							this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ')
					}
			}
	}), xi = (pn.mergeOptions({
			attributionControl: !0
	}),
	pn.addInitHook(function() {
			this.options.attributionControl && (new yn).addTo(this)
	}),
	mn.Layers = fn,
	mn.Zoom = gn,
	mn.Scale = vn,
	mn.Attribution = yn,
	Le.layers = function(t, e, i) {
			return new fn(t,e,i)
	}
	,
	Le.zoom = function(t) {
			return new gn(t)
	}
	,
	Le.scale = function(t) {
			return new vn(t)
	}
	,
	Le.attribution = function(t) {
			return new yn(t)
	}
	,
	y.extend({
			initialize: function(t) {
					this._map = t
			},
			enable: function() {
					return this._enabled || (this._enabled = !0,
					this.addHooks()),
					this
			},
			disable: function() {
					return this._enabled && (this._enabled = !1,
					this.removeHooks()),
					this
			},
			enabled: function() {
					return !!this._enabled
			}
	})), wi = (xi.addTo = function(t, e) {
			return t.addHandler(e, this),
			this
	}
	,
	{
			Events: ni
	}), xn = Yi.touch ? "touchstart mousedown" : "mousedown", wn = oi.extend({
			options: {
					clickTolerance: 3
			},
			initialize: function(t, e, i, n) {
					c(this, n),
					this._element = t,
					this._dragStartTarget = e || t,
					this._preventOutline = i
			},
			enable: function() {
					this._enabled || (le(this._dragStartTarget, xn, this._onDown, this),
					this._enabled = !0)
			},
			disable: function() {
					this._enabled && (wn._dragging === this && this.finishDrag(!0),
					ue(this._dragStartTarget, xn, this._onDown, this),
					this._enabled = !1,
					this._moved = !1)
			},
			_onDown: function(t) {
					var e, i;
					this._enabled && (this._moved = !1,
					q(this._element, "leaflet-zoom-anim") || (t.touches && 1 !== t.touches.length ? wn._dragging === this && this.finishDrag() : wn._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((wn._dragging = this)._preventOutline && se(this._element),
					ne(),
					ci(),
					this._moving || (this.fire("down"),
					i = t.touches ? t.touches[0] : t,
					e = re(this._element),
					this._startPoint = new x(i.clientX,i.clientY),
					this._startPos = ie(this._element),
					this._parentScale = he(e),
					i = "mousedown" === t.type,
					le(document, i ? "mousemove" : "touchmove", this._onMove, this),
					le(document, i ? "mouseup" : "touchend touchcancel", this._onUp, this)))))
			},
			_onMove: function(t) {
					var e;
					this._enabled && (t.touches && 1 < t.touches.length ? this._moved = !0 : !(e = new x((e = t.touches && 1 === t.touches.length ? t.touches[0] : t).clientX,e.clientY)._subtract(this._startPoint)).x && !e.y || Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x,
					e.y /= this._parentScale.y,
					ge(t),
					this._moved || (this.fire("dragstart"),
					this._moved = !0,
					K(document.body, "leaflet-dragging"),
					this._lastTarget = t.target || t.srcElement,
					window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
					K(this._lastTarget, "leaflet-drag-target")),
					this._newPos = this._startPos.add(e),
					this._moving = !0,
					this._lastEvent = t,
					this._updatePosition()))
			},
			_updatePosition: function() {
					var t = {
							originalEvent: this._lastEvent
					};
					this.fire("predrag", t),
					ee(this._element, this._newPos),
					this.fire("drag", t)
			},
			_onUp: function() {
					this._enabled && this.finishDrag()
			},
			finishDrag: function(t) {
					Y(document.body, "leaflet-dragging"),
					this._lastTarget && (Y(this._lastTarget, "leaflet-drag-target"),
					this._lastTarget = null),
					ue(document, "mousemove touchmove", this._onMove, this),
					ue(document, "mouseup touchend touchcancel", this._onUp, this),
					oe(),
					di();
					var e = this._moved && this._moving;
					this._moving = !1,
					wn._dragging = !1,
					e && this.fire("dragend", {
							noInertia: t,
							distance: this._newPos.distanceTo(this._startPos)
					})
			}
	}), bi = {
			__proto__: null,
			clipPolygon: Pe,
			polygonCenter: Te,
			centroid: Me
	}, Li = {
			__proto__: null,
			simplify: Ce,
			pointToSegmentDistance: ze,
			closestPointOnSegment: function(t, e, i) {
					return Ze(t, e, i)
			},
			clipSegment: ke,
			_getEdgeIntersection: Ee,
			_getBitCode: Se,
			_sqClosestPointOnSegment: Ze,
			isFlat: Oe,
			_flat: Ae,
			polylineCenter: Ie
	}, Pi = {
			project: function(t) {
					return new x(t.lng,t.lat)
			},
			unproject: function(t) {
					return new C(t.y,t.x)
			},
			bounds: new b([-180, -90],[180, 90])
	}, Ti = {
			R: 6378137,
			R_MINOR: 6356752.314245179,
			bounds: new b([-20037508.34279, -15496570.73972],[20037508.34279, 18764656.23138]),
			project: function(t) {
					var e = Math.PI / 180
						, i = this.R
						, n = t.lat * e
						, o = this.R_MINOR / i
						, o = Math.sqrt(1 - o * o)
						, s = o * Math.sin(n)
						, s = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - s) / (1 + s), o / 2)
						, n = -i * Math.log(Math.max(s, 1e-10));
					return new x(t.lng * e * i,n)
			},
			unproject: function(t) {
					for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; 15 > h && 1e-7 < Math.abs(l); h++)
							e = s * Math.sin(r),
							e = Math.pow((1 - e) / (1 + e), s / 2),
							r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r;
					return new C(r * i,t.x * i / n)
			}
	}, Mi = {
			__proto__: null,
			LonLat: Pi,
			Mercator: Ti,
			SphericalMercator: hi
	}, zi = e({}, ri, {
			code: "EPSG:3395",
			projection: Ti,
			transformation: E(Ci = .5 / (Math.PI * Ti.R), .5, -Ci, .5)
	}), bn = e({}, ri, {
			code: "EPSG:4326",
			projection: Pi,
			transformation: E(1 / 180, 1, -1 / 180, .5)
	}), ki = e({}, ai, {
			projection: Pi,
			transformation: E(1, 0, -1, 0),
			scale: function(t) {
					return Math.pow(2, t)
			},
			zoom: function(t) {
					return Math.log(t) / Math.LN2
			},
			distance: function(t, e) {
					var i = e.lng - t.lng
						, e = e.lat - t.lat;
					return Math.sqrt(i * i + e * e)
			},
			infinite: !0
	}), Ei = (ai.Earth = ri,
	ai.EPSG3395 = zi,
	ai.EPSG3857 = mi,
	ai.EPSG900913 = fi,
	ai.EPSG4326 = bn,
	ai.Simple = ki,
	oi.extend({
			options: {
					pane: "overlayPane",
					attribution: null,
					bubblingMouseEvents: !0
			},
			addTo: function(t) {
					return t.addLayer(this),
					this
			},
			remove: function() {
					return this.removeFrom(this._map || this._mapToAdd)
			},
			removeFrom: function(t) {
					return t && t.removeLayer(this),
					this
			},
			getPane: function(t) {
					return this._map.getPane(t ? this.options[t] || t : this.options.pane)
			},
			addInteractiveTarget: function(t) {
					return this._map._targets[o(t)] = this
			},
			removeInteractiveTarget: function(t) {
					return delete this._map._targets[o(t)],
					this
			},
			getAttribution: function() {
					return this.options.attribution
			},
			_layerAdd: function(t) {
					var e, i = t.target;
					i.hasLayer(this) && (this._map = i,
					this._zoomAnimated = i._zoomAnimated,
					this.getEvents && (e = this.getEvents(),
					i.on(e, this),
					this.once("remove", function() {
							i.off(e, this)
					}, this)),
					this.onAdd(i),
					this.fire("add"),
					i.fire("layeradd", {
							layer: this
					}))
			}
	})), Ln = (pn.include({
			addLayer: function(t) {
					var e;
					if (t._layerAdd)
							return e = o(t),
							this._layers[e] || ((this._layers[e] = t)._mapToAdd = this,
							t.beforeAdd && t.beforeAdd(this),
							this.whenReady(t._layerAdd, t)),
							this;
					throw new Error("The provided object is not a Layer.")
			},
			removeLayer: function(t) {
					var e = o(t);
					return this._layers[e] && (this._loaded && t.onRemove(this),
					delete this._layers[e],
					this._loaded && (this.fire("layerremove", {
							layer: t
					}),
					t.fire("remove")),
					t._map = t._mapToAdd = null),
					this
			},
			hasLayer: function(t) {
					return o(t)in this._layers
			},
			eachLayer: function(t, e) {
					for (var i in this._layers)
							t.call(e, this._layers[i]);
					return this
			},
			_addLayers: function(t) {
					for (var e = 0, i = (t = t ? Je(t) ? t : [t] : []).length; i > e; e++)
							this.addLayer(t[e])
			},
			_addZoomLimit: function(t) {
					isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[o(t)] = t,
					this._updateZoomLevels())
			},
			_removeZoomLimit: function(t) {
					t = o(t),
					this._zoomBoundLayers[t] && (delete this._zoomBoundLayers[t],
					this._updateZoomLevels())
			},
			_updateZoomLevels: function() {
					var t, e = 1 / 0, i = -1 / 0, n = this._getZoomSpan();
					for (t in this._zoomBoundLayers)
							var o = this._zoomBoundLayers[t].options
								, e = void 0 === o.minZoom ? e : Math.min(e, o.minZoom)
								, i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
					this._layersMaxZoom = i === -1 / 0 ? void 0 : i,
					this._layersMinZoom = e === 1 / 0 ? void 0 : e,
					n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
					void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
					void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
			}
	}),
	Ei.extend({
			initialize: function(t, e) {
					var i, n;
					if (c(this, e),
					this._layers = {},
					t)
							for (i = 0,
							n = t.length; n > i; i++)
									this.addLayer(t[i])
			},
			addLayer: function(t) {
					var e = this.getLayerId(t);
					return this._layers[e] = t,
					this._map && this._map.addLayer(t),
					this
			},
			removeLayer: function(t) {
					return t = t in this._layers ? t : this.getLayerId(t),
					this._map && this._layers[t] && this._map.removeLayer(this._layers[t]),
					delete this._layers[t],
					this
			},
			hasLayer: function(t) {
					return ("number" == typeof t ? t : this.getLayerId(t))in this._layers
			},
			clearLayers: function() {
					return this.eachLayer(this.removeLayer, this)
			},
			invoke: function(t) {
					var e, i, n = Array.prototype.slice.call(arguments, 1);
					for (e in this._layers)
							(i = this._layers[e])[t] && i[t].apply(i, n);
					return this
			},
			onAdd: function(t) {
					this.eachLayer(t.addLayer, t)
			},
			onRemove: function(t) {
					this.eachLayer(t.removeLayer, t)
			},
			eachLayer: function(t, e) {
					for (var i in this._layers)
							t.call(e, this._layers[i]);
					return this
			},
			getLayer: function(t) {
					return this._layers[t]
			},
			getLayers: function() {
					var t = [];
					return this.eachLayer(t.push, t),
					t
			},
			setZIndex: function(t) {
					return this.invoke("setZIndex", t)
			},
			getLayerId: o
	})), Pn = Ln.extend({
			addLayer: function(t) {
					return this.hasLayer(t) ? this : (t.addEventParent(this),
					Ln.prototype.addLayer.call(this, t),
					this.fire("layeradd", {
							layer: t
					}))
			},
			removeLayer: function(t) {
					return this.hasLayer(t) ? ((t = t in this._layers ? this._layers[t] : t).removeEventParent(this),
					Ln.prototype.removeLayer.call(this, t),
					this.fire("layerremove", {
							layer: t
					})) : this
			},
			setStyle: function(t) {
					return this.invoke("setStyle", t)
			},
			bringToFront: function() {
					return this.invoke("bringToFront")
			},
			bringToBack: function() {
					return this.invoke("bringToBack")
			},
			getBounds: function() {
					var t, e = new T;
					for (t in this._layers) {
							var i = this._layers[t];
							e.extend(i.getBounds ? i.getBounds() : i.getLatLng())
					}
					return e
			}
	}), Tn = y.extend({
			options: {
					popupAnchor: [0, 0],
					tooltipAnchor: [0, 0],
					crossOrigin: !1
			},
			initialize: function(t) {
					c(this, t)
			},
			createIcon: function(t) {
					return this._createIcon("icon", t)
			},
			createShadow: function(t) {
					return this._createIcon("shadow", t)
			},
			_createIcon: function(t, e) {
					var i = this._getIconUrl(t);
					if (i)
							return i = this._createImg(i, e && "IMG" === e.tagName ? e : null),
							this._setIconStyles(i, t),
							!this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
							i;
					if ("icon" === t)
							throw new Error("iconUrl not set in Icon options (see the docs).");
					return null
			},
			_setIconStyles: function(t, e) {
					var i = this.options
						, n = i[e + "Size"]
						, n = w(n = "number" == typeof n ? [n, n] : n)
						, o = w("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
					t.className = "leaflet-marker-" + e + " " + (i.className || ""),
					o && (t.style.marginLeft = -o.x + "px",
					t.style.marginTop = -o.y + "px"),
					n && (t.style.width = n.x + "px",
					t.style.height = n.y + "px")
			},
			_createImg: function(t, e) {
					return (e = e || document.createElement("img")).src = t,
					e
			},
			_getIconUrl: function(t) {
					return Yi.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
			}
	}), Mn = Tn.extend({
			options: {
					iconUrl: "marker-icon.png",
					iconRetinaUrl: "marker-icon-2x.png",
					shadowUrl: "marker-shadow.png",
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					tooltipAnchor: [16, -28],
					shadowSize: [41, 41]
			},
			_getIconUrl: function(t) {
					return "string" != typeof Mn.imagePath && (Mn.imagePath = this._detectIconPath()),
					(this.options.imagePath || Mn.imagePath) + Tn.prototype._getIconUrl.call(this, t)
			},
			_stripUrl: function(t) {
					function e(t, e, i) {
							return (e = e.exec(t)) && e[i]
					}
					return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1)
			},
			_detectIconPath: function() {
					var t = F("div", "leaflet-default-icon-path", document.body)
						, e = H(t, "background-image") || H(t, "backgroundImage");
					return document.body.removeChild(t),
					(e = this._stripUrl(e)) ? e : (t = document.querySelector('link[href$="leaflet.css"]')) ? t.href.substring(0, t.href.length - "leaflet.css".length - 1) : ""
			}
	}), Cn = xi.extend({
			initialize: function(t) {
					this._marker = t
			},
			addHooks: function() {
					var t = this._marker._icon;
					this._draggable || (this._draggable = new wn(t,t,!0)),
					this._draggable.on({
							dragstart: this._onDragStart,
							predrag: this._onPreDrag,
							drag: this._onDrag,
							dragend: this._onDragEnd
					}, this).enable(),
					K(t, "leaflet-marker-draggable")
			},
			removeHooks: function() {
					this._draggable.off({
							dragstart: this._onDragStart,
							predrag: this._onPreDrag,
							drag: this._onDrag,
							dragend: this._onDragEnd
					}, this).disable(),
					this._marker._icon && Y(this._marker._icon, "leaflet-marker-draggable")
			},
			moved: function() {
					return this._draggable && this._draggable._moved
			},
			_adjustPan: function(t) {
					var e = this._marker
						, i = e._map
						, n = this._marker.options.autoPanSpeed
						, o = this._marker.options.autoPanPadding
						, s = ie(e._icon)
						, a = i.getPixelBounds()
						, r = i.getPixelOrigin()
						, r = P(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
					r.contains(s) || (o = w((Math.max(r.max.x, s.x) - r.max.x) / (a.max.x - r.max.x) - (Math.min(r.min.x, s.x) - r.min.x) / (a.min.x - r.min.x), (Math.max(r.max.y, s.y) - r.max.y) / (a.max.y - r.max.y) - (Math.min(r.min.y, s.y) - r.min.y) / (a.min.y - r.min.y)).multiplyBy(n),
					i.panBy(o, {
							animate: !1
					}),
					this._draggable._newPos._add(o),
					this._draggable._startPos._add(o),
					ee(e._icon, this._draggable._newPos),
					this._onDrag(t),
					this._panRequest = g(this._adjustPan.bind(this, t)))
			},
			_onDragStart: function() {
					this._oldLatLng = this._marker.getLatLng(),
					this._marker.closePopup && this._marker.closePopup(),
					this._marker.fire("movestart").fire("dragstart")
			},
			_onPreDrag: function(t) {
					this._marker.options.autoPan && (v(this._panRequest),
					this._panRequest = g(this._adjustPan.bind(this, t)))
			},
			_onDrag: function(t) {
					var e = this._marker
						, i = e._shadow
						, n = ie(e._icon)
						, o = e._map.layerPointToLatLng(n);
					i && ee(i, n),
					e._latlng = o,
					t.latlng = o,
					t.oldLatLng = this._oldLatLng,
					e.fire("move", t).fire("drag", t)
			},
			_onDragEnd: function(t) {
					v(this._panRequest),
					delete this._oldLatLng,
					this._marker.fire("moveend").fire("dragend", t)
			}
	}), zn = Ei.extend({
			options: {
					icon: new Mn,
					interactive: !0,
					keyboard: !0,
					title: "",
					alt: "Marker",
					zIndexOffset: 0,
					opacity: 1,
					riseOnHover: !1,
					riseOffset: 250,
					pane: "markerPane",
					shadowPane: "shadowPane",
					bubblingMouseEvents: !1,
					autoPanOnFocus: !0,
					draggable: !1,
					autoPan: !1,
					autoPanPadding: [50, 50],
					autoPanSpeed: 10
			},
			initialize: function(t, e) {
					c(this, e),
					this._latlng = z(t)
			},
			onAdd: function(t) {
					this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation,
					this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
					this._initIcon(),
					this.update()
			},
			onRemove: function(t) {
					this.dragging && this.dragging.enabled() && (this.options.draggable = !0,
					this.dragging.removeHooks()),
					delete this.dragging,
					this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
					this._removeIcon(),
					this._removeShadow()
			},
			getEvents: function() {
					return {
							zoom: this.update,
							viewreset: this.update
					}
			},
			getLatLng: function() {
					return this._latlng
			},
			setLatLng: function(t) {
					var e = this._latlng;
					return this._latlng = z(t),
					this.update(),
					this.fire("move", {
							oldLatLng: e,
							latlng: this._latlng
					})
			},
			setZIndexOffset: function(t) {
					return this.options.zIndexOffset = t,
					this.update()
			},
			getIcon: function() {
					return this.options.icon
			},
			setIcon: function(t) {
					return this.options.icon = t,
					this._map && (this._initIcon(),
					this.update()),
					this._popup && this.bindPopup(this._popup, this._popup.options),
					this
			},
			getElement: function() {
					return this._icon
			},
			update: function() {
					var t;
					return this._icon && this._map && (t = this._map.latLngToLayerPoint(this._latlng).round(),
					this._setPos(t)),
					this
			},
			_initIcon: function() {
					var t = this.options
						, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide")
						, i = t.icon.createIcon(this._icon)
						, n = !1
						, i = (i !== this._icon && (this._icon && this._removeIcon(),
					n = !0,
					t.title && (i.title = t.title),
					"IMG" === i.tagName && (i.alt = t.alt || "")),
					K(i, e),
					t.keyboard && (i.tabIndex = "0",
					i.setAttribute("role", "button")),
					this._icon = i,
					t.riseOnHover && this.on({
							mouseover: this._bringToFront,
							mouseout: this._resetZIndex
					}),
					this.options.autoPanOnFocus && le(i, "focus", this._panOnFocus, this),
					t.icon.createShadow(this._shadow))
						, o = !1;
					i !== this._shadow && (this._removeShadow(),
					o = !0),
					i && (K(i, e),
					i.alt = ""),
					this._shadow = i,
					t.opacity < 1 && this._updateOpacity(),
					n && this.getPane().appendChild(this._icon),
					this._initInteraction(),
					i && o && this.getPane(t.shadowPane).appendChild(this._shadow)
			},
			_removeIcon: function() {
					this.options.riseOnHover && this.off({
							mouseover: this._bringToFront,
							mouseout: this._resetZIndex
					}),
					this.options.autoPanOnFocus && ue(this._icon, "focus", this._panOnFocus, this),
					W(this._icon),
					this.removeInteractiveTarget(this._icon),
					this._icon = null
			},
			_removeShadow: function() {
					this._shadow && W(this._shadow),
					this._shadow = null
			},
			_setPos: function(t) {
					this._icon && ee(this._icon, t),
					this._shadow && ee(this._shadow, t),
					this._zIndex = t.y + this.options.zIndexOffset,
					this._resetZIndex()
			},
			_updateZIndex: function(t) {
					this._icon && (this._icon.style.zIndex = this._zIndex + t)
			},
			_animateZoom: function(t) {
					t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round(),
					this._setPos(t)
			},
			_initInteraction: function() {
					var t;
					this.options.interactive && (K(this._icon, "leaflet-interactive"),
					this.addInteractiveTarget(this._icon),
					Cn && (t = this.options.draggable,
					this.dragging && (t = this.dragging.enabled(),
					this.dragging.disable()),
					this.dragging = new Cn(this),
					t && this.dragging.enable()))
			},
			setOpacity: function(t) {
					return this.options.opacity = t,
					this._map && this._updateOpacity(),
					this
			},
			_updateOpacity: function() {
					var t = this.options.opacity;
					this._icon && $(this._icon, t),
					this._shadow && $(this._shadow, t)
			},
			_bringToFront: function() {
					this._updateZIndex(this.options.riseOffset)
			},
			_resetZIndex: function() {
					this._updateZIndex(0)
			},
			_panOnFocus: function() {
					var t, e, i = this._map;
					i && (t = (e = this.options.icon.options).iconSize ? w(e.iconSize) : w(0, 0),
					e = e.iconAnchor ? w(e.iconAnchor) : w(0, 0),
					i.panInside(this._latlng, {
							paddingTopLeft: e,
							paddingBottomRight: t.subtract(e)
					}))
			},
			_getPopupAnchor: function() {
					return this.options.icon.options.popupAnchor
			},
			_getTooltipAnchor: function() {
					return this.options.icon.options.tooltipAnchor
			}
	}), kn = Ei.extend({
			options: {
					stroke: !0,
					color: "#3388ff",
					weight: 3,
					opacity: 1,
					lineCap: "round",
					lineJoin: "round",
					dashArray: null,
					dashOffset: null,
					fill: !1,
					fillColor: null,
					fillOpacity: .2,
					fillRule: "evenodd",
					interactive: !0,
					bubblingMouseEvents: !0
			},
			beforeAdd: function(t) {
					this._renderer = t.getRenderer(this)
			},
			onAdd: function() {
					this._renderer._initPath(this),
					this._reset(),
					this._renderer._addPath(this)
			},
			onRemove: function() {
					this._renderer._removePath(this)
			},
			redraw: function() {
					return this._map && this._renderer._updatePath(this),
					this
			},
			setStyle: function(t) {
					return c(this, t),
					this._renderer && (this._renderer._updateStyle(this),
					this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()),
					this
			},
			bringToFront: function() {
					return this._renderer && this._renderer._bringToFront(this),
					this
			},
			bringToBack: function() {
					return this._renderer && this._renderer._bringToBack(this),
					this
			},
			getElement: function() {
					return this._path
			},
			_reset: function() {
					this._project(),
					this._update()
			},
			_clickTolerance: function() {
					return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0)
			}
	}), En = kn.extend({
			options: {
					fill: !0,
					radius: 10
			},
			initialize: function(t, e) {
					c(this, e),
					this._latlng = z(t),
					this._radius = this.options.radius
			},
			setLatLng: function(t) {
					var e = this._latlng;
					return this._latlng = z(t),
					this.redraw(),
					this.fire("move", {
							oldLatLng: e,
							latlng: this._latlng
					})
			},
			getLatLng: function() {
					return this._latlng
			},
			setRadius: function(t) {
					return this.options.radius = this._radius = t,
					this.redraw()
			},
			getRadius: function() {
					return this._radius
			},
			setStyle: function(t) {
					var e = t && t.radius || this._radius;
					return kn.prototype.setStyle.call(this, t),
					this.setRadius(e),
					this
			},
			_project: function() {
					this._point = this._map.latLngToLayerPoint(this._latlng),
					this._updateBounds()
			},
			_updateBounds: function() {
					var t = this._radius
						, e = this._radiusY || t
						, i = this._clickTolerance()
						, t = [t + i, e + i];
					this._pxBounds = new b(this._point.subtract(t),this._point.add(t))
			},
			_update: function() {
					this._map && this._updatePath()
			},
			_updatePath: function() {
					this._renderer._updateCircle(this)
			},
			_empty: function() {
					return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
			},
			_containsPoint: function(t) {
					return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
			}
	}), Sn = En.extend({
			initialize: function(t, i, n) {
					if (c(this, i = "number" == typeof i ? e({}, n, {
							radius: i
					}) : i),
					this._latlng = z(t),
					isNaN(this.options.radius))
							throw new Error("Circle radius cannot be NaN");
					this._mRadius = this.options.radius
			},
			setRadius: function(t) {
					return this._mRadius = t,
					this.redraw()
			},
			getRadius: function() {
					return this._mRadius
			},
			getBounds: function() {
					var t = [this._radius, this._radiusY || this._radius];
					return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))
			},
			setStyle: kn.prototype.setStyle,
			_project: function() {
					var t, e, i, n, o, s = this._latlng.lng, a = this._latlng.lat, r = this._map, h = r.options.crs;
					h.distance === ri.distance ? (n = Math.PI / 180,
					o = this._mRadius / ri.R / n,
					t = r.project([a + o, s]),
					e = r.project([a - o, s]),
					e = t.add(e).divideBy(2),
					i = r.unproject(e).lat,
					n = Math.acos((Math.cos(o * n) - Math.sin(a * n) * Math.sin(i * n)) / (Math.cos(a * n) * Math.cos(i * n))) / n,
					!isNaN(n) && 0 !== n || (n = o / Math.cos(Math.PI / 180 * a)),
					this._point = e.subtract(r.getPixelOrigin()),
					this._radius = isNaN(n) ? 0 : e.x - r.project([i, s - n]).x,
					this._radiusY = e.y - t.y) : (o = h.unproject(h.project(this._latlng).subtract([this._mRadius, 0])),
					this._point = r.latLngToLayerPoint(this._latlng),
					this._radius = this._point.x - r.latLngToLayerPoint(o).x),
					this._updateBounds()
			}
	}), Zn = kn.extend({
			options: {
					smoothFactor: 1,
					noClip: !1
			},
			initialize: function(t, e) {
					c(this, e),
					this._setLatLngs(t)
			},
			getLatLngs: function() {
					return this._latlngs
			},
			setLatLngs: function(t) {
					return this._setLatLngs(t),
					this.redraw()
			},
			isEmpty: function() {
					return !this._latlngs.length
			},
			closestLayerPoint: function(t) {
					for (var e = 1 / 0, i = null, n = Ze, o = 0, s = this._parts.length; s > o; o++)
							for (var a = this._parts[o], r = 1, h = a.length; h > r; r++) {
									var l, u, c = n(t, l = a[r - 1], u = a[r], !0);
									e > c && (e = c,
									i = n(t, l, u))
							}
					return i && (i.distance = Math.sqrt(e)),
					i
			},
			getCenter: function() {
					if (this._map)
							return Ie(this._defaultShape(), this._map.options.crs);
					throw new Error("Must add layer to map before using getCenter()")
			},
			getBounds: function() {
					return this._bounds
			},
			addLatLng: function(t, e) {
					return e = e || this._defaultShape(),
					t = z(t),
					e.push(t),
					this._bounds.extend(t),
					this.redraw()
			},
			_setLatLngs: function(t) {
					this._bounds = new T,
					this._latlngs = this._convertLatLngs(t)
			},
			_defaultShape: function() {
					return Oe(this._latlngs) ? this._latlngs : this._latlngs[0]
			},
			_convertLatLngs: function(t) {
					for (var e = [], i = Oe(t), n = 0, o = t.length; o > n; n++)
							i ? (e[n] = z(t[n]),
							this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
					return e
			},
			_project: function() {
					var t = new b;
					this._rings = [],
					this._projectLatlngs(this._latlngs, this._rings, t),
					this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t,
					this._updateBounds())
			},
			_updateBounds: function() {
					var t = this._clickTolerance()
						, t = new x(t,t);
					this._rawPxBounds && (this._pxBounds = new b([this._rawPxBounds.min.subtract(t), this._rawPxBounds.max.add(t)]))
			},
			_projectLatlngs: function(t, e, i) {
					var n, o, s = t[0]instanceof C, a = t.length;
					if (s) {
							for (o = [],
							n = 0; a > n; n++)
									o[n] = this._map.latLngToLayerPoint(t[n]),
									i.extend(o[n]);
							e.push(o)
					} else
							for (n = 0; a > n; n++)
									this._projectLatlngs(t[n], e, i)
			},
			_clipPoints: function() {
					var t = this._renderer._bounds;
					if (this._parts = [],
					this._pxBounds && this._pxBounds.intersects(t))
							if (this.options.noClip)
									this._parts = this._rings;
							else
									for (var e, i, n, o, s = this._parts, a = 0, r = 0, h = this._rings.length; h > a; a++)
											for (e = 0,
											i = (o = this._rings[a]).length; i - 1 > e; e++)
													(n = ke(o[e], o[e + 1], t, e, !0)) && (s[r] = s[r] || [],
													s[r].push(n[0]),
													n[1] === o[e + 1] && e !== i - 2 || (s[r].push(n[1]),
													r++))
			},
			_simplifyPoints: function() {
					for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; n > i; i++)
							t[i] = Ce(t[i], e)
			},
			_update: function() {
					this._map && (this._clipPoints(),
					this._simplifyPoints(),
					this._updatePath())
			},
			_updatePath: function() {
					this._renderer._updatePoly(this)
			},
			_containsPoint: function(t, e) {
					var i, n, o, s, a, r, h = this._clickTolerance();
					if (this._pxBounds && this._pxBounds.contains(t))
							for (i = 0,
							s = this._parts.length; s > i; i++)
									for (n = 0,
									o = (a = (r = this._parts[i]).length) - 1; a > n; o = n++)
											if ((e || 0 !== n) && ze(t, r[o], r[n]) <= h)
													return !0;
					return !1
			}
	});
	Zn._flat = Ae;
	var On = Zn.extend({
			options: {
					fill: !0
			},
			isEmpty: function() {
					return !this._latlngs.length || !this._latlngs[0].length
			},
			getCenter: function() {
					if (this._map)
							return Te(this._defaultShape(), this._map.options.crs);
					throw new Error("Must add layer to map before using getCenter()")
			},
			_convertLatLngs: function(t) {
					var t = Zn.prototype._convertLatLngs.call(this, t)
						, e = t.length;
					return e >= 2 && t[0]instanceof C && t[0].equals(t[e - 1]) && t.pop(),
					t
			},
			_setLatLngs: function(t) {
					Zn.prototype._setLatLngs.call(this, t),
					Oe(this._latlngs) && (this._latlngs = [this._latlngs])
			},
			_defaultShape: function() {
					return (Oe(this._latlngs[0]) ? this._latlngs : this._latlngs[0])[0]
			},
			_clipPoints: function() {
					var t = this._renderer._bounds
						, e = this.options.weight
						, e = new x(e,e)
						, t = new b(t.min.subtract(e),t.max.add(e));
					if (this._parts = [],
					this._pxBounds && this._pxBounds.intersects(t))
							if (this.options.noClip)
									this._parts = this._rings;
							else
									for (var i, n = 0, o = this._rings.length; o > n; n++)
											(i = Pe(this._rings[n], t, !0)).length && this._parts.push(i)
			},
			_updatePath: function() {
					this._renderer._updatePoly(this, !0)
			},
			_containsPoint: function(t) {
					var e, i, n, o, s, a, r, h, l = !1;
					if (!this._pxBounds || !this._pxBounds.contains(t))
							return !1;
					for (o = 0,
					r = this._parts.length; r > o; o++)
							for (s = 0,
							a = (h = (e = this._parts[o]).length) - 1; h > s; a = s++)
									i = e[s],
									n = e[a],
									i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
					return l || Zn.prototype._containsPoint.call(this, t, !0)
			}
	})
		, An = Pn.extend({
			initialize: function(t, e) {
					c(this, e),
					this._layers = {},
					t && this.addData(t)
			},
			addData: function(t) {
					var e, i, n, o = Je(t) ? t : t.features;
					if (o) {
							for (e = 0,
							i = o.length; i > e; e++)
									((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
							return this
					}
					var s, a = this.options;
					return a.filter && !a.filter(t) || !(s = Be(t, a)) ? this : (s.feature = We(t),
					s.defaultOptions = s.options,
					this.resetStyle(s),
					a.onEachFeature && a.onEachFeature(t, s),
					this.addLayer(s))
			},
			resetStyle: function(t) {
					return void 0 === t ? this.eachLayer(this.resetStyle, this) : (t.options = e({}, t.defaultOptions),
					this._setLayerStyle(t, this.options.style),
					this)
			},
			setStyle: function(t) {
					return this.eachLayer(function(e) {
							this._setLayerStyle(e, t)
					}, this)
			},
			_setLayerStyle: function(t, e) {
					t.setStyle && ("function" == typeof e && (e = e(t.feature)),
					t.setStyle(e))
			}
	});
	Si = {
			toGeoJSON: function(t) {
					return Fe(this, {
							type: "Point",
							coordinates: je(this.getLatLng(), t)
					})
			}
	},
	zn.include(Si),
	Sn.include(Si),
	En.include(Si),
	Zn.include({
			toGeoJSON: function(t) {
					var e = !Oe(this._latlngs);
					return Fe(this, {
							type: (e ? "Multi" : "") + "LineString",
							coordinates: He(this._latlngs, e ? 1 : 0, !1, t)
					})
			}
	}),
	On.include({
			toGeoJSON: function(t) {
					var e = !Oe(this._latlngs)
						, i = e && !Oe(this._latlngs[0])
						, t = He(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
					return Fe(this, {
							type: (i ? "Multi" : "") + "Polygon",
							coordinates: t = e ? t : [t]
					})
			}
	}),
	Ln.include({
			toMultiPoint: function(t) {
					var e = [];
					return this.eachLayer(function(i) {
							e.push(i.toGeoJSON(t).geometry.coordinates)
					}),
					Fe(this, {
							type: "MultiPoint",
							coordinates: e
					})
			},
			toGeoJSON: function(t) {
					var e, i, n = this.feature && this.feature.geometry && this.feature.geometry.type;
					return "MultiPoint" === n ? this.toMultiPoint(t) : (e = "GeometryCollection" === n,
					i = [],
					this.eachLayer(function(n) {
							n.toGeoJSON && (n = n.toGeoJSON(t),
							e ? i.push(n.geometry) : "FeatureCollection" === (n = We(n)).type ? i.push.apply(i, n.features) : i.push(n))
					}),
					e ? Fe(this, {
							geometries: i,
							type: "GeometryCollection"
					}) : {
							type: "FeatureCollection",
							features: i
					})
			}
	});
	var Zi = Ue
		, In = Ei.extend({
			options: {
					opacity: 1,
					alt: "",
					interactive: !1,
					crossOrigin: !1,
					errorOverlayUrl: "",
					zIndex: 1,
					className: ""
			},
			initialize: function(t, e, i) {
					this._url = t,
					this._bounds = M(e),
					c(this, i)
			},
			onAdd: function() {
					this._image || (this._initImage(),
					this.options.opacity < 1 && this._updateOpacity()),
					this.options.interactive && (K(this._image, "leaflet-interactive"),
					this.addInteractiveTarget(this._image)),
					this.getPane().appendChild(this._image),
					this._reset()
			},
			onRemove: function() {
					W(this._image),
					this.options.interactive && this.removeInteractiveTarget(this._image)
			},
			setOpacity: function(t) {
					return this.options.opacity = t,
					this._image && this._updateOpacity(),
					this
			},
			setStyle: function(t) {
					return t.opacity && this.setOpacity(t.opacity),
					this
			},
			bringToFront: function() {
					return this._map && V(this._image),
					this
			},
			bringToBack: function() {
					return this._map && G(this._image),
					this
			},
			setUrl: function(t) {
					return this._url = t,
					this._image && (this._image.src = t),
					this
			},
			setBounds: function(t) {
					return this._bounds = M(t),
					this._map && this._reset(),
					this
			},
			getEvents: function() {
					var t = {
							zoom: this._reset,
							viewreset: this._reset
					};
					return this._zoomAnimated && (t.zoomanim = this._animateZoom),
					t
			},
			setZIndex: function(t) {
					return this.options.zIndex = t,
					this._updateZIndex(),
					this
			},
			getBounds: function() {
					return this._bounds
			},
			getElement: function() {
					return this._image
			},
			_initImage: function() {
					var t = "IMG" === this._url.tagName
						, e = this._image = t ? this._url : F("img");
					K(e, "leaflet-image-layer"),
					this._zoomAnimated && K(e, "leaflet-zoom-animated"),
					this.options.className && K(e, this.options.className),
					e.onselectstart = r,
					e.onmousemove = r,
					e.onload = n(this.fire, this, "load"),
					e.onerror = n(this._overlayOnError, this, "error"),
					!this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
					this.options.zIndex && this._updateZIndex(),
					t ? this._url = e.src : (e.src = this._url,
					e.alt = this.options.alt)
			},
			_animateZoom: function(t) {
					var e = this._map.getZoomScale(t.zoom)
						, t = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
					te(this._image, t, e)
			},
			_reset: function() {
					var t = this._image
						, e = new b(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast()))
						, i = e.getSize();
					ee(t, e.min),
					t.style.width = i.x + "px",
					t.style.height = i.y + "px"
			},
			_updateOpacity: function() {
					$(this._image, this.options.opacity)
			},
			_updateZIndex: function() {
					this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
			},
			_overlayOnError: function() {
					this.fire("error");
					var t = this.options.errorOverlayUrl;
					t && this._url !== t && (this._url = t,
					this._image.src = t)
			},
			getCenter: function() {
					return this._bounds.getCenter()
			}
	})
		, Bn = In.extend({
			options: {
					autoplay: !0,
					loop: !0,
					keepAspectRatio: !0,
					muted: !1,
					playsInline: !0
			},
			_initImage: function() {
					var t = "VIDEO" === this._url.tagName
						, e = this._image = t ? this._url : F("video");
					if (K(e, "leaflet-image-layer"),
					this._zoomAnimated && K(e, "leaflet-zoom-animated"),
					this.options.className && K(e, this.options.className),
					e.onselectstart = r,
					e.onmousemove = r,
					e.onloadeddata = n(this.fire, this, "load"),
					t) {
							for (var i = e.getElementsByTagName("source"), o = [], s = 0; s < i.length; s++)
									o.push(i[s].src);
							this._url = 0 < i.length ? o : [e.src]
					} else {
							Je(this._url) || (this._url = [this._url]),
							!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
							e.autoplay = !!this.options.autoplay,
							e.loop = !!this.options.loop,
							e.muted = !!this.options.muted,
							e.playsInline = !!this.options.playsInline;
							for (var a = 0; a < this._url.length; a++) {
									var h = F("source");
									h.src = this._url[a],
									e.appendChild(h)
							}
					}
			}
	})
		, Nn = In.extend({
			_initImage: function() {
					var t = this._image = this._url;
					K(t, "leaflet-image-layer"),
					this._zoomAnimated && K(t, "leaflet-zoom-animated"),
					this.options.className && K(t, this.options.className),
					t.onselectstart = r,
					t.onmousemove = r
			}
	})
		, Rn = Ei.extend({
			options: {
					interactive: !1,
					offset: [0, 0],
					className: "",
					pane: void 0,
					content: ""
			},
			initialize: function(t, e) {
					t && (t instanceof C || Je(t)) ? (this._latlng = z(t),
					c(this, e)) : (c(this, t),
					this._source = e),
					this.options.content && (this._content = this.options.content)
			},
			openOn: function(t) {
					return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this),
					this
			},
			close: function() {
					return this._map && this._map.removeLayer(this),
					this
			},
			toggle: function(t) {
					return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source,
					this._prepareOpen(),
					this.openOn(t._map)),
					this
			},
			onAdd: function(t) {
					this._zoomAnimated = t._zoomAnimated,
					this._container || this._initLayout(),
					t._fadeAnimated && $(this._container, 0),
					clearTimeout(this._removeTimeout),
					this.getPane().appendChild(this._container),
					this.update(),
					t._fadeAnimated && $(this._container, 1),
					this.bringToFront(),
					this.options.interactive && (K(this._container, "leaflet-interactive"),
					this.addInteractiveTarget(this._container))
			},
			onRemove: function(t) {
					t._fadeAnimated ? ($(this._container, 0),
					this._removeTimeout = setTimeout(n(W, void 0, this._container), 200)) : W(this._container),
					this.options.interactive && (Y(this._container, "leaflet-interactive"),
					this.removeInteractiveTarget(this._container))
			},
			getLatLng: function() {
					return this._latlng
			},
			setLatLng: function(t) {
					return this._latlng = z(t),
					this._map && (this._updatePosition(),
					this._adjustPan()),
					this
			},
			getContent: function() {
					return this._content
			},
			setContent: function(t) {
					return this._content = t,
					this.update(),
					this
			},
			getElement: function() {
					return this._container
			},
			update: function() {
					this._map && (this._container.style.visibility = "hidden",
					this._updateContent(),
					this._updateLayout(),
					this._updatePosition(),
					this._container.style.visibility = "",
					this._adjustPan())
			},
			getEvents: function() {
					var t = {
							zoom: this._updatePosition,
							viewreset: this._updatePosition
					};
					return this._zoomAnimated && (t.zoomanim = this._animateZoom),
					t
			},
			isOpen: function() {
					return !!this._map && this._map.hasLayer(this)
			},
			bringToFront: function() {
					return this._map && V(this._container),
					this
			},
			bringToBack: function() {
					return this._map && G(this._container),
					this
			},
			_prepareOpen: function(t) {
					if (!(i = this._source)._map)
							return !1;
					if (i instanceof Pn) {
							var e, i = null, n = this._source._layers;
							for (e in n)
									if (n[e]._map) {
											i = n[e];
											break
									}
							if (!i)
									return !1;
							this._source = i
					}
					if (!t)
							if (i.getCenter)
									t = i.getCenter();
							else if (i.getLatLng)
									t = i.getLatLng();
							else {
									if (!i.getBounds)
											throw new Error("Unable to get source layer LatLng.");
									t = i.getBounds().getCenter()
							}
					return this.setLatLng(t),
					this._map && this.update(),
					!0
			},
			_updateContent: function() {
					if (this._content) {
							var t = this._contentNode
								, e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
							if ("string" == typeof e)
									t.innerHTML = e;
							else {
									for (; t.hasChildNodes(); )
											t.removeChild(t.firstChild);
									t.appendChild(e)
							}
							this.fire("contentupdate")
					}
			},
			_updatePosition: function() {
					var t, e, i;
					this._map && (e = this._map.latLngToLayerPoint(this._latlng),
					t = w(this.options.offset),
					i = this._getAnchor(),
					this._zoomAnimated ? ee(this._container, e.add(i)) : t = t.add(e).add(i),
					e = this._containerBottom = -t.y,
					i = this._containerLeft = -Math.round(this._containerWidth / 2) + t.x,
					this._container.style.bottom = e + "px",
					this._container.style.left = i + "px")
			},
			_getAnchor: function() {
					return [0, 0]
			}
	})
		, Dn = (pn.include({
			_initOverlay: function(t, e, i, n) {
					var o = e;
					return o instanceof t || (o = new t(n).setContent(e)),
					i && o.setLatLng(i),
					o
			}
	}),
	Ei.include({
			_initOverlay: function(t, e, i, n) {
					var o = i;
					return o instanceof t ? (c(o, n),
					o._source = this) : (o = e && !n ? e : new t(n,this)).setContent(i),
					o
			}
	}),
	Rn.extend({
			options: {
					pane: "popupPane",
					offset: [0, 7],
					maxWidth: 300,
					minWidth: 50,
					maxHeight: null,
					autoPan: !0,
					autoPanPaddingTopLeft: null,
					autoPanPaddingBottomRight: null,
					autoPanPadding: [5, 5],
					keepInView: !1,
					closeButton: !0,
					autoClose: !0,
					closeOnEscapeKey: !0,
					className: ""
			},
			openOn: function(t) {
					return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup),
					t._popup = this,
					Rn.prototype.openOn.call(this, t)
			},
			onAdd: function(t) {
					Rn.prototype.onAdd.call(this, t),
					t.fire("popupopen", {
							popup: this
					}),
					this._source && (this._source.fire("popupopen", {
							popup: this
					}, !0),
					this._source instanceof kn || this._source.on("preclick", pe))
			},
			onRemove: function(t) {
					Rn.prototype.onRemove.call(this, t),
					t.fire("popupclose", {
							popup: this
					}),
					this._source && (this._source.fire("popupclose", {
							popup: this
					}, !0),
					this._source instanceof kn || this._source.off("preclick", pe))
			},
			getEvents: function() {
					var t = Rn.prototype.getEvents.call(this);
					return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close),
					this.options.keepInView && (t.moveend = this._adjustPan),
					t
			},
			_initLayout: function() {
					var t = "leaflet-popup"
						, e = this._container = F("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")
						, i = this._wrapper = F("div", t + "-content-wrapper", e);
					this._contentNode = F("div", t + "-content", i),
					fe(e),
					me(this._contentNode),
					le(e, "contextmenu", pe),
					this._tipContainer = F("div", t + "-tip-container", e),
					this._tip = F("div", t + "-tip", this._tipContainer),
					this.options.closeButton && ((i = this._closeButton = F("a", t + "-close-button", e)).setAttribute("role", "button"),
					i.setAttribute("aria-label", "Close popup"),
					i.href = "#close",
					i.innerHTML = '<span aria-hidden="true">&#215;</span>',
					le(i, "click", function(t) {
							ge(t),
							this.close()
					}, this))
			},
			_updateLayout: function() {
					var t = this._contentNode
						, e = t.style
						, i = (e.width = "",
					e.whiteSpace = "nowrap",
					t.offsetWidth)
						, i = Math.min(i, this.options.maxWidth)
						, i = (i = Math.max(i, this.options.minWidth),
					e.width = i + 1 + "px",
					e.whiteSpace = "",
					e.height = "",
					t.offsetHeight)
						, n = this.options.maxHeight
						, o = "leaflet-popup-scrolled";
					(n && i > n ? (e.height = n + "px",
					K) : Y)(t, o),
					this._containerWidth = this._container.offsetWidth
			},
			_animateZoom: function(t) {
					var t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
						, e = this._getAnchor();
					ee(this._container, t.add(e))
			},
			_adjustPan: function() {
					var t, e, i, n, o, s, a, r;
					this.options.autoPan && (this._map._panAnim && this._map._panAnim.stop(),
					this._autopanning ? this._autopanning = !1 : (t = this._map,
					e = parseInt(H(this._container, "marginBottom"), 10) || 0,
					e = this._container.offsetHeight + e,
					r = this._containerWidth,
					(i = new x(this._containerLeft,-e - this._containerBottom))._add(ie(this._container)),
					i = t.layerPointToContainerPoint(i),
					o = w(this.options.autoPanPadding),
					n = w(this.options.autoPanPaddingTopLeft || o),
					o = w(this.options.autoPanPaddingBottomRight || o),
					s = t.getSize(),
					a = 0,
					i.x + r + o.x > s.x && (a = i.x + r - s.x + o.x),
					i.x - a - n.x < (r = 0) && (a = i.x - n.x),
					i.y + e + o.y > s.y && (r = i.y + e - s.y + o.y),
					i.y - r - n.y < 0 && (r = i.y - n.y),
					(a || r) && (this.options.keepInView && (this._autopanning = !0),
					t.fire("autopanstart").panBy([a, r]))))
			},
			_getAnchor: function() {
					return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
			}
	}))
		, jn = (pn.mergeOptions({
			closePopupOnClick: !0
	}),
	pn.include({
			openPopup: function(t, e, i) {
					return this._initOverlay(Dn, t, e, i).openOn(this),
					this
			},
			closePopup: function(t) {
					return (t = arguments.length ? t : this._popup) && t.close(),
					this
			}
	}),
	Ei.include({
			bindPopup: function(t, e) {
					return this._popup = this._initOverlay(Dn, this._popup, t, e),
					this._popupHandlersAdded || (this.on({
							click: this._openPopup,
							keypress: this._onKeyPress,
							remove: this.closePopup,
							move: this._movePopup
					}),
					this._popupHandlersAdded = !0),
					this
			},
			unbindPopup: function() {
					return this._popup && (this.off({
							click: this._openPopup,
							keypress: this._onKeyPress,
							remove: this.closePopup,
							move: this._movePopup
					}),
					this._popupHandlersAdded = !1,
					this._popup = null),
					this
			},
			openPopup: function(t) {
					return this._popup && (this instanceof Pn || (this._popup._source = this),
					this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)),
					this
			},
			closePopup: function() {
					return this._popup && this._popup.close(),
					this
			},
			togglePopup: function() {
					return this._popup && this._popup.toggle(this),
					this
			},
			isPopupOpen: function() {
					return !!this._popup && this._popup.isOpen()
			},
			setPopupContent: function(t) {
					return this._popup && this._popup.setContent(t),
					this
			},
			getPopup: function() {
					return this._popup
			},
			_openPopup: function(t) {
					var e;
					this._popup && this._map && (ve(t),
					e = t.layer || t.target,
					this._popup._source !== e || e instanceof kn ? (this._popup._source = e,
					this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng))
			},
			_movePopup: function(t) {
					this._popup.setLatLng(t.latlng)
			},
			_onKeyPress: function(t) {
					13 === t.originalEvent.keyCode && this._openPopup(t)
			}
	}),
	Rn.extend({
			options: {
					pane: "tooltipPane",
					offset: [0, 0],
					direction: "auto",
					permanent: !1,
					sticky: !1,
					opacity: .9
			},
			onAdd: function(t) {
					Rn.prototype.onAdd.call(this, t),
					this.setOpacity(this.options.opacity),
					t.fire("tooltipopen", {
							tooltip: this
					}),
					this._source && (this.addEventParent(this._source),
					this._source.fire("tooltipopen", {
							tooltip: this
					}, !0))
			},
			onRemove: function(t) {
					Rn.prototype.onRemove.call(this, t),
					t.fire("tooltipclose", {
							tooltip: this
					}),
					this._source && (this.removeEventParent(this._source),
					this._source.fire("tooltipclose", {
							tooltip: this
					}, !0))
			},
			getEvents: function() {
					var t = Rn.prototype.getEvents.call(this);
					return this.options.permanent || (t.preclick = this.close),
					t
			},
			_initLayout: function() {
					var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
					this._contentNode = this._container = F("div", t),
					this._container.setAttribute("role", "tooltip"),
					this._container.setAttribute("id", "leaflet-tooltip-" + o(this))
			},
			_updateLayout: function() {},
			_adjustPan: function() {},
			_setPosition: function(t) {
					var e, i = this._map, n = this._container, o = i.latLngToContainerPoint(i.getCenter()), i = i.layerPointToContainerPoint(t), s = this.options.direction, a = n.offsetWidth, r = n.offsetHeight, h = w(this.options.offset), l = this._getAnchor(), i = "top" === s ? (e = a / 2,
					r) : "bottom" === s ? (e = a / 2,
					0) : (e = "center" === s ? a / 2 : "right" === s ? 0 : "left" === s ? a : i.x < o.x ? (s = "right",
					0) : (s = "left",
					a + 2 * (h.x + l.x)),
					r / 2);
					t = t.subtract(w(e, i, !0)).add(h).add(l),
					Y(n, "leaflet-tooltip-right"),
					Y(n, "leaflet-tooltip-left"),
					Y(n, "leaflet-tooltip-top"),
					Y(n, "leaflet-tooltip-bottom"),
					K(n, "leaflet-tooltip-" + s),
					ee(n, t)
			},
			_updatePosition: function() {
					var t = this._map.latLngToLayerPoint(this._latlng);
					this._setPosition(t)
			},
			setOpacity: function(t) {
					this.options.opacity = t,
					this._container && $(this._container, t)
			},
			_animateZoom: function(t) {
					t = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
					this._setPosition(t)
			},
			_getAnchor: function() {
					return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
			}
	}))
		, Hn = (pn.include({
			openTooltip: function(t, e, i) {
					return this._initOverlay(jn, t, e, i).openOn(this),
					this
			},
			closeTooltip: function(t) {
					return t.close(),
					this
			}
	}),
	Ei.include({
			bindTooltip: function(t, e) {
					return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
					this._tooltip = this._initOverlay(jn, this._tooltip, t, e),
					this._initTooltipInteractions(),
					this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
					this
			},
			unbindTooltip: function() {
					return this._tooltip && (this._initTooltipInteractions(!0),
					this.closeTooltip(),
					this._tooltip = null),
					this
			},
			_initTooltipInteractions: function(t) {
					var e, i;
					!t && this._tooltipHandlersAdded || (e = t ? "off" : "on",
					i = {
							remove: this.closeTooltip,
							move: this._moveTooltip
					},
					this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip,
					i.mouseout = this.closeTooltip,
					i.click = this._openTooltip,
					this._map ? this._addFocusListeners() : i.add = this._addFocusListeners),
					this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
					this[e](i),
					this._tooltipHandlersAdded = !t)
			},
			openTooltip: function(t) {
					return this._tooltip && (this instanceof Pn || (this._tooltip._source = this),
					this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map),
					this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
					this
			},
			closeTooltip: function() {
					return this._tooltip ? this._tooltip.close() : void 0
			},
			toggleTooltip: function() {
					return this._tooltip && this._tooltip.toggle(this),
					this
			},
			isTooltipOpen: function() {
					return this._tooltip.isOpen()
			},
			setTooltipContent: function(t) {
					return this._tooltip && this._tooltip.setContent(t),
					this
			},
			getTooltip: function() {
					return this._tooltip
			},
			_addFocusListeners: function() {
					this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this)
			},
			_addFocusListenersOnLayer: function(t) {
					var e = "function" == typeof t.getElement && t.getElement();
					e && (le(e, "focus", function() {
							this._tooltip._source = t,
							this.openTooltip()
					}, this),
					le(e, "blur", this.closeTooltip, this))
			},
			_setAriaDescribedByOnLayer: function(t) {
					t = "function" == typeof t.getElement && t.getElement(),
					t && t.setAttribute("aria-describedby", this._tooltip._container.id)
			},
			_openTooltip: function(t) {
					var e;
					this._tooltip && this._map && (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag ? (this._openOnceFlag = !0,
					(e = this)._map.once("moveend", function() {
							e._openOnceFlag = !1,
							e._openTooltip(t)
					})) : (this._tooltip._source = t.layer || t.target,
					this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0)))
			},
			_moveTooltip: function(t) {
					var e = t.latlng;
					this._tooltip.options.sticky && t.originalEvent && (t = this._map.mouseEventToContainerPoint(t.originalEvent),
					t = this._map.containerPointToLayerPoint(t),
					e = this._map.layerPointToLatLng(t)),
					this._tooltip.setLatLng(e)
			}
	}),
	Tn.extend({
			options: {
					iconSize: [12, 12],
					html: !1,
					bgPos: null,
					className: "leaflet-div-icon"
			},
			createIcon: function(t) {
					var t = t && "DIV" === t.tagName ? t : document.createElement("div")
						, e = this.options;
					return e.html instanceof Element ? (U(t),
					t.appendChild(e.html)) : t.innerHTML = !1 !== e.html ? e.html : "",
					e.bgPos && (e = w(e.bgPos),
					t.style.backgroundPosition = -e.x + "px " + -e.y + "px"),
					this._setIconStyles(t, "icon"),
					t
			},
			createShadow: function() {
					return null
			}
	}));
	Tn.Default = Mn;
	var Fn = Ei.extend({
			options: {
					tileSize: 256,
					opacity: 1,
					updateWhenIdle: Yi.mobile,
					updateWhenZooming: !0,
					updateInterval: 200,
					zIndex: 1,
					bounds: null,
					minZoom: 0,
					maxZoom: void 0,
					maxNativeZoom: void 0,
					minNativeZoom: void 0,
					noWrap: !1,
					pane: "tilePane",
					className: "",
					keepBuffer: 2
			},
			initialize: function(t) {
					c(this, t)
			},
			onAdd: function() {
					this._initContainer(),
					this._levels = {},
					this._tiles = {},
					this._resetView()
			},
			beforeAdd: function(t) {
					t._addZoomLimit(this)
			},
			onRemove: function(t) {
					this._removeAllTiles(),
					W(this._container),
					t._removeZoomLimit(this),
					this._container = null,
					this._tileZoom = void 0
			},
			bringToFront: function() {
					return this._map && (V(this._container),
					this._setAutoZIndex(Math.max)),
					this
			},
			bringToBack: function() {
					return this._map && (G(this._container),
					this._setAutoZIndex(Math.min)),
					this
			},
			getContainer: function() {
					return this._container
			},
			setOpacity: function(t) {
					return this.options.opacity = t,
					this._updateOpacity(),
					this
			},
			setZIndex: function(t) {
					return this.options.zIndex = t,
					this._updateZIndex(),
					this
			},
			isLoading: function() {
					return this._loading
			},
			redraw: function() {
					var t;
					return this._map && (this._removeAllTiles(),
					(t = this._clampZoom(this._map.getZoom())) !== this._tileZoom && (this._tileZoom = t,
					this._updateLevels()),
					this._update()),
					this
			},
			getEvents: function() {
					var t = {
							viewprereset: this._invalidateAll,
							viewreset: this._resetView,
							zoom: this._resetView,
							moveend: this._onMoveEnd
					};
					return this.options.updateWhenIdle || (this._onMove || (this._onMove = s(this._onMoveEnd, this.options.updateInterval, this)),
					t.move = this._onMove),
					this._zoomAnimated && (t.zoomanim = this._animateZoom),
					t
			},
			createTile: function() {
					return document.createElement("div")
			},
			getTileSize: function() {
					var t = this.options.tileSize;
					return t instanceof x ? t : new x(t,t)
			},
			_updateZIndex: function() {
					this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
			},
			_setAutoZIndex: function(t) {
					for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; s > o; o++)
							e = i[o].style.zIndex,
							i[o] !== this._container && e && (n = t(n, +e));
					isFinite(n) && (this.options.zIndex = n + t(-1, 1),
					this._updateZIndex())
			},
			_updateOpacity: function() {
					if (this._map && !Yi.ielt9) {
							$(this._container, this.options.opacity);
							var t, e = +new Date, i = !1, n = !1;
							for (t in this._tiles) {
									var o, s = this._tiles[t];
									s.current && s.loaded && (o = Math.min(1, (e - s.loaded) / 200),
									$(s.el, o),
									1 > o ? i = !0 : (s.active ? n = !0 : this._onOpaqueTile(s),
									s.active = !0))
							}
							n && !this._noPrune && this._pruneTiles(),
							i && (v(this._fadeFrame),
							this._fadeFrame = g(this._updateOpacity, this))
					}
			},
			_onOpaqueTile: r,
			_initContainer: function() {
					this._container || (this._container = F("div", "leaflet-layer " + (this.options.className || "")),
					this._updateZIndex(),
					this.options.opacity < 1 && this._updateOpacity(),
					this.getPane().appendChild(this._container))
			},
			_updateLevels: function() {
					var t = this._tileZoom
						, e = this.options.maxZoom;
					if (void 0 !== t) {
							for (var i in this._levels)
									i = Number(i),
									this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i),
									this._onUpdateLevel(i)) : (W(this._levels[i].el),
									this._removeTilesAtZoom(i),
									this._onRemoveLevel(i),
									delete this._levels[i]);
							var n = this._levels[t]
								, o = this._map;
							return n || ((n = this._levels[t] = {}).el = F("div", "leaflet-tile-container leaflet-zoom-animated", this._container),
							n.el.style.zIndex = e,
							n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(),
							n.zoom = t,
							this._setZoomTransform(n, o.getCenter(), o.getZoom()),
							r(n.el.offsetWidth),
							this._onCreateLevel(n)),
							this._level = n
					}
			},
			_onUpdateLevel: r,
			_onRemoveLevel: r,
			_onCreateLevel: r,
			_pruneTiles: function() {
					if (this._map) {
							var t, e, i, n = this._map.getZoom();
							if (n > this.options.maxZoom || n < this.options.minZoom)
									this._removeAllTiles();
							else {
									for (t in this._tiles)
											(i = this._tiles[t]).retain = i.current;
									for (t in this._tiles)
											(i = this._tiles[t]).current && !i.active && (e = i.coords,
											this._retainParent(e.x, e.y, e.z, e.z - 5) || this._retainChildren(e.x, e.y, e.z, e.z + 2));
									for (t in this._tiles)
											this._tiles[t].retain || this._removeTile(t)
							}
					}
			},
			_removeTilesAtZoom: function(t) {
					for (var e in this._tiles)
							this._tiles[e].coords.z === t && this._removeTile(e)
			},
			_removeAllTiles: function() {
					for (var t in this._tiles)
							this._removeTile(t)
			},
			_invalidateAll: function() {
					for (var t in this._levels)
							W(this._levels[t].el),
							this._onRemoveLevel(Number(t)),
							delete this._levels[t];
					this._removeAllTiles(),
					this._tileZoom = void 0
			},
			_retainParent: function(t, e, i, n) {
					var t = Math.floor(t / 2)
						, e = Math.floor(e / 2)
						, i = i - 1
						, o = new x(+t,+e)
						, o = (o.z = i,
					this._tileCoordsToKey(o))
						, o = this._tiles[o];
					return o && o.active ? o.retain = !0 : (o && o.loaded && (o.retain = !0),
					i > n && this._retainParent(t, e, i, n))
			},
			_retainChildren: function(t, e, i, n) {
					for (var o = 2 * t; 2 * t + 2 > o; o++)
							for (var s = 2 * e; 2 * e + 2 > s; s++) {
									var a = new x(o,s)
										, a = (a.z = i + 1,
									this._tileCoordsToKey(a))
										, a = this._tiles[a];
									a && a.active ? a.retain = !0 : (a && a.loaded && (a.retain = !0),
									n > i + 1 && this._retainChildren(o, s, i + 1, n))
							}
			},
			_resetView: function(t) {
					t = t && (t.pinch || t.flyTo),
					this._setView(this._map.getCenter(), this._map.getZoom(), t, t)
			},
			_animateZoom: function(t) {
					this._setView(t.center, t.zoom, !0, t.noUpdate)
			},
			_clampZoom: function(t) {
					var e = this.options;
					return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
			},
			_setView: function(t, e, i, n) {
					var o = Math.round(e)
						, o = void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom ? void 0 : this._clampZoom(o)
						, s = this.options.updateWhenZooming && o !== this._tileZoom;
					n && !s || (this._tileZoom = o,
					this._abortLoading && this._abortLoading(),
					this._updateLevels(),
					this._resetGrid(),
					void 0 !== o && this._update(t),
					i || this._pruneTiles(),
					this._noPrune = !!i),
					this._setZoomTransforms(t, e)
			},
			_setZoomTransforms: function(t, e) {
					for (var i in this._levels)
							this._setZoomTransform(this._levels[i], t, e)
			},
			_setZoomTransform: function(t, e, i) {
					var n = this._map.getZoomScale(i, t.zoom)
						, e = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
					Yi.any3d ? te(t.el, e, n) : ee(t.el, e)
			},
			_resetGrid: function() {
					var t = this._map
						, e = t.options.crs
						, i = this._tileSize = this.getTileSize()
						, n = this._tileZoom
						, o = this._map.getPixelWorldBounds(this._tileZoom);
					o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
					this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)],
					this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
			},
			_onMoveEnd: function() {
					this._map && !this._map._animatingZoom && this._update()
			},
			_getTiledPixelBounds: function(t) {
					var e = this._map
						, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom()
						, i = e.getZoomScale(i, this._tileZoom)
						, t = e.project(t, this._tileZoom).floor()
						, e = e.getSize().divideBy(2 * i);
					return new b(t.subtract(e),t.add(e))
			},
			_update: function(t) {
					var e = this._map;
					if (e) {
							var i = this._clampZoom(e.getZoom());
							if (void 0 === t && (t = e.getCenter()),
							void 0 !== this._tileZoom) {
									var n, e = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(e), s = o.getCenter(), a = [], e = this.options.keepBuffer, r = new b(o.getBottomLeft().subtract([e, -e]),o.getTopRight().add([e, -e]));
									if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
											throw new Error("Attempted to load an infinite number of tiles");
									for (n in this._tiles) {
											var h = this._tiles[n].coords;
											h.z === this._tileZoom && r.contains(new x(h.x,h.y)) || (this._tiles[n].current = !1)
									}
									if (1 < Math.abs(i - this._tileZoom))
											this._setView(t, i);
									else {
											for (var l = o.min.y; l <= o.max.y; l++)
													for (var u = o.min.x; u <= o.max.x; u++) {
															var c, d = new x(u,l);
															d.z = this._tileZoom,
															this._isValidTile(d) && ((c = this._tiles[this._tileCoordsToKey(d)]) ? c.current = !0 : a.push(d))
													}
											if (a.sort(function(t, e) {
													return t.distanceTo(s) - e.distanceTo(s)
											}),
											0 !== a.length) {
													this._loading || (this._loading = !0,
													this.fire("loading"));
													for (var _ = document.createDocumentFragment(), u = 0; u < a.length; u++)
															this._addTile(a[u], _);
													this._level.el.appendChild(_)
											}
									}
							}
					}
			},
			_isValidTile: function(t) {
					var e = this._map.options.crs;
					if (!e.infinite) {
							var i = this._globalTileRange;
							if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
									return !1
					}
					return !this.options.bounds || (e = this._tileCoordsToBounds(t),
					M(this.options.bounds).overlaps(e))
			},
			_keyToBounds: function(t) {
					return this._tileCoordsToBounds(this._keyToTileCoords(t))
			},
			_tileCoordsToNwSe: function(t) {
					var e = this._map
						, i = this.getTileSize()
						, n = t.scaleBy(i)
						, i = n.add(i);
					return [e.unproject(n, t.z), e.unproject(i, t.z)]
			},
			_tileCoordsToBounds: function(t) {
					return t = this._tileCoordsToNwSe(t),
					t = new T(t[0],t[1]),
					t = this.options.noWrap ? t : this._map.wrapLatLngBounds(t)
			},
			_tileCoordsToKey: function(t) {
					return t.x + ":" + t.y + ":" + t.z
			},
			_keyToTileCoords: function(t) {
					var t = t.split(":")
						, e = new x(+t[0],+t[1]);
					return e.z = +t[2],
					e
			},
			_removeTile: function(t) {
					var e = this._tiles[t];
					e && (W(e.el),
					delete this._tiles[t],
					this.fire("tileunload", {
							tile: e.el,
							coords: this._keyToTileCoords(t)
					}))
			},
			_initTile: function(t) {
					K(t, "leaflet-tile");
					var e = this.getTileSize();
					t.style.width = e.x + "px",
					t.style.height = e.y + "px",
					t.onselectstart = r,
					t.onmousemove = r,
					Yi.ielt9 && this.options.opacity < 1 && $(t, this.options.opacity)
			},
			_addTile: function(t, e) {
					var i = this._getTilePos(t)
						, o = this._tileCoordsToKey(t)
						, s = this.createTile(this._wrapCoords(t), n(this._tileReady, this, t));
					this._initTile(s),
					this.createTile.length < 2 && g(n(this._tileReady, this, t, null, s)),
					ee(s, i),
					this._tiles[o] = {
							el: s,
							coords: t,
							current: !0
					},
					e.appendChild(s),
					this.fire("tileloadstart", {
							tile: s,
							coords: t
					})
			},
			_tileReady: function(t, e, i) {
					e && this.fire("tileerror", {
							error: e,
							tile: i,
							coords: t
					});
					var o = this._tileCoordsToKey(t);
					(i = this._tiles[o]) && (i.loaded = +new Date,
					this._map._fadeAnimated ? ($(i.el, 0),
					v(this._fadeFrame),
					this._fadeFrame = g(this._updateOpacity, this)) : (i.active = !0,
					this._pruneTiles()),
					e || (K(i.el, "leaflet-tile-loaded"),
					this.fire("tileload", {
							tile: i.el,
							coords: t
					})),
					this._noTilesToLoad() && (this._loading = !1,
					this.fire("load"),
					Yi.ielt9 || !this._map._fadeAnimated ? g(this._pruneTiles, this) : setTimeout(n(this._pruneTiles, this), 250)))
			},
			_getTilePos: function(t) {
					return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
			},
			_wrapCoords: function(t) {
					var e = new x(this._wrapX ? a(t.x, this._wrapX) : t.x,this._wrapY ? a(t.y, this._wrapY) : t.y);
					return e.z = t.z,
					e
			},
			_pxBoundsToTileRange: function(t) {
					var e = this.getTileSize();
					return new b(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1, 1]))
			},
			_noTilesToLoad: function() {
					for (var t in this._tiles)
							if (!this._tiles[t].loaded)
									return !1;
					return !0
			}
	})
		, Wn = Fn.extend({
			options: {
					minZoom: 0,
					maxZoom: 18,
					subdomains: "abc",
					errorTileUrl: "",
					zoomOffset: 0,
					tms: !1,
					zoomReverse: !1,
					detectRetina: !1,
					crossOrigin: !1,
					referrerPolicy: !1
			},
			initialize: function(t, e) {
					this._url = t,
					(e = c(this, e)).detectRetina && Yi.retina && 0 < e.maxZoom ? (e.tileSize = Math.floor(e.tileSize / 2),
					e.zoomReverse ? (e.zoomOffset--,
					e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++,
					e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)),
					e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom),
					"string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
					this.on("tileunload", this._onTileRemove)
			},
			setUrl: function(t, e) {
					return this._url === t && void 0 === e && (e = !0),
					this._url = t,
					e || this.redraw(),
					this
			},
			createTile: function(t, e) {
					var i = document.createElement("img");
					return le(i, "load", n(this._tileOnLoad, this, e, i)),
					le(i, "error", n(this._tileOnError, this, e, i)),
					!this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
					"string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
					i.alt = "",
					i.src = this.getTileUrl(t),
					i
			},
			getTileUrl: function(t) {
					var i = {
							r: Yi.retina ? "@2x" : "",
							s: this._getSubdomain(t),
							x: t.x,
							y: t.y,
							z: this._getZoomForUrl()
					};
					return this._map && !this._map.options.crs.infinite && (t = this._globalTileRange.max.y - t.y,
					this.options.tms && (i.y = t),
					i["-y"] = t),
					_(this._url, e(i, this.options))
			},
			_tileOnLoad: function(t, e) {
					Yi.ielt9 ? setTimeout(n(t, this, null, e), 0) : t(null, e)
			},
			_tileOnError: function(t, e, i) {
					var n = this.options.errorTileUrl;
					n && e.getAttribute("src") !== n && (e.src = n),
					t(i, e)
			},
			_onTileRemove: function(t) {
					t.tile.onload = null
			},
			_getZoomForUrl: function() {
					var t = this._tileZoom
						, e = this.options.maxZoom;
					return (t = this.options.zoomReverse ? e - t : t) + this.options.zoomOffset
			},
			_getSubdomain: function(t) {
					return t = Math.abs(t.x + t.y) % this.options.subdomains.length,
					this.options.subdomains[t]
			},
			_abortLoading: function() {
					var t, e, i;
					for (t in this._tiles)
							this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r,
							i.onerror = r,
							i.complete || (i.src = $e,
							e = this._tiles[t].coords,
							W(i),
							delete this._tiles[t],
							this.fire("tileabort", {
									tile: i,
									coords: e
							})))
			},
			_removeTile: function(t) {
					var e = this._tiles[t];
					return e ? (e.el.setAttribute("src", $e),
					Fn.prototype._removeTile.call(this, t)) : void 0
			},
			_tileReady: function(t, e, i) {
					return !this._map || i && i.getAttribute("src") === $e ? void 0 : Fn.prototype._tileReady.call(this, t, e, i)
			}
	})
		, Un = Wn.extend({
			defaultWmsParams: {
					service: "WMS",
					request: "GetMap",
					layers: "",
					styles: "",
					format: "image/jpeg",
					transparent: !1,
					version: "1.1.1"
			},
			options: {
					crs: null,
					uppercase: !1
			},
			initialize: function(t, i) {
					this._url = t;
					var n, o = e({}, this.defaultWmsParams);
					for (n in i)
							n in this.options || (o[n] = i[n]);
					var t = (i = c(this, i)).detectRetina && Yi.retina ? 2 : 1
						, s = this.getTileSize();
					o.width = s.x * t,
					o.height = s.y * t,
					this.wmsParams = o
			},
			onAdd: function(t) {
					this._crs = this.options.crs || t.options.crs,
					this._wmsVersion = parseFloat(this.wmsParams.version);
					var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
					this.wmsParams[e] = this._crs.code,
					Wn.prototype.onAdd.call(this, t)
			},
			getTileUrl: function(t) {
					var e = this._tileCoordsToNwSe(t)
						, i = this._crs
						, i = P(i.project(e[0]), i.project(e[1]))
						, e = i.min
						, i = i.max
						, e = (1.3 <= this._wmsVersion && this._crs === bn ? [e.y, e.x, i.y, i.x] : [e.x, e.y, i.x, i.y]).join(",")
						, i = Wn.prototype.getTileUrl.call(this, t);
					return i + d(this.wmsParams, i, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + e
			},
			setParams: function(t, i) {
					return e(this.wmsParams, t),
					i || this.redraw(),
					this
			}
	});
	Wn.WMS = Un,
	Ve.wms = function(t, e) {
			return new Un(t,e)
	}
	;
	var Vn = Ei.extend({
			options: {
					padding: .1
			},
			initialize: function(t) {
					c(this, t),
					o(this),
					this._layers = this._layers || {}
			},
			onAdd: function() {
					this._container || (this._initContainer(),
					K(this._container, "leaflet-zoom-animated")),
					this.getPane().appendChild(this._container),
					this._update(),
					this.on("update", this._updatePaths, this)
			},
			onRemove: function() {
					this.off("update", this._updatePaths, this),
					this._destroyContainer()
			},
			getEvents: function() {
					var t = {
							viewreset: this._reset,
							zoom: this._onZoom,
							moveend: this._update,
							zoomend: this._onZoomEnd
					};
					return this._zoomAnimated && (t.zoomanim = this._onAnimZoom),
					t
			},
			_onAnimZoom: function(t) {
					this._updateTransform(t.center, t.zoom)
			},
			_onZoom: function() {
					this._updateTransform(this._map.getCenter(), this._map.getZoom())
			},
			_updateTransform: function(t, e) {
					var i = this._map.getZoomScale(e, this._zoom)
						, n = this._map.getSize().multiplyBy(.5 + this.options.padding)
						, o = this._map.project(this._center, e)
						, n = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
					Yi.any3d ? te(this._container, n, i) : ee(this._container, n)
			},
			_reset: function() {
					for (var t in this._update(),
					this._updateTransform(this._center, this._zoom),
					this._layers)
							this._layers[t]._reset()
			},
			_onZoomEnd: function() {
					for (var t in this._layers)
							this._layers[t]._project()
			},
			_updatePaths: function() {
					for (var t in this._layers)
							this._layers[t]._update()
			},
			_update: function() {
					var t = this.options.padding
						, e = this._map.getSize()
						, i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
					this._bounds = new b(i,i.add(e.multiplyBy(1 + 2 * t)).round()),
					this._center = this._map.getCenter(),
					this._zoom = this._map.getZoom()
			}
	})
		, Gn = Vn.extend({
			options: {
					tolerance: 0
			},
			getEvents: function() {
					var t = Vn.prototype.getEvents.call(this);
					return t.viewprereset = this._onViewPreReset,
					t
			},
			_onViewPreReset: function() {
					this._postponeUpdatePaths = !0
			},
			onAdd: function() {
					Vn.prototype.onAdd.call(this),
					this._draw()
			},
			_initContainer: function() {
					var t = this._container = document.createElement("canvas");
					le(t, "mousemove", this._onMouseMove, this),
					le(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
					le(t, "mouseout", this._handleMouseOut, this),
					t._leaflet_disable_events = !0,
					this._ctx = t.getContext("2d")
			},
			_destroyContainer: function() {
					v(this._redrawRequest),
					delete this._ctx,
					W(this._container),
					ue(this._container),
					delete this._container
			},
			_updatePaths: function() {
					if (!this._postponeUpdatePaths) {
							for (var t in this._redrawBounds = null,
							this._layers)
									this._layers[t]._update();
							this._redraw()
					}
			},
			_update: function() {
					var t, e, i, n;
					this._map._animatingZoom && this._bounds || (Vn.prototype._update.call(this),
					t = this._bounds,
					e = this._container,
					i = t.getSize(),
					n = Yi.retina ? 2 : 1,
					ee(e, t.min),
					e.width = n * i.x,
					e.height = n * i.y,
					e.style.width = i.x + "px",
					e.style.height = i.y + "px",
					Yi.retina && this._ctx.scale(2, 2),
					this._ctx.translate(-t.min.x, -t.min.y),
					this.fire("update"))
			},
			_reset: function() {
					Vn.prototype._reset.call(this),
					this._postponeUpdatePaths && (this._postponeUpdatePaths = !1,
					this._updatePaths())
			},
			_initPath: function(t) {
					this._updateDashArray(t),
					t = (this._layers[o(t)] = t)._order = {
							layer: t,
							prev: this._drawLast,
							next: null
					},
					this._drawLast && (this._drawLast.next = t),
					this._drawLast = t,
					this._drawFirst = this._drawFirst || this._drawLast
			},
			_addPath: function(t) {
					this._requestRedraw(t)
			},
			_removePath: function(t) {
					var e = t._order
						, i = e.next
						, e = e.prev;
					i ? i.prev = e : this._drawLast = e,
					e ? e.next = i : this._drawFirst = i,
					delete t._order,
					delete this._layers[o(t)],
					this._requestRedraw(t)
			},
			_updatePath: function(t) {
					this._extendRedrawBounds(t),
					t._project(),
					t._update(),
					this._requestRedraw(t)
			},
			_updateStyle: function(t) {
					this._updateDashArray(t),
					this._requestRedraw(t)
			},
			_updateDashArray: function(t) {
					if ("string" == typeof t.options.dashArray) {
							for (var e, i = t.options.dashArray.split(/[, ]+/), n = [], o = 0; o < i.length; o++) {
									if (e = Number(i[o]),
									isNaN(e))
											return;
									n.push(e)
							}
							t.options._dashArray = n
					} else
							t.options._dashArray = t.options.dashArray
			},
			_requestRedraw: function(t) {
					this._map && (this._extendRedrawBounds(t),
					this._redrawRequest = this._redrawRequest || g(this._redraw, this))
			},
			_extendRedrawBounds: function(t) {
					var e;
					t._pxBounds && (e = (t.options.weight || 0) + 1,
					this._redrawBounds = this._redrawBounds || new b,
					this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
					this._redrawBounds.extend(t._pxBounds.max.add([e, e])))
			},
			_redraw: function() {
					this._redrawRequest = null,
					this._redrawBounds && (this._redrawBounds.min._floor(),
					this._redrawBounds.max._ceil()),
					this._clear(),
					this._draw(),
					this._redrawBounds = null
			},
			_clear: function() {
					var t, e = this._redrawBounds;
					e ? (t = e.getSize(),
					this._ctx.clearRect(e.min.x, e.min.y, t.x, t.y)) : (this._ctx.save(),
					this._ctx.setTransform(1, 0, 0, 1, 0, 0),
					this._ctx.clearRect(0, 0, this._container.width, this._container.height),
					this._ctx.restore())
			},
			_draw: function() {
					var t, e, i = this._redrawBounds;
					this._ctx.save(),
					i && (e = i.getSize(),
					this._ctx.beginPath(),
					this._ctx.rect(i.min.x, i.min.y, e.x, e.y),
					this._ctx.clip()),
					this._drawing = !0;
					for (var n = this._drawFirst; n; n = n.next)
							t = n.layer,
							(!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
					this._drawing = !1,
					this._ctx.restore()
			},
			_updatePoly: function(t, e) {
					if (this._drawing) {
							var i, n, o, s, a = t._parts, r = a.length, h = this._ctx;
							if (r) {
									for (h.beginPath(),
									i = 0; r > i; i++) {
											for (n = 0,
											o = a[i].length; o > n; n++)
													s = a[i][n],
													h[n ? "lineTo" : "moveTo"](s.x, s.y);
											e && h.closePath()
									}
									this._fillStroke(h, t)
							}
					}
			},
			_updateCircle: function(t) {
					var e, i, n, o;
					this._drawing && !t._empty() && (e = t._point,
					i = this._ctx,
					n = Math.max(Math.round(t._radius), 1),
					1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) && (i.save(),
					i.scale(1, o)),
					i.beginPath(),
					i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
					1 != o && i.restore(),
					this._fillStroke(i, t))
			},
			_fillStroke: function(t, e) {
					var i = e.options;
					i.fill && (t.globalAlpha = i.fillOpacity,
					t.fillStyle = i.fillColor || i.color,
					t.fill(i.fillRule || "evenodd")),
					i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []),
					t.globalAlpha = i.opacity,
					t.lineWidth = i.weight,
					t.strokeStyle = i.color,
					t.lineCap = i.lineCap,
					t.lineJoin = i.lineJoin,
					t.stroke())
			},
			_onClick: function(t) {
					for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
							(e = o.layer).options.interactive && e._containsPoint(n) && (("click" === t.type || "preclick" === t.type) && this._map._draggableMoved(e) || (i = e));
					this._fireEvent(!!i && [i], t)
			},
			_onMouseMove: function(t) {
					var e;
					!this._map || this._map.dragging.moving() || this._map._animatingZoom || (e = this._map.mouseEventToLayerPoint(t),
					this._handleMouseHover(t, e))
			},
			_handleMouseOut: function(t) {
					var e = this._hoveredLayer;
					e && (Y(this._container, "leaflet-interactive"),
					this._fireEvent([e], t, "mouseout"),
					this._hoveredLayer = null,
					this._mouseHoverThrottled = !1)
			},
			_handleMouseHover: function(t, e) {
					if (!this._mouseHoverThrottled) {
							for (var i, o, s = this._drawFirst; s; s = s.next)
									(i = s.layer).options.interactive && i._containsPoint(e) && (o = i);
							o !== this._hoveredLayer && (this._handleMouseOut(t),
							o && (K(this._container, "leaflet-interactive"),
							this._fireEvent([o], t, "mouseover"),
							this._hoveredLayer = o)),
							this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
							this._mouseHoverThrottled = !0,
							setTimeout(n(function() {
									this._mouseHoverThrottled = !1
							}, this), 32)
					}
			},
			_fireEvent: function(t, e, i) {
					this._map._fireDOMEvent(e, i || e.type, t)
			},
			_bringToFront: function(t) {
					var e, i, n = t._order;
					n && (e = n.next,
					i = n.prev,
					e && ((e.prev = i) ? i.next = e : e && (this._drawFirst = e),
					n.prev = this._drawLast,
					(this._drawLast.next = n).next = null,
					this._drawLast = n,
					this._requestRedraw(t)))
			},
			_bringToBack: function(t) {
					var e, i, n = t._order;
					n && (e = n.next,
					(i = n.prev) && ((i.next = e) ? e.prev = i : i && (this._drawLast = i),
					n.prev = null,
					n.next = this._drawFirst,
					this._drawFirst.prev = n,
					this._drawFirst = n,
					this._requestRedraw(t)))
			}
	})
		, qn = function() {
			try {
					return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
					function(t) {
							return document.createElement("<lvml:" + t + ' class="lvml">')
					}
			} catch (t) {}
			return function(t) {
					return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
			}
	}()
		, Oi = {
			_initContainer: function() {
					this._container = F("div", "leaflet-vml-container")
			},
			_update: function() {
					this._map._animatingZoom || (Vn.prototype._update.call(this),
					this.fire("update"))
			},
			_initPath: function(t) {
					var e = t._container = qn("shape");
					K(e, "leaflet-vml-shape " + (this.options.className || "")),
					e.coordsize = "1 1",
					t._path = qn("path"),
					e.appendChild(t._path),
					this._updateStyle(t),
					this._layers[o(t)] = t
			},
			_addPath: function(t) {
					var e = t._container;
					this._container.appendChild(e),
					t.options.interactive && t.addInteractiveTarget(e)
			},
			_removePath: function(t) {
					var e = t._container;
					W(e),
					t.removeInteractiveTarget(e),
					delete this._layers[o(t)]
			},
			_updateStyle: function(t) {
					var e = t._stroke
						, i = t._fill
						, n = t.options
						, o = t._container;
					o.stroked = !!n.stroke,
					o.filled = !!n.fill,
					n.stroke ? (e = e || (t._stroke = qn("stroke")),
					o.appendChild(e),
					e.weight = n.weight + "px",
					e.color = n.color,
					e.opacity = n.opacity,
					e.dashStyle = n.dashArray ? Je(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : "",
					e.endcap = n.lineCap.replace("butt", "flat"),
					e.joinstyle = n.lineJoin) : e && (o.removeChild(e),
					t._stroke = null),
					n.fill ? (i = i || (t._fill = qn("fill")),
					o.appendChild(i),
					i.color = n.fillColor || n.color,
					i.opacity = n.fillOpacity) : i && (o.removeChild(i),
					t._fill = null)
			},
			_updateCircle: function(t) {
					var e = t._point.round()
						, i = Math.round(t._radius)
						, n = Math.round(t._radiusY || i);
					this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
			},
			_setPath: function(t, e) {
					t._path.v = e
			},
			_bringToFront: function(t) {
					V(t._container)
			},
			_bringToBack: function(t) {
					G(t._container)
			}
	}
		, Kn = Yi.vml ? qn : S
		, Yn = Vn.extend({
			_initContainer: function() {
					this._container = Kn("svg"),
					this._container.setAttribute("pointer-events", "none"),
					this._rootGroup = Kn("g"),
					this._container.appendChild(this._rootGroup)
			},
			_destroyContainer: function() {
					W(this._container),
					ue(this._container),
					delete this._container,
					delete this._rootGroup,
					delete this._svgSize
			},
			_update: function() {
					var t, e, i;
					this._map._animatingZoom && this._bounds || (Vn.prototype._update.call(this),
					e = (t = this._bounds).getSize(),
					i = this._container,
					this._svgSize && this._svgSize.equals(e) || (this._svgSize = e,
					i.setAttribute("width", e.x),
					i.setAttribute("height", e.y)),
					ee(i, t.min),
					i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
					this.fire("update"))
			},
			_initPath: function(t) {
					var e = t._path = Kn("path");
					t.options.className && K(e, t.options.className),
					t.options.interactive && K(e, "leaflet-interactive"),
					this._updateStyle(t),
					this._layers[o(t)] = t
			},
			_addPath: function(t) {
					this._rootGroup || this._initContainer(),
					this._rootGroup.appendChild(t._path),
					t.addInteractiveTarget(t._path)
			},
			_removePath: function(t) {
					W(t._path),
					t.removeInteractiveTarget(t._path),
					delete this._layers[o(t)]
			},
			_updatePath: function(t) {
					t._project(),
					t._update()
			},
			_updateStyle: function(t) {
					var e = t._path
						, t = t.options;
					e && (t.stroke ? (e.setAttribute("stroke", t.color),
					e.setAttribute("stroke-opacity", t.opacity),
					e.setAttribute("stroke-width", t.weight),
					e.setAttribute("stroke-linecap", t.lineCap),
					e.setAttribute("stroke-linejoin", t.lineJoin),
					t.dashArray ? e.setAttribute("stroke-dasharray", t.dashArray) : e.removeAttribute("stroke-dasharray"),
					t.dashOffset ? e.setAttribute("stroke-dashoffset", t.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"),
					t.fill ? (e.setAttribute("fill", t.fillColor || t.color),
					e.setAttribute("fill-opacity", t.fillOpacity),
					e.setAttribute("fill-rule", t.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
			},
			_updatePoly: function(t, e) {
					this._setPath(t, Z(t._parts, e))
			},
			_updateCircle: function(t) {
					var e = t._point
						, i = Math.max(Math.round(t._radius), 1)
						, n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 "
						, e = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
					this._setPath(t, e)
			},
			_setPath: function(t, e) {
					t._path.setAttribute("d", e)
			},
			_bringToFront: function(t) {
					V(t._path)
			},
			_bringToBack: function(t) {
					G(t._path)
			}
	});
	Yi.vml && Yn.include(Oi),
	pn.include({
			getRenderer: function(t) {
					return t = (t = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer) || (this._renderer = this._createRenderer()),
					this.hasLayer(t) || this.addLayer(t),
					t
			},
			_getPaneRenderer: function(t) {
					var e;
					return "overlayPane" !== t && void 0 !== t && (void 0 === (e = this._paneRenderers[t]) && (e = this._createRenderer({
							pane: t
					}),
					this._paneRenderers[t] = e),
					e)
			},
			_createRenderer: function(t) {
					return this.options.preferCanvas && Ge(t) || qe(t)
			}
	});
	var Xn = On.extend({
			initialize: function(t, e) {
					On.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
			},
			setBounds: function(t) {
					return this.setLatLngs(this._boundsToLatLngs(t))
			},
			_boundsToLatLngs: function(t) {
					return [(t = M(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
			}
	});
	Yn.create = Kn,
	Yn.pointsToPath = Z,
	An.geometryToLayer = Be,
	An.coordsToLatLng = Re,
	An.coordsToLatLngs = De,
	An.latLngToCoords = je,
	An.latLngsToCoords = He,
	An.getFeature = Fe,
	An.asFeature = We,
	pn.mergeOptions({
			boxZoom: !0
	});
	var gi = xi.extend({
			initialize: function(t) {
					this._map = t,
					this._container = t._container,
					this._pane = t._panes.overlayPane,
					this._resetStateTimeout = 0,
					t.on("unload", this._destroy, this)
			},
			addHooks: function() {
					le(this._container, "mousedown", this._onMouseDown, this)
			},
			removeHooks: function() {
					ue(this._container, "mousedown", this._onMouseDown, this)
			},
			moved: function() {
					return this._moved
			},
			_destroy: function() {
					W(this._pane),
					delete this._pane
			},
			_resetState: function() {
					this._resetStateTimeout = 0,
					this._moved = !1
			},
			_clearDeferredResetState: function() {
					0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout),
					this._resetStateTimeout = 0)
			},
			_onMouseDown: function(t) {
					return !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (this._clearDeferredResetState(),
					this._resetState(),
					ci(),
					ne(),
					this._startPoint = this._map.mouseEventToContainerPoint(t),
					le(document, {
							contextmenu: ve,
							mousemove: this._onMouseMove,
							mouseup: this._onMouseUp,
							keydown: this._onKeyDown
					}, this),
					void 0)
			},
			_onMouseMove: function(t) {
					this._moved || (this._moved = !0,
					this._box = F("div", "leaflet-zoom-box", this._container),
					K(this._container, "leaflet-crosshair"),
					this._map.fire("boxzoomstart")),
					this._point = this._map.mouseEventToContainerPoint(t);
					var t = new b(this._point,this._startPoint)
						, e = t.getSize();
					ee(this._box, t.min),
					this._box.style.width = e.x + "px",
					this._box.style.height = e.y + "px"
			},
			_finish: function() {
					this._moved && (W(this._box),
					Y(this._container, "leaflet-crosshair")),
					di(),
					oe(),
					ue(document, {
							contextmenu: ve,
							mousemove: this._onMouseMove,
							mouseup: this._onMouseUp,
							keydown: this._onKeyDown
					}, this)
			},
			_onMouseUp: function(t) {
					1 !== t.which && 1 !== t.button || (this._finish(),
					this._moved && (this._clearDeferredResetState(),
					this._resetStateTimeout = setTimeout(n(this._resetState, this), 0),
					t = new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point)),
					this._map.fitBounds(t).fire("boxzoomend", {
							boxZoomBounds: t
					})))
			},
			_onKeyDown: function(t) {
					27 === t.keyCode && (this._finish(),
					this._clearDeferredResetState(),
					this._resetState())
			}
	})
		, Ai = (pn.addInitHook("addHandler", "boxZoom", gi),
	pn.mergeOptions({
			doubleClickZoom: !0
	}),
	xi.extend({
			addHooks: function() {
					this._map.on("dblclick", this._onDoubleClick, this)
			},
			removeHooks: function() {
					this._map.off("dblclick", this._onDoubleClick, this)
			},
			_onDoubleClick: function(t) {
					var e = this._map
						, i = e.getZoom()
						, n = e.options.zoomDelta
						, i = t.originalEvent.shiftKey ? i - n : i + n;
					"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
			}
	}))
		, Ii = (pn.addInitHook("addHandler", "doubleClickZoom", Ai),
	pn.mergeOptions({
			dragging: !0,
			inertia: !0,
			inertiaDeceleration: 3400,
			inertiaMaxSpeed: 1 / 0,
			easeLinearity: .2,
			worldCopyJump: !1,
			maxBoundsViscosity: 0
	}),
	xi.extend({
			addHooks: function() {
					var t;
					this._draggable || (t = this._map,
					this._draggable = new wn(t._mapPane,t._container),
					this._draggable.on({
							dragstart: this._onDragStart,
							drag: this._onDrag,
							dragend: this._onDragEnd
					}, this),
					this._draggable.on("predrag", this._onPreDragLimit, this),
					t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this),
					t.on("zoomend", this._onZoomEnd, this),
					t.whenReady(this._onZoomEnd, this))),
					K(this._map._container, "leaflet-grab leaflet-touch-drag"),
					this._draggable.enable(),
					this._positions = [],
					this._times = []
			},
			removeHooks: function() {
					Y(this._map._container, "leaflet-grab"),
					Y(this._map._container, "leaflet-touch-drag"),
					this._draggable.disable()
			},
			moved: function() {
					return this._draggable && this._draggable._moved
			},
			moving: function() {
					return this._draggable && this._draggable._moving
			},
			_onDragStart: function() {
					var t, e = this._map;
					e._stop(),
					this._map.options.maxBounds && this._map.options.maxBoundsViscosity ? (t = M(this._map.options.maxBounds),
					this._offsetLimit = P(this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(t.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),
					this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))) : this._offsetLimit = null,
					e.fire("movestart").fire("dragstart"),
					e.options.inertia && (this._positions = [],
					this._times = [])
			},
			_onDrag: function(t) {
					var e, i;
					this._map.options.inertia && (e = this._lastTime = +new Date,
					i = this._lastPos = this._draggable._absPos || this._draggable._newPos,
					this._positions.push(i),
					this._times.push(e),
					this._prunePositions(e)),
					this._map.fire("move", t).fire("drag", t)
			},
			_prunePositions: function(t) {
					for (; 1 < this._positions.length && 50 < t - this._times[0]; )
							this._positions.shift(),
							this._times.shift()
			},
			_onZoomEnd: function() {
					var t = this._map.getSize().divideBy(2)
						, e = this._map.latLngToLayerPoint([0, 0]);
					this._initialWorldOffset = e.subtract(t).x,
					this._worldWidth = this._map.getPixelWorldBounds().getSize().x
			},
			_viscousLimit: function(t, e) {
					return t - (t - e) * this._viscosity
			},
			_onPreDragLimit: function() {
					var t, e;
					this._viscosity && this._offsetLimit && (t = this._draggable._newPos.subtract(this._draggable._startPos),
					e = this._offsetLimit,
					t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
					t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
					t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
					t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
					this._draggable._newPos = this._draggable._startPos.add(t))
			},
			_onPreDragWrap: function() {
					var t = this._worldWidth
						, e = Math.round(t / 2)
						, i = this._initialWorldOffset
						, n = this._draggable._newPos.x
						, o = (n - e + i) % t + e - i
						, n = (n + e + i) % t - e - i
						, t = Math.abs(o + i) < Math.abs(n + i) ? o : n;
					this._draggable._absPos = this._draggable._newPos.clone(),
					this._draggable._newPos.x = t
			},
			_onDragEnd: function(t) {
					var e, i, n, o, s = this._map, a = s.options, r = !a.inertia || t.noInertia || this._times.length < 2;
					s.fire("dragend", t),
					!r && (this._prunePositions(+new Date),
					t = this._lastPos.subtract(this._positions[0]),
					r = (this._lastTime - this._times[0]) / 1e3,
					e = a.easeLinearity,
					r = (t = t.multiplyBy(e / r)).distanceTo([0, 0]),
					i = Math.min(a.inertiaMaxSpeed, r),
					t = t.multiplyBy(i / r),
					n = i / (a.inertiaDeceleration * e),
					(o = t.multiplyBy(-n / 2).round()).x || o.y) ? (o = s._limitOffset(o, s.options.maxBounds),
					g(function() {
							s.panBy(o, {
									duration: n,
									easeLinearity: e,
									noMoveStart: !0,
									animate: !0
							})
					})) : s.fire("moveend")
			}
	}))
		, Bi = (pn.addInitHook("addHandler", "dragging", Ii),
	pn.mergeOptions({
			keyboard: !0,
			keyboardPanDelta: 80
	}),
	xi.extend({
			keyCodes: {
					left: [37],
					right: [39],
					down: [40],
					up: [38],
					zoomIn: [187, 107, 61, 171],
					zoomOut: [189, 109, 54, 173]
			},
			initialize: function(t) {
					this._map = t,
					this._setPanDelta(t.options.keyboardPanDelta),
					this._setZoomDelta(t.options.zoomDelta)
			},
			addHooks: function() {
					var t = this._map._container;
					t.tabIndex <= 0 && (t.tabIndex = "0"),
					le(t, {
							focus: this._onFocus,
							blur: this._onBlur,
							mousedown: this._onMouseDown
					}, this),
					this._map.on({
							focus: this._addHooks,
							blur: this._removeHooks
					}, this)
			},
			removeHooks: function() {
					this._removeHooks(),
					ue(this._map._container, {
							focus: this._onFocus,
							blur: this._onBlur,
							mousedown: this._onMouseDown
					}, this),
					this._map.off({
							focus: this._addHooks,
							blur: this._removeHooks
					}, this)
			},
			_onMouseDown: function() {
					var t, e, i;
					this._focused || (i = document.body,
					t = document.documentElement,
					e = i.scrollTop || t.scrollTop,
					i = i.scrollLeft || t.scrollLeft,
					this._map._container.focus(),
					window.scrollTo(i, e))
			},
			_onFocus: function() {
					this._focused = !0,
					this._map.fire("focus")
			},
			_onBlur: function() {
					this._focused = !1,
					this._map.fire("blur")
			},
			_setPanDelta: function(t) {
					for (var e = this._panKeys = {}, i = this.keyCodes, n = 0, o = i.left.length; o > n; n++)
							e[i.left[n]] = [-1 * t, 0];
					for (n = 0,
					o = i.right.length; o > n; n++)
							e[i.right[n]] = [t, 0];
					for (n = 0,
					o = i.down.length; o > n; n++)
							e[i.down[n]] = [0, t];
					for (n = 0,
					o = i.up.length; o > n; n++)
							e[i.up[n]] = [0, -1 * t]
			},
			_setZoomDelta: function(t) {
					for (var e = this._zoomKeys = {}, i = this.keyCodes, n = 0, o = i.zoomIn.length; o > n; n++)
							e[i.zoomIn[n]] = t;
					for (n = 0,
					o = i.zoomOut.length; o > n; n++)
							e[i.zoomOut[n]] = -t
			},
			_addHooks: function() {
					le(document, "keydown", this._onKeyDown, this)
			},
			_removeHooks: function() {
					ue(document, "keydown", this._onKeyDown, this)
			},
			_onKeyDown: function(t) {
					if (!(t.altKey || t.ctrlKey || t.metaKey)) {
							var e, i, n = t.keyCode, o = this._map;
							if (n in this._panKeys)
									o._panAnim && o._panAnim._inProgress || (i = this._panKeys[n],
									t.shiftKey && (i = w(i).multiplyBy(3)),
									o.options.maxBounds && (i = o._limitOffset(w(i), o.options.maxBounds)),
									o.options.worldCopyJump ? (e = o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(i))),
									o.panTo(e)) : o.panBy(i));
							else if (n in this._zoomKeys)
									o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n]);
							else {
									if (27 !== n || !o._popup || !o._popup.options.closeOnEscapeKey)
											return;
									o.closePopup()
							}
							ve(t)
					}
			}
	}))
		, Ni = (pn.addInitHook("addHandler", "keyboard", Bi),
	pn.mergeOptions({
			scrollWheelZoom: !0,
			wheelDebounceTime: 40,
			wheelPxPerZoomLevel: 60
	}),
	xi.extend({
			addHooks: function() {
					le(this._map._container, "wheel", this._onWheelScroll, this),
					this._delta = 0
			},
			removeHooks: function() {
					ue(this._map._container, "wheel", this._onWheelScroll, this)
			},
			_onWheelScroll: function(t) {
					var e = we(t)
						, i = this._map.options.wheelDebounceTime
						, e = (this._delta += e,
					this._lastMousePos = this._map.mouseEventToContainerPoint(t),
					this._startTime || (this._startTime = +new Date),
					Math.max(i - (+new Date - this._startTime), 0));
					clearTimeout(this._timer),
					this._timer = setTimeout(n(this._performZoom, this), e),
					ve(t)
			},
			_performZoom: function() {
					var t = this._map
						, e = t.getZoom()
						, i = this._map.options.zoomSnap || 0
						, n = (t._stop(),
					this._delta / (4 * this._map.options.wheelPxPerZoomLevel))
						, n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2
						, i = i ? Math.ceil(n / i) * i : n
						, n = t._limitZoom(e + (0 < this._delta ? i : -i)) - e;
					this._delta = 0,
					this._startTime = null,
					n && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + n) : t.setZoomAround(this._lastMousePos, e + n))
			}
	}))
		, Ri = (pn.addInitHook("addHandler", "scrollWheelZoom", Ni),
	pn.mergeOptions({
			tapHold: Yi.touchNative && Yi.safari && Yi.mobile,
			tapTolerance: 15
	}),
	xi.extend({
			addHooks: function() {
					le(this._map._container, "touchstart", this._onDown, this)
			},
			removeHooks: function() {
					ue(this._map._container, "touchstart", this._onDown, this)
			},
			_onDown: function(t) {
					var e;
					clearTimeout(this._holdTimeout),
					1 === t.touches.length && (e = t.touches[0],
					this._startPos = this._newPos = new x(e.clientX,e.clientY),
					this._holdTimeout = setTimeout(n(function() {
							this._cancel(),
							this._isTapValid() && (le(document, "touchend", ge),
							le(document, "touchend touchcancel", this._cancelClickPrevent),
							this._simulateEvent("contextmenu", e))
					}, this), 600),
					le(document, "touchend touchcancel contextmenu", this._cancel, this),
					le(document, "touchmove", this._onMove, this))
			},
			_cancelClickPrevent: function $n() {
					ue(document, "touchend", ge),
					ue(document, "touchend touchcancel", $n)
			},
			_cancel: function() {
					clearTimeout(this._holdTimeout),
					ue(document, "touchend touchcancel contextmenu", this._cancel, this),
					ue(document, "touchmove", this._onMove, this)
			},
			_onMove: function(t) {
					t = t.touches[0],
					this._newPos = new x(t.clientX,t.clientY)
			},
			_isTapValid: function() {
					return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
			},
			_simulateEvent: function(t, e) {
					t = new MouseEvent(t,{
							bubbles: !0,
							cancelable: !0,
							view: window,
							screenX: e.screenX,
							screenY: e.screenY,
							clientX: e.clientX,
							clientY: e.clientY
					}),
					t._simulated = !0,
					e.target.dispatchEvent(t)
			}
	}))
		, Di = (pn.addInitHook("addHandler", "tapHold", Ri),
	pn.mergeOptions({
			touchZoom: Yi.touch,
			bounceAtZoomLimits: !0
	}),
	xi.extend({
			addHooks: function() {
					K(this._map._container, "leaflet-touch-zoom"),
					le(this._map._container, "touchstart", this._onTouchStart, this)
			},
			removeHooks: function() {
					Y(this._map._container, "leaflet-touch-zoom"),
					ue(this._map._container, "touchstart", this._onTouchStart, this)
			},
			_onTouchStart: function(t) {
					var e, i, n = this._map;
					!t.touches || 2 !== t.touches.length || n._animatingZoom || this._zooming || (e = n.mouseEventToContainerPoint(t.touches[0]),
					i = n.mouseEventToContainerPoint(t.touches[1]),
					this._centerPoint = n.getSize()._divideBy(2),
					this._startLatLng = n.containerPointToLatLng(this._centerPoint),
					"center" !== n.options.touchZoom && (this._pinchStartLatLng = n.containerPointToLatLng(e.add(i)._divideBy(2))),
					this._startDist = e.distanceTo(i),
					this._startZoom = n.getZoom(),
					this._moved = !1,
					this._zooming = !0,
					n._stop(),
					le(document, "touchmove", this._onTouchMove, this),
					le(document, "touchend touchcancel", this._onTouchEnd, this),
					ge(t))
			},
			_onTouchMove: function(t) {
					if (t.touches && 2 === t.touches.length && this._zooming) {
							var e = this._map
								, i = e.mouseEventToContainerPoint(t.touches[0])
								, o = e.mouseEventToContainerPoint(t.touches[1])
								, s = i.distanceTo(o) / this._startDist;
							if (this._zoom = e.getScaleZoom(s, this._startZoom),
							!e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && 1 > s || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)),
							"center" === e.options.touchZoom) {
									if (this._center = this._startLatLng,
									1 == s)
											return
							} else {
									if (i = i._add(o)._divideBy(2)._subtract(this._centerPoint),
									1 == s && 0 === i.x && 0 === i.y)
											return;
									this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(i), this._zoom)
							}
							this._moved || (e._moveStart(!0, !1),
							this._moved = !0),
							v(this._animRequest),
							o = n(e._move, e, this._center, this._zoom, {
									pinch: !0,
									round: !1
							}, void 0),
							this._animRequest = g(o, this, !0),
							ge(t)
					}
			},
			_onTouchEnd: function() {
					this._moved && this._zooming ? (this._zooming = !1,
					v(this._animRequest),
					ue(document, "touchmove", this._onTouchMove, this),
					ue(document, "touchend touchcancel", this._onTouchEnd, this),
					this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
			}
	}))
		, Jn = (pn.addInitHook("addHandler", "touchZoom", Di),
	pn.BoxZoom = gi,
	pn.DoubleClickZoom = Ai,
	pn.Drag = Ii,
	pn.Keyboard = Bi,
	pn.ScrollWheelZoom = Ni,
	pn.TapHold = Ri,
	pn.TouchZoom = Di,
	t.Bounds = b,
	t.Browser = Yi,
	t.CRS = ai,
	t.Canvas = Gn,
	t.Circle = Sn,
	t.CircleMarker = En,
	t.Class = y,
	t.Control = mn,
	t.DivIcon = Hn,
	t.DivOverlay = Rn,
	t.DomEvent = yi,
	t.DomUtil = vi,
	t.Draggable = wn,
	t.Evented = oi,
	t.FeatureGroup = Pn,
	t.GeoJSON = An,
	t.GridLayer = Fn,
	t.Handler = xi,
	t.Icon = Tn,
	t.ImageOverlay = In,
	t.LatLng = C,
	t.LatLngBounds = T,
	t.Layer = Ei,
	t.LayerGroup = Ln,
	t.LineUtil = Li,
	t.Map = pn,
	t.Marker = zn,
	t.Mixin = wi,
	t.Path = kn,
	t.Point = x,
	t.PolyUtil = bi,
	t.Polygon = On,
	t.Polyline = Zn,
	t.Popup = Dn,
	t.PosAnimation = _n,
	t.Projection = Mi,
	t.Rectangle = Xn,
	t.Renderer = Vn,
	t.SVG = Yn,
	t.SVGOverlay = Nn,
	t.TileLayer = Wn,
	t.Tooltip = jn,
	t.Transformation = k,
	t.Util = ii,
	t.VideoOverlay = Bn,
	t.bind = n,
	t.bounds = P,
	t.canvas = Ge,
	t.circle = function(t, e, i) {
			return new Sn(t,e,i)
	}
	,
	t.circleMarker = function(t, e) {
			return new En(t,e)
	}
	,
	t.control = Le,
	t.divIcon = function(t) {
			return new Hn(t)
	}
	,
	t.extend = e,
	t.featureGroup = function(t, e) {
			return new Pn(t,e)
	}
	,
	t.geoJSON = Ue,
	t.geoJson = Zi,
	t.gridLayer = function(t) {
			return new Fn(t)
	}
	,
	t.icon = function(t) {
			return new Tn(t)
	}
	,
	t.imageOverlay = function(t, e, i) {
			return new In(t,e,i)
	}
	,
	t.latLng = z,
	t.latLngBounds = M,
	t.layerGroup = function(t, e) {
			return new Ln(t,e)
	}
	,
	t.map = function(t, e) {
			return new pn(t,e)
	}
	,
	t.marker = function(t, e) {
			return new zn(t,e)
	}
	,
	t.point = w,
	t.polygon = function(t, e) {
			return new On(t,e)
	}
	,
	t.polyline = function(t, e) {
			return new Zn(t,e)
	}
	,
	t.popup = function(t, e) {
			return new Dn(t,e)
	}
	,
	t.rectangle = function(t, e) {
			return new Xn(t,e)
	}
	,
	t.setOptions = c,
	t.stamp = o,
	t.svg = qe,
	t.svgOverlay = function(t, e, i) {
			return new Nn(t,e,i)
	}
	,
	t.tileLayer = Ve,
	t.tooltip = function(t, e) {
			return new jn(t,e)
	}
	,
	t.transformation = E,
	t.version = "1.9.4",
	t.videoOverlay = function(t, e, i) {
			return new Bn(t,e,i)
	}
	,
	window.L);
	t.noConflict = function() {
			return window.L = Jn,
			this
	}
	,
	window.L = t
}),
function() {
	"use strict";
	function t(t, e) {
			this.key = t,
			this.value = e,
			this[s] = void 0,
			this[a] = void 0
	}
	function e(t) {
			this.entry = t
	}
	function i(t) {
			this.entry = t
	}
	function n(t) {
			this.entry = t
	}
	function o(t, e) {
			var i = 0
				, n = null;
			n = setInterval(function() {
					if (i >= 20)
							throw clearInterval(n),
							new Error("window.google not found after 10 seconds");
					window.google && window.google.maps && window.google.maps.Map && (clearInterval(n),
					t.call(e)),
					++i
			}, 500)
	}
	/*
The MIT License

Copyright (c) 2010-2020 Rasmus Andersson <https://rsms.me/>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
	/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */
	var s = Symbol("newer")
		, a = Symbol("older")
		, r = function(t, e) {
			"number" != typeof t && (e = t,
			t = 0),
			this.size = 0,
			this.limit = t,
			this.oldest = this.newest = void 0,
			this._keymap = new Map,
			e && (this.assign(e),
			1 > t && (this.limit = this.size))
	};
	r.prototype._markEntryAsUsed = function(t) {
			t !== this.newest && (t[s] && (t === this.oldest && (this.oldest = t[s]),
			t[s][a] = t[a]),
			t[a] && (t[a][s] = t[s]),
			t[s] = void 0,
			t[a] = this.newest,
			this.newest && (this.newest[s] = t),
			this.newest = t)
	}
	,
	r.prototype.assign = function(e) {
			var i, n = this.limit || Number.MAX_VALUE;
			this._keymap.clear();
			for (var o = e[Symbol.iterator](), r = o.next(); !r.done; r = o.next()) {
					var h = new t(r.value[0],r.value[1]);
					if (this._keymap.set(h.key, h),
					i ? (i[s] = h,
					h[a] = i) : this.oldest = h,
					i = h,
					0 == n--)
							throw new Error("overflow")
			}
			this.newest = i,
			this.size = this._keymap.size
	}
	,
	r.prototype.get = function(t) {
			var e = this._keymap.get(t);
			if (e)
					return this._markEntryAsUsed(e),
					e.value
	}
	,
	r.prototype.set = function(e, i) {
			var n = this._keymap.get(e);
			return n ? (n.value = i,
			this._markEntryAsUsed(n),
			this) : (this._keymap.set(e, n = new t(e,i)),
			this.newest ? (this.newest[s] = n,
			n[a] = this.newest) : this.oldest = n,
			this.newest = n,
			++this.size,
			this.size > this.limit && this.shift(),
			this)
	}
	,
	r.prototype.shift = function() {
			var t = this.oldest;
			return t ? (this.oldest[s] ? (this.oldest = this.oldest[s],
			this.oldest[a] = void 0) : (this.oldest = void 0,
			this.newest = void 0),
			t[s] = t[a] = void 0,
			this._keymap.delete(t.key),
			--this.size,
			[t.key, t.value]) : void 0
	}
	,
	r.prototype.find = function(t) {
			var e = this._keymap.get(t);
			return e ? e.value : void 0
	}
	,
	r.prototype.has = function(t) {
			return this._keymap.has(t)
	}
	,
	r.prototype.delete = function(t) {
			var e = this._keymap.get(t);
			if (e)
					return this._keymap.delete(e.key),
					e[s] && e[a] ? (e[a][s] = e[s],
					e[s][a] = e[a]) : e[s] ? (e[s][a] = void 0,
					this.oldest = e[s]) : e[a] ? (e[a][s] = void 0,
					this.newest = e[a]) : this.oldest = this.newest = void 0,
					this.size--,
					e.value
	}
	,
	r.prototype.clear = function() {
			this.oldest = this.newest = void 0,
			this.size = 0,
			this._keymap.clear()
	}
	,
	r.prototype.keys = function() {
			return new i(this.oldest)
	}
	,
	r.prototype.values = function() {
			return new n(this.oldest)
	}
	,
	r.prototype.entries = function() {
			return this
	}
	,
	r.prototype[Symbol.iterator] = function() {
			return new e(this.oldest)
	}
	,
	r.prototype.forEach = function(t, e) {
			"object" != typeof e && (e = this);
			for (var i = this.oldest; i; )
					t.call(e, i.value, i.key, this),
					i = i[s]
	}
	,
	r.prototype.toJSON = function() {
			for (var t = new Array(this.size), e = 0, i = this.oldest; i; )
					t[e++] = {
							key: i.key,
							value: i.value
					},
					i = i[s];
			return t
	}
	,
	r.prototype.toString = function() {
			for (var t = "", e = this.oldest; e; )
					t += String(e.key) + ":" + e.value,
					e = e[s],
					e && (t += " < ");
			return t
	}
	,
	e.prototype[Symbol.iterator] = function() {
			return this
	}
	,
	e.prototype.next = function() {
			var t = this.entry;
			return t ? (this.entry = t[s],
			{
					done: !1,
					value: [t.key, t.value]
			}) : {
					done: !0,
					value: void 0
			}
	}
	,
	i.prototype[Symbol.iterator] = function() {
			return this
	}
	,
	i.prototype.next = function() {
			var t = this.entry;
			return t ? (this.entry = t[s],
			{
					done: !1,
					value: t.key
			}) : {
					done: !0,
					value: void 0
			}
	}
	,
	n.prototype[Symbol.iterator] = function() {
			return this
	}
	,
	n.prototype.next = function() {
			var t = this.entry;
			return t ? (this.entry = t[s],
			{
					done: !1,
					value: t.value
			}) : {
					done: !0,
					value: void 0
			}
	}
	,
	L.GridLayer.GoogleMutant = L.GridLayer.extend({
			options: {
					maxZoom: 21,
					type: "roadmap",
					maxNativeZoom: 21
			},
			initialize: function(t) {
					L.GridLayer.prototype.initialize.call(this, t),
					this._tileCallbacks = {},
					this._lru = new r(100),
					this._imagesPerTile = "hybrid" === this.options.type ? 2 : 1,
					this._boundOnMutatedImage = this._onMutatedImage.bind(this)
			},
			onAdd: function(t) {
					var e = this;
					L.GridLayer.prototype.onAdd.call(this, t),
					this._initMutantContainer(),
					this._logoContainer && t._controlCorners.bottomleft.appendChild(this._logoContainer),
					this._attributionContainer && t._controlCorners.bottomright.appendChild(this._attributionContainer),
					o(function() {
							e._map && (e._initMutant(),
							google.maps.event.addListenerOnce(e._mutant, "idle", function() {
									e._map && (e._checkZoomLevels(),
									e._mutantIsReady = !0)
							}))
					})
			},
			onRemove: function(t) {
					L.GridLayer.prototype.onRemove.call(this, t),
					this._observer.disconnect(),
					t._container.removeChild(this._mutantContainer),
					this._logoContainer && L.DomUtil.remove(this._logoContainer),
					this._attributionContainer && L.DomUtil.remove(this._attributionContainer),
					this._mutant && google.maps.event.clearListeners(this._mutant, "idle")
			},
			addGoogleLayer: function(t, e) {
					var i = this;
					return this._subLayers || (this._subLayers = {}),
					this.whenReady(function() {
							var n = google.maps[t]
								, o = new n(e);
							o.setMap(i._mutant),
							i._subLayers[t] = o
					}),
					this
			},
			removeGoogleLayer: function(t) {
					var e = this;
					return this.whenReady(function() {
							var i = e._subLayers && e._subLayers[t];
							i && (i.setMap(null),
							delete e._subLayers[t])
					}),
					this
			},
			_initMutantContainer: function() {
					this._mutantContainer || (this._mutantContainer = L.DomUtil.create("div", "leaflet-google-mutant leaflet-top leaflet-left"),
					this._mutantContainer.id = "_MutantContainer_" + L.Util.stamp(this._mutantContainer),
					this._mutantContainer.style.pointerEvents = "none",
					this._mutantContainer.style.visibility = "hidden",
					L.DomEvent.off(this._mutantContainer)),
					this._map.getContainer().appendChild(this._mutantContainer),
					this.setOpacity(this.options.opacity);
					var t = this._mutantContainer.style;
					this._map.options.zoomSnap < 1 ? (t.width = "180%",
					t.height = "180%") : (t.width = "100%",
					t.height = "100%"),
					t.zIndex = -1,
					this._attachObserver(this._mutantContainer)
			},
			_initMutant: function() {
					if (!this._mutant) {
							var t = new google.maps.Map(this._mutantContainer,{
									center: {
											lat: 0,
											lng: 0
									},
									zoom: 0,
									tilt: 0,
									mapTypeId: this.options.type,
									disableDefaultUI: !0,
									keyboardShortcuts: !1,
									draggable: !1,
									disableDoubleClickZoom: !0,
									scrollwheel: !1,
									styles: this.options.styles || [],
									backgroundColor: "transparent"
							});
							this._mutant = t,
							this._update(),
							this.fire("spawned", {
									mapObject: t
							}),
							this._waitControls(),
							this.once("controls_ready", this._setupAttribution)
					}
			},
			_attachObserver: function(t) {
					this._observer || (this._observer = new MutationObserver(this._onMutations.bind(this))),
					this._observer.observe(t, {
							childList: !0,
							subtree: !0
					}),
					Array.prototype.forEach.call(t.querySelectorAll("img"), this._boundOnMutatedImage)
			},
			_waitControls: function() {
					var t = this
						, e = setInterval(function() {
							var i = t._mutant.__gm.layoutManager;
							if (i) {
									clearInterval(e);
									var n;
									Object.keys(i).forEach(function(t) {
											var e = i[t];
											e.get && e.get(1)instanceof Node && (n = e)
									}),
									t.fire("controls_ready", {
											positions: n
									})
							}
					}, 50)
			},
			_setupAttribution: function(t) {
					if (this._map) {
							var e = google.maps.ControlPosition
								, i = this._attributionContainer = t.positions.get(e.BOTTOM_RIGHT);
							L.DomUtil.addClass(i, "leaflet-control leaflet-control-attribution"),
							L.DomEvent.disableClickPropagation(i),
							i.style.height = "14px",
							this._map._controlCorners.bottomright.appendChild(i),
							this._logoContainer = t.positions.get(e.BOTTOM_LEFT),
							this._logoContainer.style.pointerEvents = "auto",
							this._map._controlCorners.bottomleft.appendChild(this._logoContainer)
					}
			},
			_onMutations: function(t) {
					for (var e = 0; e < t.length; ++e)
							for (var i = t[e], n = 0; n < i.addedNodes.length; ++n) {
									var o = i.addedNodes[n];
									o instanceof HTMLImageElement ? this._onMutatedImage(o) : o instanceof HTMLElement && Array.prototype.forEach.call(o.querySelectorAll("img"), this._boundOnMutatedImage)
							}
			},
			_roadRegexp: /!1i(\d+)!2i(\d+)!3i(\d+|VinaFnapurmBegrtn)!/,
			_satRegexp: /x=(\d+)&y=(\d+)&z=(\d+|VinaFnapurmBegrtn)/,
			_onMutatedImage: function(t) {
					var e, i = t.src.match(this._roadRegexp), n = 0;
					if (i ? (e = {
							z: i[1],
							x: i[2],
							y: i[3]
					},
					this._imagesPerTile > 1 && (t.style.zIndex = 1,
					n = 1)) : (i = t.src.match(this._satRegexp),
					i && (e = {
							x: i[1],
							y: i[2],
							z: i[3]
					}),
					n = 0),
					e) {
							var o = this._tileCoordsToKey(e);
							t.style.position = "absolute";
							var s = o + "/" + n;
							this._lru.set(s, t),
							s in this._tileCallbacks && this._tileCallbacks[s] && (this._tileCallbacks[s].forEach(function(e) {
									return e(t)
							}),
							delete this._tileCallbacks[s])
					}
			},
			createTile: function(t, e) {
					var i = this._tileCoordsToKey(t)
						, n = L.DomUtil.create("div");
					n.style.textAlign = "left",
					n.dataset.pending = this._imagesPerTile,
					e = e.bind(this, null, n);
					for (var o = 0; o < this._imagesPerTile; ++o) {
							var s = i + "/" + o
								, a = this._lru.get(s);
							a ? (n.appendChild(this._clone(a)),
							--n.dataset.pending) : (this._tileCallbacks[s] = this._tileCallbacks[s] || [],
							this._tileCallbacks[s].push(function(t) {
									return function(i) {
											t.appendChild(this._clone(i)),
											--t.dataset.pending,
											parseInt(t.dataset.pending) || e()
									}
									.bind(this)
							}
							.bind(this)(n)))
					}
					return parseInt(n.dataset.pending) || L.Util.requestAnimFrame(e),
					n
			},
			_clone: function(t) {
					var e = t.cloneNode(!0);
					return e.style.visibility = "visible",
					e
			},
			_checkZoomLevels: function() {
					var t = this._map.getZoom()
						, e = this._mutant.getZoom();
					t && e && (e !== t || e > this.options.maxNativeZoom) && this._setMaxNativeZoom(e)
			},
			_setMaxNativeZoom: function(t) {
					t !== this.options.maxNativeZoom && (this.options.maxNativeZoom = t,
					this._resetView())
			},
			_update: function(t) {
					if (this._mutant) {
							t = t || this._map.getCenter();
							var e = new google.maps.LatLng(t.lat,t.lng)
								, i = Math.round(this._map.getZoom())
								, n = this._mutant.getZoom();
							this._mutant.setCenter(e),
							i !== n && (this._mutant.setZoom(i),
							this._mutantIsReady && this._checkZoomLevels())
					}
					L.GridLayer.prototype._update.call(this, t)
			},
			whenReady: function(t, e) {
					return this._mutant ? t.call(e || this, {
							target: this
					}) : this.on("spawned", t, e),
					this
			}
	}),
	L.gridLayer.googleMutant = function(t) {
			return new L.GridLayer.GoogleMutant(t)
	}
}(),
function() {
	var t, e, i, n, o, s, a, r, h, l, u, c, d, _, p, m;
	t = function(t, e) {
			var i, n, o, s, a;
			for (a = [],
			n = 0,
			s = t.length; s > n; n++)
					i = t[n],
					i.isIntersecting ? (o = listOfMaps.find(function(t) {
							return t.domObject === i.target
					}),
					_(o),
					a.push(e.unobserve(i.target))) : a.push(void 0);
			return a
	}
	,
	c = new IntersectionObserver(t,{
			root: null,
			rootMargin: "0px",
			threshold: .1
	}),
	h = function(t, e) {
			var i, n, o;
			return i = function(t) {
					var i;
					return t.preventDefault(),
					t.stopPropagation(),
					i = this.parentNode.parentNode.parentNode.lastChild.classList.contains("hidden"),
					i ? (this.parentNode.parentNode.parentNode.lastChild.classList.remove("hidden"),
					m(e)) : this.parentNode.parentNode.parentNode.lastChild.classList.add("hidden")
			}
			,
			n = function(e) {
					return t.contains(e.relatedTarget) ? void 0 : this.parentNode.firstChild.className = "link-details hidden"
			}
			,
			o = function() {
					return this.parentNode.firstChild.className = "link-details"
			}
			,
			t.addEventListener("mouseover", o),
			t.addEventListener("mouseout", n),
			t.addEventListener("click", i)
	}
	,
	e = function() {
			var t;
			return t = L.icon({
					iconUrl: "http://mbeta.kolo.it:3330/it/assets/marker-icon-2a.png",
					shadowUrl: "http://mbeta.kolo.it:3330/it/assets/marker-shadow.png",
					iconSize: [24, 41],
					iconAnchor: [12, 41]
			}),
			L.Marker.prototype.options.icon = t
	}
	,
	p = function(t) {
			var e, i, n, o;
			if (t.links && t.links.length > 0)
					return i = document.createElement("div"),
					i.className = "kolo-location relative",
					e = "Click to see the map.",
					o = 200,
					t.domObject.parentNode.replaceChild(i, t.domObject),
					i.innerHTML = "<div class='cleanslate'><div class='container'><div class='link-details hidden'><div class='title' style='max-width:" + o + "px !important;'>" + e + "</div></div><img class='kolo_svg' src='http://mbeta.kolo.it:3330/it/assets/kolo-logo.svg' ></div></div><div class='kolo-mapbox map hidden'></div>",
					n = i.getElementsByClassName("kolo_svg")[0],
					i.parentNode.insertBefore(t.domObject, i),
					i.style.position = "absolute",
					i.style.visibility = "hidden",
					setTimeout(function() {
							var e, o;
							return i.style.width = t.domObject.offsetWidth + "px",
							i.style.top = t.domObject.offsetTop + "px",
							i.style.left = t.domObject.offsetLeft + "px",
							i.style.height = t.domObject.offsetHeight + "px",
							i.style.visibility = "visible",
							i.style.transform = t.domObject.style.transform,
							i.style.z - (e = "99999"),
							h(n, t),
							o = i.getElementsByClassName("kolo-mapbox")[0],
							o.style.width = t.domObject.offsetWidth + "px",
							o.style.top = "0px",
							o.style.left = "0px",
							o.style.height = t.domObject.offsetHeight + "px",
							o.style.transform = t.domObject.style.transform,
							t.domObject = o
					}, 10)
	}
	,
	a = function() {
			return fetch("https://data.kolo.it/tiles.json").then(function(t) {
					if (t.ok)
							return t.json();
					throw new Error("Failed to fetch data")
			}).then(function(t) {
					return this.tilesData = t,
					n()
			})["catch"](function() {
					return this.tilesData = {},
					n()
			})
	}
	,
	d = function(t) {
			return t.sourceTarget.fitBounds(t.sourceTarget.koloData.mapBoundaries)
	}
	,
	m = function(t) {
			var e, i, n, o, s, a, r;
			for (console.log(this.mapsData, t, this.mapDiv),
			o = L.map(this.mapDiv).setView([0, 0], 2),
			r = {
					maxZoom: 19
			},
			r.attribution = "",
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(o),
			a = t.locations,
			e = 0,
			i = a.length; i > e; e++)
					n = a[e],
					s = L.marker(n.loc).addTo(o);
			return t.locations.length > 1 ? void 0 : o.flyTo(t.locations[0].loc, 14)
	}
	,
	u = function(t) {
			return "IMG" === t.domObject.tagName ? t.domObject.checkVisibility && t.domObject.checkVisibility() ? _(t) : c.observe(t.domObject) : m(t)
	}
	,
	r = function() {
			var t, e, i, n, o;
			for (n = this.listOfMaps,
			o = [],
			t = 0,
			i = n.length; i > t; t++)
					e = n[t],
					o.push(u(e));
			return o
	}
	,
	l = function(t) {
			var e;
			return "undefined" == typeof google || null === google || null == google.maps ? (e = document.createElement("script"),
			e.type = "text/javascript",
			e.src = "https://maps.googleapis.com/maps/api/js?key=" + t,
			e.async = !0,
			e.defer = !0,
			e.onload = function() {
					return "function" == typeof r ? r() : void 0
			}
			,
			document.head.appendChild(e)) : r()
	}
	,
	o = function(t) {
			var e, i, n, o;
			for (o = this.tilesData,
			e = 0,
			i = o.length; i > e; e++)
					if (n = o[e],
					n.id === t)
							return n;
			return {
					group: "stadiamaps",
					groupType: "free",
					title: "stadiamaps.alidade_smooth",
					attribution: "&copy; <a href='https://www.stadiamaps.com/' target='_blank'>Stadia Maps</a> &copy; <a href='https://www.stamen.com/' target='_blank'>Stamen Design</a> &copy; <a href='https://openmaptiles.org/' target='_blank'>OpenMapTiles</a> &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
					url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
					maxZoom: "20",
					id: "4"
			}
	}
	,
	n = function() {
			var t, e, i, n, s, a, h, u, c, d, _, p, m, f;
			for (this.listOfMaps = [],
			d = this.mapsData,
			n = 0,
			s = d.length; s > n; n++)
					u = d[n],
					u.dataset.koloLink ? requestLink(u) : (u.dataset.koloLngLat || u.dataset.koloLatLng) && (a = null != (_ = null != (p = u.dataset) ? p.koloLngLat : void 0) ? _ : u.dataset.koloLatLng,
					h = a.split(";").map(function(t) {
							var e;
							return e = {},
							e.lng = t.split(",")[1],
							e.lat = t.split(",")[0],
							e
					})),
					i = {},
					m = o(u.dataset.koloMapType),
					i.selectedTile = m,
					i.domObject = u,
					i.links = h,
					t = u.dataset.koloNeSw.split(";"),
					f = new L.LatLng(t[0].split(",")[0],t[0].split(",")[1]),
					c = new L.LatLng(t[1].split(",")[0],t[1].split(",")[1]),
					i.mapBoundaries = new L.LatLngBounds(f,c),
					this.listOfMaps.push(i);
			return e = this.listOfMaps.find(function() {
					return function(t) {
							return "google" === t.selectedTile.group && "apiKey" === t.selectedTile.groupType
					}
			}(this)),
			e ? l(e.domObject.dataset.koloMapApiKey) : r()
	}
	,
	s = function() {
			var t, e, i, n, o, s;
			o = 0,
			s = null,
			i = document.images;
			for (n in i)
					e = i[n],
					t = e.width * e.height,
					t > o && (o = t,
					s = e);
			return s
	}
	,
	_ = function(t) {
			var e, i, n, o;
			if (t.locations && t.locations.length > 0)
					return i = document.createElement("div"),
					i.className = "kolo-location relative",
					e = "Click to see the map.",
					o = 200,
					this.maxImage.parentNode.replaceChild(i, this.maxImage),
					i.innerHTML = "<div class='cleanslate'><div class='container'><div class='link-details hidden'><div class='title' style='max-width:" + o + "px !important;'>" + e + "</div></div><img class='kolo_svg' src='http://mbeta.kolo.it:3330/it/assets/kolo-logo.svg' ></div></div><div class='kolo-mapbox map hidden'></div>",
					n = i.getElementsByClassName("kolo_svg")[0],
					i.parentNode.insertBefore(this.maxImage, i),
					i.style.position = "absolute",
					i.style.visibility = "hidden",
					setTimeout(function() {
							var e, o;
							return i.style.width = this.maxImage.offsetWidth + "px",
							i.style.top = this.maxImage.offsetTop + "px",
							i.style.left = this.maxImage.offsetLeft + "px",
							i.style.height = this.maxImage.offsetHeight + "px",
							i.style.visibility = "visible",
							i.style.transform = this.maxImage.style.transform,
							i.style.z - (e = "99999"),
							h(n, t),
							o = i.getElementsByClassName("kolo-mapbox")[0],
							o.style.width = this.maxImage.offsetWidth + "px",
							o.style.top = "0px",
							o.style.left = "0px",
							o.style.height = this.maxImage.offsetHeight + "px",
							o.style.transform = this.maxImage.style.transform,
							this.mapDiv = o
					}, 10)
	}
	,
	i = function() {
			return fetch("http://localhost:8080", {
					method: "POST",
					body: JSON.stringify({
							url: window.location.href
					})
			}).then(function(t) {
					return t.json()
			}).then(function(t) {
					return _(t)
			})["catch"](function(t) {
					return console.log(t)
			})
	}
	,
	DomReady.ready(function() {
			var t, n, o;
			return o = document.createElement("link"),
			o.setAttribute("rel", "stylesheet"),
			o.setAttribute("type", "text/css"),
			o.setAttribute("href", "http://mbeta.kolo.it:3330/it/assets/map-v001.css"),
			document.getElementsByTagName("head")[0].appendChild(o),
			t = document.createElement("link"),
			t.setAttribute("rel", "stylesheet"),
			t.setAttribute("type", "text/css"),
			t.setAttribute("href", "http://mbeta.kolo.it:3330/it/stylesheets/cleanslate.css"),
			document.getElementsByTagName("head")[0].appendChild(t),
			n = document.createElement("link"),
			n.setAttribute("rel", "stylesheet"),
			n.setAttribute("type", "text/css"),
			n.setAttribute("href", "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"),
			document.getElementsByTagName("head")[0].appendChild(n),
			this.mapsData = document.getElementsByName("kolo-map"),
			a(),
			this.maxImage = s(),
			i(),
			e(),
			a()
	})
}
.call(this);
